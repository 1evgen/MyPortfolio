import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";


export const GlobalStyle = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  
  
    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.2;
    }

  section {
    background-color: ${theme.colors.primaryBg};
  }
    
    
    a{
      text-decoration: none;
     
    }

    ul{
      list-style-type: none;
    }
    
    button {
      background-color: unset;
      border: none;
    }
    
    p {
      font-family: Monofonto;
      color: #17c417;
      text-align: justify;
      text-shadow: 2px 2px 10px #1d751d;
      white-space: pre-line;
      word-break: break-word;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    }
   
    section{
      padding: 20px 0;
    }
    :root{
      --base-color: 60;
      --color1-light:  hsla(var(--base-color1), 50%, 75%, 100%);
      --color1-normal: hsla(var(--base-color1), 50%, 50%, 100%);
      --color1-darker: hsla(var(--base-color1), 50%, 35%, 100%);
    }
 
   
    
`