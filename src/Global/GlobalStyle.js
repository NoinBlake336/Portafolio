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
        --text-accent: #ba2121;
        --text-accent-2: #ff6b6b;
        --text-primary: #fff;
        --header-border-color: hsla(0, 0%, 100%, .2);
        --header-spacer-color: hsla(0, 0%, 100%, .1);
        --header-link-color: #dfdfdf;
        --header-action-text-color: #fff;
        --header-action-background-color: #391010;
        --header-action-color: #ff4040;
        --landing-message-color: #fff;
        --landing-action-background-color: #391010;
        --landing-action-color: #ff4040;
        --skills-skill-background-color: #100101;
        --skills-skill-background-before-color: #090808;
        --skills-skill-name-color: #fff;
        --skills-skill-type-color: #b4b4 b;
        --skills-skill-description-color: #ff;
        --footer-content-color: #cebfbf;
    }
`;