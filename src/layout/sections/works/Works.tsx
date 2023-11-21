import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {FlexContainer} from "../../../Components/FlexContainer";
import {ContainerBlock} from "../../../Components/Container";
import {Work} from "./test/Work";


export const Works = () => {
    return (
        <StyledWorks>
            <ContainerBlock>
                <FlexContainer direction={'column'} justify={'center'} aline={'center'} gap={'10px'} >
        <SectionTitle>My Works</SectionTitle>
                </FlexContainer>
            <FlexContainer justify={'space-around'}  wrap={'wrap'} gap={'20px'}>
                <Work title={'Calculator'} linkGit={''} linkPreview={''} />
                <Work title={'Watch'} linkGit={'https://github.com/1evgen/advanced_watch'} linkPreview={'https://1evgen.github.io/advanced_watch/'}/>
                <Work title={'Counter'} linkGit={''} linkPreview={''}/>
                <Work title={'Counter'} linkGit={''} linkPreview={''}/>
            </FlexContainer>

            </ContainerBlock>
        </StyledWorks>
    );
};

export const StyledWorks = styled.section`
  min-height: 100vh;
  
`