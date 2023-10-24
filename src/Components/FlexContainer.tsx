import React from 'react';
import styled from "styled-components";

type PropsType ={
    direction?: string
    justify?: string
    aline?: string
    wrap?: string
}


export const FlexContainer = styled.div<PropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row' };
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.aline || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
`

