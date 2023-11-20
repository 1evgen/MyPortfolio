import styled, {css} from "styled-components";


type PropsType = {
    title: string
}



export const  Test = (props: PropsType)=> {
    const {title} = props
    return (
        <Card>
            <BoxShadow></BoxShadow>
            <Main>
                <Top></Top>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
                <Title>{title}</Title>
                <ButtonContainer>
                    <Button>
                        <SVG className="svg twitter" xmlns="http://www.w3.org/2000/svg" height="24"
                             width="24" fill="red" viewBox="0 0 512 512">
                            <path
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                            </path>
                        </SVG>
                    </Button>
                    <Button>
                        <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24"
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
  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;


const hoverMain = css`
  transform: scale(1.1);
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


const Card = styled.div`
  position: relative;
  height: 300px;
  width: 230px;

  &:nth-child(2) {
    filter: hue-rotate(300deg) brightness(1.3);
  }
  &:nth-child(3) {
    filter: hue-rotate(200deg) brightness(1.5);
  }
  &:nth-child(4) {
    filter: hue-rotate(60deg) brightness(3);
  }


  &:hover ${Main} {
    ${hoverMain}
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
`