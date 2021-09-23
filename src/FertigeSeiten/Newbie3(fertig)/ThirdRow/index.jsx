import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
    padding: 10%;
    text-align: left;
`;  

const Title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    color: var(--lightGray);
    padding-bottom: 20px;

    @media screen and (min-width: 600px) {
        font-size: 26px;
        padding-bottom: 2rem;
    }
`;

const LinkList = styled.ul`
    font-size: 14px;
    li{
        color: var(--lightGray);
        opacity: 0.8;
        padding-bottom: 7.5px;
        @media screen and (min-width: 1000px) {
            font-size: 18px;
            
        }
    }
`;

export default function Third() {
    return (
        <TextContainer>
            <Title>Why us</Title>
            <LinkList>
                <li>Tutorials by industry experts</li>
                <li>Peer & expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
            </LinkList>
        </TextContainer>
    )
}
