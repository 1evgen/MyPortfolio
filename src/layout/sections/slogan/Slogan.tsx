import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Button} from "../../../Components/Button";
import {FlexContainer} from "../../../Components/FlexContainer";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <FlexContainer direction={'column'} justify={'centre'} aline={'center'}>
            <SectionTitle>This is Ilon Mask</SectionTitle>
            <Button as={'a'} target={'_blank'} href={'https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>Check what</Button>
            </FlexContainer>
            </StyledSlogan>
          );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    
`

