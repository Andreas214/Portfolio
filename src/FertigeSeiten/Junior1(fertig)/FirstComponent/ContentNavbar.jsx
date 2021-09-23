import React from 'react'
import styled from 'styled-components';
import Arrow from '../images/icon-arrow-dark.svg';
import ArrowLight from '../images/icon-arrow-light.svg';
import useMediaQuery from '../MediaQuery';

const Lists = styled.ul`
    flex-direction: column;
    margin: 5% auto;
    list-style: none;
    background: #eeeeee;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    width: 80%;
    
    li{
        padding-top: 10px;
    }
    
    @media screen and (min-width: 700px){
        width: fit-content;
        text-align: left;
        position: absolute;
        margin-top: 30px;
        padding: 2rem 3rem 2rem 1rem;
        margin-left: 1.5%;
        border-radius: 10px;
        color: black;

        li{
            cursor: pointer;
            :hover{
                font-weight: 900;
            }
        }
    }
`;

const Arrows = styled.img`
    padding-left: 5px;
`;

const ContentContainer =styled.div`
    display: flex;
    flex-direction: column;

    div{
        padding-top: 2.5%;
    }


    @media screen and (min-width: 700px){
        flex-direction: row;
        align-items: center;
        color: white;

        div{
            padding-top: 0;
        }
    }
`;

const LoginButton = styled.div`
    cursor: pointer;
    
    @media screen and (min-width: 700px){
        margin-left: auto;
        margin-right: 2rem;
        opacity: 0.8;
    }

`;

const SignUpButton = styled.div`
    color: white;
    height: 30px;
    width: 120px;
    align-self: center;
    margin: 10px 0;
    border-radius: 20px;
    background: linear-gradient(90deg,hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    cursor: pointer;
    position: relative;
    z-index: 100;



    @media screen and (min-width: 700px){
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        color: hsl(353, 100%, 62%);
        font-weight: 700;
        margin: 0;
        height: 45px;
        width: 150px;
        transition: 0.5s ;

        :hover{
            background: #ffffff37;
            color: white;

        }
    }
`;

const HelpContainer = styled.div`


    
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: column;
    }
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid gray;
    opacity: 0.5;
    align-self: center;
    margin-top: 5%;
    margin-bottom: 5%;
    
`;

const ListTitle = styled.div`
    cursor: pointer;
    opacity: 0.8;

    @media screen and (min-width: 700px){
        padding-left: 2rem;
    }
`;


export default function ContentNavbar() {

    const isDesktop = useMediaQuery("(min-width: 700px)");

    function openUp(id1,id2,id3){
       let toOpen = document.getElementById(id1);
       let toClose = document.getElementById(id2);
       let toClose2 = document.getElementById(id3);

       if(toOpen.style.display === "none"){
           toOpen.style.display = "flex";
           document.getElementById("img" + id1).style.transform = "rotateX(180deg)";
       } 
       else{
            toOpen.style.display = "none";
            document.getElementById("img" + id1).style.transform = "rotateX(0deg)";
       }
        toClose.style.display = "none";
        toClose2.style.display = "none";
        document.getElementById("img" + id2).style.transform = "rotateX(0deg)";
        document.getElementById("img" + id3).style.transform = "rotateX(0deg)";
    }

    return (
        <ContentContainer>
            <HelpContainer>
                <ListTitle style={isDesktop? {marginLeft: "1rem"} : {}} onClick={e=>openUp("a1", "a2", "a3")}>Product<Arrows id="imga1" src={!isDesktop? Arrow: ArrowLight} alt="icon of Arrow" /></ListTitle>
                <Lists id="a1" style={{display: "none" }}>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                </Lists>
            </HelpContainer>
            <HelpContainer>
                <ListTitle onClick={e=>openUp("a2", "a1", "a3")}>Company<Arrows id="imga2" src={!isDesktop? Arrow: ArrowLight} alt="icon of Arrow" /></ListTitle>
                <Lists id="a2" style={{display: "none" }}>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </Lists>
            </HelpContainer>
            <HelpContainer>
                <ListTitle onClick={e=>openUp("a3", "a2", "a1")}>Connect<Arrows id="imga3" src={!isDesktop? Arrow: ArrowLight} alt="icon of Arrow" /></ListTitle>
                <Lists id="a3" style={{display: "none" }}>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                </Lists>
            </HelpContainer>
            {isDesktop? "":<Divider/>}
            <LoginButton>Login</LoginButton>
            <SignUpButton>Sign Up</SignUpButton>
        </ContentContainer>
    )
}
