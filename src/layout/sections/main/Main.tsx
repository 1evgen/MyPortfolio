import React from 'react';
import styled from "styled-components";
import avatar from '../../../accets/images/avatarMain.webp'
import {FlexContainer} from "../../../Components/FlexContainer";
import {ContainerBlock} from "../../../Components/Container";
import {theme} from "../../../styles/theme";
import {Gears} from "../../../Components/gear/Gears";
import {

    AdditionalDesign,
    HolographicDisplay
} from "../../../Components/holographicDisplay/HolographicDisplay";


{/*<BoxMain>*/}
{/*    <SayHello>Hi, there </SayHello>*/}
{/*    <Name>I am  Evgenii</Name>*/}
{/*    <MainTitle>I am Web developer</MainTitle>*/}
{/*</BoxMain>*/}


{/*<ContentAboutMe>*/}

{/*    I am a motivated front-end developer, passionately dedicated to the world of web technologies.*/}
{/*    My passion for creating beautiful and interactive user interfaces has led me to front-end development,*/}
{/*    and I always strive to improve my skills in this field. I enjoy working with modern frameworks and libraries,*/}
{/*    crafting visually appealing web applications, and ensuring user satisfaction through a high-quality user experience.*/}
{/*    I am in search of new challenges and opportunities for growth in the world of web development.*/}
{/*</ContentAboutMe>*/}


export const Main = () => {

    return (
        <StyledMain>
            <ContainerBlock>

            <FlexContainer  position={'relative'} direction={'column'} justify={'center'} aline={'center'} height={'100vh'}>
                <Gears/>
                <HolographicDisplay>
                    <AdditionalDesign></AdditionalDesign>
                    <FlexContainer  justify={'space-between'} aline={'center'}>
                    <BoxMain>
                        <SayHello>Hi, there. I am  Evgenii </SayHello>
                        <MainTitle>I am Web developer</MainTitle>
                    </BoxMain>

                    <Photo src={avatar} alt='avatar'/>
                    </FlexContainer>
                </HolographicDisplay>
            </FlexContainer>


            </ContainerBlock>

        </StyledMain>

    );
};





const StyledMain = styled.div`
  height: 100vh;
  background-color: #0c0c15;
  display: flex;
  align-items: center;
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
  justify-content: center;
  gap: 25px
`





const MainTitle = styled.h1`
  font-family: GoodTime;
  font-size: 1.5rem;

`

const SayHello = styled.span`
    font-family: GoodTime;
    font-size: 1rem;

`



const Photo = styled.img`

  width: 200px;
  height: 200px;
  object-fit: cover;

  border: 2px solid #2f2f2f;

  
  
`

