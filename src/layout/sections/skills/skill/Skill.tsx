import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../Components/icon/Icon";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    description: string

}

export const Skill = ({iconId, skillTitle,description}: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId}/>
            <SkillTitle>{skillTitle}</SkillTitle>
            <SkillText>{description}</SkillText>
        </StyledSkill>
    );
};

export const StyledSkill = styled.div`
  width: 30%;
  background-color: #1c2a2c;
  margin: 10px;
  border-radius: 12px;
  border: 1px solid #f88a0e;
  box-shadow: 0px 0px 10px #e35420;
  padding: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box; 
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