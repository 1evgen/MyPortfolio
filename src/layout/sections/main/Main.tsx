import React from 'react';
import styled, {css, keyframes} from "styled-components";
import avatar from '../../../accets/images/avatarMain.webp'
import {FlexContainer} from "../../../Components/FlexContainer";
import {ContainerBlock} from "../../../Components/Container";
import {theme} from "../../../styles/theme";
import {Icon} from "../../../Components/icon/Icon";
import {Gears} from "../../../Components/gear/Gears";




export const Main = () => {

    return (
        <StyledMain>

            <ContainerBlock>
            <FlexContainer wrap={'wrap'} aline={'center'} justify={'space-between'} height={'100vh'}>
              <Gears />
                <BoxMain>
                    <SayHello>Hi, there </SayHello>
                    <Name>I am  Evgenii</Name>
                    <MainTitle>I am Web developer</MainTitle>
                </BoxMain>

                <Photo src={avatar} alt='avatar'/>
                <ContentAboutMe>
                    I am just a computer program, lacking a physical body or consciousness. My purpose is...
                    I am a motivated front-end developer, passionately dedicated to the world of web technologies.
                    My passion for creating beautiful and interactive user interfaces has led me to front-end development,
                    and I always strive to improve my skills in this field. I enjoy working with modern frameworks and libraries,
                    crafting visually appealing web applications, and ensuring user satisfaction through a high-quality user experience.
                    I am in search of new challenges and opportunities for growth in the world of web development.

                </ContentAboutMe>

            </FlexContainer>
            </ContainerBlock>

        </StyledMain>

    );
};



const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #0c0c15;
  display: flex;

`


const ContentAboutMe = styled.div`
  max-width: 450px;
  clip-path: polygon(100% 0, 105% 70%, 73% 115%, 0 102%, 0 0);

  color: darkgreen;
  padding: 15px;
  background-color: #13181e;
  border-left: 2px solid #ff4d00;

  
  font-family: Monofonto;
  color: ${theme.colors.font};
  text-shadow: ${theme.colors.fontShadow};
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
`



const BoxMain = styled.div`
  background-image: linear-gradient(orange,orangered);
  color: transparent;
  -webkit-background-clip: text;
  text-shadow: 1px 1px 5px crimson;
  
  display: flex;
  flex-direction: column;
  gap: 5px
`



const MainTitle = styled.h1`
  font-family: GoodTime;
  font-size: 1.5rem;

`

const SayHello = styled.span`
    font-family: GoodTime;
    font-size: 1rem;

`

const Name = styled.span`
`



const Photo = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  border: 2px solid #2f2f2f;
  margin-top: 30px;
`

