import styled, { keyframes } from "styled-components";

export const ContainerNeonDotsStyled = styled.div`
  height: 100%;
`;
// Función para generar valores aleatorios
const getRandomValue = (min, max) => Math.random() * (max - min) + min;
// Define los keyframes de movimiento
const createKeyframes = (number) => keyframes`
  0% {
    transform: translateX(${getRandomValue(
      -50,
      50
    )}vw) translateY(${getRandomValue(-50, 50)}vh) scale(${getRandomValue(
  0.2,
  1
)});
  }
  100% {
    transform: translateX(${getRandomValue(
      -50,
      50
    )}vw) translateY(${getRandomValue(-50, 50)}vh) scale(${getRandomValue(
  0.2,
  1
)});
  }
`;

// Estilos del punto luminoso
export const NeonDotItemsStyled = styled.div`
  position: fixed;
  left: ${({ left }) => left}%;
  top: ${({ top }) => top}%;
  width: 0.4rem;
  height: 0.4rem;
  margin: -0.2rem 0 0 9.8vw;
  background: var(--text-accent);
  opacity: 0.4;
  border-radius: 50%;
  transform-origin: -10vw;
  animation: ${({ number }) => createKeyframes(number)} ease 50s alternate
    infinite;
  pointer-events: none;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw rgb(255, 0, 0);
    animation: ${({ number }) => createKeyframes(number)} ease 200s alternate
        infinite,
      flash ease infinite;
  }
`;
