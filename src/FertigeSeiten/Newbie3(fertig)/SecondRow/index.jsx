import React from 'react'
import styled from 'styled-components'

const SecondRow = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--lightGray);
    text-align: left;
    padding: 10%;

    @media screen and (min-width: 600px) {
        padding: 12%;
    }
`;
const Title = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color: var(--lightGray);
    padding-bottom: 20px;

    @media screen and (min-width: 600px) {
        font-size: 28px;
        padding-bottom: 30px;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;

    @media screen and (min-width: 600px) {
        padding-bottom: 20px;
    }
`;

const Price = styled.h5`
    font-size: 30px;
    font-weight: 700;
`;

const PerMonth = styled.span`
    font-size: 14px;
    padding-left: 10px;
    opacity: 0.5;
    
    @media screen and (min-width: 800px) {
        font-size: 18px;
        padding-left: 20px;
    }
`;

const Info = styled.p`
    font-size: 16px;
    padding-bottom: 35px;
    opacity: 0.8;


    @media screen and (min-width: 800px) {
        padding-bottom: 45px;
        font-size: 22px;
    }
`;

const Button = styled.div`
    background: var(--brightYellow);
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2);


    @media screen and (min-width: 800px) {
        height: 60px;
    }
`;


export default function Second() {
    return (
        <SecondRow>
            <Title>Monthly Subscription</Title>
            <PriceContainer>
                <Price>$29</Price>
                <PerMonth>per month</PerMonth>
            </PriceContainer>
            <Info>Full access for less than $1 a day</Info>
            <Button>Sign up</Button>
        </SecondRow>
    )
}
