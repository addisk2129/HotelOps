import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from 'react-hook-form'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

// Main FormRow2 container
const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  // Add borders between rows (but not after the last one)
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  // Special styling for rows that contain buttons (like form actions)
  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

// Label styling
const Label = styled.label`
  font-weight: 500;
`;

// Error message styling
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;


function CreateCabinForm() {

  const {register, handleSubmit,reset,getValues,formState }=useForm()
   const {errors}=formState
    console.log("THIS IS Error ",errors)
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
    mutate({...data, image:data.image.at(0)})

   }

const onError=(err)=>{
  //console.log(err)
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
