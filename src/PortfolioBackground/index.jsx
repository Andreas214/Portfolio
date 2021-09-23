// entnommen aus der folgenden seite: https://www.sliderrevolution.com/resources/css-animated-background/ 
// Sliding Diagonals Background Effect
// und in React übertragen


import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
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

const BackgroundSlide1 = styled.div`
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

const BackgroundSlide2 = styled.div`
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

export default function PortfolioBackground() {
    return (
        <div>
            <Background></Background>
            <BackgroundSlide1></BackgroundSlide1>
            <BackgroundSlide2></BackgroundSlide2>
        </div>
    )
}
