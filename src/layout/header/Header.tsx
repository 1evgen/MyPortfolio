import React from 'react';
import styled from "styled-components";
import {Logo} from "../../Components/logo/Logo";
import {Container} from "../../Components/Container";
import {FlexContainer} from "../../Components/FlexContainer";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


const headerItems = ['Home,', 'About me,', 'Tech Stack,', 'Projects,', 'Contacts']

export const Header = () => {
    return (
        <StyleHeader>
            <Container>
                <FlexContainer justify={'space-between'} aline={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={headerItems} />
                </FlexContainer>

            </Container>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
  background-color: #0c0c15;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  z-index: 99999;
`