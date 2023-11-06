import styled from "styled-components";

type PropsType = {
    width?: string
    height?: string
    live?: string

}


export const HolographicDisplay = styled.div<PropsType>`

  width: 100%;
  max-width: 50%;
  clip-path: polygon(1% 11%, 0 11%, 0 0, 100% 0, 100% 100%, 85% 100%, 85% 97%, 65% 97%, 65% 100%, 0 100%, 0 24%, 1% 24%);

  padding: 15px;
  background-color: rgba(28, 42, 44, 0.41);
  //border-right: 3px solid #ff3c00;
  height: 310px;
  position: relative;
  z-index: 3;

  //
  //box-shadow: 0 0 18px #3b5f3b inset,
  //0 0 2px #73ff1f,
  //0 0 4px #ff3f13,
  //0 0 8px #fef8f8;

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
    width: 1%;
    height: 1%;
    position: absolute;
    bottom: 0px;
    right: 10px;
    z-index: 3;
    border-radius: 50%;
    top: 39%;
    left: 78%;

    background-color: red;
    background-image: linear-gradient(red, orangered);
    box-shadow: 0px 0px 5px red;

    opacity: ${props => props.live || '0'};
  }

`


