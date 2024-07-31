import React from 'react'
import {SingleSection} from '../CustomComponents/Components'
import styled from 'styled-components'
import coverPhoto from '../images/landingPage/cover_photo.jpg' // Import the image

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

const Text = styled.div`
  position: absolute;
  width: fit-content;
  height: auto;
  top: 10vh;
  left: 50%; /* Center horizontally */
  transform: translate(-50%, 0%); /* Correct the centering */
  color: white;
  font-weight: bold;
  z-index: 90;
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

const SubtextWrapper = styled.div`
  height: 30vh;
  min-width: 400px;
  max-width: 890px;
  padding: 0px 50px;
  display: flex;
  justfiy-content: center;
  align-items: center;

  @media only screen and (max-width: 490px) {
    align-items: flex-start;
    padding-top: 3vh;
    margin-bottom: -30px;
  }
`;

const Subtitle = styled.div`
  text-align: center;
  font-size: 30px;
  color: rgb(82, 82, 102);

  @media only screen and (max-width: 650px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 585px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 490px) {
    font-size: 22px;
  }

`;

const SubText = styled.div`
  text-align: center;
  font-size: 22px; 
  color: black;

  @media only screen and (max-width: 650px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 585px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 490px) {
    font-size: 2vh;
    display: none;
  }
`;

const SubImg = styled.img`
  height: 140px;
  margin-left: 15px;

  @media only screen and (max-width: 650px) {
    height: 130px;
  }

  @media only screen and (max-width: 585px) {
    height: 100px;
    margin-top: 15px;
    margin-left: 20px;
  }
`;


function LandingPagePhoto() {
  return (
    <Wrapper>
      {/*<ImageWrapper data-aos="zoom-out"> */}
      <ImageWrapper data-aos="zoom-out">
        <Text>
          Insektenschutzsysteme
        </Text>
        <Img src={coverPhoto}/>
      </ImageWrapper>
    
      <SubtextWrapper data-aos-offset="50" data-aos="zoom-out">
        <div>
          <SubText>
            Sie sind auf der Suche nach maßgefertigter Insektenschutz für Ihr Zuhause?
          </SubText>
          <Subtitle>
            Jedes unsere Elemente ist ein, für Sie individuell gefertigtes, Unikat
          </Subtitle>
        </div>
        <div>
        </div>
      </SubtextWrapper>
    </Wrapper>
  )
}

export default LandingPagePhoto
