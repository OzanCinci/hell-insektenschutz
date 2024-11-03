import React from 'react';
import styled from 'styled-components';
import InsekPhoto from '../images/landingPage/test_cover.jpg';
import MainBannerImg2 from '../images/Services/service1.jpg';
import NewImageGallery from './NewImageGallery';
import { useNavigate } from 'react-router-dom';
import CONFIGURATION from "../config/config";


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 13px;
    width: 100vw;
    max-width: 1600px;
    margin: auto;
`;

const NewImageGalleryWrapper = styled.div`
    width: 60%;
`;

const RightColumWrapper = styled.div`
    width: 35%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

/*
const RightColumnElement = styled.div`
    border-radius: 5px;
    overflow: clip;
    height: 49%;

    position: relative;
    width: 100%;
    cursor: pointer;
    
    &:hover img {
        transform: scale(1.15); 
    }
`;
*/

const RightColumnElement = styled.div`
    border-radius: 5px;
    overflow: hidden; /* fixed typo from 'clip' to 'hidden' */
    height: 49%;
    position: relative;
    width: 100%;
    cursor: pointer;

    /* Add the text as a pseudo-element */
    &:before {
        content: "${(props) => props.text || ''}"; /* Dynamically set text */
        position: absolute;
        bottom: 10px; /* Adjust the position */
        left: 10px; /* Adjust the position */
        z-index: 2;
        color: white; /* Text color */
        font-size: 20px;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background */
        background: linear-gradient(143deg, rgba(255, 171, 100, 0.8) -1.15%, rgba(255, 125, 14, 0.8) 100%);
        padding: 5px 10px;
        border-radius: 5px;
        transition: transform 0.3s ease; /* Optional: add smooth transition */
    }

    &:hover img {
        transform: scale(1.15); 
    }

    &:hover:before {
        transform: translateY(-5px); /* Slight movement on hover */
    }

    display: flex;
    justify-content: center;
    align-items: center;
`;



const ZoomImage = styled.img`
    width: auto;
    height: 100%; 
    transition: transform 0.3s ease; 
    object-fit: cover; 
    display: block;
`;

const NoDiscountconstInfoTitle = styled.div`
    color: rgb(82, 82, 102);
    /*color: rgb(255, 125, 14);*/
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 0px;
    margin-top: 110px;
    padding: 10px 20px;
    padding-bottom: 10px;

    @media only screen and (max-width: 470px) {
        font-size: 22px;
        padding: 10px 50px;
        margin-top: -18px;
    }
`;

const InfoTitle = styled.div`
    color: rgb(82, 82, 102);
    color: white;
    /*color: rgb(255, 125, 14);*/
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 0px;
    margin-top: 110px;
    margin-bottom: 5px;
    padding: 10px 20px;
    padding-bottom: 10px;
    background: linear-gradient(143deg, rgb(255, 171, 100) -1.15%, rgb(255, 125, 14) 100%);

    @media only screen and (max-width: 470px) {
        font-size: 22px;
        padding: 10px 20px;
        margin-top: -18px;
    }
`;



const {enableDiscount, text, percentage} = CONFIGURATION.discount;
function MainPageBanner() {
    const nav = useNavigate();

    const handleNavToAboutUs = () => {
        const elementId = 'google-comments-live';
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Get the position of the target element
            const offsetPosition = elementPosition - 130; // Subtract the offset (120px)
      
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
        }
    }

  return (
    <>
        {
            !enableDiscount && <NoDiscountconstInfoTitle>Insekten & Sonnenschutz nach Maß!</NoDiscountconstInfoTitle>
        }
        {
            enableDiscount &&
            <>
                <InfoTitle>
                    <div>{percentage*100}% Rabatt auf alle Sonnenschutzsysteme! </div>
                    <div>{text}</div>
                </InfoTitle>
            </>

        }
        <Wrapper>
            <NewImageGalleryWrapper>
                <NewImageGallery/>
            </NewImageGalleryWrapper>
            <RightColumWrapper>
                <RightColumnElement text="Erfahren Sie mehr über Insektenschutz." onClick={()=>nav("/geschaft/insektenschutz")}>
                    <ZoomImage alt='Hell-insektenschutz & sonnenschutz homepage image 1' src={InsekPhoto}/>
                </RightColumnElement>
                <RightColumnElement text="Zufriedene Kunden" onClick={()=>handleNavToAboutUs()}>
                    <ZoomImage alt='Hell-insektenschutz & sonnenschutz homepage image 2' src={MainBannerImg2}/>
                </RightColumnElement>
            </RightColumWrapper>

        </Wrapper>
    </>
  )
}

export default MainPageBanner;
