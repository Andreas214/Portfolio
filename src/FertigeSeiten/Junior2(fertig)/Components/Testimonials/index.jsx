import React from 'react'
import styled from 'styled-components'
import emiliy from '../../images/image-emily.jpg'
import thomas from '../../images/image-thomas.jpg'
import jennie from '../../images/image-jennie.jpg'

const ContainerBox = styled.div`
    @media screen and (min-width: 750px){
        display: flex;
    }
`;

const SmallTestimonials = styled.h5`
    color: #5a636cb0;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 3px;
    margin-top: 10%;
`;

const ClientPicture = styled.img`
    width: 17.5%;
    border-radius: 100px;
    margin: 10% 0;
`;

const ClientTestimonial = styled.p`
    font-size: 16px;
    padding: 0 10%;
    padding-bottom: 5%;
    color: #5a636c;
    line-height: 2;
`;

const ClientName = styled.span`
    color: hsl(212, 27%, 19%);
    font-size: 18px;
    font-weight: 900;
`;  

const ClientDesc = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: hsl(210, 4%, 67%);
    margin-bottom: 10%;
`;

export default function Testimonials() {

    const Clients = [[emiliy,"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.", "Emily R.", "Marketing Director"], 
                    [thomas,"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.","Thomas S.","Chief Operating Officer"],
                    [jennie,"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!","Jennie F.","Business Owner"]]

    return (
        <div>
            <SmallTestimonials>CLIENT TESTIMONIALS</SmallTestimonials>
            <ContainerBox>
            {Clients.map((client) => (
                <div>
                <ClientPicture src={client[0]}></ClientPicture>
                <ClientTestimonial>{client[1]}</ClientTestimonial>
                <ClientName>{client[2]}</ClientName>
                <ClientDesc>{client[3]}</ClientDesc>
                </div>
            ))}
            </ContainerBox>
        </div>
    )
}
