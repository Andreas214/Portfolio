import React from 'react'
import styled from 'styled-components'
import BGDesk from './images/bg-desktop.svg'
import BGMobile from './images/bg-mobile.svg'
import ObereHälfte from './ObereHälfte'
import './style.css'
import UntereHälfte from './UntereHälfte'

const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--violet);
    background-image: url(${BGMobile});
    background-repeat: no-repeat;
    background-size: contain;
    justify-content: center;
    align-items: center;


    @media screen and (min-width: 600px){
        flex-direction: row;
        background-image: url(${BGDesk});
        background-repeat: no-repeat;
        background-size: contain;
    }
`;

const UpperContainer = styled.div`
    margin: 5%;
    height: 80%;
    width: 80%;

`;

const LowerContainer = styled.div`
    margin: 5%;
    height: 80%;
    width: 80%;

`;

export default function Huddle() {
    return (
        <MainContainer className="huddle">
            <UpperContainer>
                <ObereHälfte/>
            </UpperContainer>
            <LowerContainer>
                <UntereHälfte/>
            </LowerContainer>
        </MainContainer>
    )
}
