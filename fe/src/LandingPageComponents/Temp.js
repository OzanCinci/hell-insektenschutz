import React from 'react'
import {SingleSection} from '../CustomComponents/Components'
import styled from 'styled-components'
import coverPhoto from '../images/landingPage/cover_photo.jpg' // Import the image
import liPhoto from '../images/landingPage/li.png';

const Wrapper = styled(SingleSection)`
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const ImageWrapper = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Img = styled.img`
  height: 70vh;
  width: auto;

  @media only screen and (max-width: 1300px) {
    transform: translateX(-2%);
  }
  @media only screen and (max-width: 1000px) {
    transform: translateX(5%);
  }
  @media only screen and (max-width: 820px) {
    transform: translateX(15%);
  }
  @media only screen and (max-width: 630px) {
    transform: translateX(13%);
  }
  @media only screen and (max-width: 550px) {
    transform: translateX(10%);
  }
`;

const colorDark = "#db5424";
const colorVivid = "#debe40";

const Text = styled.div`
  position: absolute;
  width: fit-content;
  height: auto;
  top: 10vh;
  left: 50%; /* Center horizontally */
  transform: translate(-50%, 0%); /* Correct the centering */
  color: white;
  font-weight: bold;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;

  @media only screen and (max-width: 650px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 35px;
    top: 12vh;
  }
  @media only screen and (max-width: 450px) {
    font-size: 30px;
    top: 12vh;
  }
`;

const Subtext = styled.div`
  
  height: 30vh;
  color: black;
  border: 5px solid purple;
`;


const LiElement = styled(({title, text})=>{ 
  return (
    <div key={title} className='col mx-5'>
      <div className='row my-2'>
        <div className='col-2'>
          <img src={liPhoto} height='50px' width='auto'/>
        </div>
        <div className='col-10 my-2' style={{color:"#debe40", fontSize: "20px", textAlign:"left"}}>{title}</div>
      </div>
      <div style={{color:"rgb(82, 82, 102)", fontSize: "18px", textAlign:"left"}}>
        {text}
      </div>
    </div>
  )})``;
  
const liMap = [
  {
    title: "Das System",
    text: "Unsere Lösungen - die Grundlage für Ihre positive Geschäftsentwicklung."
  },
  {
    title: "Hochwertig & Passgenau",
    text: "Wir legen großen Wert auf Optik und Funktion unserer Produkte, deshalb haben wir entscheidende Details"
  },
  {
    title: "Schutz, der Freiheit schafft",
    text: "Zählt zu den führenden Anbietern im Insektenschutz. Die Basis des Erfolges: solide Werte."
  }
]

const yazi = "Für Sie individuell gefertigtesat"

function LandingPagePhoto() {
  return (
    <Wrapper>
      
      <ImageWrapper data-aos="zoom-out">
        <Text>
          Insektenschutzsysteme
        </Text>
        <Img src={coverPhoto}/>
      </ImageWrapper>
    
      <Subtext className='container-lg d-flex justify-content-center align-items-center'>
        <div className='row'>
          {
          liMap.map(item => {
            return (
              <LiElement title={item.title} text={item.text}/>
              )
            })
          }
        </div>
      </Subtext>
    </Wrapper>
  )
}

export default LandingPagePhoto
