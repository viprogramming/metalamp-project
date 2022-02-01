import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');
 @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, Helvetica, Sans-Serif;
    box-sizing: border-box;
    background: #E5E5E5;
  }
`;

export default GlobalStyle;
