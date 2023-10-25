import React from 'react';
import styled from "styled-components";
import {Icon} from "../../Components/icon/Icon";
import {FlexContainer} from "../../Components/FlexContainer";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer direction={'column'} aline={'center'} >
            <Name>Evgenii</Name>
            <SocialList>
                <SocialItem>
                    <SocialItemLink>
                        <Icon  viewBox={'0 0 21px 21px'} iconId={'git'} />
                    </SocialItemLink>
                    <SocialItemLink>
                        <Icon viewBox={'0 0 21px 21px'} iconId={'telegram'} />
                    </SocialItemLink>
                    <SocialItemLink>
                        <Icon  viewBox={'0 0 21px 21px'} iconId={'linkedin'} />
                    </SocialItemLink>
                </SocialItem>
            </SocialList>
            <Copyright>
                © 2023 Goncharov Evgenii, All Rights Reserved.
            </Copyright>
            </FlexContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: blanchedalmond;
    height: 30vh;
`


const  Name = styled.span`
`
const SocialList = styled.ul`

   
`
const SocialItem = styled.li`
  display: flex;
  gap: 20px
`
const SocialItemLink = styled.a`
`
 const  Copyright = styled.small`
 
 `