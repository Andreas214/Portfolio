import React from 'react'
import styled from 'styled-components'
import milk from '../../images/mobile/image-gallery-milkbottles.jpg'
import orange from '../../images/mobile/image-gallery-orange.jpg'
import cone from '../../images/mobile/image-gallery-cone.jpg'
import sugar from '../../images/mobile/image-gallery-sugar-cubes.jpg'

const PictureContainer = styled.div`
    margin-top: 20%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 750px){
        margin-top: 5%;
    }
`;

const Pictures = styled.img`
    width: 50%;

    @media screen and (min-width: 750px){
        width: 25%;
    }
`;

export default function PictureBox() {
    return (
        <PictureContainer>
            <Pictures src={milk}/>
            <Pictures src={orange}/>
            <Pictures src={cone}/>
            <Pictures src={sugar}/>
        </PictureContainer>
    )
}
