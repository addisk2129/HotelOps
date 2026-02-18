
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from 'react-hook-form'

import FormRow from "../../ui/FormRow";



function CreateCabinForm({cabinToEdit={}}) {
  
const isEditSession=Boolean(editId)// if there is editId it becames true
const {id:editId,...editValue}=cabinToEdit;



  const {register, handleSubmit,
    reset,getValues,formState }=useForm({
       defaultValues:isEditSession ? editValue :{}
    })


   const {errors}=formState

    const queryCient=useQueryClient()

  const {mutate,isLoading:isCreating}=useMutation({
     mutationFn:createCabin,//or newCabin=>createCabin(newCabin) 

     onSuccess:()=>{
       toast.success("New cabin successfully created");
       queryCient.invalidateQueries({
        queryKey:['cabins']
       })
      reset()
     },
     onError:(err)=>toast.error(err.message)
  })


   const onSubmit=(data)=>{
    console.log(data)
    mutate({...data, image:data.image[0]})

   }

const onError=(err)=>{
  console.log(err)
}


  return (
   
    <Form onSubmit={handleSubmit(onSubmit,onError)}>

  

  <FormRow label='Cabin name' error={errors?.name?.message}>
  
  <Input disabled={isCreating} type="text" id="name"  {...register('name',{
         required:"This field is required"
      })}/>
   </FormRow>

    <FormRow label='Maximum capacit' error={errors?.maxCapacity?.message}>
      <Input disabled={isCreating} type="number" id="maxCapacity" {...register('maxCapacity',{
         required:"This field is required",
         min:{
          value:1,
          message:"Capacity should be atleast 1"
         }
      })}/>
   
</FormRow>

    <FormRow label='Redular Price' error={errors?.regularPrice?.message}>
      <Input disabled={isCreating} type="number"  id="regularPrice" {...register('regularPrice',{
         required:"This field is required",
         min:{
          value:1,
          message:"Price should be atleast 1"
         }
      })}/>
</FormRow>


    <FormRow label='Discount' error={errors?.discount?.message}>
      <Input disabled={isCreating} type="number" defaultValue={0} id="discount" {...register('discount',{
         required:"This field is required",
        validate:(value)=>value<=getValues().regularPrice || "Discount should be less than regular price"

      })}/>

  </FormRow>

    <FormRow  label='Description' error={errors?.description?.message}>
      <Textarea disabled={isCreating} id="description" {...register('description',{
         required:"This field is required"
      })}/>
    </FormRow>

    <FormRow label="Cabin Photo" >
      <FileInput disabled={isCreating} id="image" accept="image/*"
      {...register('image',{
        required:"This field is required"
     })}
      />
    </FormRow>
  
    <FormRow>
      <Button variation="secondary" type="reset">
        Cancel
      </Button>
  
      <Button type="submit" disabled={isCreating}>Create Cabin</Button>
    </FormRow>
  </Form>
  
        );
      }


export default CreateCabinForm
