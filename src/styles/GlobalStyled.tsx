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
    
    :root{
      --base-color: 60;
      --color1-light:  hsla(var(--base-color1), 50%, 75%, 100%);
      --color1-normal: hsla(var(--base-color1), 50%, 50%, 100%);
      --color1-darker: hsla(var(--base-color1), 50%, 35%, 100%);
    }
 
    
`