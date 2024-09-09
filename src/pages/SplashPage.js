import React from 'react';
import styled from 'styled-components';
import backgroundImage from '@assets/img/Main_Background.png';
import Container from '@components/Container';
import { Link } from '@chakra-ui/react';
import Header from '@components/Header';
function SplashPage() {
  return (
    <Container>
      <Header />
      <SectionContainer>
        <SectionImage src={backgroundImage} />
      </SectionContainer>
    </Container>
  );
}

export default SplashPage;

const SectionContainer = styled.div`
  width: 100%;
  padding: 0 0 20px 0;
`;

const SectionImage = styled.img`
  object-fit: cover;
`;
