

import { useQueryClient,useMutation } from "@tanstack/react-query";
import {toast} from 'react-hot-toast'
import { createEditCabin } from "../../services/apiCabins";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
    
    const queryCient=useQueryClient()
  
  
    const {mutate:updateUser ,isLoading:isUpdating}=useMutation({
      mutationFn:updateCurrentUser,

      onSuccess:(user)=>{
        toast.success("User account successfully updated");
         queryCient.setQueryData(['user'],user)
        // queryCient.invalidateQueries({
        //  queryKey:['user']
        // })
     
      },
      onError:(err)=>toast.error(err.message)
   })
  
   return{updateUser,isUpdating}
}


