import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {Icon} from "../../../Components/icon/Icon";


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
            <ul> {menuItems.map((el,i)=> (<ListItem key={i}> <Link href=""> {el} </Link> </ListItem>))} </ul>
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
    bottom: -23px;
    right: 10px;
`

const ListItem = styled.li`
  
   
`

const Link = styled.a`
    font-family: Monofonto, sans-serif;
    color: ${theme.colors.font};
    text-shadow: ${theme.colors.fontShadow};
    font-size: 24px;
    
`