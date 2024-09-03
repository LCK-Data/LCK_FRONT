import React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import backgroundImage from '@assets/img/Main_Background.png';
function SplashPage() {
  return (
    <Background>
      <Header />
      <SectionContainer>
        <Navigation>
          <NavigationList>홈</NavigationList>
          <NavigationList>분석</NavigationList>
          <NavigationList>챔피언</NavigationList>
          <NavigationList>LCK 중계</NavigationList>
          <NavigationList>경기 분석</NavigationList>
        </Navigation>
        <SectionImage src={backgroundImage} />
      </SectionContainer>
    </Background>
  );
}

export default SplashPage;

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #17171f;
`;

const SectionContainer = styled.div`
  width: 100%;
  padding: 0 0 20px 0;
`;

const SectionImage = styled.img`
  object-fit: cover;
`;
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
