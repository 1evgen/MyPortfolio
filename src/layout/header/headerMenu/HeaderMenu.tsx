import React, {Children, ReactNode} from 'react';
import styled, {keyframes} from "styled-components";
import {Icon} from "../../../Components/icon/Icon";
import {createGlitchKeyframes} from "../../../helper/helper";


type PropsType = {
    menuItems: String[]
}

export const HeaderMenu = ({menuItems}:PropsType) => {
    return (

        <StyleHeaderMenu>
            <OpenBracket>
            <Icon iconId={'OpenBracket'} />
            </OpenBracket>
            <CloseBracket>
                <Icon iconId={'CloseBracket'} />
            </CloseBracket>
            <ul> {menuItems.map((el,i)=> (<ListItem key={i}> <Link item={el as string} href=""> {el} </Link> </ListItem>))} </ul>
        </StyleHeaderMenu>
    );
};

const StyleHeaderMenu = styled.nav`
  position: relative;

  
    ul{
      display: flex;
      gap: 25px;
      list-style-type: none;
      margin-right: 60px;
     
    }
  
`

const OpenBracket =  styled.div`
    position: absolute;
    bottom: -15px;
    left: -25px;
    
`
const  CloseBracket = styled.div`
    position: absolute;
    bottom: -25px;
    right: 10px;
`

const ListItem = styled.li`
    
`

const glitchBeforeKeyframes = keyframes`
  ${createGlitchKeyframes()}
`;

const glitchAfterKeyframes = keyframes`
  ${createGlitchKeyframes()}
`;

const Link = styled.a<{ item: string }>`

  color: #124b00;
  font-family: Monofonto;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  
  
  &::after, &::before {
    content: ${(props) => `"${props.item}"`};
    position: absolute;
    overflow: hidden;
    top: 0;
    white-space: nowrap;

  }

  &::before {
    left: 1px;
    //text-shadow: -1px 0 #a21919;
    text-shadow: -1px 0 #a21919;
    animation: ${glitchBeforeKeyframes} 2s linear 0s infinite alternate-reverse;
  }

  &::after {
    left: -1px;
    //text-shadow: -1px 0 #7b1081;
    text-shadow: -1px 0 #f428ff;
    animation: ${glitchAfterKeyframes} 2s linear 0s infinite alternate-reverse;
  }

  
  &:hover{
    &::after,
    &::before {
      animation: none;
      display: none;
    }

    transition: color .5s, text-shadow 0.3s;

    color: #17c417; /* Новый цвет */
    text-shadow: 2px 2px 10px #1d751d; /* Новая тень */
    
    
    @keyframes work {
      from {
        color: #124b00;

      }
      to {
        color:  #17c417; ;

      }

      from {
        text-shadowlor: none

      }
      to {
        text-shadow: 2px 2px 10px #1d751d;
      }

    }
  }
  
`


