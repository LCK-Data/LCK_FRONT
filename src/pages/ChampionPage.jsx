import styled from 'styled-components';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/header';
import { Select, Box } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

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
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </SelectTeerContainer>
        <ContentContainer />
      </Box>
    </Container>
  );
}

export default ChampionPage;

const MainSection = styled.div`
  width: 1320px;
  height: 200px;
  background-color: #10131C;
  border-radius: 5px;
  border: 2px solid rgba(115, 117, 124, 0.6);
`

const SelectTeerContainer = styled.div`
  width: 1320px;
  height: 100px;
  background-color: #10131C;
  border-radius: 5px;
  display:flex;
  align-items: center;
  padding: 0 15px 0 15px;
`;

const ContentContainer = styled.div`
  width: 1320px;
  height: 500px;
  background-color: #10131C;
  border-radius: 5px;
`;
