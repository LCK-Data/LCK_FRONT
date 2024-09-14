import React from 'react';
import styled from 'styled-components';
import { Box, Link } from '@chakra-ui/react';

// 모든 이미지를 가져오기 위한 require.context 사용
const importAllImages = (r) => {
  return r.keys().map(r);
};

// 'assets/champion' 폴더 내 모든 이미지를 가져옴
const images = importAllImages(
  require.context('assets/img/champion', false, /\.(png|jpe?g|svg)$/)
);

const ChamipionIcon = () => {
  return (
    <ChampionContainer>
      {images.map((image, index) => {
        // 파일 경로에서 파일명 추출 및 확장자 제거
        const fileName = image.split('/').pop().split('.')[0];

        return (
          <div key={index}>
            <Link href="#">
              <img
                src={image}
                alt={`champion-${index}`}
                style={{ width: 'inherit' }}
              />
              <LabelText>{fileName}</LabelText>
            </Link>
          </div>
        );
      })}
    </ChampionContainer>
  );
};

export default ChamipionIcon;

const ChampionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const LabelText = styled.p`
  font-size: 10px;
  color: white;
  text-align: center;
`;
