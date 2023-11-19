import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {ContainerBlock} from "../../../Components/Container";
import {FlexContainer} from "../../../Components/FlexContainer";
import {SectionTitle} from "../../../Components/SectionTitle";



export const AboutMe = () => {
    return (
        <SectionAboutMe>

        <ContainerBlock>

            <FlexContainer direction={'column'} justify={'center'} aline={'center'} height={'75vh'} gap={'50px'}>
            <SectionTitle>About me</SectionTitle>
                <WrapperDisplay>
        <ContentAboutMe>
        I am a motivated front-end developer, passionately dedicated to the world of web technologies.
        My passion for creating beautiful and interactive user interfaces has led me to front-end development,
        and I always strive to improve my skills in this field. I enjoy working with modern frameworks and libraries,
        crafting visually appealing web applications, and ensuring user satisfaction through a high-quality user experience.
        I am in search of new challenges and opportunities for growth in the world of web development.
    </ContentAboutMe>
                </WrapperDisplay>
            </FlexContainer>
        </ContainerBlock>
        </SectionAboutMe>
    );
};

const SectionAboutMe = styled.div`
  background-color: #0c0c15;
`

const WrapperDisplay = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 200px;
  border: 2px solid #f88a0e;


  border-image: linear-gradient(to right bottom, orangered, deepskyblue);
  border-image-slice: 1;

  display: flex;
  justify-content: center;
  padding: 15px;
  position: relative;
  border-radius: 0px 20px 0px 20px;
  border-image-slice: 1;

  &::after {
    content: '';
    width: 5%;
    height: 9%;
    display: inline-block;
    position: absolute;
    top: -1%;
    left: -0%;
    border-left: 0px solid;
    border-top: 0px solid;

    box-shadow: -4px -3px 1px #fffbfb,
      -4px -3px 3px #d57042,
      -5px -4px 4px #fd3b00,
      -6px -5px 5px #fd3b00;
  }

  &::before {
    content: '';
    width: 5%;
    height: 10%;
    display: inline-block;
    position: absolute;
    top: 90.3%;
    right: -0.1%;
    border-right: 0px solid;
    border-bottom: 0px solid;


    box-shadow: 4px 3px 2px #fffbfb,
    4px 3px 3px #12fde2,
    5px 4px 4px deepskyblue,
    6px 5px 5px #0089b6;
  }

`

const ContentAboutMe = styled.div`
  max-width: 550px;
  color: darkgreen;
  padding: 25px;
  background-color: #13181e;
  
  font-family: Monofonto;
  color: ${theme.colors.font};
  text-shadow: ${theme.colors.fontShadow};
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  position: relative;

  &::after{
    content: '';
    width: 4.9%;
    height: 10%;
    display: inline-block;
    position: absolute;
    color: #fd3b00;
    top: -8%;
    left: -4.2%;
    border-left: 2px solid;
    border-top: 2px solid;
    
  }
  
  &::before {
    content: '';
    width: 5.3%;
    height: 11%;
    display: inline-block;
    position: absolute;
    top: 96%;
    right: -4.3%;
    border-right: 2px solid deepskyblue;
    border-bottom: 2px solid deepskyblue;
    
  }
`
