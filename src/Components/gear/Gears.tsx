import styled, {keyframes} from "styled-components";
import {theme} from "../../styles/theme";

export const Gears = ()=> {
    return (
        <ContainerGears>
            <Gear>

            </Gear>

            <GearSecond>


            </GearSecond>
        </ContainerGears>
    )
}

const ContainerGears = styled.div`
    position: relative;
    width: 20%;
    border: 1px solid red;
    padding: 10px;
  
`

const rotateFirstGear = keyframes`

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`

const rotateSecondGear = keyframes`

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }

`


const Gear = styled.div`
  width: 100%;
  max-width: 50px;
  min-height: 50px;


  border-radius: 50%;
  background-color: ${theme.styleGears.colorBody};
  margin: 0 auto;
  position: relative;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(0deg, transparent 39%, ${theme.styleGears.colorBody} 39%, ${theme.styleGears.colorBody} 61%, transparent 61%),
    linear-gradient(60deg, transparent 42%, ${theme.styleGears.colorBody} 43%, ${theme.styleGears.colorBody} 55%, transparent 56%),
    linear-gradient(120deg, transparent 44%, ${theme.styleGears.colorBody} 45%, ${theme.styleGears.colorBody} 57%, transparent 58%);
    top: -10px;
    right: -10px;
    width: 70px;
    height: 70px;
    z-index: 1;
    border-radius: 50%;
  
    animation: ${rotateFirstGear}  10s linear infinite;

  }

  &::after {
    content: '';
    background-color: rgba(33, 23, 22, 0.85);
    border-radius: 50%;
    width: 100%;
    max-width: 25px;
    min-height: 25px;
    position: absolute;
    top: 25%;
    right: 25%;
    z-index: 2;

  }

`


const GearSecond = styled(Gear)`
  top: 7px;
  left: 19px;
  &::before{
   
   animation: ${rotateSecondGear} 10s linear infinite ;
 }

`





