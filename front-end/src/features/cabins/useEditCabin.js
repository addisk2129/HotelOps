

import { useQueryClient,useMutation } from "@tanstack/react-query";
import {toast} from 'react-hot-toast'
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
    
    const queryCient=useQueryClient()
  
  
    const {mutate:editCabin ,isLoading:isEditing}=useMutation({
      mutationFn:({newCabinData,id})=>createEditCabin(newCabinData,id),//or newCabin=>createCabin(newCabin) 
      onSuccess:()=>{
        toast.success("Cabin successfully edited");
        queryCient.invalidateQueries({
         queryKey:['cabins']
        })
     
      },
      onError:(err)=>toast.error(err.message)
   })
  
   return{editCabin,isEditing}
}


