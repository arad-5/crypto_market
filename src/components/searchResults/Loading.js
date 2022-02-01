import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
    return (
        <Container>
            <div></div>
        </Container>
    );
};

//styling 💅🏻
const rotation = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;
const Container = styled.div`
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    overflow: hidden;
    border-radius: 50%;
    > div {
        height: 4rem;
        width: 4rem;
        background-color: #0021ff;
        display: flex;
        align-items: center;
        justify-content: center;
        &::after {
            content: "";
            width: 85%;
            height: 85%;
            background-color: #000624;
            border-radius: 50%;
        }
        &::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-100%, -100%);
            width: 100%;
            height: 100%;
            background-color: #000624;
        }
        animation: ${rotation} 800ms infinite linear;
    }
`;
export default Loading;
