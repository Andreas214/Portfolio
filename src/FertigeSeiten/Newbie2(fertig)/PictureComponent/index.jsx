import React from 'react'
import styled from 'styled-components'
import ilu from '../PictureComponent/illustration-dashboard.png'

export const PictureContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;

    img{
        width: 90%;
        max-width: 25em;
        height: 100%;
        max-height: 25rem;
    }
    @media screen and (min-width: 600px){
        justify-content: center;

        img{
            max-width: 650px;
            max-height: 400px
        }
    }
`;

export default function Picture() {
    return (
        <PictureContainer>
            <img src={ilu} alt="Illustration"/>
        </PictureContainer>
    )
}
