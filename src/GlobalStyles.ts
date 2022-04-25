import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
input{
    border: none
}
body{
    font-family: 'Raleway', sans-serif;
}
`;

export default GlobalStyle;