import React from 'react';
import { PlansCardContainerStyled } from './PlansCardStyled';
import CardsServices from '../UX/CardsServices/CardsServices';
import prosupuest from '../../assets/Prosupuestos.pdf';
import { useTranslate } from '../../context/Translate';

// Define a common list item component to avoid repetition
const ListItem = ({ children, iconColor }) => (
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill={iconColor}>
      <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
    </svg>
    {children}
  </li>
);

const plansData = {
  es: [
    {
      name: 'Diseño Gráfico',
      description: 'Logotipos únicos y profesionales.',
      features: [
        '3 revisiones incluidas.',
        'Entrega en formatos JPG, PNG, SVG.',
        'Diseño personalizado según la marca.',
      ],
      isDisabled: true,
      text: 'Descargar Información',
    },
    {
      name: 'Community Manager',
      description: 'Gestión efectiva de tus redes sociales.',
      features: [
        'Creación de contenido diario.',
        'Interacción y crecimiento de seguidores.',
        'Análisis de métricas y resultados.',
      ],
      isDisabled: false,
      text: 'Descargar Información',
      pdf: prosupuest,
    },
    {
      name: 'Página Web',
      description: 'Desarrollamos tu presencia en línea.',
      features: [
        'Diseño responsive.',
        'Optimización SEO.',
        'Integración con bases de datos.',
      ],
      isDisabled: true,
      text: 'Descargar Información',
    },
  ],
  en: [
    {
      name: 'Graphic Design',
      description: 'Unique and professional logos.',
      features: [
        '3 revisions included.',
        'Delivered in JPG, PNG, SVG formats.',
        'Custom design based on brand.',
      ],
      isDisabled: true,
      text: 'Download Information',
    },
    {
      name: 'Community Manager',
      description: 'Effective management of your social media.',
      features: [
        'Daily content creation.',
        'Interaction and follower growth.',
        'Metrics and results analysis.',
      ],
      isDisabled: false,
      text: 'Download Information',
      pdf: prosupuest,
    },
    {
      name: 'Website',
      description: 'Develop your online presence.',
      features: [
        'Responsive design.',
        'SEO optimization.',
        'Database integration.',
      ],
      isDisabled: true,
      text: 'Download Information',
    },
  ],
};

const PlansCard = () => {
  const { isTranslate } = useTranslate();
  const currentLang = !isTranslate ? 'en' : 'es';
  
  return (
    <PlansCardContainerStyled>
      {plansData[currentLang].map((plan, index) => (
        <CardsServices
          key={index}
          name={plan.name}
          description={plan.description}
          children={plan.features.map((feature, idx) => (
            <ListItem key={idx} iconColor='#ba2121'>
              {feature}
            </ListItem>
          ))}
          isDisabled={plan.isDisabled}
          pdf={plan.pdf}
          text={plan.text}
        />
      ))}
    </PlansCardContainerStyled>
  );
};

export default PlansCard;
