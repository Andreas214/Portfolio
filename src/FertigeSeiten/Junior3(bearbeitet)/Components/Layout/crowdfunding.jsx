import React from 'react'
import styled from 'styled-components'
import Goalpost from '../Goalpost/Goalpost';
import Navbar from '../Navbar/navbar';
import BackgroundPicture from '../UpperBannerPicture/backgroundPicture';
import UpperCard from '../UpperCard/UpperCard';

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Background = styled.div`
    background-color: rgba(128, 128, 128, 0.2);
    position: relative;
    
`;

export default function Layout() {
    return (
        <div>
            <BackgroundPicture/>
            <MainContainer>
                <Navbar/>
                <Background>
                    <UpperCard/>
                    <Goalpost/>
                </Background>
                
            </MainContainer>
        </div>
    )
}
