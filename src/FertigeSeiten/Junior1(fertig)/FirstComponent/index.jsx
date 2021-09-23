import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import bgPattern from '../images/bg-pattern-intro.svg';


export const TitleContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: linear-gradient(hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    font-family: 'Ubuntu', sans-serif;
    border-bottom-left-radius: 100px;
    overflow: hidden;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 700px){
        background: linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%)); 
    }
`;

const MainTitle = styled.h3`
    font-size: 34px;
    font-weight: 500;
    color: white;
    margin: 0 7.5%;
    margin-top: 15%;
    

    @media screen and (min-width: 700px){
        font-size: 60px;
        margin: 0;
    }
`;

const SubTitle = styled.h6`
    font-size: 16px;
    margin: 0 10%;
    margin-top: 20px;
    color: white;
    font-weight: 400;
    opacity: 0.8;

    @media screen and (min-width: 700px){
        font-size: 20px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-self: center;
    width: 90%;
    justify-content: space-evenly;
    margin-top: 20%;
    margin-bottom: 50%;

    @media screen and (min-width: 400px){
        margin-top: 30%;
    }

    @media screen and (min-width: 700px){
        margin: 0;
        margin-bottom: 20%;
        margin-top: 5%;
        width: 35%;
    }
`;

const StartButton = styled.div`
    background: white;
    display: flex;
    border-radius: 50px;
    padding: 4% 8%;
    color: hsl(353, 100%, 62%);
    font-weight: 700;
    transition: 0.5s;
    cursor: pointer;

    :hover{
        color: white;
        background: #ffffff50;
    }
`;

const LearnButton = styled.div`
    display: flex;
    padding: 4% 8%;
    border: none;
    border: 2px solid white;
    border-radius: 50px;
    color: white;
    font-weight: 700;
    transition: 0.5s;
    cursor: pointer;

    :hover{
        color: hsl(353, 100%, 62%);
        background: #ffffff;
    }
`;

const Background = styled.img`
    width: 350%;
    position: absolute;
    z-index: -1;
    top: -45%;
    left: -90%;

    @media screen and (min-width: 700px){
        width: 250%;
        left: -47%;
        top: -160%;

    }
`;



export default function TitleComponent() {
    return (
        <TitleContainer>
            <Navbar/>
            <MainTitle>A modern publishing platfrom</MainTitle>
            <SubTitle>Grow your audience and build your online brand</SubTitle>
            <ButtonContainer>
                <StartButton>Start for Free</StartButton>
                <LearnButton>Learn More</LearnButton>
            </ButtonContainer>
            <Background src={bgPattern} />
        </TitleContainer>
    )
}
