import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background: white;
    border-radius: 20px;
    width: 80%;
    align-self: center;
    margin: 0 auto;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 750px){
        width: 50%;
        padding: 2%;
    }
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2.5%;

    @media screen and (min-width: 750px){
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;

        .Divider{
            border-right: 1px solid gray;
            padding-right: 7%;
        }
    }
`;

const Blocks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (min-width: 750px){
        margin-right: 50px;
        justify-content: flex-start;
    }
`;

const NumbersTitle = styled.h3`
    margin-bottom: 5px;
    margin-top: 5px;
`;

const InfoParagraph = styled.p`
    margin: 0;
    opacity: 0.7;
    margin-bottom: 10px;
`;

const Divider = styled.div`
    border-bottom: 2px solid gray;
    width: 20%;
    opacity: 0.5;
    margin: 0 auto;

    @media screen and (min-width: 750px){
        border-bottom: 0;
        margin-left: 100px;
    }
`;

const backedMoney = 89914;

const backers = 5007;

const daysLeft = 56;

const ProgressBar = styled.div`
    width: 100%;
    margin-top: 15px;
    height: 15px;
    border-radius: 20px;
    background-color: rgba(128,128,128,0.2);
`;

const FilledBar = styled.div`
    width: ${backedMoney/1000}%;
    height: 15px;
    border-radius: 20px;
    background-color: teal;
`;

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Goalpost() {
    return (
        <div>
            <Card>
                <Infos>
                    <Blocks className="Divider">
                        <NumbersTitle>${numberWithCommas(backedMoney)}</NumbersTitle>
                        <InfoParagraph>of $100,000 backed</InfoParagraph>
                        <Divider/>
                    </Blocks>
                    <Blocks className="Divider">
                        <NumbersTitle>{numberWithCommas(backers)}</NumbersTitle>
                        <InfoParagraph>total backers</InfoParagraph>
                        <Divider/>
                    </Blocks>
                    <Blocks>
                        <NumbersTitle>{daysLeft}</NumbersTitle>
                        <InfoParagraph>days left</InfoParagraph>
                    </Blocks>
                </Infos>
            	<ProgressBar>
                    <FilledBar/>
                </ProgressBar>
            </Card>
        </div>
    )
}
