import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
`;
