import styled from "styled-components";
import {theme} from "../styles/theme";

export const SectionTitle = styled.h2`
  font-family: GoodTime;
  background-image: linear-gradient(orange,orangered);
  color: transparent;
  -webkit-background-clip: text;
  text-shadow: 1px 1px 5px crimson;
  text-align: center;
  margin: 30px 0;

  @media screen and (max-width: 750px){
    margin: 20px 0;
  }
`