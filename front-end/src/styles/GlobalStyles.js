import { createGlobalStyle } from "styled-components";


const GlobalStyles=createGlobalStyle`
:root{
 *,
 *::before,
 *::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    transition:background-color 0.3s, border 0.3s
 }

h1{
    background-color:green
}



}`


export default GlobalStyles;