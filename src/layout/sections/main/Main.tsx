import React, {useState} from 'react';
import styled from "styled-components";
import avatar from '../../../accets/images/avatarMain.webp'
import {FlexContainer} from "../../../Components/FlexContainer";
import {ContainerBlock} from "../../../Components/Container";
import {theme} from "../../../styles/theme";
import {Gears} from "../../../Components/gear/Gears";
import {AdditionalDesign, HolographicDisplay} from "../../../Components/holographicDisplay/HolographicDisplay";
import {SwitcherAnimation} from "../../../Components/switcher/SwitcherAnimation";
import {BackgroundMain} from "../../../Components/test/BackgroundMain";


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


const backgroundStyled = [
    {id: 1,letter: 'd', top: '13%', left: '42%', rotate: '50'},
    {id: 2,letter: 'm', top: '25%', left: '75%', rotate: '250'},
    {id: 3,letter: 'p', top: '3%', left: '48%', rotate: '0'},
    {id: 4,letter: 'y', top: '19%', left: '81%', rotate: '53'},
    {id: 5,letter: 'v', top: '15%', left: '35%', rotate: '22'},
    {id: 6,letter: 'e', top: '82%', left: '43%', rotate: '0deg'},
    {id: 7,letter: 'e', top: '85%', left: '33%', rotate: '180'},
    {id: 8,letter: 'e', top: '19%', left: '22%', rotate: '48deg'},
    {id: 9,letter: 'e', top: '4%', left: '81%', rotate: '48deg'},
    {id: 10,letter: 'e', top: '65%', left: '14%', rotate: '28'},
    {id: 11, letter: 'u', top: '87%', left: '18%', rotate: '310'},
    {id: 12, letter: 'r', top: '57%', left: '2%', rotate: '70'},
    { id: 13,letter: 'r', top: '22%', left: '15%', rotate: '267'},
    {id: 14,letter: 'r', top: '11%', left: '15%', rotate: '48deg'},
    {id: 15, letter: 's', top: '37%', left: '7%', rotate: '48deg'},
    {id: 16, letter: 's', top: '47%', left: '12%', rotate: '48deg'},
    {id: 17, letter: 'g', top: '77%', left: '5%', rotate: '90'},
    {id: 18, letter: 'g', top: '5%', left: '29%', rotate: '45'},
    {id: 19, letter: 'o', top: '10%', left: '65%', rotate: '60'},
    {id: 20,letter: 'i', top: '15%', left: '92%', rotate: '0'},
    {id: 21,letter: 'i', top: '45%', left: '94%', rotate: '18'},
    {id: 22,letter: 'i', top: '55%', left: '77%', rotate: '48'},
    {id: 23,letter: 'i', top: '65%', left: '94%', rotate: '210'},
    {id: 24,letter: 'i', top: '74%', left: '79%', rotate: '13'},
    {id: 25,letter: 't', top: '89%', left: '92%', rotate: '77'},
    {id: 26,letter: 't', top: '90%', left: '80%', rotate: '0'},
    {id: 27,letter: 't', top: '80%', left: '65%', rotate: '78'},
    {id: 28,letter: 't', top: '82%', left: '52%', rotate: '234'},
    {id: 29,letter: 't', top: '84%', left: '60%', rotate: '321'},
    {id: 30,letter: 'h', top: '11%', left: '55%', rotate: '340'},
    {id: 31,letter: 'h', top: '45%', left: '85%', rotate: '0'},
    {id: 32,letter: 'n', top: '55%', left: '17%', rotate: '48'},
    {id: 33,letter: 'n', top: '65%', left: '85%', rotate: '90'},
    {id: 34, letter: 'n', top: '25%', left: '87%', rotate: '100'}
]


export const Main = () => {

    const [isActive, setActive] = useState(false)
    const onChangeAnimation = () => setActive(!isActive)


    return (
        <StyledMain>
            <ContainerBlock>
                {
                    backgroundStyled.map((el)=> <BackgroundMain
                            key={el.id}
                            fill={'#124b00'}
                            rotate={`${el.rotate}deg`}
                            iconId={el.letter}
                            isActive={isActive}
                            top={el.top}
                            left={el.left}
                        />
                    )}

            <FlexContainer  position={'relative'} direction={'column'} justify={'center'} aline={'center'} height={'100vh'}>
                <Gears  isActive={isActive}/>
                <HolographicDisplay isActive={isActive} >
                    <AdditionalDesign isActive={isActive} >
                        <SwitcherAnimation isActive={isActive} setAnimations={onChangeAnimation}></SwitcherAnimation>
                    </AdditionalDesign>
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
  position: relative;
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


