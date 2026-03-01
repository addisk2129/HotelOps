import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin(){
    const queryClient=useQueryClient()
    const navigate=useNavigate()

   const {mutate:login, isLoading,error}= useMutation({
                mutationFn: async ({ email, password }) => {
                   
                    const result = await loginApi({ email, password })
                    
                    return result
                },

        onSuccess:(user)=>{//user comes from login//../../services/apiAuth
            queryClient.setQueryData(['user'],user)//allow manually set data into react query cash 
            navigate("/dashboard",{replace:true})
        },
        onError:err=>{//err comes from login//../../services/apiAuth
            console.log("ERROR", err)
            toast.error("Provided email or password are incorrect")
        }
    })
    
    return {login,error,isLoading}
}