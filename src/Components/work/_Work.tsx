import React from 'react';
import styled from "styled-components";

type PropsType = {
    title: string
    text: string
    img: string
}


export const _Work = ({title, text, img}: PropsType) => {
    return (
        <StyledWork>
            <ImageProject src={img}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: #8d2626;
  max-width: 350px;
  border: 1px solid aliceblue;
`

const ImageProject = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Link = styled.a`
`
const Title = styled.h3`
    
`
const Text = styled.p`
    
`