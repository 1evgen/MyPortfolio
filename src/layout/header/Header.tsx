import React from 'react';
import styled from "styled-components";
import {Menu} from "../../Components/Menu/Menu";

export const Header = () => {
    return (
        <StyleHeader>
            <Menu/>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
  background-color: aquamarine;
`