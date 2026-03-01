import ButtonIcon from "../../ui/ButtonIcon"
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useLogout } from "./useLogOut";
import SpinnerMini from "../../ui/SpinnerMini";


function LogOut() {
    const {logout,isLoading} = useLogout()
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
        {
            !isLoading ? <RiLogoutBoxRFill />:
             <SpinnerMini/>
        }
       

    </ButtonIcon>
  )
}

export default LogOut
