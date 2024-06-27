import styled, { keyframes } from 'styled-components';

// Define la animación de pulse utilizando keyframes
const pulseAnimation = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
    50% {
        transform: scale(1.1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`;

// Styled component con la animación aplicada
export const ContainerCVStyled = styled.a`
    position: fixed;
    z-index: 90;
    bottom: 5rem;
    right: 2rem;
    width: 3.5rem;
    height: 3.5rem;
    background-color: white;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Oculta el overflow de los elementos adicionales */
    animation: ${pulseAnimation} 2s infinite; /* Aplica la animación pulse */
    transition: transform 0.1s ease-in-out;

    svg {
        color: var(--text-accent);
        text-align: center;
        font-size: 2rem;
    }

    /* Pseudoelemento para las rayitas */
    &::before,
    &::after {
        content: 'CV';
        font-size: 1rem;
        font-weight: bold;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        color: var(--text-accent);
        border: 2px dashed rgba(255, 255, 255, 0.5);
        animation: animateCircle 2s infinite linear;
    }

    &::before {
        animation-delay: -0.5s; 
    }

    @keyframes animateCircle {
        0% {
            transform: scale(0.5);
            opacity: 1;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    &:hover {
        animation: none;
    }
`;