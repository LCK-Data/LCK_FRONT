import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Box>
      <HeaderContainer>
        <Box fontSize={'5xl'}>MAM.KR</Box>
      </HeaderContainer>
      <Navigation>
        <NavigationList>
          <Link href="/">홈</Link>
        </NavigationList>
        <NavigationList>
          <Link href="/">분석</Link>
        </NavigationList>
        <NavigationList>
          <Link href="/champion">챔피언</Link>
        </NavigationList>
        <NavigationList>
          <Link href="/live">LCK 중계</Link>
        </NavigationList>
        <NavigationList>
          <Link href="/">경기 분석</Link>
        </NavigationList>
      </Navigation>
    </Box>
  );
};

export default Header;

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
`;

const NavigationList = styled.li`
  font-family: 'NanumGothic Regular';
  display: flex;
  width: 200px;
  color: #ffffff;
  justify-content: center;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  font-family: 'NATS Regular';
  width: 100%;
  height: 80px;
  color: #fefefe;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #000000;
`;
