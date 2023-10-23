import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyleMenu>
            <ul>
                <li>[</li>
                <li>
                    <a href="">Home,</a>
                </li>
                <li>
                    <a href="">About,</a>
                </li>
                <li>
                    <a href="">Tech Stack,</a>
                </li>
                <li>
                    <a href="">Projects,</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>]</li>
            </ul>
        </StyleMenu>
    );
};

const StyleMenu = styled.nav`
    ul{
      display: flex;
      gap: 30px;
      list-style-type: none;
    
    }
        
`
