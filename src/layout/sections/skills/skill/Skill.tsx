import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../Components/icon/Icon";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    description: string
}

export const Skill = ({iconId, skillTitle, description}: SkillPropsType) => {
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
    background-color: cadetblue;
    margin: 10px;
`

export const SkillTitle = styled.h3`
    
`

export const SkillText = styled.p``