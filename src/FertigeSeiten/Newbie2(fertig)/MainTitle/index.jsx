import React from 'react'
import styled from 'styled-components'

export const MainTitle = styled.h1`
    font-size: 20px;
    height: inherit;
    padding: 50px;
    color: var(--veryDarkBlue);
    font-weight: 700;

    span{
        color: var(--primary-color);
    }
`;

export default function Title() {
    return (
        <MainTitle>
            PING<span>.</span>
        </MainTitle>
    )
}
