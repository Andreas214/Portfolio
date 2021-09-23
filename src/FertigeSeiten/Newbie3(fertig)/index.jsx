import React from 'react'
import styled from 'styled-components'
import First from './FirstRow';
import Second from './SecondRow';
import './styles.css'
import Third from './ThirdRow';

const MainContainer = styled.div`
    display: grid;
    overflow: hidden;
    height: 85vh;
    width: 90vw;
    grid-template-columns: 100%;
    grid-template-rows: 30vh 27.5vh 27.5vh;
    background-color: white;
    margin: 10% 5%;
    border-radius: 10px;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2);

    @media screen and (min-width: 600px){
        justify-items: center;
        height: 70vh;
        width: 70vw;
        grid-template-rows: 45% 55%;
        grid-template-columns: 50% 50%;
        margin: 10% 15% 10% 15%;
    }
    @media screen and (min-width: 900px){
        justify-items: center;
        height: 70vh;
        width: 60vw;
        grid-template-rows: 45% 55%;
        grid-template-columns: 50% 50%;
        margin: 10% 20% 10% 20%;
    }
`;

const FirstRow = styled.div`
    height: 100%;
    grid-row: 1;

    @media screen and (min-width: 600px){
        width: 100%;
        height: 100%;
        grid-column: 1 / span 2;
    }
`;

const SecondRow = styled.div`
    height: 100%;
    grid-row: 2;
    background: var(--cyan);
    
    @media screen and (min-width: 600px){
        width: 100%;
        height: 100%;
        grid-column: 1;
        grid-row: 2;
    }
`;

const ThirdRow = styled.div`
    height: 100%;
    grid-row: 3;
    background: var(--cyan);
    opacity: 0.9;
    
    @media screen and (min-width: 600px){
        width: 100%;
        height: 100%;
        grid-row: 2;
        grid-column: 2;
    }
`;

export default function SinglePrice() {
    return (
        <MainContainer className="singleprice">
            <FirstRow><First/></FirstRow>
            <SecondRow><Second/></SecondRow>
            <ThirdRow><Third/></ThirdRow>
        </MainContainer>
    )
}
