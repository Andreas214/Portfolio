import React from 'react'
import styled from 'styled-components'
import IlustrationLaptop from '../images/illustration-laptop-mobile.svg'
import IlustrationLaptopDesk from '../images/illustration-laptop-desktop.svg'
import { Contents } from './Content.jsx';
import useMediaQuery from '../MediaQuery';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: -50px;

    @media screen and (min-width: 900px){
        flex-direction: row;
    }
`;

const Image = styled.img`
    width: 100%;

    @media screen and (min-width: 900px){
        position: absolute;
        width: 75%;
        left: -21%;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 900px){
        text-align: left;
        padding-left: 50%;
        padding-top: 5%;
        width: 40%;
    }
`;

const Title = styled.h5`
    font-size: 30px;
    font-weight: 600;
    color:hsl(208, 49%, 24%);
    margin: 0;


`;

const Paragraph = styled.p`
    opacity: 0.6;
    width: 80%;
    align-self: center;

    @media screen and (min-width: 900px){
        width: 100%;
        font-size: 20px;
    }
`;

const DesktopVersion = styled.div`
    @media screen and (min-width: 900px){
        display: flex;
        flex-direction: column;
        padding-top: 10%;
    }
`;


export default function ForthComponent() {

    const isDesktop = useMediaQuery("(min-width: 900px)");

    return (
        <Container>
            <Image src={isDesktop? IlustrationLaptopDesk : IlustrationLaptop} alt="Illustration of a laptop" />
            <DesktopVersion>
            {Contents.map((index) => {
                return (
                    <TextContainer>
                        <Title>{index[0]}</Title>
                        <Paragraph>{index[1]}</Paragraph>
                    </TextContainer>
                )
            })}
            </DesktopVersion>
        </Container>
    )
}
