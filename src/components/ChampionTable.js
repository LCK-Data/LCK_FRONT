import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';

function ChampionTable({ category }) {
  const testData = [
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '미드',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '원딜',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '정글',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '서폿',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '미드',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '서폿',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '정글',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
    {
      name: '베인',
      teer: '골드',
      position: '탑',
      winrate: '55%',
      pickrate: '2%',
      banrate: '5%',
    },
  ];
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (category === '전체') {
      setFilteredData(testData);
    } else {
      setFilteredData(testData.filter((champ) => champ.position === category));
    }
  }, [category]);

  return (
    <TableContainer overflowY={'scroll'}>
      <Table>
        <Thead>
          <Tr>
            <Th>챔피언</Th>
            <Th>티어</Th>
            <Th>포지션</Th>
            <Th>승률</Th>
            <Th>픽률</Th>
            <Th>밴율</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((champ) => (
            <Tr>
              <Td borderBottomColor={'#282830'}>{champ.name}</Td>
              <Td borderBottomColor={'#282830'}>{champ.teer}</Td>
              <Td borderBottomColor={'#282830'}>{champ.position}</Td>
              <Td borderBottomColor={'#282830'}>{champ.winrate}</Td>
              <Td borderBottomColor={'#282830'}>{champ.pickrate} (mm)</Td>
              <Td borderBottomColor={'#282830'}>{champ.banrate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ChampionTable;
