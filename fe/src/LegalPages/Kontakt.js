import React, { useLayoutEffect } from 'react'
import styled from 'styled-components';
import TelephoneIcon from '../images/footer/phone.png'
import WPIcon from '../images/footer/wp.png'
import MailIcon from '../images/footer/mail.png'
import LocationIcon from '../images/footer/location.png'


const MapIframe = styled.iframe`
  height: 600px;
  width: 900px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
  box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);

  @media only screen and (max-width: 1400px) {
    width: 700px;
  }

  @media only screen and (max-width: 1200px) {
    width: 650px;
  }

  @media only screen and (max-width: 1100px) {
    width: 600px;
  }

  @media only screen and (max-width: 1050px) {
    width: 500px;
  }

  @media only screen and (max-width: 500px) {
    height: 70vh;
    width: 100vw;
    border-radius: 0px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`

const KontaktContainer = styled.div`
  margin-top: ${props=>props.skipMarginTop===true ? "-30px" : "110px" };
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-top: 40px;
  padding-bottom: 50px;
  height: 700px;
  background-image: linear-gradient(to left, #db5424, #debe40);

  margin-bottom: 25%;


  @media only screen and (max-width: 1500px) {
    gap: 30px;
  }

  @media only screen and (max-width: 1100px) {
    gap: 15px;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 80px;
    height: fit-content;
    padding-top: 0px;
  }
`;

const Box = styled.div`
  width: 310px;
  margin: 25px auto;
  font-size: 21px;
  padding: 8px 10px;
  border-radius: 5px;
  color: #db5424;
  -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.75);
  -moz-box-shadow: 0 0 5px rgba(0,0,0,0.75);
  box-shadow: 0 0 5px rgba(0,0,0,0.75);
  background: white;
  transition: box-shadow 0.3s ease; 

  

  &: hover {
    cursor: pointer;
    -webkit-box-shadow: 0 0 15px rgba(0,0,0,0.75);
    -moz-box-shadow: 0 0 15px rgba(0,0,0,0.75);
    box-shadow: 0 0 15px rgba(0,0,0,0.75);
  }

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  align-items: center;

  @media only screen and (max-width: 1050px) {
    font-size: 18px;
  }


  @media only screen and (max-width: 500px) {
    font-size: 16px;
    width: 85%;
    max-width: 280px;
  }
`;

const BoxWrapper = styled.div`
  background-color: white;
  padding: 20px 50px 20px 50px;
  height: fit-content;
  margin-top: 30%;
  border-radius: 10px;
  -webkit-box-shadow: 24px 16px 31px -24px black;
  -moz-box-shadow: 24px 16px 31px -24px black;
  box-shadow: 24px 16px 31px -24px black;

  @media only screen and (max-width: 1200px) {
    padding: 20px 30px 20px 30px;
  }

  @media only screen and (max-width: 1050px) {
    padding: 20px 30px 20px 30px;
    font-size: 18px;
  }

  @media only screen and (max-width: 500px) {
    margin-top: -80px;
    border-radius: 0px;
    height: fit-content;
    width: 90%;
    max-width: 300px;
    transform: translateX(-6%);
  }
`

const BoxColumn = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
`

const Container = styled.div`
  border: 2px solid white;
  height: fit-content;
  min-height: fit-content;
  width: 103%;
  transform: translateX(-1.5%);
  margin-top: 20px;
`;

function Kontakt({skipMarginTop = false}) {
  return (
    <Container>
      <KontaktContainer skipMarginTop={skipMarginTop}>
          <MapIframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.5902754950353!2d8.260934176914759!3d48.94224529480113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47971d3e08e72315%3A0x7f1d1b9e57fc9c47!2sHELL%20Insektenschutz!5e0!3m2!1sde!2str!4v1693400808378!5m2!1sde!2str"
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></MapIframe>
        <BoxWrapper>
          <BoxColumn>
              <div>Geschäftsinhaber:</div>
              <div>Hakan Aydin</div> 
          </BoxColumn>
          <Box onClick={() => {
                window.location.href="tel:+49176/62960342";
            }}> 
              <img height='30px' alt='telephone-icon' src={TelephoneIcon}/>
              <div>Rufen Sie uns an: +49176/62960342</div>
          </Box>
          <Box onClick={() => {
                window.location.href="https://wa.me/message/6LCTHQGZB6NOL1";
            }}> 
              <img height='30px' alt='telephone-icon' src={WPIcon}/>
              <div>WhatsApp: +49176/62960342</div>
          </Box>
          <Box onClick={() => {
                window.location.href="tel:+4915739439363";
            }}> 
              <img height='30px' alt='telephone-icon' src={TelephoneIcon}/>
              <span>
                  <div>Torsten Köpke </div>
                  <div>Rufen sie uns an: </div>
                  <div>+49 1573 9439363 </div>
              </span>
          </Box>
          <Box onClick={() => {
                window.location.href="https://wa.me/message/6LCTHQGZB6NOL1";
            }}> 
              <img height='30px' alt='telephone-icon' src={WPIcon}/>
              <div>Torsten Köpke <br/> WhatsApp: <br/> +49 1573 9439363</div>
          </Box>
          <Box onClick={()=>{
              window.location.href = "mailto:info@hell-insektenschutz.de";
          }}> 
              <img height='30px' alt='mail-icon' src={MailIcon}/> 
            <div>info@hell-insektenschutz.de</div>
          </Box>
          <Box>
              <img height='30px' alt='location-icon' src={LocationIcon}/>
              <div> Adresse: Lochfeldstraße 30, 76437 Rastatt, Deutschland</div>
          </Box>
          <BoxColumn>
              <div>Umsatz Identifikationsnummer </div>
              <div>gemäß §27 a Umsatzsteuergesetz: DE354909066</div>
              <div>Steumummer: 92415358078</div>
          </BoxColumn>

        </BoxWrapper>
          
      </KontaktContainer>
    </Container>
  )
}

export default Kontakt
