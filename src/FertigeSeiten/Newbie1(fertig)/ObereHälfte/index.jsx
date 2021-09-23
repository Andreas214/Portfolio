import React from 'react'
import Title from '../images/logo.svg'
import Ilu from '../images/illustration-mockups.svg'
import styled from 'styled-components'

const UpperContainer = styled.div`
    display: flex; 
    height: 40vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;
const TitleContainer = styled.div`
    margin-right: auto;
    padding-bottom: 4rem;
    img{
        height: 2rem;
    }
    @media screen and (min-width: 600px){
        img{
            height: 3.5rem;
        }
    }
`;
const IluContainer = styled.div`
    width: inherit;
    img{
        width: inherit;
    }

    @media screen and (min-width: 600px){
        img{
            width: 135%;
        }
    }
`;

export default function ObereHälfte() {
    return (
        <UpperContainer>
            <TitleContainer><img src={Title} alt="Titelbild der Applikation"></img></TitleContainer>
            <IluContainer><img src={Ilu} alt="Bild der Applikation"></img></IluContainer>
        </UpperContainer>
    )
}
