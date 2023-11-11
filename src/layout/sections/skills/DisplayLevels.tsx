import styled from "styled-components";
import React from "react";

type propsType = {
    children: React.ReactNode;
    level: number
}

const StyleLevels = {
    backgroundImage: 'radial-gradient(circle closest-side at 4px 6px, rgb(255 103 57), rgb(179 208 230 / 76%))',
    filter:' blur(0.3px)',
    boxShadow: '0px 0px 5px orangered inset, 0px 0px 15px orange, 0px 0px 7px #ff2600',
}


export const DisplayLevels = (props: propsType) => {
    const levelStyles = Array.from({ length: 12 }, (_, i) => {
        if (i < props.level) {
            return { ...StyleLevels };
        }
    });

    return (
        <StyledPanelLevel>
            <WrapperSkill>
                <IconPosition>{props.children}</IconPosition>
            </WrapperSkill>
            {Array.from({ length: 12 }, (_, i) => (
                <Level
                    key={i}
                    id={`item_${i}`}
                    style={levelStyles[i]}
                />
            ))}
        </StyledPanelLevel>
    );
};

const StyledPanelLevel = styled.div`
  position: relative;
  border-radius: 50%;
  border: 3px solid #5b4646;
  width: 100px;
  height: 100px;

 

`

const WrapperSkill = styled.div`
  position: relative;

  &::before {
    position: absolute;
    display: inline-block;
    content: '';
    width: 60px;
    height: 60px;
    transform: translate(16px, 16px);
    border-radius: 50%;
    border: 4px solid;
    
    color: rgb(22 137 151 / 58%);
    background-color: rgba(156, 173, 234, 0.34);
    backdrop-filter: blur(.6px);
    //box-shadow: 1px 1px 20px #f19fd1;
    z-index: 1;

    overflow: hidden;
    
  }
`




const IconPosition = styled.div`
    position: absolute;
    top: -2px;
    left: 27.5%;
    transform: translateY(30px);
`


const Level = styled.div`
  border: 1px solid white;
  width: 10px;
  height: 18px;
  position: absolute;
  border-radius: 2px;
  background-color: rgba(165, 188, 236, 0.73);
  
  }
  
  ${(props) =>
          props.id === "item_1" &&
          `
        top: 6%;
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
            bottom: 6%;
            right: 25%;
  `}
  ${(props) =>
          props.id === "item_6" &&
          `
           transform: rotate(180deg);
        bottom: 0%;
        right: 44%;
    
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
        right: 86%;  
  `}
  ${(props) =>
          props.id === "item_10" &&
          `
           transform: rotate(300deg);
    bottom: 63%;
    right: 80%;
    
  `}
  ${(props) =>
          props.id === "item_11" &&
          `
         transform: rotate(330deg);
    bottom: 77%;
    right: 65%; 
    
  `}
  ${(props) =>
          props.id === "item_0" && `
        transform: rotate(360deg);
        bottom: 82%;
        right: 45%; 
  `}
`

