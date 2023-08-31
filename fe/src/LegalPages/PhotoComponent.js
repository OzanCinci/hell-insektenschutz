import React from 'react'
import coverPhoto from '../images/landingPage/cover_photo.jpg' // Import the image
import styled from 'styled-components'

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
    height: 60vh;
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
    height: 50vh;
    transform: translateX(10%);
  }
`;

function PhotoComponent() {
  return (
    <ImageWrapper>
        <Img src={coverPhoto}/>
    </ImageWrapper>
  )
}

export default PhotoComponent