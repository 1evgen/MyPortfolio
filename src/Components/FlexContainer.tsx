import React from 'react';
import styled from "styled-components";

type PropsType = {
    direction?: string
    justify?: string
    aline?: string
    wrap?: string
    height?: string
    gap?: string
    position?: string
}


export const FlexContainer = styled.div<PropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row' };
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.aline || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    height: ${props => props.height || '' };
    gap: ${props => props.gap || ''};
    position: ${props => props.position || ''};
`

