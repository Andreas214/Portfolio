import React from 'react'
import { OnlyPicture } from '../OnlyPictures'
import cherry from '../../images/mobile/image-graphic-design.jpg'
import orange from '../../images/mobile/image-photography.jpg'
import styled from 'styled-components'

const ContainerBox = styled.div`
    @media screen and (min-width: 750px){
        display: flex;
    }
`;

const TextPicContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    color: ${props => props.graphic ? "hsl(167, 40%, 24%)" : "hsl(198, 62%, 26%)"};

    @media screen and (min-width: 750px){
        width: 50%;
    }
`;

const Title = styled.h3`
    font-size: 28px;
    position: absolute;
    margin-top: 115%;

    @media screen and (min-width: 750px){
        margin-top: 50%;
        font-size: 32px;
    }
`;

const Description = styled.h3`
    position: absolute;
    margin-top: 130%;
    padding: 0 5%;
    font-size: 14px;

    @media screen and (min-width: 750px){
        font-size: 20px;
        margin-top: 60%;
    }
`;

export default function PicturesWithText() {

    const PicText = [["Graphic Design", "Great design makes you memorable. We deliver artwork that underscores your brand message and capture potential clients' attention", cherry, "hsl(167, 40%, 24%)"],
                     ["Photography", "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.", orange, "hsl(198, 62%, 26%)"] ]

    return (
        <ContainerBox>
            {PicText.map(pic =>(
            <TextPicContainer style={{color: pic[3]}}>
                <OnlyPicture src={pic[2]}/>
                <Title>{pic[0]}</Title>
                <Description>{pic[1]}</Description>
            </TextPicContainer>
            ))}
        </ContainerBox>
    )
}
