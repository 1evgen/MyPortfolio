import React from 'react';
import styled from "styled-components";
import {Icon} from "../../Components/icon/Icon";
import {FlexContainer} from "../../Components/FlexContainer";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer direction={'column'} aline={'center'} >
            {/*<Name>Evgenii</Name>*/}
            <SocialList>
                <SocialItem>
                    <SocialItemLink>
                        <Test>
                        <Icon  viewBox={'0 0 21px 21px'} iconId={'git'}  />
                        </Test>
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
  background-color:  #0c0c15;

  padding: 10px 0px;
`

//
// const  Name = styled.span`
//
// `
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 20px 0;  
`
const SocialItem = styled.li`
  display: flex;
  gap: 20px
`

const SocialItemLink = styled.a`
  color: #fd3b00;
  cursor: pointer;
  transition: transform 0.4s ease;
  &:hover{
    transform: translateY(-5px);
    
  }
`
 const  Copyright = styled.small`
   color: #17c417;
   text-shadow: 2px 2px 10px #1d751d;
 `

const Test = styled.div`
  width: 34.1px;
  height: 34.5px;
  background-color: #fd3b00;
  position: relative;
  border-radius: 50%;
`