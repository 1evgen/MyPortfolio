import styled from "styled-components";
import {theme} from "../styles/theme";

 export const Button = styled.button`
  color: #124b00;
  font-family: Monofonto;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin: 15px 0px;
  
  &:hover{
   &::after,
   &::before {
    animation: none;
    display: none;
   }
   transition: color .5s, text-shadow 0.3s;
   color: #17c417;
   text-shadow: 2px 2px 10px #1d751d;


   @keyframes work {
    from {
     color: #124b00;

    }
    to {
     color:  #17c417; ;

    }

    from {
     text-shadow: none

    }
    to {
     text-shadow: 2px 2px 10px #1d751d;
    }

   }
  }
`


