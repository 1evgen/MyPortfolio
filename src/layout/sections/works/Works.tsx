import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Menu} from "../../../Components/menu/Menu";
import {FlexContainer} from "../../../Components/FlexContainer";
import {Work} from "../../../Components/work/Work";

const projectItems = ['All','Landing page', 'Learn projects', 'pet projects' ]


export const Works = () => {
    return (
        <StyledWorks>
        <SectionTitle>My Works</SectionTitle>
        <Menu menuItems={projectItems}/>
            <FlexContainer justify={'space-around'}>
                <Work title={'counter'} img={''}  text={'This is sample project description' +
                    ' random things are here in description ' +
                    'This is sample project lorem ipsum generator for dummy content'}/>
                <Work title={'watch'} img={''}  text={'This is sample project description' +
                    ' random things are here in description ' +
                    'This is sample project lorem ipsum generator for dummy content'}/>
                <Work title={'calculator'} img={''}  text={'This is sample project description' +
                    ' random things are here in description ' +
                    'This is sample project lorem ipsum generator for dummy content'}/>
            </FlexContainer>
        </StyledWorks>
    );
};

export const StyledWorks = styled.section`
  min-height: 100vh;


  
`