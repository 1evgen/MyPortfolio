import React from 'react';
import styled from "styled-components";
import {Menu} from "../../Components/Menu/Menu";
import {Logo} from "../../Components/Logo/Logo";


const headerItems = ['[', 'Home,', 'About me,', 'Tech Stack,', 'Projects,', 'Contacts', ']']

export const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <Menu menuItems={headerItems} />
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
  background-color: aquamarine;
  display: flex;
  justify-content: space-between;
  
`