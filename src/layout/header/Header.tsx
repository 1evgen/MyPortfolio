import React from 'react';
import styled from "styled-components";
import {Logo} from "../../Components/logo/Logo";
import {ContainerBlock} from "../../Components/Container";
import {FlexContainer} from "../../Components/FlexContainer";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


const headerItems = ['Home,', 'About me,', 'Tech Stack,', 'Projects,', 'Contacts']

export const Header = () => {
    return (
        <StyleHeader>
            <ContainerBlock>
                <FlexContainer justify={'space-between'} aline={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={headerItems} />
                </FlexContainer>

            </ContainerBlock>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
  background-color: #0c0c15;
  //border-bottom: 1px solid white;
  padding: 20px 0;
  //position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`