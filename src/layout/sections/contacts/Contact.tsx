import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../Components/SectionTitle";
import {Button} from "../../../Components/Button";
import {ContainerBlock} from "../../../Components/Container";
import {CustomInput} from "../../../Components/CustomInput";
import {FlexContainer} from "../../../Components/FlexContainer";


export const Contact = () => {
    return (
        <StyledContacts>
            <ContainerBlock>

        <SectionTitle>Contacts</SectionTitle>
            <StyledForm >
                <CustomInput idLabel={'name'} placeholder={'Enter your name'} type={'name'} />
                <CustomInput idLabel={'email'} placeholder={'Enter your email'} type={'email'}/>
                <CustomInput idLabel={'message'} placeholder={'message'} as={'textarea'}/>
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
  
  textarea {
    resize: none;
    height: 150px;
  }
`

