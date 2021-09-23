import React, { useState } from 'react'
import styled from 'styled-components';
import TitlePic from '../images/logo.svg';
import Burger from '../images/icon-hamburger.svg';
import Close from '../images/icon-close.svg';
import useMediaQuery from '../MediaQuery';
import ContentNavbar from './ContentNavbar';


const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10%;
    justify-content: space-between;
    align-items: center;
    width: 80%;


    @media screen and (min-width: 700px){
        padding: 5%;
        width: 90%;
    }
    @media screen and (min-width: 950px){
        padding: 10%;
        width: 80%;
    }
`;

const BurgerMenu = styled.img`
    width: 25px;
    height: 20px;

    @media screen and (min-width: 700px){
        visibility: hidden;
        width: 0px;
    }
`;

const Title = styled.img`
    width: auto;
    height: 30px;
`;

const MobileContainer = styled.div`
    background: white;
    position: absolute;
    height: fit-content;
    padding: 2.5% 0;
    width: 80%;
    top: 110px;
    align-self: center;
    border-radius: 10px;
    z-index: 100;
`;

const DesktopMenu = styled.div`
    width: 100%;
`;

export default function Navbar() {

    const isDesktop = useMediaQuery("(min-width: 700px)");
    const [active, setActive] = useState(true)

    return (
        <NavbarContainer>
            <Title src={TitlePic} alt="Title Picture"/>
            <BurgerMenu style={{display: isDesktop ? "none" : "block"}} onClick={e=>setActive(!active)} src={active ? Burger : Close} alt="Burger Icon" />
            {isDesktop?
                <DesktopMenu>
                    <ContentNavbar/>
                    <MobileContainer style={{display:"none"}}/>
                </DesktopMenu>
                :
                active? ""
                : <MobileContainer><ContentNavbar/></MobileContainer>
            }
        </NavbarContainer>
    )
}
