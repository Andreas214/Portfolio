import React from 'react'
import styled from 'styled-components'
import EditorPic from '../images/illustration-editor-mobile.svg'
import EditorPicDesk from '../images/illustration-editor-desktop.svg'
import useMediaQuery from '../MediaQuery';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100vw;
    justify-content: center;
    
    @media screen and (min-width: 1100px){
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 200px 400px 400px;
    }
`;

const Title = styled.h3`
    color: hsl(208, 49%, 24%);
    padding: 10% 0;

    @media screen and (min-width: 1100px){
        padding: 0;
        font-size: 30px;
        grid-row: 1;
        grid-column: span 2;
        margin: 0;
        margin-top: 100px;
    }
`;

const SubTitle = styled.h4`
    font-size: 30px;
    font-weight: 600;
    color:hsl(208, 49%, 24%);
    margin: 0;
    padding: 0 5%;

    @media screen and (min-width: 1100px){
        margin: 0;
        font-size: 26px;
    }
`;

const TextComponent = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-top: 15%;
    

    @media screen and (min-width: 1100px){
        grid-row: 2;
        grid-column: 1;
        padding: 5% 10%;
        text-align: left;
        
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10%;
`;

const Picture = styled.img`
    margin-bottom: 50px;

    @media screen and (min-width: 1100px){
        grid-column: 2;
        position: relative;
        top: -40%;
        left: 10%;
    }
`;

const Paragraph = styled.p`
    opacity: 0.6;
    width: 80%;
    align-self: center;
    
    @media screen and (min-width: 1100px){
        width: 100%;
        font-size: 16px;
        grid-row: 2;
        grid-column: 1;
        line-height: 2;
    }
`;

export default function SecondComponent() {

    const isDesktop = useMediaQuery('(min-width: 1100px)');

    return (
        <Container>
            <Title>Designed for the future</Title>
            <Picture src={isDesktop? EditorPicDesk : EditorPic} alt="editor" />
            <TextComponent>
                <TextContainer>
                    <SubTitle>Introducing an extensible editor</SubTitle>
                    <Paragraph>  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                                change the looks of a blog.
                    </Paragraph>
                </TextContainer>
                <TextContainer>
                    <SubTitle>Robust content Management</SubTitle>
                    <Paragraph>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                    </Paragraph>
                </TextContainer>
            </TextComponent>
        </Container>
    )
}
