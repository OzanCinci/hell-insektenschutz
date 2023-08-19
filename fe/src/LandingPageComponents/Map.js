import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    margin-bottom: 220px;
    gap: 10px;
    background: rgb(239, 241, 248);
    padding: 50px 0px;

    @media only screen and (max-width: 680px) {
      width: 98vw;
      padding: 40px 0px;
    }
`;

const MapIframe = styled.iframe`
  height: 600px;
  width: 900px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
  box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);

  @media only screen and (max-width: 910px) {
    width: 98vw;
    height: 500px;
  }
`

const Title = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: rgb(82, 82, 102);
  margin: 0px 0px;

  @media only screen and (max-width: 910px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`

function Map() {
  return (
    <Container>
      <Title>Wo wir ansässig sind</Title>
      <MapIframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.5902754950353!2d8.260934176914759!3d48.94224529480113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47971d3e08e72315%3A0x7f1d1b9e57fc9c47!2sHELL%20Insektenschutz!5e0!3m2!1str!2str!4v1692442339299!5m2!1str!2str"
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></MapIframe>
    </Container>
  )
}

export default Map