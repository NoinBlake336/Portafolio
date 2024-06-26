import React from 'react'
import { ItemsNavbarStyled } from './NavBarStyled'

const ItemNavBar = ({link, title, svg}) => {

  // Function to map over the children prop and return h, p, and span elements as strings
  const renderElements = (children) => {
    console.log(window)
    const elements = [];
    React.Children.toArray(children).forEach((child, index) => {
      console.log(`child.type: ${child.type}`);
      if (child.type === 'h1' || child.type === 'h2' || child.type === 'h3' || child.type === 'h4' || child.type === 'h5' || child.type === 'h6') {
        console.log(`Adding h${child.type - 1} element to elements array`);
        elements.push(<child.type key={index}>{child.props.children}</child.type>);
      } else if (child.type === 'p') {
        console.log(`Adding p element to elements array`);
        elements.push(<child.type key={index}>{child.props.children}</child.type>);
      } else if (child.type === 'span') {
        console.log(`Adding span element to elements array`);
        elements.push(<child.type key={index}>{child.props.children}</child.type>);
      } else {
        console.log(`Adding non-h, p, or span element to elements array`);
        elements.push(child);
      }
    });
    console.log(`elements array: ${elements}`);
    return elements;
  };
  return (
    <ItemsNavbarStyled href={link} title={title} onClick={()=> renderElements()}>
        {svg}
    </ItemsNavbarStyled>
  )
}

export default ItemNavBar