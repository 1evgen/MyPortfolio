import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {ContainerBlock} from "../../../Components/Container";
import {FlexContainer} from "../../../Components/FlexContainer";


export const AboutMe = () => {
    return (
        <SectionAboutMe>
        <ContainerBlock>
            <FlexContainer  justify={'center'} aline={'center'} >
        <ContentAboutMe>
        I am a motivated front-end developer, passionately dedicated to the world of web technologies.
        My passion for creating beautiful and interactive user interfaces has led me to front-end development,
        and I always strive to improve my skills in this field. I enjoy working with modern frameworks and libraries,
        crafting visually appealing web applications, and ensuring user satisfaction through a high-quality user experience.
        I am in search of new challenges and opportunities for growth in the world of web development.
    </ContentAboutMe>
            </FlexContainer>
        </ContainerBlock>
        </SectionAboutMe>
    );
};



const SectionAboutMe = styled.div`
  background-color: #0c0c15;
  
`

const ContentAboutMe = styled.div`
  max-width: 450px;

  clip-path: polygon(100% 0, 105% 70%, 73% 115%, 0 102%, 0 0);
  color: darkgreen;
  padding: 25px;
  background-color: #13181e;
  border-left: 2px solid #ff4d00;
  margin: 20px;
  
  font-family: Monofonto;
  color: ${theme.colors.font};
  text-shadow: ${theme.colors.fontShadow};
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  position: relative;
  

  
`
