import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../Components/FlexContainer";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Skill} from "./skill/Skill";
import {ContainerBlock} from "../../../Components/Container";
import {description} from "./skill/descriptionSkill";

type InfoSkillType = {
    level: number,
    iconId: string,
    skillTitle: string
    description: string
}



const  infoSkill: InfoSkillType[] = [
    {level: 8, iconId: 'html', skillTitle: 'HTML',description: description.html },
    {level: 7, iconId:'css', skillTitle:'CSS', description: description.css},
    {level: 10, iconId:'js', skillTitle:'JavaScript', description: description.javaScript},
    {level: 7, iconId:'ts', skillTitle:'TypeScript', description: description.typescript},
    {level: 9, iconId:'react', skillTitle:'React', description: description.react},
    {level: 9, iconId:'redux', skillTitle:'Redux', description: description.redux},
    {level: 10, iconId:'styleComponent', skillTitle:'Styled-Components', description: description.materialUI},
    {level: 6, iconId:'mui', skillTitle:'Material UI', description: description.materialUI},
    {level: 6, iconId:'storybook', skillTitle:'Storybook', description: description.storybook},
    {level: 5, iconId:'jest', skillTitle:'Jest', description: description.jest},
    {level: 5, iconId:'figma', skillTitle:'Figma', description: description.figma},
    {level: 4, iconId:'gitTeh', skillTitle:'GitHub', description: description.git},
]


export const Skills = () => {
    return (
        <StyledSkills>
            <ContainerBlock >
                <SectionTitle>My skills</SectionTitle>
            <FlexContainerStyled  wrap={'wrap'} justify={'space-around'} aline={'centre'} >
                {
                    infoSkill.map((s, index)=> (
                        <Skill key={index} iconId={s.iconId} skillTitle={s.skillTitle} description={s.description} level={s.level} />
                    ))
                }
            </FlexContainerStyled>
            </ContainerBlock>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  background-color: #0c0c15;
  min-height: 100vh;
  
`

export const FlexContainerStyled = styled(FlexContainer)`
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }`