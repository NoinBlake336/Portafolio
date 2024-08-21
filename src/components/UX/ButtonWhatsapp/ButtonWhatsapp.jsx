import React from 'react'
import { ContainerButtonWpp, ButtonWpp } from './ButtonWhatsappStyled'
import { FaWhatsapp } from "react-icons/fa";

export const ButtonWhatsapp = () => {
  return (
    <ContainerButtonWpp>
        <ButtonWpp href='https://w.app/NoinBlake'>
            <FaWhatsapp />
            <p>WhatsApp</p>
        </ButtonWpp>
    </ContainerButtonWpp>
  )
}

export default ButtonWhatsapp