import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Button} from "../../../Components/Button";
import {ContainerBlock} from "../../../Components/Container";
import {CustomInput} from "../../../Components/CustomInput";


export const Contact = () => {
    return (
        <StyledContacts>
            <ContainerBlock>
        <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <CustomInput idLabel={'name'} placeholder={'Enter your name'}/>
                <Field placeholder={'subject'}></Field>
                <Field as={'textarea'} placeholder={'message'}></Field>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
            </ContainerBlock>
        </StyledContacts>

    );
};

const StyledContacts = styled.section`
  
  
`

const StyledForm = styled.form`
    max-width: 500px; 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input`
    width: 100%;
    background-color: #13181e;
    border: 1px solid red;
    color: red;
    border-radius: 2px 0px 2px 0px; 
`