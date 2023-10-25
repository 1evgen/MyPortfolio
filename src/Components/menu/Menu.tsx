import React from 'react';
import styled from "styled-components";


type PropsType = {
    menuItems: String[]
}

export const Menu = ({menuItems}:PropsType) => {
    return (
        <StyleMenu>
            <ul> {menuItems.map((el,i)=> (<li key={i}> <a href=""> {el} </a> </li>))} </ul>
        </StyleMenu>
    );
};

const StyleMenu = styled.nav`
    ul{
      display: flex;
      gap: 15px;
      list-style-type: none;
    
    }
        
`
