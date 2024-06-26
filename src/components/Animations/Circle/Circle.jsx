import React from 'react'
import { AnimationCircle, LiCircleStyled, UlContinaerCircleStyled } from './CircleStyled'

const Circle = () => {
  const numberOfCircles = 9;
  return (
    <AnimationCircle>
    <UlContinaerCircleStyled>
        {[...Array(numberOfCircles)].map((_, index) => (
            <LiCircleStyled key={index} />
        ))}
    </UlContinaerCircleStyled>
  </AnimationCircle>
  )
}

export default Circle