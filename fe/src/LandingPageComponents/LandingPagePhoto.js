import React from 'react'
import {SingleSection} from '../CustomComponents/Components'
import styled from 'styled-components'
import coverPhoto from '../images/landingPage/cover_photo.jpg'; // Import the image

const Wrapper = styled(SingleSection)`
  flex-direction: column;
  justify-content: space-between;

`;


const ImageWrapper = styled.div`  
  border: 5px solid purple;
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
  width: 100%;
  height: 15vh;
  color: white;
  background-image: linear-gradient(to right, rgb(255, 173, 94), rgb(255, 125, 14));
  border: 2px solid red;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;


const yazi = "Für Sie individuell gefertigtesat"

function LandingPagePhoto() {
  return (
    <Wrapper>
      
      <ImageWrapper>
        <Text>
          Insektenschutzsysteme
        </Text>
        <Img src={coverPhoto}/>
      </ImageWrapper>
    
    </Wrapper>
  )
}

export default LandingPagePhoto