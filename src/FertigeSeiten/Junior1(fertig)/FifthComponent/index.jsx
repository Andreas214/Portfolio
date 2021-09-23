import React from 'react'
import styled from 'styled-components'
import TitlePic from '../images/logo.svg';

const FooterContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    background-color: hsl(240, 10%, 16%);
    color: white;
    margin-top: 50px;
    border-top-right-radius: 100px;
    justify-content: center;
    padding: 10%;

    @media screen and (min-width: 700px){
        width: 80%;
        flex-direction: row;
        justify-content: space-around;
        padding: 10%;
        margin-top: 20%;
        align-items: flex-start;
    }
`;

const Title = styled.img`
    width: 25%;
    margin: 15% 0;
    align-self: center;

    @media screen and (min-width: 700px){
        width: 10%;
        margin: 0;
        align-self: flex-start;
    }
`;

const FooterContentContainer = styled.div`
        display: flex;
        flex-direction: column;
`;

const FooterContentList = styled.ul`
    list-style: none;
    padding: 0;

    li{
        cursor: pointer;
        opacity: 0.6;
        margin-top: 2.5%;

        @media screen and (min-width: 700px){
            font-size: 20px;
            margin-top: 5%;
        }
    }
`;

const Subtitles = styled.span`
    margin: 5% 0;

    @media screen and (min-width: 700px){
        font-size: 24px;
    }
`;

export default function FifthComponent() {
    return (
        <FooterContainer>
            <Title src={TitlePic} alt="Title Picture"/>
            <FooterContentContainer>
                <Subtitles>Product</Subtitles>
                <FooterContentList>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                </FooterContentList>
            </FooterContentContainer>
            <FooterContentContainer>
                <Subtitles>Company</Subtitles>
                <FooterContentList>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </FooterContentList>
            </FooterContentContainer>
            <FooterContentContainer>
                <Subtitles>Connect</Subtitles>
                <FooterContentList>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                </FooterContentList>
            </FooterContentContainer>
        </FooterContainer>
    )
}
