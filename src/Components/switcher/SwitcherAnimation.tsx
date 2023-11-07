import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";


type PropsType = {
    isActive: boolean
    setAnimations: (value: boolean)=> void
}

export const SwitcherAnimation = (props: PropsType) => {

        const onChangeAnimation = (e: ChangeEvent<HTMLInputElement>)=> {
         let status = e.target.checked
                props.setAnimations(e.target.checked)
                    console.log(e.target.checked)
            if(!status){

            }
        }



    return (

        <SwitcherStyled type={'checkbox'} onChange={onChangeAnimation}>

        </SwitcherStyled>
    );
};

const SwitcherStyled = styled.input `
  

`