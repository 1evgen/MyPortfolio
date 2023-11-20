import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Menu} from "../../../Components/menu/Menu";
import {FlexContainer} from "../../../Components/FlexContainer";
import {Work} from "../../../Components/work/Work";
import watcher from '../../../accets/projectImages/clock.webp'
import calculator from '../../../accets/projectImages/counter.webp'
import counter from '../../../accets/projectImages/Image.webp'
import {ContainerBlock} from "../../../Components/Container";

const projectItems = ['All','Landing page', 'Learn projects', 'pet projects' ]


export const Works = () => {
    return (
        <StyledWorks>
            <ContainerBlock>
                <FlexContainer direction={'column'} justify={'center'} aline={'center'} gap={'10px'} >
        <SectionTitle>My Works</SectionTitle>
        <Menu menuItems={projectItems}/>
                </FlexContainer>
            <FlexContainer justify={'space-around'} >
                <Work title={'counter'} img={counter}  text={'This is sample project description' +
                    ' random things are here in description ' +
                    'This is sample project lorem ipsum generator for dummy content'}/>
                <Work title={'watch'} img={watcher}  text={'This is sample project description' +
                    ' random things are here in description ' +
                    'This is sample project lorem ipsum generator for dummy content'}/>
                <Work title={'calculator'} img={calculator}  text={'This is sample project description' +
                    ' random things are here in description ' +
                    'This is sample project lorem ipsum generator for dummy content'}/>
            </FlexContainer>
            </ContainerBlock>
        </StyledWorks>
    );
};

export const StyledWorks = styled.section`
  min-height: 100vh;
  
`