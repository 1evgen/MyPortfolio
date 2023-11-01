import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Button} from "../../../Components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>This is Ilon Mask</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
  
`