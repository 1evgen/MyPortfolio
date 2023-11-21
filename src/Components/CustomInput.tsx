import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {theme} from "../styles/theme";

interface IInputOwnType {
    idLabel: string
    placeholder: string
}


export const CustomInput = (props: IInputOwnType) => {

    const [hasValue, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
            setValue(e.target.value);
    }
    const {idLabel, placeholder} = props
    return (
        <ContainerInput isValue={hasValue} >
            <Field
                   onChange={onChangeHandler}
                   value={hasValue}
                   type={"text"}
                   id={idLabel}
                   placeholder={placeholder}></Field>
            <Label htmlFor={idLabel}>Name</Label>
        </ContainerInput>
    );
};


const ContainerInput = styled.div<{ isValue: string }>`
  width: 280px;
  position: relative;
  border: 2px solid #2a2626;
  
  
  
  &:focus-within {
    border: 1px solid orange;
    label {
      left: 4px;
      top: -12px;
    }
    label:before {
      opacity: 1;
      
    }
    
  }
`

const Field = styled.input`
  padding: 0.3rem;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(24, 26, 24, 0.07);
  background-color: #13181e;
  outline: none;
  //transition: all .3s;
  color: ${theme.colors.font};
 
  &::placeholder {
    font-size: 16px;
    opacity: 0;
    transition: all .3s;

  }


`

const Label = styled.label`
    position: absolute; 
    left: 5px;
    top: 5px;
    //transition: all 0.2s;
    padding: 0 2px;
    z-index: 1;
    color: ${theme.colors.font};

  &:before {
    content: '';
    height: 2px;
    opacity: 0;
    background-color: #13181e;

    position: absolute;
    left: 3px;
    top: 11px;
    width: 100%;
    z-index: -1;
  }


}
  
`