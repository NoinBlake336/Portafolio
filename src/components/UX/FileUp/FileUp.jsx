import React from 'react';
import { FiUpload } from 'react-icons/fi'; // Importa el ícono de subida
import { FileInput, FileInputWrapper, IconWrapper } from './FileUpStyled';

const ImageUploadInput = ({ id, onChange, text }) => {
    return (
      <FileInputWrapper>
        <FileInput
          type="file"
          id={id}
          accept="image/*"
          onChange={onChange} // Maneja el cambio del archivo
        />
        <IconWrapper>
          <label htmlFor={id} style={{ cursor: 'pointer' }}>
            <FiUpload />
            <p>{ text }</p>
          </label>
        </IconWrapper>
      </FileInputWrapper>
    );
  };
  
  export default ImageUploadInput;