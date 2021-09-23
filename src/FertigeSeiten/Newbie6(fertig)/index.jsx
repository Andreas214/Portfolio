import React from 'react'
import Calc from './images/icon-calculator.svg'
import Karma from './images/icon-karma.svg'
import Supervisor from './images/icon-supervisor.svg'
import TeamBuilder from './images/icon-team-builder.svg'
import styled from 'styled-components';

const Typo = styled.h3`
    font-size: ${props => props.primary? "25px" : "15px"};
    font-weight: 200;
    color: hsl(229, 6%, 66%);
    margin: ${props => props.primary? "10px 0 0 0" : ""};
`;

const Header = styled.h2`
    font-size: 26px;
    font-weight: 600;
    color: hsl(234, 12%, 34%);
    padding: ${props => props.primary? "0 0 10px 0" : ""};
`;

const Paragraph = styled.p`
    color: hsl(229, 6%, 66%);
    font-weight: 200;
`;

const ContainerBox = styled.div`
    width: auto;
    display: grid;
    grid-area: 1 / 1 / 5 / 7;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    padding: 5%;

    .Response{
        width: inherit;
        height: 1200px;
        margin: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const CardContainer = styled.div`
    grid-area : ${props => props.area};
`;

const Karte = styled.div`
    text-align: left;
    box-shadow: 0px 28px 30px -25px rgba(84, 158, 242, 0.331);
    border-top: 5px solid ${props => props.color};
    border-radius: 5px;
`;

const KartenInhalt = styled.div`
    padding: 3%;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const Image = styled.img`
    padding-top: 20%;
    padding-right: 5%;
`;

export default function FourCard2() {

    const design = [
        ["hsl(180, 62%, 55%)", 4, "2 / 1 / 4 / 3", "Supervisor", "Monitors activity to identify project roadblocks", Supervisor],
        ["hsl(0, 78%, 62%)", 4, "1 / 3 / 3 / 5", "Team Builder", "Scans our talent network to create the optimal team for your project", TeamBuilder],
        ["hsl(34, 97%, 64%)", 4, "3 / 3 / 5 / 5", "Karma", "Regularly eveluates our talent to ensure Quality", Karma],
        ["hsl(212, 86%, 64%)", 4, "2 / 5 / 4 / 7", "Calculator", "uses data from past project to provide better delivery estimates", Calc]
    ]

    return (
        <div style={{backgroundColor: "#f0f0f0"}} className="fourcards">
            <br/>
            <Typo primary>Reliable, efficient delivery</Typo>
            <Header primary>Powered by Technology</Header>
            <Paragraph>Our Artificial Intelligene powered tools use millions of project data points to ensure that your project is successful.</Paragraph>
                <ContainerBox>
                    {design.map((color) => (
                    <CardContainer key={color} area={color[2]}>
                        <Karte color={color[0]}>
                            <KartenInhalt>
                                <Header>
                                    {color[3]}
                                </Header>
                                <Typo>
                                    {color[4]}
                                </Typo>
                                <ImageContainer>
                                    <Image src={color[5]} alt="Logo"></Image>
                                </ImageContainer>
                            </KartenInhalt>
                        </Karte>
                    </CardContainer>
                    ))}
                </ContainerBox>
        </div>
    )
}
