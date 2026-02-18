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

// Main FormRow container
const FormRow = styled.div`
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

  const {register, handleSubmit,reset }=useForm()
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
    mutate(data)

   }

  return (
   
    <Form onSubmit={handleSubmit(onSubmit)}>
    <FormRow>
      <Label htmlFor="name">Cabin name</Label>
      <Input type="text" id="name"  {...register('name',{
         required:"This field is required"
      })}/>
    </FormRow>
  
    <FormRow>
      <Label htmlFor="maxCapacity">Maximum capacity</Label>
      <Input type="number" id="maxCapacity" {...register('maxCapacity',{
         required:"This field is required"
      })}/>
    </FormRow>
    <FormRow>
      <Label htmlFor="regularPrice">Redular Price</Label>
      <Input type="number"  id="regularPrice" {...register('regularPrice',{
         required:"This field is required"
      })}/>
    </FormRow>
    <FormRow>
      <Label htmlFor="discount">Discount</Label>
      <Input type="number" defaultValue={0} id="discount" {...register('discount',{
         required:"This field is required"
      })}/>
    </FormRow>
  
    <FormRow>
      <Label htmlFor="description">Description</Label>
      <Textarea id="description" {...register('description',{
         required:"This field is required"
      })}/>
    </FormRow>
    
  
    <FormRow>
      <Label htmlFor="image">Cabin Photo</Label>
      <FileInput id="image" accept="image/*"/>
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
