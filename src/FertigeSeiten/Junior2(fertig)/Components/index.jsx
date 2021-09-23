import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar/Navbar'
import { OnlyPicture } from './OnlyPictures';
import egg from "../images/mobile/image-transform.jpg";
import eggDesk from "../images/desktop/image-transform.jpg";
import glas from "../images/mobile/image-stand-out.jpg";
import glasDesk from "../images/desktop/image-stand-out.jpg";
import OnlyTextFirst, { OnlyTextSecond } from './OnlyText/OnlyText';
import PicturesWithText from './PicturesWithText';
import Testimonials from './Testimonials';
import PictureBox from './PictureBox';
import Footer from './Footer';
import { useMediaQuery } from './MediaQuery';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: hsla(50.88, 100%, 49.01960784313725%, 0.025);
    

    @media screen and (min-width: 750px){
        flex-wrap: wrap;
    }
`;

const MediaSpeciality = styled.div`
    @media screen and (min-width: 750px){
        margin-top: 10%;
        display: grid;
        grid-template-rows: 50% 50%;
        grid-template-columns: 50% 50%;
        
    }
`;

const PicContainer = styled.div`
    background-color: ${props=> props.primary ? "hsl(51, 100%, 49%)" : "hsl(7, 99%, 70%)"};
    display: flex;
`;

export default function Index() {

    let Desktop = useMediaQuery('(min-width: 750px)')

    return (
        <Container>
            <Navbar/>
            <MediaSpeciality>
                <PicContainer primary><OnlyPicture src={(Desktop)? eggDesk : egg}/></PicContainer>
                <OnlyTextFirst/>
                <PicContainer><OnlyPicture src={(Desktop)? glasDesk : glas}/></PicContainer>
                <OnlyTextSecond/>
            </MediaSpeciality>
            <PicturesWithText/>
            <Testimonials/>
            <PictureBox/>
            <Footer/>
        </Container>
    )
}
