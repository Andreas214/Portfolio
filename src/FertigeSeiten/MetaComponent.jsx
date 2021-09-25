import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 0px 100% 15vh;

`;

export const Navbar = styled.ul`
    width: 100%;
    background-color: #3c4e79;
    grid-row: 1;
    color: white;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    

    a{
        padding:20px;
        cursor: pointer;
        transition: 600ms all;
        text-decoration: none;
        color: white;

        :hover{
            background: #9797a7;
        }

        :first-child{
            margin-right: auto;
        }
    }
`;

export const WebContainer = styled.div`
    overflow: hidden;
    grid-row: 2; 
    height: max-content;
    padding: 2% 0;
    margin-top: 35%;

    @media screen and (min-width: 750px){
        margin-top: 5%;
    }
`;

export const WebCardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 750px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const WebCard = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    background-color: #c2d6fb;
    margin: 50px;
    width: 35%;
    height: 35%;
    display: flex;
    flex-direction: column;
    color: #1a2930;
    font-weight: bolder;
    overflow: hidden;
    z-index: 2;
    
    @media screen and (max-width: 750px) {
        width: 90%;
        margin: 20px 0;
        justify-content: center;
        height: 20%;
    }

    p{
        padding: 10px 25px;
        border-top: 1px solid #3c4e79;
        border-bottom: 1px solid #3c4e79;
        line-height: 1.4;
    }
`;

export const CardImageFlow = styled.div`
    overflow: hidden;
    height: 100%;
    padding: 2%;
    margin-bottom: 15px;
`;

export const CardPreview = styled.div`
    padding: 1%;
    display: flex;
    justify-content: center;

    img{
        width: 300px;
        height: 250px;
        padding-top: 5%;

        @media screen and (min-width: 750px) {
           width: 400px;
    }
    }
`;

export const CardTitle = styled.h3`
    font-size: 22px;
    padding-top: 10px;
`;

export const CardLink = styled.a`
    font-size: 18px;
    border-top: 2px solid gray;
    padding: 10px 0;
    cursor: pointer;
    transition: 600ms all;
    margin-top: 20px;
    

    :hover{
        opacity: 0.8;
        background: #9797a7;
        color: white;
    }
`;

export const Name = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
    -webkit-text-stroke: 1px white;
    -webkit-text-color: white;
    background: #3c4e79;
    background: linear-gradient(180deg, #3c4e79 0%, #0099ff11 100%);


    @media screen and (min-width: 750px){

    }

    *{
        
    }
    h2{
        font-size: 18px;
        margin-bottom: 40px;
    }

`;