import React from 'react';
import binaryIcons from '../../accets/images/binarCode-sprite.svg'
import styled, {css, keyframes} from "styled-components";

type PropsType = {
    iconId?: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    rotate?: string
    left?: string
    top?: string
    opacity?: string
    isActive?: boolean
}


export const BackgroundMain = ({iconId, width, height, viewBox, fill, rotate, left ,top, isActive}: PropsType) => {
    return (

<BinaryNumber isActive={isActive} top={top}  left={ left} rotate={rotate}>
        <svg width={width || '50'}
             height={height || '50'}
             viewBox={viewBox || "0 0 120 119"}
             fill={fill}
             xmlns="http://www.w3.org/2000/svg">
              <use fill={fill} xlinkHref={`${binaryIcons}#${iconId}`}></use>
        </svg>
</BinaryNumber>
    );
};

const rotateBackground = keyframes`


  0% {
    color: #33c404;
    opacity: 0;
  }

  25% {
    color: #005900;
    text-shadow: 0px 0px 3px #00c400;
    
    opacity: 0.2;
  }
  50% {
    color: #008a00;
    text-shadow: 0px 0px 2px #00c400;
    opacity: 0.5;
  }

  75% {
    color: #17c417;
    text-shadow: 0px 0px 2px #00c400;
    opacity: 0.8;
  }

  100% {
    color: #17c417;
    text-shadow: 0px 0px 1px #00c400;
    opacity: 1;
  }
`;


const BinaryNumber = styled.div<PropsType>`
  position: absolute;
  transform: rotate(${props => props.rotate});
  
  text-shadow: 0px 0px 1.2px #00c400;
  left: ${props => props.left};
  top: ${props => props.top};
  z-index: 0;
  animation: ${props => props.isActive ? css`${rotateBackground} 10s linear 1 ` : 'none' };
  opacity: ${(props) => props.isActive ? '1' : '0'}
`

