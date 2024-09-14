import React, { useState } from 'react';
import styled from 'styled-components';

function ChampionCategoryTap({ category, onClickTap }) {
  const categories = ['전체', '탑', '정글', '미드', '원딜', '서폿'];

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
  min-height: 70px;
  background: black;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  overflow: hidden;
`;

const CategoryBox = styled.div`
  z-index: 1;
  width: 80%;
  height: 50px;
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
  width: calc(100% / 6);
  height: calc(100% - 10px);
  background-color: #73757c;
  border-radius: 10px;
  transform: ${(props) => `translateX(${props.selectedIndex * 100}%)`};
  transition: transform 0.3s ease-out;
  z-index: 0;
`;
