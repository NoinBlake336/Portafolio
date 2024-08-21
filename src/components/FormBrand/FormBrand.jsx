import React, { useState } from 'react';
import { FaAsterisk } from "react-icons/fa";
import Title from '../Title/Title';
import { ContainerP} from '../../pages/Services/ServicesStyled';
import { ButtonSendStyled, ContainerInputsStyled, InputsStyled } from '../../pages/Services/QuetionsStyled';
import Input from '../UX/Input/Input';
import ImageUploadInput from '../UX/FileUp/FileUp';
import { ContainerMain } from '../../pages/Projects/ProjectStyled';
import { useTranslate } from '../../context/Translate';
import ButtonWhatsapp from '../UX/ButtonWhatsapp/ButtonWhatsapp';

const formData = {
  es: {
    title: 'Conocemos tu Marca',
    description: 'Por favor, completa este breve formulario para ayudarnos a entender mejor tu marca y diseñar una estrategia efectiva.',
    note: 'Ten en cuenta que, después de realizar el pago del servicio, se llevará a cabo un análisis de la marca, que durará entre 7 y 10 días, para luego definir el contenido del perfil en las redes sociales.',
    whatsapp: 'Envíe el archivo descargado por WhatsApp una vez que haya descargado las preguntas.',
    inputs: [
      { label: '¿Cuál es el nombre de tu marca?', name: 'nombre', placeholder: 'Nombre de la marca' },
      { label: 'Visión de la Marca', name: 'vision', placeholder: 'Describe la visión de tu marca' },
      { label: 'Misión de la Marca', name: 'mision', placeholder: 'Describe la misión de tu marca' },
      { label: 'Valores Fundamentales', name: 'valores', placeholder: '¿Cuáles son los valores que guían tu marca?' },
      { label: 'Diferenciadores de la Marca', name: 'diferenciadores', placeholder: '¿Qué hace única a tu marca?' },
      { label: 'Historia de la Marca', name: 'historia', placeholder: '¿Cuál es la historia detrás de tu marca?' },
      { label: 'Creación de la Marca', name: 'creación', placeholder: '¿Cómo y por qué fue creada?' },
      { label: '¿Eslogan o frase que identifique a tu marca?', name: 'frase', placeholder: 'Eslogan o Frase' }
    ],
    imageUploadText: 'Subir el logo de la marca',
    buttonText: 'Descargar respuestas'
  },
  en: {
    title: 'Get to Know Your Brand',
    description: 'Please fill out this brief form to help us better understand your brand and design an effective strategy.',
    note: 'Please note that, after completing the payment for the service, a brand analysis will be conducted, which will take between 7 and 10 days, after which the content for the social media profile will be defined.',
    whatsapp: 'Send the downloaded file via WhatsApp once you have downloaded the questions.',
    inputs: [
      { label: 'What is the name of your brand?', name: 'nombre', placeholder: 'Brand name' },
      { label: 'Brand Vision', name: 'vision', placeholder: 'Describe your brand’s vision' },
      { label: 'Brand Mission', name: 'mision', placeholder: 'Describe your brand’s mission' },
      { label: 'Core Values', name: 'valores', placeholder: 'What values guide your brand?' },
      { label: 'Brand Differentiators', name: 'diferenciadores', placeholder: 'What makes your brand unique?' },
      { label: 'Brand History', name: 'historia', placeholder: 'What is the story behind your brand?' },
      { label: 'Brand Creation', name: 'creación', placeholder: 'How and why was it created?' },
      { label: 'Tagline or Phrase Identifying Your Brand?', name: 'frase', placeholder: 'Tagline or Phrase' }
    ],
    imageUploadText: 'Upload your brand’s logo',
    buttonText: 'Donwload quetions'
  }
};

const FormBrand = () => {
  const { isTranslate } = useTranslate();
  const currentLang = isTranslate ? 'en' : 'es';
  const { title, description, note, whatsapp, inputs, imageUploadText, buttonText } = formData[currentLang];

  const [formValues, setFormValues] = useState({});
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleInputChange = (e) => {
    
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUploadedImage(file);
  };

  const handleSubmit = () => {
    const formDataToSubmit = {
        ...formValues,
        logo: uploadedImage ? [uploadedImage.name, uploadedImage.size, uploadedImage.lastModified, uploadedImage.type] : null,  // Guardar solo el nombre del archivo
      };
    
      const jsonData = JSON.stringify(formDataToSubmit, null, 2); // Convertir a JSON
    
      const blob = new Blob([jsonData], { type: 'application/json' }); // Crear un Blob
      const url = URL.createObjectURL(blob); // Crear una URL para el Blob
    
      const a = document.createElement('a'); // Crear un elemento de anclaje
      a.href = url;
      a.download = 'formData.txt'; // Nombre del archivo a descargar
      a.click(); // Simular el clic para descargar el archivo
    
      URL.revokeObjectURL(url); // Liberar la URL del Blob
  };

  return (
    <ContainerMain>
      <Title title={title} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ba2121" d="M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>} />
      <ContainerP>
        <div>
            <p>{description}</p>
        </div>
      </ContainerP>
      <ContainerInputsStyled>
        <InputsStyled>
          {inputs.map((input, index) => (
            <Input
              key={index}
              label={input.label}
              name={input.name}
              id={input.name}
              placeholder={input.placeholder}
              functions={handleInputChange}
            />
          ))}
          <ImageUploadInput text={imageUploadText} onChange={handleImageUpload} />
          <ButtonSendStyled type="button" onClick={handleSubmit}>
            {buttonText}
          </ButtonSendStyled>
        </InputsStyled>
      </ContainerInputsStyled>
      <ContainerP>
        <div>
            <FaAsterisk />
            <p>{note}</p>
        </div>
      </ContainerP>
      <ContainerP>
        <div>
            <FaAsterisk />
            <p>{whatsapp}</p>
        </div>
      </ContainerP>
      <ButtonWhatsapp/>
    </ContainerMain>
  );
};

export default FormBrand;
