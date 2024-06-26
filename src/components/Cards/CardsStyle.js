import styled from "styled-components";

export const  SectionCardsStyled = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 0 .5rem;
`;

export const ContainerCardsStyled = styled.section`
    display: grid;
    gap: 1rem;
    place-items: center;
    @media (min-width: 768px)
    {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
    }
`;

export const CardProjectStyled = styled.a`
    max-width: 24rem;
    background-color: #141313;
    border-radius: 0.75rem;
`;

export const CardImageStyled = styled.div`
    position: relative;
    height: 12rem;
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 0.75rem /* 12px */;
    border-top-right-radius: 0.75rem /* 12px */;
    span {
        position: absolute;
        padding-top: 0.5rem;
        right: 0.5rem;
        top: 0.5rem;
        background-color: var(--landing-action-background-color);
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;
        z-index: 10;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        color: rgb(241 245 249 / 1);
    }
    img {
        max-width: 100%;
        height: 100%;
    }
`; 

export const CardInfromationStyled = styled.div`
    h5 {
        margin-bottom: 0.5rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--text-accent);
    }
    p{
        margin-bottom: 0.75rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        color: white;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
`;

export const UlSkillContainerStyle = styled.ul`
    display: flex;
    gap: .9rem;
    flex-wrap: wrap;
    color: white;
    margin-bottom: 0.2rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    justify-content: center;
`;

export const SkillItemsStyle = styled.li`
    list-style: none;
    border-radius: 0.75rem;
    padding: 0 0.25rem;
    position: relative;
    img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: cover;
        position: relative;
        border-radius: 100%;
    }
`;