import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid; 
    grid-template-rows: 10vh 10vh 20vh 30vh 15vh 5vh; 

    @media screen and (min-width: 600px){
        grid-template-rows: 10vh 15vh 15vh 45vh 10vh 5vh;
        
    }
`;

export const TitleContainer = styled.div`
    grid-row: 1;
`;

export const SubTitleContainer = styled.div`
    grid-row: 2;
`;

export const InteractionContainer = styled.div`
    grid-row: 3;
`;

export const PictureContainer = styled.div`
    grid-row: 4;
`;

export const SocialMediaContainer = styled.div`
    grid-row: 5;
`;

export const CopyrightTextContainer = styled.div`
    grid-row: 6;
`;