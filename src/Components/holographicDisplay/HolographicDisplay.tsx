import styled, {css, keyframes} from "styled-components";

type PropsType = {
    width?: string
    height?: string
    isActive: boolean
}


export const HolographicDisplay = styled.div<PropsType>`
  position: relative;
  clip-path: polygon(0 10%,0 0,100% 0,100% 100%,0 99%,0 22%,2% 24%,1% 10%);
  //clip-path: polygon(0 10%,0 0,100% 0,100% 100%,0 100%,0 24%,1% 24%,1% 10%);
  width: 100%;
  max-width: 50%;
  padding: 15px;
  background-color: rgba(28, 42, 44, 0.41);
  min-height: 310px;
  z-index: 3;
  
  
  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 310px;
    background-color: rgba(72, 108, 72, 0.17);
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 15px;
    z-index: 3;
    box-shadow: 0 0 20px #3b5f3b inset,
    0 0 2px #73ff1f,
    0 0 4px #ff3f13,
    0 0 6px #fef8f8
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0px;
    right: 4%;
    z-index: 3;
    width: 24%;
    height: 3%;
    background-color: #0c0c15;
  }
`

const effect = keyframes`
  0% {
    background-color: #0c1f0c;
  }

  100% {
    background-color: #0cff0c;
  }
`


export const AdditionalDesign = styled.div<PropsType>`
  display: flex;
  justify-content: center;
  align-items: center;

  
  background-color: rgba(72, 108, 72, 0.17);
  border: 1px solid rgb(115 124 0 / 60%);
  position: absolute;
  z-index: 3;

  width: 20%;
  top: 217px;
  left: 385px;
  height: 15%;


  &::after {

    content: '';
    width: 5px;
    height: 5px;
    filter: blur(.5px);
    background-color: rgba(11, 28, 11, 0.9);
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    
    top: 3px;
    left: 2px;
    animation: ${({isActive})=> isActive ?  css`${effect} 0.8s infinite` : 'none'}

`



