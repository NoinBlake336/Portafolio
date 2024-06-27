import React from 'react'
import { ContainerCVStyled } from './CVStled'
import { IoNewspaper } from "react-icons/io5";
import curriculum from '../../assets/José Chocobar CV.pdf';
const CV = () => {
  return (
    <ContainerCVStyled href={curriculum} download>
        <IoNewspaper/>
    </ContainerCVStyled>
  )
}

export default CV