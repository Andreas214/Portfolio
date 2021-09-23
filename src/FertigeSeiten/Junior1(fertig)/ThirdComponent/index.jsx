import React from 'react'
import styled from 'styled-components'
import Phones from '../images/illustration-phones.svg'
import Circles from '../images/bg-pattern-circles.svg'
import useMediaQuery from '../MediaQuery';

const Container = styled.div`
    position: relative;
    top: -100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BackGround = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    overflow: hidden;
    z-index: 1;
    background: linear-gradient(hsl(237, 17%, 21%), hsl(237, 23%, 32%));
    border-bottom-left-radius: 100px;
    border-top-right-radius: 100px;
    
    @media screen and (min-width: 1100px){
        position: absolute;
        height: 55%;
    }
`;


const PhoneImg = styled.img`
    position: relative;
    top: 250px;
    width: 100%;
    z-index: 10;

    @media screen and (min-width: 700px){
        top: 500px;
    }

    @media screen and (min-width: 1100px){
        top: 12.5%;
        left: 50%;
        width: 250%;
    }
`;

const CircleImg = styled.img`
    position: relative;
    z-index: -1;
    width: 150%;
    top: -200px;
    align-self: center;

    @media screen and (min-width: 1100px){
        left: -25%;
        top:-60%;
        width: 90%;
    }

`;

const ContentContainer = styled.div`
    position: absolute;
    margin-top: 150%;
    color: white;
    z-index: 10;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1100px){
        text-align: left;
        margin: 0;
        padding: 20%;
        position: relative;
        left: 15%;
    }
`;

const Paragraph = styled.p`
    width: 80%;
    align-self: center;
    opacity: 0.8;

    @media screen and (min-width: 1100px){
        width: 100%;
    }
`;

const DesktopContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;


export default function ThirdComponent() {

    const isDesktop = useMediaQuery('(min-width: 1100px)');

    return (
        <div>
            {isDesktop? 
            <Container>
                <BackGround>
                    <CircleImg src={Circles} alt="Image of Circles" />
                </BackGround>
                <DesktopContainer>
                    <div>
                        <PhoneImg src={Phones} alt="Phone Illustrations"/>
                    </div>
                    <ContentContainer>
                        <h1>State of the Art Infrastructure</h1>
                        <Paragraph>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</Paragraph>
                    </ContentContainer>
                </DesktopContainer>
            </Container>
            :
            <Container>
            <PhoneImg src={Phones} alt="Phone Illustrations"/>
            <BackGround>
                <CircleImg src={Circles} alt="Image of Circles" />
            </BackGround>
            <ContentContainer>
                <h1>State of the Art Infrastructure</h1>
                <Paragraph>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</Paragraph>
            </ContentContainer>
            </Container>
            }
        </div>
    )
}
