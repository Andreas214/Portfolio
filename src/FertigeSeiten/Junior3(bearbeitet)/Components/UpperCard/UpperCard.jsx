import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '../MediaQuery';

const Card = styled.div`
    background: white;
    border-radius: 20px;
    width: 90%;
    padding: 5%;
    height: 30vh;

    *{
        position: relative;
        top: -50px;

    }

    @media screen and (min-width: 750px){
        height: 22.5vh;
        width: 50%;
        position: relative;
        top: 2rem;
    }
    @media screen and (min-width: 1050px){
        padding-bottom: 0;
        width: 50%;
        top: 2.5rem
    }
`;

const UpperCardContainer = styled.div`
    margin-top: 40%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;

    @media screen and (min-width: 750px){
        margin-top: 0%;
    }
`;

const MastercraftLogo = styled.svg`
    position: relative;
        
    @media screen and (min-width: 750px){
        top: -65px;
    }
    @media screen and (min-width: 1000px){
        top: -90px;
    }
`;

const Title = styled.h2`
    position: relative;

    @media screen and (min-width: 750px){
            top: -90px;
    }
`;

const SubTitle = styled.p`
    position: relative;
        @media screen and (min-width: 750px){
            top: -100px;
    }

`;

const Buttons = styled.div`
    display: flex;
    margin-top: 30%;
    justify-content: space-around;

    @media screen and (min-width: 750px){
        justify-content: space-between;
        margin-top: 5%;
    }
`;

const BackingButton = styled.div`
    background-color: teal;
    border-radius: 50px;
    width: 50vw;
    align-self: center;
    padding: 18px 0;
    color: white;
    font-weight: 600;

    @media screen and (min-width: 750px){
        width: 15vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const BookmarkButton = styled.svg`
    position: relative;
    z-index: 10;
`;

const BookmarkButtonContainer = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    position: relative;
    top: 0px;

    p{
        background-color: rgba(128, 128, 128, 0.2);
        padding: 18px;
        position: relative;
        left: -55px;
        padding-left: 70px;
        padding-right: 28px;
        border-radius: 50px;
    }
`;

export default function UpperCard() {

    const isDesktop = useMediaQuery('(min-width: 750px)')

    return (
        <UpperCardContainer>
            <Card>
                <MastercraftLogo width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></MastercraftLogo>
                <Title>Mastercraft Bamboo Monitor Riser</Title>
                <SubTitle>A beautifully handcrafted monitor stand to reduce neck and eye strain.</SubTitle>
                <Buttons>
                    <BackingButton>Back this project</BackingButton>
                    {isDesktop? 
                        <BookmarkButtonContainer>
                            <BookmarkButton width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></BookmarkButton>
                            <p>Bookmark</p>
                        </BookmarkButtonContainer>
                        :
                        <BookmarkButton width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></BookmarkButton>
                    }
                </Buttons>
            </Card>
        </UpperCardContainer>
    )
}
