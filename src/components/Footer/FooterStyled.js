import styled from "styled-components";

export const ContainerFooterStyled = styled.footer`
    padding: 0 1.5rem;
    width: 100%;
    margin-top: 2rem;
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    z-index: 98;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: padding .25s ease;
`;

export const PrincipalStyled = styled.section`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: .5rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
`;

export const SpacerStyled = styled.div`
    height: .3rem;
    width: .3rem;
    background-color: ${(color) => color.color};
    flex-shrink: 0;
    transition: transform .15s ease-in-out;
    border-radius: 50px;
`;

export const AllRigthReservationsStyled = styled.section`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    font-size: .95rem;
    p {
        color: var(--footer-content-color);
    }
`;