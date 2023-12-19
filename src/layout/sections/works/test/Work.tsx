import styled, {css} from "styled-components";
type PropsType = {
    title: string
    linkGit: string
    linkPreview: string
}

export const  Work = (props: PropsType)=> {
    const {title, linkPreview, linkGit} = props
    return (
        <Card>
            <BoxShadow></BoxShadow>
            <Main>
                <Top></Top>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
                <Title>{title}</Title>
                <ButtonContainer>
                    <Button id={'eye'} as={'a'} href={linkPreview} target={'_blank'} >
                        <SVG stroke-width="1" stroke-linecap="round"
                              stroke-linejoin="round" width="20" stroke="red" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6.85714C4.65058 6.85714 3.19828 6.30303 1.80011 5.25465C0.7549 4.47096 0.109782 3.69454 0.0828251 3.66182C-0.0276084 3.52794 -0.0276084 3.32921 0.0828251 3.1953C0.109782 3.16263 0.754873 2.38615 1.80011 1.60246C3.19831 0.554174 4.65061 0 6 0C7.34942 0 8.80175 0.554146 10.1999 1.60246C11.2451 2.38615 11.8902 3.1626 11.9172 3.1953C12.0276 3.32918 12.0276 3.52791 11.9172 3.66182C11.8902 3.69449 11.2451 4.47096 10.1999 5.25465C8.80175 6.303 7.34944 6.85714 6 6.85714ZM0.804579 3.4286C1.06546 3.70791 1.55782 4.19906 2.20791 4.6848C3.09914 5.35068 4.48048 6.14454 6 6.14454C7.51952 6.14454 8.90089 5.35068 9.79209 4.6848C10.4421 4.19915 10.9345 3.70794 11.1954 3.4286C10.9346 3.14929 10.4422 2.65814 9.79209 2.1724C8.90089 1.50649 7.51952 0.712656 6 0.712656C4.48048 0.712656 3.09914 1.50649 2.20791 2.1724C1.5579 2.65805 1.06551 3.1492 0.804579 3.4286Z" fill="black"/>
                            <path d="M6 5.63784C4.83991 5.63784 3.89612 4.64685 3.89612 3.42878C3.89612 2.21072 4.83991 1.21973 6 1.21973C6.5102 1.21973 7.00237 1.41395 7.38579 1.76666C7.52677 1.89633 7.54094 2.12142 7.41745 2.26944C7.29396 2.41746 7.07955 2.43231 6.9386 2.30268C6.67897 2.06384 6.34561 1.93233 5.99997 1.93233C5.2141 1.93233 4.57476 2.60365 4.57476 3.42878C4.57476 4.25392 5.2141 4.92524 5.99997 4.92524C6.78587 4.92524 7.42518 4.25392 7.42518 3.42878C7.42518 3.23202 7.57712 3.07248 7.76452 3.07248C7.95191 3.07248 8.10385 3.23202 8.10385 3.42878C8.10391 4.64685 7.16009 5.63784 6 5.63784Z" fill="black"/>
                            <path d="M9.62939 8.34619V8.42598" stroke="#303030" stroke-width="0.1" stroke-linecap="round"/>
                        </SVG>

                    </Button>
                    <Button id={'git'} as={'a'} href={linkGit} target={'_blank'}>
                        <SVG id={'svg-git'} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path
                                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                            </path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </SVG>
                    </Button>
                </ButtonContainer>
            </Main>
        </Card>

    )
}


const BoxShadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px solid red;
  transform: scale(0.8);
  box-shadow: rgba(255, 0, 0, 1) 0px 30px 70px 0px;
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const Main = styled.div`
  width: 230px;
  height: 300px;
  overflow: hidden;
  background: red;
  background: linear-gradient(
          0deg,
          rgb(62, 0, 0) 0%,
          rgba(255, 0, 0, 1) 60%,
          rgb(62, 0, 0) 100%
  );
  position: relative;
  clip-path: polygon(
          0 0,
          100% 0,
          100% 40px,
          100% calc(100% - 40px),
          calc(100% - 40px) 100%,
          40px 100%,
          0 calc(100% - 40px)
  );
  box-shadow: rgba(255, 0, 0, 1) 0px 7px 29px 0px;
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const Top = styled.div`
 
  position: absolute;
  top: 0px;
  left: 0;
  width: 0px;
  height: 0px;
  z-index: 2;
  border-top: 115px solid black;
  border-left: 115px solid transparent;
  border-right: 115px solid transparent;
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const Side = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  transform: translateX(-50%);
  height: 101%;
  background: black;
  clip-path: polygon(0% 0%, 50% 0, 95% 45%, 100% 100%, 0% 100%);
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 1s;
`;

const LeftSide = styled(Side)`
  left: 0;
`;

const RightSide = styled(Side)`

  right: 0;
  transform: translateX(50%) scale(-1, 1);
`;

const Title = styled.div`

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 90px;
  font-weight: bold;
  font-size: 25px;
  opacity: 0;
  z-index: -1;
  transition: all 0.2s ease-out 0s;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled.button`
  position: absolute;
  transform: translateX(-50%);
  padding: 5px 10px;
  clip-path: polygon(0 0, 100% 0, 81% 100%, 21% 100%);
  background: black;
  border: none;
  color: white;
  display: grid;
  place-content: center;
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  
  &:nth-child(1) {
    bottom: 300px;
    transition-delay: 0.4s;
  }
  &:nth-child(2) {
    bottom: 300px;
    transition-delay: 0.6s;
  }
  &:nth-child(3) {
    bottom: 300px;
    transition-delay: 0.8s;
  }
  
  &:hover {
    .svg {
      transform: scale(1.2);
    }
  }

  &:active {
    .svg {
      transform: scale(0.7);
    }
  }

`

const SVG = styled.svg`
  width: 15px;
  transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  &:hover {
      transform: scale(1.2);
    }
  
  &:active {
      transform: scale(0.7);
    }
`;

const hoverMain = css`
  transform: scale(1.1);
`;

const hoverTop = css`
  top: -50px;
`;

const hoverLeft = css`
  left: -50px;
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
`;

const hoverRight = css`
  right: -50px;
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
`;


const hoverTitle = css`
  opacity: 1;
  transition: all 0.2s ease-out 1.3s;
`;

const hoverFirstChildren = css`
  bottom: 80px;
  transition-delay: 0.6s;
`
const hoverSecondChildren = css`
  bottom: 40px;
  transition-delay: 0.4s;
`

const Card = styled.div`
  position: relative;
  height: 300px;
  width: 230px;
  margin-bottom: 30px;
  
  &:nth-child(2) {
    filter: hue-rotate(300deg) brightness(1.3);
  }
  &:nth-child(3) {
    filter: hue-rotate(200deg) brightness(1.5);
  }
  &:nth-child(4) {
    filter: hue-rotate(60deg) brightness(3);
  }

  &:nth-child(5) {
    filter: hue-rotate(100deg) brightness(3);
  }

  &:hover ${Main} {
    ${hoverMain}
  }
  &:hover ${Top} {
    ${hoverTop}
  }
  &:hover ${LeftSide} {
    ${hoverLeft}
  }
  &:hover ${RightSide} {
    ${hoverRight}
  }
  &:hover ${Title} {
    ${hoverTitle}
  }
  
  &:hover ${ButtonContainer} {
    ${Button} {
    &:nth-child(1) {
     ${hoverFirstChildren}
    }
    &:nth-child(2) {
     ${hoverSecondChildren}
    }
  }
  }
`



{/*<SVG className="svg code" xmlns="http://www.w3.org/2000/svg" height="24"*/}
{/*     width="24" fill="red" viewBox="0 0 512 512">*/}
{/*    <path*/}
{/*        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">*/}
{/*    </path>*/}
{/*</SVG>*/}