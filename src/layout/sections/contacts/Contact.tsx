import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Button} from "../../../Components/Button";


export const Contact = () => {
    return (
        <StyledContacts>
        <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field placeholder={'name'}></Field>
                <Field placeholder={'subject'}></Field>
                <Field as={'textarea'} placeholder={'message'}></Field>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  
`

const StyledForm = styled.form`
    max-width: 500px; 
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input`
`