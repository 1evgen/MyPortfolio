import styled from "styled-components";
import React from "react";

type propsType = {
    children: React.ReactNode;
}

export const Test = (props: propsType)=> {
    return (

        <StyledPanelLevel>
            <WrapperSkill>
            <IconPosition>{props.children}</IconPosition>
            </WrapperSkill>
            <Level id={'item_1'}></Level>
            <Level id={'item_2'}></Level>
            <Level id={'item_3'}></Level>
            <Level id={'item_4'}></Level>
            <Level id={'item_5'}></Level>
            <Level id={'item_6'}></Level>
            <Level id={'item_7'}></Level>
            <Level id={'item_8'}></Level>
            <Level id={'item_9'}></Level>
            <Level id={'item_10'}></Level>
            <Level id={'item_11'}></Level>
            <Level id={'item_12'}></Level>
        </StyledPanelLevel>

    )
}


const StyledPanelLevel = styled.div`
    position: relative;
    border-radius: 50%;
    border: 2px double white;
    width: 100px;
    height: 100px;
  
  
`

const WrapperSkill = styled.div`
    position: relative;
    
`

const IconPosition = styled.div`
    position: absolute;
    left: 30%;
    transform: translateY(30px);
`



const Level = styled.div`
    border: 1px solid  white;
    width: 10px;
    height: 18px;
    position: absolute;
    border-radius: 2px;
    
  background-color: orangered;
  
  ${(props) =>
          props.id === "item_1" &&
          `
        top: 5%;
        left: 65%;
        transform: translateX(-50%);
        transform: rotate(30deg);
  `}
  
  ${(props) =>
          props.id === "item_2" &&
          `
        bottom: 60%;
        left: 80%;
        transform: rotate(60deg);
  `}
  ${(props) =>
          props.id === "item_3" &&
          `
        top: 40%;
        left: 85%;
        transform: rotate(90deg);
  `}
  ${(props) =>
          props.id === "item_4" &&
          `
      top: 60%;
    right: 10%;
  transform: translateY(-50%);
  transform: rotate(120deg);

  `}
  ${(props) =>
          props.id === "item_5" &&
          `
        transform: rotate(150deg);
        bottom: 5%;
        right: 25%;;
  `}
  ${(props) =>
          props.id === "item_6" &&
          `
           transform: rotate(180deg);
        bottom: 0%;
        right: 45%;
    
  `}
  ${(props) =>
          props.id === "item_7" &&
          `
    transform: rotate(210deg);
    bottom: 5%;
    right: 65%;
    
  `} ${(props) =>
          props.id === "item_8" &&
          `
    transform: rotate(240deg);
    bottom: 20%;
    right: 80%;
    
  `} ${(props) =>
          props.id === "item_9" &&
          `
        transform: rotate(270deg);
        bottom: 40%;
        right: 85%;  
  `}
  ${(props) =>
          props.id === "item_10" &&
          `
           transform: rotate(300deg);
    bottom: 60%;
    right: 80%;
    
  `}
  ${(props) =>
          props.id === "item_11" &&
          `
         transform: rotate(330deg);
    bottom: 75%;
    right: 65%; 
    
  `}
  ${(props) =>
          props.id === "item_12" && `
        transform: rotate(360deg);
        bottom: 80%;
        right: 45%; 
  `}
  
  
`

