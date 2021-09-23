import React from 'react'
import styled from 'styled-components'

export const SubTitleContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const UpperTitlePart = styled.h2`
    font-size: 20px;
    color: var(--gray);
    font-weight: 400;
    margin: 0;

    span{
        color: var(--veryDarkBlue);
        font-weight: 700;
    }
    @media screen and (min-width: 600px){
        font-size: 32px;
    }
`;

export const LowerTitlePart = styled.h5`
    color: var(--veryDarkBlue);
    font-size: 12px;
    font-weight: 400;
    
`;

export default function SubTitle() {
    return (
        <SubTitleContainer>
            <UpperTitlePart>We are launching <span>soon!</span></UpperTitlePart>
            <LowerTitlePart>Subscribe and get notified</LowerTitlePart>
        </SubTitleContainer>
    )
}
