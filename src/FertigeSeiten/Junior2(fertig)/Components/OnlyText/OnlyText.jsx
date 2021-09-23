import React from 'react'
import styled from 'styled-components';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 7.5%;
    font-family: 'Fraunces', serif;
    align-self: center;
`;

const Title = styled.span`
    font-size: 36px;
    font-weight: 700;
`;

const Text = styled.p`
    font-size: 18px;
    line-height: 1.75;
    color: hsl(232, 10%, 55%);
    font-family: 'Barlow', sans-serif;
`;

const LearnMore = styled.span`
    margin-top: 4%;
    z-index: 100;
    font-weight: 900;
    cursor: pointer;
`;

const SmallLine = styled.div`
    position: relative;
    height: 5px;
    width: 130px;
    top: -5px;
    background-color: ${props => props.yellow ? "yellow" : "pink"};
    border-radius: 2px;
    opacity: 0.5;
`;

export default function OnlyTextFirst() {
    return (
        <TextContainer style={{gridRow:"1"}}>
            <Title>Transform your Brand</Title>
            <Text>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you</Text>
            <LearnMore>LEARN MORE</LearnMore>
            <SmallLine yellow/>
        </TextContainer>
    )
}

export function OnlyTextSecond() {
    return (
        <TextContainer>
            <Title>Stand out to the right audience</Title>
            <Text style={{padding: "0 2.5%"}}>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</Text>
            <LearnMore red>LEARN MORE</LearnMore>
            <SmallLine/>
        </TextContainer>
    )
}



