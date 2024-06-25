import React from 'react'
import { ItemsNavbarStyled } from './NavBarStyled'

const ItemNavBar = ({link, title, svg }) => {
  return (
    <ItemsNavbarStyled href={link} title={title}>
        {svg}
    </ItemsNavbarStyled>
  )
}

export default ItemNavBar