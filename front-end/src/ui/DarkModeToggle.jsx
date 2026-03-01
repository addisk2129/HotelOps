import { useDarkMode } from '../context/DarkModeContext';
import ButtonIcon from './ButtonIcon'
import { MdDarkMode , MdLightMode} from "react-icons/md";



function DarkModeToggle() {
   const {isDarkMode,toggleDarkMode}=useDarkMode()

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {
    isDarkMode?<MdLightMode />:
                <MdDarkMode />
      }
    </ButtonIcon>
  )
}

export default DarkModeToggle
