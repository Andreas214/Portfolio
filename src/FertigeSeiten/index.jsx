import React from 'react'
import SinglePrice from './Newbie3(fertig)'
import { ImageContainer } from '../images/imagecontainer'
import { Link } from 'react-router-dom';
import { CardTitle, Container, WebCard, WebCardContainer, WebContainer, CardImageFlow, CardPreview, Footer, Name } from './MetaComponent'
import PortfolioBackground from '../PortfolioBackground'
import Blogr from './Junior1(fertig)/App'
import Sunnyside from './Junior2(fertig)/App'
import Crowdfunding from './Junior3(bearbeitet)/App'

export default function Portfolio() {

    const Sites = [
        ["Crowdfunding", <Crowdfunding/>, "/crowdfunding", "Diese Seite wird zur Zeit noch bearbeitet, Junior Challenge Crowdfunding aus frontendmentor.io"],
        ["Sunnyside", <Sunnyside/>, "/sunnyside", "Der Link unten führt zu meiner Umsetzung der Junior Challenge 'Sunnyside' aus frontendmentor.io"],
        ["Blogr", <Blogr/>, "/blogr", "Der Link unten führt zu meiner Umsetzung der Junior Challenge 'Blogr' aus frontendmentor.io"],
        ["Single Price", <SinglePrice/>, "/singleprice", "Der Link unten führt zu meiner Umsetzung der Newbie Challenge 'Single Price' aus frontendmentor.io"],   
    ]
    

    return (
        <div>
            <Name>
                <h2>Webdesign-Portfolio von Andreas Römer</h2>
                <p>React Lernernder</p>
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
                <Footer>
                    
                </Footer>
            </Container>
        </div>
    )
}
