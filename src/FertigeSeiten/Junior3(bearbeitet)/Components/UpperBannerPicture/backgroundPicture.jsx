import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '../MediaQuery';
import MobilePic from './image-hero-mobile.jpg'
import DeskPic from './image-hero-desktop.jpg'

const Picture = styled.img`
    width: 100%;
`;

const Layer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    box-shadow: 2px 77px 53px -19px rgba(0,0,0,0.43) inset;
    -webkit-box-shadow: 2px 77px 53px -19px rgba(0,0,0,0.43) inset;
    -moz-box-shadow: 2px 77px 53px -19px rgba(0,0,0,0.43) inset;
`;

const BackgroundContainer = styled.div`
    width: 100vw;
    position: absolute;
    z-index: 1;
`;

export default function BackgroundPicture() {

    const isDesktop = useMediaQuery('(min-width: 750px)')

    return (
        <BackgroundContainer>
            <Layer/>
           <Picture src={isDesktop? DeskPic : MobilePic} alt="background hero image"/>
        </BackgroundContainer>
    )
}