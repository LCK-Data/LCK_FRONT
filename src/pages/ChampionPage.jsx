import styled from 'styled-components';
import React from 'react';
import Container from '@components/Container';
import { Select, Box } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Header from '@components/Header';
function ChampionPage() {
  return (
    <Container>
      <Header />
      <Box
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        mt={'50px'}
        gap={'50px'}
      >
        <MainSection />
        <SelectTeerContainer display={'flex'} mt={'50px'}>
          <Select variant="brandPrimary" w={'200px'}>
            <option value="option1" style={{ color: 'black' }}>
              에메랄드
            </option>
            <option value="option2" style={{ color: 'black' }}>
              골드
            </option>
            <option value="option3" style={{ color: 'black' }}>
              실버
            </option>
          </Select>
        </SelectTeerContainer>
        <ContentContainer>
          <ChampionBlock></ChampionBlock>
          <ChampionInfoBlock></ChampionInfoBlock>
        </ContentContainer>
      </Box>
    </Container>
  );
}

export default ChampionPage;

const MainSection = styled.div`
  width: 1320px;
  height: 200px;
  background-color: #10131c;
  border-radius: 5px;
  border: 2px solid rgba(115, 117, 124, 0.6);
`;

const SelectTeerContainer = styled.div`
  width: 1320px;
  height: 100px;
  background-color: #10131c;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  border: 2px solid rgba(115, 117, 124, 0.6);
  gap: '50px';
`;

const ContentContainer = styled.div`
  display: flex;
  width: 1320px;
  height: 500px;
  background-color: #10131c;
  border-radius: 5px;
  border: 2px solid rgba(115, 117, 124, 0.6);
  padding: 10px 20px;
  gap: 20px;
`;

const ChampionBlock = styled.div`
  display: flex;
  flex: 1;
  background-color: #fefefe;
`;

const ChampionInfoBlock = styled.div`
  display: flex;
  flex: 3;
  background-color: #fefefe;
`;
