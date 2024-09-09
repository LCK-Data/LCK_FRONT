import styled from 'styled-components';
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
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
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
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
  background-color: black;
  border-radius: 5px;
`;

const SelectTeerContainer = styled.div`
  width: 1320px;
  height: 100px;
  background-color: black;
  border-radius: 5px;
`;

const ContentContainer = styled.div`
  width: 1320px;
  height: 500px;
  background-color: black;
  border-radius: 5px;
`;
