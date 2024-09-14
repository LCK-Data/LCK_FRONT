import React, { useState } from 'react';
import styled from 'styled-components';

function ChampionCategoryTap() {
  const [category, setCategory] = useState('전체');
  const categories = ['전체', '탑', '정글', '미드', '원딜', '서폿'];

  const onClickTap = (cat) => {
    setCategory(cat);
  };

  return (
    <CategoryContainer>
      <SlidingBackground selectedIndex={categories.indexOf(category)} />

      {categories.map((cat) => (
        <CategoryBox
          key={cat}
          isSelected={category === cat}
          onClick={() => onClickTap(cat)}
        >
          {cat}
        </CategoryBox>
      ))}
    </CategoryContainer>
  );
}

export default ChampionCategoryTap;

const CategoryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  background: black;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  overflow: hidden;
`;

const CategoryBox = styled.div`
  z-index: 1; /* 탭들이 슬라이드 배경 위에 있도록 설정 */
  width: 80%;
  height: 60%;
  color: white;
  border-radius: 10px;
  padding: 20px 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;
  color: white;
`;

const SlidingBackground = styled.div`
  position: absolute;
  top: 5px;
  left: 0;
  width: calc(100% / 6); /* 각 탭의 너비 */
  height: calc(100% - 10px);
  background-color: #73757c;
  border-radius: 10px;
  transform: ${(props) => `translateX(${props.selectedIndex * 100}%)`};
  transition: transform 0.3s ease-out; /* 슬라이드 애니메이션 */
  z-index: 0; /* 배경이 탭 아래에 있도록 설정 */
`;
