import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 55px;
    margin-bottom: 0px;
    background-image: linear-gradient(to right, #db5424, #debe40);
    position: relative;
    height: fit-content;
    color: white;
    padding-top : 100px;
    padding-bottom: 85px;

    .custom-shape-divider-bottom-1692191223 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        /* SİLMEYİ UNUTMA*/
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }
    
    .custom-shape-divider-bottom-1692191223 svg {
        position: relative;
        display: block;
        width: calc(148% + 1.3px);
        height: 150px;
    }
    
    .custom-shape-divider-bottom-1692191223 .shape-fill {
        fill: #FFFFFF;
    }

    @media only screen and (max-width: 700px) {
        height: 630px;
        margin-bottom: 40px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: auto;
    padding: 20px;

    @media only screen and (max-width: 700px) {
        max-width: 500px;
    }

    @media only screen and (max-width: 600px) {
        max-width: 350px;
    }

    @media only screen and (max-width: 400px) {
        max-width: 300px;
    }
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 10px;
    text-align: left !important;

    @media only screen and (max-width: 700px) {
        font-size: 24px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 22px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 19px;
    }
`

const Text = styled.div`
    font-size: 20px;
    text-align: left;

    @media only screen and (max-width: 700px) {
        font-size: 18px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 17px;
        margin-top: 12px;
    }
`


function Header({h1}) {
  return (
    <Container>
        <div class="custom-shape-divider-bottom-1692191223">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <Wrapper>
            <Title>{h1}</Title>
            <Text>
                Weiterdenken heißt für uns konkret: Ein gutes Produkt wird erst perfekt durch seine Details, deshalb optimieren wir unsere Varianten stets weiter. Eine rationelle Produktion mit höchster Wiederholgenauigkeit, sowie optimale Montagevoraussetzungen legen den Grundstein für das Endkundenerlebnis "Premium-Insektenschutz“.
            </Text>
        </Wrapper>
    </Container>
  )
}

export default Header;
