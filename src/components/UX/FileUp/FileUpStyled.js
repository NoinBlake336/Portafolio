import styled from 'styled-components';

export const FileInputWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 200px;
  grid-column: span 2;
  border: 2px dashed white; /* Bordes con líneas punteadas */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #666;
  }
`;

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const IconWrapper = styled.div`
  text-align: center;
  color: #888;
  font-size: 1.2rem;

  svg {
    margin-bottom: 8px;
  }
`;