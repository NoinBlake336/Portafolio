import styled from "styled-components";

export const AnimationCircle = styled.div`
    background: -webkit-linear-gradient(to left, #343435, #000000);
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
`;

export const UlContinaerCircleStyled = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    list-style: none;
`;

export const LiCircleStyled = styled.li`
    &:nth-child(1){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }
    position: absolute;
    display: block;
    list-style: none;
    width: 50px;
    height: 50px;
    background: rgb(255 0 0 / 77%);
    animation: animate 25s linear infinite;
    bottom: -150px;
    filter: blur(.3rem);

    @keyframes animate {
        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }
        100%{
            transform: translateY(-1100px) rotate(720deg);
            opacity: 0;
            border-radius: 100%;
        }
    }
`;

