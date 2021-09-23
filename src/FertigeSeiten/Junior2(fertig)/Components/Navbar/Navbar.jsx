import React, { useState } from 'react'
import styled from 'styled-components';
import header from '../../images/mobile/image-header.jpg'
import headerDesk from '../../images/desktop/image-header.jpg'
import { useMediaQuery } from '../MediaQuery';

const NavbarBox = styled.div`
    position: relative;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5% 5%;
    width: 90vw;
    padding-bottom: 123%;
    font-family: 'Barlow', sans-serif;
    z-index: 10;

    @media screen and (min-width: 750px){
        padding-bottom: 42.5%;
    }

    #burger{
        cursor: pointer;

        :active{
            opacity: 0.6;
        }
    }
    ul{
        list-style: none;
        width: 25rem;
        color: white;
        display: flex;
        justify-content: space-between;
        overflow: visible;
        align-items: center;

        li{
            cursor: pointer;

            :last-child{
                color: black;
                padding: 2.5% 7%;
                border-radius: 50px;
                background-color: white;
                font-weight: 600;
                transition: 0.33s all;

                :hover{
                    color: white;
                    background-color: #ffffff45;
                }
            }
        }
    }
`;

const Title = styled.h1`
    font-size: 24px;
    color: white;
`;

const HeaderPicture = styled.img`
    width: 100%;
    position: absolute;
    z-index: 5;
    display: flex;
`;

const BigText = styled.h3`
    position: absolute;
    font-size: 45px;
    z-index: 10;
    color: white;
    top: 150px;
    letter-spacing: 5px;
    
    @media screen and (min-width: 750px){
            font-size: 50px;
    }
    
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: center;

    #arrow{
        position: absolute;
        z-index: 10;
        top: 32.5%;

        @media screen and (min-width: 500px){
            top: 50%;
        }
        @media screen and (min-width: 750px){
            top: 22.5%;
        }
        @media screen and (min-width: 1000px){
            top: 39%;
        }
    }
`;

const MobileMenu = styled.div`
    background-color: white;
    z-index: 20;
    height: 250px;
    position: absolute;
    top: 80px;
    width: 70%;
    padding: 10%;
    clip-path: polygon(93% 6%, 100% 0%, 100% 100%, 42% 100%, 0 100%, 0 6%);
    font-family: 'Barlow', sans-serif;
    font-size: 18px;

    ul{
        height: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        justify-content: space-around;
        padding: 0;

        li{
            cursor: pointer;
            color: #818498c7;

            :last-child{
                width: 40%;
                align-self: center;
                padding: 17.5px;
                color: black;
                border-radius: 50px;
                background-color: yellow;
                font-weight: 700;
                transition: 0.33s all;

                :hover, :active{
                    outline: none;
                    border: none;
                    color: white;
                    background: gray;
                }
            }
        }
    }
`;

export default function Navbar() {

    let Desktop = useMediaQuery('(min-width: 750px)');
    let [active, setActive] = useState(false);

    return (
        <NavContainer>
            <HeaderPicture src={(Desktop)? headerDesk : header}/>
            {active? 
            <MobileMenu>
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>CONTACT</li>
                </ul>
            </MobileMenu>: 
            <div></div>}
            <BigText>WE ARE CREATIVES</BigText>
            <NavbarBox>
                <Title><svg width="124" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z" fill="#FFF" fill-rule="nonzero"/></svg></Title>
                {(Desktop)? 
                // for desktop
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>CONTACT</li>
                </ul>
                /* for mobile */
                :<svg onClick={() => {setActive(!active)} }  id="burger" width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
                }
            </NavbarBox>
            <svg id="arrow" width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
        </NavContainer>
    )
}
