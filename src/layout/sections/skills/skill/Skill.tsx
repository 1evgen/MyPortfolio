import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../Components/icon/Icon";
import {Test} from "../Test";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    description: string
    level: number
}


export const Skill = ({iconId, skillTitle,description, level}: SkillPropsType) => {
    return (
        <StyledSkill>
            <Test level={level} >
                <Icon iconId={iconId}  width={'45'} height={'40'}/>
            </Test>
            <SkillTitle>{skillTitle}</SkillTitle>
            <SkillText>{description}</SkillText>
        </StyledSkill>
    );
};

export const StyledSkill = styled.div`
  width: 44%;
  background-color: rgba(28, 42, 44, 0.41);
  margin: 10px;
  border-radius: 12px;
  border: 1px solid #f88a0e;
  box-shadow: 0px 0px 10px #e35420;
  padding: 10px;
  position: relative;


  display: flex;
  flex-direction: column;
  align-items: center;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #f88a0e;
    box-shadow: 0px 0px 10px #e35420;
    z-index: -1; /* Разместите линии под фоном */
  }
`

export const SkillTitle = styled.h3`
    font-family: GoodTime;
    background-image: linear-gradient(orange,orangered);
    color: transparent;
    -webkit-background-clip: text;
    text-shadow: 1px 1px 5px crimson;
    
`

export const SkillText = styled.p`
  font-family: Monofonto;
  color: #17c417;
  text-align: justify;
  text-shadow: 2px 2px 10px #1d751d;
  word-break: break-word;
  hyphens: auto;
`


