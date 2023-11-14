import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../Components/icon/Icon";
import {DisplayLevels} from "../DisplayLevels";
import {FlexContainer} from "../../../../Components/FlexContainer";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    description: string
    level: number
}


export const Skill = ({iconId, skillTitle,description, level}: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexContainer justify={'space-between'} aline={'center'}>

            <FlexContainer direction={'column-reverse'} justify={'space-between'} aline={'flex-start'} gap={'40px'} >
                <SkillTitle>{skillTitle}</SkillTitle>
            <DisplayLevels level={level} >
                <Icon iconId={iconId}  width={'45'} height={'40'}/>
            </DisplayLevels>
            </FlexContainer>

            <WindowInfo>
            <SkillText>{description}</SkillText>
            </WindowInfo>

            </FlexContainer>
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
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #f88a0e;
    box-shadow: 0px 0px 10px #e35420;
    z-index: -1; 
  }
`

export const SkillTitle = styled.h3`
    font-family: GoodTime;
    background-image: linear-gradient(orange,orangered);
    color: transparent;
    -webkit-background-clip: text;
    text-shadow: 1px 1px 5px crimson;
    
`


const WindowInfo = styled.div`
  overflow: auto;
  width: 320px;
  height: 200px;
  padding: 20px;
  max-width: 290px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: #423c3c;
    height: 12px;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(orange,orangered);
    background-color: #ff2f00;
    border-radius: 3px;
    display: inline-block;
    height: 10px;
  }
`

export const SkillText = styled.p`
  font-family: Monofonto;
  color: #17c417;
  text-align: justify;
  text-shadow: 2px 2px 10px #1d751d;
  white-space: pre-line;
  word-break: break-word;
  hyphens: auto;


`


