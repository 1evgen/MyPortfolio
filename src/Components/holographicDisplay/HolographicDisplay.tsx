import styled from "styled-components";

type PropsType = {
    width?: string
    height?: string
    live?: string

}




export const HolographicDisplay = styled.div<PropsType>`

  width: 100%;
  max-width: 50%;
  //clip-path: polygon(1% 11%, 0 11%, 0 0, 100% 0, 100% 100%, 85% 100%, 85% 97%, 65% 97%, 65% 100%, 0 100%, 0 24%, 1% 24%);
  clip-path: polygon(0 10%, 0 0, 100% 0, 100% 100%, 0 100%, 0 24%, 4% 24%, 1% 10%);
  padding: 15px;
  background-color: rgba(28, 42, 44, 0.41);
  min-height: 310px;
  position: relative;
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


export const AdditionalDesign = styled.div`
  width: 50%;
  display: inline-block;
  background-color: rgba(72,108,72,0.17);
  border: 2px dotted rgb(115 124 0 / 60%);
  position: absolute;
  top: 153px;
  left: 217px;
  z-index: 3;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  
  &::after{
    
    content: '';
    width: 10px;
    height: 10px;
    background-color: #0c0c15;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    
    left: 275px;
    transform: translateY(-219px);
  }
  
  
`



