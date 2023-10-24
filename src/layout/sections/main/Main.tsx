import React from 'react';
import styled from "styled-components";
import avatar from '../../../accets/images/avatar.webp'
import {FlexContainer} from "../../../Components/FlexContainer";

export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer aline={'center'} justify={'space-around'}>
                <BoxMain>
                    <SayHello>Hi,there 👋</SayHello>
                    <Name>My name is</Name>
                    <Name>Evgenii</Name>
                    <MainTitle>I am Web developer</MainTitle>
                </BoxMain>
                <Photo src={avatar} alt='avatar'/>
            </FlexContainer>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #dad3ac;

`
const BoxMain = styled.div``
const MainTitle = styled.h1``
const SayHello = styled.span``
const Name = styled.span``




const Photo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #1e1e1e;
`
