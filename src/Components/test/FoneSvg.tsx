import React from 'react';
import binaryIcons from '../../accets/images/binarCode-sprite.svg'
import styled from "styled-components";

type PropsType = {
    iconId?: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    rotate?: string
    left?: string
    top?: string
}

export const FoneSvg = ({iconId, width, height, viewBox, fill, rotate, left ,top}: PropsType) => {
    return (
<Test top={top}  left={ left} rotate={rotate}>
        <svg width={width || '50'}
             height={height || '50'}
             viewBox={viewBox || "0 0 120 119"}
             fill={fill}
             xmlns="http://www.w3.org/2000/svg">
            <use fill={fill} xlinkHref={`${binaryIcons}#${iconId}`}></use>
        </svg>
</Test>
    );
};


const Test = styled.div<PropsType>`
  position: relative;
  transform: rotate(${props => props.rotate} | '');
  left: ${props => props.left}; 
  top: ${props => props.top}; 
  z-index: 0;
`
