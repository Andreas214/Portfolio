import React from 'react'
import SinglePrice from './Newbie3(fertig)'
import { ImageContainer } from '../images/imagecontainer'
import { Link } from 'react-router-dom';
import { CardTitle, Container, WebCard, WebCardContainer, WebContainer, CardImageFlow, CardPreview, Name } from './MetaComponent'
import PortfolioBackground from '../PortfolioBackground'
import Blogr from './Junior1(fertig)/App'
import Sunnyside from './Junior2(fertig)/App'
import FourCard2 from './Newbie6(fertig)';

export default function Portfolio() {

    const Sites = [
        ["Sunnyside", <Sunnyside/>, "/sunnyside", "Der Link unten führt zu meiner Umsetzung der Junior Challenge 'Sunnyside' aus frontendmentor.io"],
        ["Blogr", <Blogr/>, "/blogr", "Der Link unten führt zu meiner Umsetzung der Junior Challenge 'Blogr' aus frontendmentor.io"],
        ["Single Price", <SinglePrice/>, "/singleprice", "Der Link unten führt zu meiner Umsetzung der Newbie Challenge 'Single Price' aus frontendmentor.io"],   
        ["Four Cards", <FourCard2/>, "/fourcards", "Der Link unten führt zu meiner Umsetzung der Newbie Challenge 'Four Cards' aus frontendmentor.io"]
    ]
    

    return (
        <div>
            <Name>
                <h2>Webdesign-Portfolio von Andreas Römer</h2>
                <p>Webseiten erstellt mit React Styled-Components</p>
            </Name>
            <Container>
                <WebContainer>
                    <PortfolioBackground/>
                    <WebCardContainer>
                        {Sites.map((card, index) => (
                            <WebCard>
                                <CardTitle>{card[0]}</CardTitle>
                                <CardImageFlow>
                                    <CardPreview>
                                        <img src={ImageContainer[index]} alt="preview of the site"></img>
                                    </CardPreview>
                                </CardImageFlow>
                                <p>{card[3]}</p>
                                <Link to={card[2]} target="_blank">Open</Link>
                            </WebCard>
                        ))}
                    </WebCardContainer>
                </WebContainer>
            </Container>
        </div>
    )
}
