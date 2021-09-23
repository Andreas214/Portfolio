import React from 'react'
import Copyright from './CopyrightComponent'
import Interaction from './InteractionComponent'
import { CopyrightTextContainer, InteractionContainer, MainContainer, PictureContainer, SocialMediaContainer, SubTitleContainer, TitleContainer } from './MainComponents/Components'
import Title from './MainTitle'
import Picture from './PictureComponent'
import SocialMedia from './SocialmediaComponent'
import SubTitle from './SubTitleComponent'
import './fonts.css'

export default function PingComingSoon() {
    return (
    	<MainContainer className="ping">
            <TitleContainer><Title/></TitleContainer>
            <SubTitleContainer><SubTitle/></SubTitleContainer>
            <InteractionContainer><Interaction/></InteractionContainer>
            <PictureContainer><Picture/></PictureContainer>
            <SocialMediaContainer><SocialMedia/></SocialMediaContainer>
            <CopyrightTextContainer><Copyright/></CopyrightTextContainer>
        </MainContainer> 
    )
}
