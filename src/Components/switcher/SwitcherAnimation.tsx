import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";


type PropsType = {
    isActive: boolean
    setAnimations: (value: boolean) => void
}

export const SwitcherAnimation = (props: PropsType) => {
    const onChangeAnimation = (e: ChangeEvent<HTMLInputElement>) => props.setAnimations(e.target.checked)

    return (

            <StyledLabel>
                <StyledSwitcher id={'test'}  type={'checkbox'} onChange={onChangeAnimation}></StyledSwitcher>
                <Slider isChecked={props.isActive}>
                    <WrapperSpan>off</WrapperSpan>
                    <WrapperSpan>on</WrapperSpan>

                </Slider>
            </StyledLabel>

    );
};



const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 35%; 
  cursor: pointer;
 
  
  &:hover{
    box-shadow: 0px 0px 9px red;
    transition: 0.5s linear;
  }
  
`

const StyledSwitcher = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Slider = styled.div<{isChecked: boolean}>`
    position: absolute;
    padding: 5px;
    background-color: #232830;;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 25% / 50% ;
  
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.9em;
   
  
  &::before{
    content: '';
    display: inline-block;
    position: absolute;
    background-color: #68676f;
    border-radius:  50%;
    width: 27px;
    height: 27px;
    top: 1.5px;
    left: 3px;
    transition-duration: 1s;
    ${(props)=> props.isChecked ? {transform: `translate(105%)`} : '' }
    
  }
`

const WrapperSpan = styled.span`
  color: #e83f00;
  text-shadow: 0px 0px 4px #ff0707;
`