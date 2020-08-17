import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 40px;
        max-width: 70%;
        margin: 0 auto;
        
        @media only screen and (max-width: 800px) {
            padding: 10px;
        }
        
        @media only screen and (max-width: 580px) {
            //padding: 10px;
            padding: 10px 10px;
            margin: 0;
            max-width: unset;;
        }
    }
    a {
        text-decoration: none;
        color: black;
     }
    * {
        box-sizing: border-box
    }
`;
