import styled,{css} from "styled-components"
 
 const sizes={
    small:css`
     font-size:1.2rem;
     padding:0.4rem 0.2rem;
     text-transform:uppercase;
     font-weight:600;
     text-align:center;
    `,

    medium:css`
        font-size:1.4rem;
        padding:1.2rem 2.4rem;
        font-weight:500;
    `,

    large:css`
     font-size:1.6rem;
     padding:1.2em 2.4rem;
     font-weight:500;
     `
 }

 const variations={
    primary:css`
         color:green;
         background-color: #00800026;

         &:hover{
            background-color: #1d741d;
         }
    `,

    secondary:css`
    color:yellow;
    background-color: orange;
    border:1px solid gray;

    
    &:hover{
            background-color: #ffa6007a
         }
    `,

    danger:css`
     color:red;
      background-color:red;

      &:hover{
        background-color: #d84141;
      }
      `
 }
 
 const Button=styled.button`
     border:none;
     border-radius: 5px;
     cursor: pointer;
   ${props=>sizes[props.size]}
   ${props=>variations[props.variation]}
     `  


Button.defaultProps={
    variations:"primary",
    size:'medium'
}

export default Button;