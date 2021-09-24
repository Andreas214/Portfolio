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
`;


export const Footer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #1f43af;
    grid-row: 3;
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

export const Background = styled.div`
    animation:slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #ec9626 50%, #09f 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;

      @keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
`;

export const BackgroundSlide1 = styled.div`
    animation:slide ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #ec9626 50%, #09f 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
    animation-direction:alternate-reverse;
    animation-duration:7s;


`;

export const BackgroundSlide2 = styled.div`
    animation:slide ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #ec9626 50%, #09f 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
    animation-duration:9s;
`;