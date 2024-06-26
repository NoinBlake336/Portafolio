import React from 'react';
import { ContainerNeonDotsStyled, NeonDotItemsStyled } from './NeonDotsStyled';

const NeonDots = () => {
    const getRandomValue = (min, max) => Math.random() * (max - min) + min;
  const numberOfDots = 20; 
  return (
    <ContainerNeonDotsStyled>
      {[...Array(numberOfDots)].map((_, index) => (
        <NeonDotItemsStyled
          key={index}
          number={index}
          left={getRandomValue(0, 100)}
          top={getRandomValue(0, 100)}
        />
      ))}
    </ContainerNeonDotsStyled>
  );
};

export default NeonDots;
