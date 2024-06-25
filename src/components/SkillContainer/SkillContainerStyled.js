import styled from "styled-components";

export const ContainerSectionSkillStyled = styled.section`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: .65rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    position: relative;
`;


export const ContainerTitleSkillStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    span{
        font-size: 2.5rem;
        font-weight: 500;
        text-align: center;
    };

    svg {
        width: 2.7rem;
        height: 2.7rem;
        color: var(--text-accent);
    }
`;

export const ContainerSkillStyled = styled.div`
    margin-top: 3rem;
    width: 100%;
    max-width: 54.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: .5rem;
`;

export const ContainerCardStyled = styled.div`
    width: 17.35rem;
    height: 6.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: .8rem;
    background-color: var(--skills-skill-background-color);
    padding: 1rem;
    transition: transform .2s ease;
    position: relative;
`;

export const BackgroundColorCardStyled = styled.div`
    width: 100%;
    height: 100%;
    border-radius: .8rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        filter: blur(2rem);
    }

    &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: var(--skills-skill-background-before-color);
        opacity: .65;
        border-radius: .8rem;  
    }
`;

export const InfoCardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 1rem;
    position: relative;
    z-index: 5;

    img {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: .8rem;
    }
    div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            span:nth-child(1){
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--skills-skill-name-color);
        }

            span:nth-child(2){
                font-size: .9rem;
                font-weight: 400;
                color: var(--skills-skill-type-color);
        }
    }
    
`; 