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
            <SectionTitle>About me</SectionTitle>
            <FlexContainer direction={'column'} wrap={'wrap'} justify={'center'} aline={'center'} height={'75vh'} gap={'30px'}>
                <WrapperDisplay >
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

  @media screen and (max-width: 845px){
    max-width: 500px;
  }
  
  @media screen and (max-width: 690px){
    max-width: 400px;
  }

  @media screen and (max-width: 540px){
    max-width: 300px;
  }

  @media screen and (max-width: 520px){
    max-width: 290px;
  }


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
    @media screen and (max-width: 750px){
      top: 0%;
    }

    @media screen and (max-width: 690px){
      top: -0.7%;
    }
    @media screen and (max-width: 520px){
      top: 0%;
    }
    
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


    @media screen and (max-width: 600px){
      top:  90%;
    }
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

    @media screen and (max-width: 750px){
      top: -7%;
    }
    @media screen and (max-width: 600px){
      top: -6%;
    }
    @media screen and (max-width: 520px){
      top: -4%;
      left: -6%;
    }
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

    @media screen and (max-width: 600px){
      top:  92.5%;
      right: -5.9%; 
    }
  }
  
`
