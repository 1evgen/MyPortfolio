import React from 'react';
import styled from "styled-components";
import {Menu} from "../../Components/Menu/Menu";
import {Logo} from "../../Components/Logo/Logo";

export const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <Menu/>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
  background-color: aquamarine;
  display: flex;
  justify-content: space-between;
  
`