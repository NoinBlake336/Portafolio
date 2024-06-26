import React from 'react'
import { ItemsNavbarStyled } from './NavBarStyled'

const ItemNavBar = ({link, title, svg}) => {

  // Function to map over the children prop and return h, p, and span elements as strings
  const renderElements = (children) => {
    const elements = [...document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span')];

const mappedElements = elements.map((element) => {
  return {
    type: element.tagName.toLowerCase(),
    text: element.textContent.trim()
  };
});

console.log(mappedElements);
  };
  return (
    <ItemsNavbarStyled href={link} title={title} onClick={()=> renderElements()}>
        {svg}
    </ItemsNavbarStyled>
  )
}

export default ItemNavBar