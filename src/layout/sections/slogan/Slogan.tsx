import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Button} from "../../../Components/Button";
import {FlexContainer} from "../../../Components/FlexContainer";
import Typewriter from 'typewriter-effect';




export const Slogan = () => {
    return (
        <StyledSlogan>
            <FlexContainer direction={'column'} justify={'centre'} aline={'center'}>
            <TypewriterStyled>
                <Typewriter
                    options={{
                        strings: "Crafting Tomorrow, Line by Line",
                        autoStart: true,
                        loop: true,
                        // @ts-ignore
                        pauseFor: 2500
      ,
                    }}
                />
            </TypewriterStyled>
            <Button as={'a'} target={'_blank'} href={'https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>Check what</Button>
            </FlexContainer>
            </StyledSlogan>
          );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    
`

const  TypewriterStyled = styled(SectionTitle)`
    font-size: 0.9em;
`
