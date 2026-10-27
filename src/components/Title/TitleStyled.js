import styled from "styled-components";

export const ContainerTitleStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    margin-bottom: 1.75rem;
    margin-top: 3rem;
    span {
        font-size: clamp(1.6rem, 5vw, 2.5rem);
        font-weight: 500;
    }
    svg {
        width: 2.7rem;
        height: 2.7rem;
        color: var(--text-accent);
    }
`;