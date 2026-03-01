import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignUp } from "./useSIgnUp";


// Email regex: /\S+@\S+\.\S+/;

function SignupForm() {
  const{register,formState,getValues,handleSubmit,reset}=useForm();
  const {errors}=formState
   const {signUp,isLoading} = useSignUp()

  function onSubmit({fullName,email,password}){
    signUp(
        {fullName,email,password},{
            onSettled:()=>reset()
        })
  }
    


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Full name" error={errors?.fullName?.message}>
                <Input type="text" 
                disabled={isLoading}
                id="fullName"
                {...register(
                     "fullName",{required:"This field is required"})} />
            </FormRow>

            <FormRow label="Email address" error={errors?.email?.message}>
                <Input type="email" 
                id="email" 
                disabled={isLoading}
                {...register( 
                    "email",{required:"This field is required",
                        pattern:{
                            value:/\S+@\S+\.\S+/,
                            message:"Please provide valid email address"
                        }
                    })}/>
            </FormRow>

            <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
                <Input type="password" 
                disabled={isLoading}
                id="password"
                {...register( 
                    "password",{required:"This field is required",
                        minLength:{
                         value:  8,
                        message:"Password needs a minimum 8 character"
                        }
                    })}/>
            </FormRow>

            <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
                <Input type="password" 
                disabled={isLoading}
                id="passwordConfirm" 
               
                {...register( 
                    "passwordConfirm",{required:"This field is required",
                        validate:(value)=>value===
                               getValues().password  || "Password need to match"
                    })}/>
            </FormRow>

              <FormRow>
              <Button onClick={reset}
                variation="secondary" 
                 type="reset">
                    cancel
                </Button>
                <Button disabled={isLoading}>Create new user</Button>

              </FormRow>
                
            
        </Form>
    );
}

export default SignupForm;