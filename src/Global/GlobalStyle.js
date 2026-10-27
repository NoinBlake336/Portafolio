import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100dvh;
        color: var(--text-primary);
        background-color: #000000;
        font-family: "Poppins", sans-serif !important;
        font-weight: 400;
        font-style: normal;
    }

    :root{
        --fill: #00152b;
        --text-accent: #feecb6;
        --text-accent-2: #d7a859;
        --text-primary: #fff;
        --header-border-color: hsla(0, 0%, 100%, .2);
        --header-spacer-color: hsla(0, 0%, 100%, .1);
        --header-link-color: #dfdfdf;
        --header-action-text-color: #fff;
        --header-action-background-color: #391010;
        --header-action-color: #ff4040;
        --landing-message-color: #fff;
        --landing-action-background-color: #7e643693;
        --landing-action-color: #feecb6;
        --skills-skill-background-color: #100101;
        --skills-skill-background-before-color: #090808;
        --skills-skill-name-color: #fff;
        --skills-skill-type-color: #b4b4 b;
        --skills-skill-description-color: #ff;
        --footer-content-color: #cebfbf;
    }

    /* Proteccion contra impresion / exportar a PDF */
    @media print {
        html, body {
            display: none !important;
            visibility: hidden !important;
        }
    }

    /* Proteccion contra capturas de pantalla / snipping tools al perder foco de ventana */
    body.anti-screenshot-active .protected-design-image,
    body.anti-screenshot-active .watermark-container,
    body.anti-screenshot-active .protected-design-modal img {
        filter: blur(35px) brightness(0.2) !important;
        opacity: 0.1 !important;
        transition: filter 0.05s ease, opacity 0.05s ease;
    }

    /* Deshabilitar arrastre y seleccion de imagenes protegidas */
    .protected-design-image,
    .protected-design-modal img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
    }
`;
