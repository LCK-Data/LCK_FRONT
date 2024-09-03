import { Box } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return(
        <HeaderContainer>
            <Box fontSize={'5xl'}>MAM.KR</Box>
        </HeaderContainer>
    )
};



export default Header;

const HeaderContainer = styled.div`
font-family:'NATS Regular';
width: 100%;
height: 80px;
color: #fefefe;
align-items:center;
display:flex;
justify-content:center;
background-color:#000000;
`