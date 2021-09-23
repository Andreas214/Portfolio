import React from 'react'
import styled from 'styled-components'

export const CopyrightContainer = styled.div`
    text-align: center;
    color: var(--gray);
    
    span{
        font-size: 10px;
        
    }
`;

export default function Copyright() {
    return (
        <CopyrightContainer>
            <span>© Copyright Ping. All rights reserved.</span>
        </CopyrightContainer>
    )
}
