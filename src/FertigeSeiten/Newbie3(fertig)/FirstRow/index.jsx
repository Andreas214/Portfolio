import React from 'react'
import styled from 'styled-components'

const FirstContainer = styled.div`
    height: 70%;
    display: flex;
    text-align: left;
    flex-direction: column;
    padding: 10%;
    justify-content: space-between;

    @media screen and (min-width: 600px) {
        height: 60%;
        justify-content: space-between;
        padding: 5%;
    }
`;

const Title = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: var(--cyan);

    @media screen and (min-width: 600px) {
        font-size: 26px;
        padding-bottom: 1rem;
    }
`;

const SubTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
    color: var(--brightYellow);
    

    @media screen and (min-width: 600px) {
        font-size: 24px;
        
    }
`;

const Text = styled.p`
    font-size: 14px;
    color: var(--grayishBlue);
    line-height: 1.5;
    opacity: 0.8;

        @media screen and (min-width: 600px) {
        font-size: 20px;
        margin-right: 5rem;
    }
`;

export default function First() {
    return (
        <FirstContainer>
            <Title>Join our Community</Title>
            <SubTitle>30-day, hassle-free money back guarantee</SubTitle>
            <Text>
                Gain access to our full library of tutorials along with expert code reviews.
                Perfect for any developers who are serious about honing their skills
            </Text>
        </FirstContainer>
    )
}
