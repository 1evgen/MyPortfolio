import React, {ChangeEvent, FocusEvent, useState} from 'react';
import styled from "styled-components";
import {theme} from "../styles/theme";

interface IInputOwnType {
    idLabel: string
    placeholder: string
}


export const CustomInput = (props: IInputOwnType) => {
    const [hasValue, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> setValue(e.target.value)


    const {idLabel, placeholder} = props
    return (
        <ContainerInput isValue={hasValue} >
            <Field
                   onChange={onChangeHandler}
                   value={hasValue}
                   type={"text"}
                   id={idLabel}
                   placeholder={placeholder}></Field>
            <Label htmlFor={idLabel}  isValue={hasValue}>Name</Label>
        </ContainerInput>
    );
};


const ContainerInput = styled.div<{ isValue: string }>`
  width: 100%;
  position: relative;
  border: 2px solid #2a2626;
  
  
  &:focus-within {
    border: 1px solid orange;
    label {
      left: 6px;
      top: -12px;
    }
    label:before {
      opacity: 1;
    }
  }
  
  
`

const Field = styled.input`
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(24, 26, 24, 0.07);
  background-color: #13181e;
  outline: none;
  color: ${theme.colors.font};
 
  
  &::placeholder {
    font-size: 16px;
    opacity: 0;
    
  }
  
    &:focus-within{
        &::placeholder{
          opacity: 1;
        }
    }
  
`

const Label = styled.label<{ isValue: string}>`
    position: absolute; 
    left: 5px;
    top: ${({ isValue}) => (isValue.length > 0 ? '-12px' : '8px')};
  
    padding: 0 2px;
    z-index: 1;
    color: ${theme.colors.font};

  &:before {
    content: '';
    height: 4px;
    opacity: ${({isValue}) => (isValue.length > 0 ? '1': '0')};
    background-color: #0c0c15;
    font-family: 'Monofonto';
    
    position: absolute;
    left: 1px;
    top: 9px;
    width: 100%;
    z-index: -1;
  }
}
`