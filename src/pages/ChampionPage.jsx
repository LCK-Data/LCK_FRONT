import styled from 'styled-components';
import React, { useState } from 'react';
import Container from '@components/Container';
import { Select, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Header from '@components/Header';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import ChampionIcon from '@components/Champion';
import ChampionCateogoryTap from '@components/ChampionCategoriTap';
import ChampionTable from '@components/ChampionTable';

function ChampionPage() {
  const [category, setCategory] = useState('전체');

  const onClickTap = (cat) => {
    setCategory(cat);
  };

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
          <ChampionBlock>
            <InnerContent>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input placeholder="챔피언을 입력하세요" />
              </InputGroup>
            </InnerContent>
            <InnerContent>
              <Box>탑</Box>
              <Box>정글</Box>
              <Box>미드</Box>
              <Box>원딜</Box>
              <Box>서폿</Box>
            </InnerContent>
            <ChampionContainer>
              <ChampionIcon />
            </ChampionContainer>
          </ChampionBlock>
          <ChampionInfoBlock>
            <ChampionCateogoryTap
              category={category}
              onClickTap={(cat) => onClickTap(cat)}
            />
            <ChampionTable category={category} />
          </ChampionInfoBlock>
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
  height: auto;
  background-color: #10131c;
  border-radius: 5px;
  border: 2px solid rgba(115, 117, 124, 0.6);
  padding: 10px 20px;
  gap: 20px;
`;

const ChampionBlock = styled.div`
  display: flex;
  flex: 1;
  background-color: #10131c;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  height: 700px;
  /* Chrome, Safari, Edge */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none; /* For Firefox */

  /* IE and older versions of Edge */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
`;

const InnerContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
  height: auto;
  max-height: 100px;
  align-items: center;
  color: white;
`;

const ChampionContainer = styled.div`
  width: 100%;
`;

const ChampionInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: #fefefe;
  height: 700px;

  /* Chrome, Safari, Edge */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none; /* For Firefox */

  /* IE and older versions of Edge */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
`;
