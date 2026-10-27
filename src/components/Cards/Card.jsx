import React from 'react'
import { Link } from 'react-router-dom'
import {
  CardImageStyled,
  CardPlaceholderBannerStyled,
  CardTopBadges,
  CardInfromationStyled,
  CardProjectStyled,
} from './CardsStyle'
import { useTranslate } from '../../context/Translate'
import WatermarkOverlay from '../AntiTheft/WatermarkOverlay'

const Card = ({ to, category, title, img, desktopImg, isRecent, inDevelopment, isDesign = false, description, bg }) => {
  const { isTranslate } = useTranslate();
  const cover = desktopImg || img || null;

  const badges = (
    <CardTopBadges>
      {isRecent ? (
        <span className="recent-badge">{isTranslate ? "Reciente" : "Recent"}</span>
      ) : inDevelopment ? (
        <span className="dev-badge">{isTranslate ? "En desarrollo" : "In development"}</span>
      ) : null}
      <span className="category-badge" title={category}>{category}</span>
    </CardTopBadges>
  );

  return (
    <CardProjectStyled as={Link} to={to}>
      {cover ? (
        <CardImageStyled bg={bg}>
          {badges}
          {isDesign && <WatermarkOverlay showBadge={true} />}
          <img
            loading="lazy"
            decoding="async"
            src={cover}
            alt={title}
            className={isDesign ? "protected-design-image" : ""}
            onContextMenu={isDesign ? (e) => e.preventDefault() : undefined}
            onDragStart={isDesign ? (e) => e.preventDefault() : undefined}
          />
        </CardImageStyled>
      ) : (
        <CardPlaceholderBannerStyled>
          {badges}
          
        </CardPlaceholderBannerStyled>
      )}
      <CardInfromationStyled>
        <h5>{title}</h5>
        <p>{description}</p>
      </CardInfromationStyled>
    </CardProjectStyled>
  )
}

export default Card
