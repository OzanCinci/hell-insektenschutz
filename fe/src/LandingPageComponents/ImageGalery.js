import React, { useState } from 'react';
import styled from 'styled-components';
import Plissee1 from '../images/mainPageGalery/plissee1.webp';
import Rollo1 from '../images/mainPageGalery/rollo1.jpg';
import HolzJal2 from '../images/mainPageGalery/holzjalousie2.jpg';
import Lamellenvorhang from '../images/mainPageGalery/lamellenvorhang2.jpg';
import Jal1 from '../images/mainPageGalery/jalousie1.jpg';
import InsekPhoto from '../images/landingPage/test_cover.jpg';
import CONFIGURATION from "../config/config";
import {useSelector} from "react-redux";

const Container = styled.div`
    margin-top: 120px;

    @media only screen and (max-width: 1200px) {
        margin-top: 100px;
    }
`;

const Wrapper = styled.div``;

const CarouselNavigationWrapper = styled.div`
  padding: 10px 15px;
  background: white;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 75vh;
    border-radius: 10px;
    border-radius: 0px 0px 10px 10px;
    overflow: clip;

    @media only screen and (max-width: 900px) {
        height: fit-content;
        border-radius: 0px;
    }
    
`;

const CustomImageMobile = styled.img`
    width: 95vw;
    height: auto;
    display: block;

    @media only screen and (max-width: 1200px) {
        width: 110vw;
    }

    @media only screen and (max-width: 900px) {
        height: 70vh;
        width: auto;
    }
`;

const PseudoElement = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    background: linear-gradient(143deg, rgb(255, 171, 100) -1.15%, rgb(255, 125, 14) 100%);
    opacity: 0.85;
    color: white;
    z-index: 1;
    text-align: left;
    padding-top: 20px;
    padding-bottom: 55px;
    padding-left: 20px;
    padding-right: 15px;
    font-size: 22px;
    font-weight: 600;

    @media only screen and (max-width: 900px) {
        padding-top: 10px;
        padding-bottom: 5px;
        font-size: 18px;
    }
`;

const ImageSlideWrapper = styled.div`
    width: 95vw;
    max-width: 1400px;
    margin: auto;
    border: 0px solid black;
    height: 100%;
    position: relative;

    @media only screen and (max-width: 900px) {
        width: 100vw;
    }
`;

const InfoTitle = styled.div`
    color: rgb(82, 82, 102);
    color: white;
    /*color: rgb(255, 125, 14);*/
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 0px;
    margin-top: -10px;
    padding: 10px 20px;
    padding-bottom: 10px;
    background: linear-gradient(143deg, rgb(255, 171, 100) -1.15%, rgb(255, 125, 14) 100%);

    @media only screen and (max-width: 470px) {
        font-size: 22px;
        padding: 10px 20px;
        margin-top: -18px;
    }
`;

const NoDiscountconstInfoTitle = styled.div`
    color: rgb(82, 82, 102);
    /*color: rgb(255, 125, 14);*/
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 0px;
    margin-top: -10px;
    padding: 10px 20px;
    padding-bottom: 10px;

    @media only screen and (max-width: 470px) {
        font-size: 22px;
        padding: 10px 50px;
        margin-top: -18px;
    }
`;

const CarouselInner = styled.div`
    height: 75vh;
`;

const MobileComponent = styled.div`
    @media only screen and (min-width: 470px) {
        display: none;
    }
`;

const DesktopComponent = styled.div`
    @media only screen and (max-width: 470px) {
        display: none;
    }
`;

const images = [
    { src: Plissee1, text: "Individuell für Sie angefertigte Plissees. Sie können auch ein kostenloses Muster zur Absicherung erhalten." },
    { src: InsekPhoto, text: "Individuell für Sie angefertigter Insektenschutz." },
    { src: Rollo1, text: "Individuell für Sie angefertigte Rollos. Sie können auch ein kostenloses Muster zur Absicherung erhalten." },
    { src: HolzJal2, text: "Individuell für Sie angefertigte Holzjalousien. Sie können auch ein kostenloses Muster zur Absicherung erhalten." },
    { src: Lamellenvorhang, text: "Individuell für Sie angefertigte Lamellenvorhänge. Sie können auch ein kostenloses Muster zur Absicherung erhalten." },
    { src: Jal1, text: "Individuell für Sie angefertigte Jalousien. Sie können auch ein kostenloses Muster zur Absicherung erhalten." }
];


function ImageGalery() {
    const [i, setI] = useState(0);
    const {discountOptionMap} = useSelector(state=>state.config);
    const enableDiscount = discountOptionMap["PUBLIC"];
    const percentage = discountOptionMap["PUBLIC"]?.percentage ?? 0.0;
    const text = discountOptionMap["PUBLIC"]?.text ?? "";
    

    return (
        <Container data-aos="fade-up">
            <Wrapper>
                {!enableDiscount &&
                    <DesktopComponent>
                        <NoDiscountconstInfoTitle>Insekten & Sonnenschutz nach Maß!</NoDiscountconstInfoTitle>
                    </DesktopComponent>
                }
                    {!enableDiscount &&
                    <MobileComponent>
                        <NoDiscountconstInfoTitle>Insekten & Sonnenschutz</NoDiscountconstInfoTitle>
                        <NoDiscountconstInfoTitle>nach Maß!</NoDiscountconstInfoTitle>
                    </MobileComponent>
                }
                {
                    enableDiscount &&
                        <InfoTitle>
                            <div>{percentage*100}% Rabatt auf alle Sonnenschutzsysteme! </div>
                            <div>{text}</div>
                        </InfoTitle>
                }
                <ImageSlideWrapper>
                    <div style={{ height: "100% !important" }} id="carouselExampleDarkMobile" className="carousel carousel-dark slide" data-bs-ride="carousel">

                        <div style={{ background: "white", opacity: "0.5", borderRadius: "10px", transform: "scaleY(1.25)", width: "fit-content", margin: "10px auto", padding: "0px 20px", zIndex: 95 }} className="carousel-indicators">
                            {
                                images.map((item, index) => {
                                    return (
                                        <button
                                            style={{ transform: "scaleY(2.25)" }}
                                            type="button"
                                            data-bs-target="#carouselExampleDarkMobile"
                                            data-bs-slide-to={index}
                                            aria-label={`Slide ${index}`}
                                            className={index === i ? "active" : ""}
                                            onClick={() => {
                                                //console.log(index);
                                                let diff = i - index ;
                                                const id = diff > 0 ? "left-button-mobile-main-page" : "right-button-mobile-main-page"; 
                                                const btn = document.getElementById(id);
                                                if (btn) {
                                                    diff = Math.abs(diff);
                                                    while (diff>0) {
                                                        setTimeout(()=>btn.click(),0)
                                                        diff-=1;
                                                    }
                                                }
                                                //setI(index);
                                                
                                            }}
                                        ></button>
                                    );
                                })
                            }
                        </div>
                        <CarouselInner className="carousel-inner">
                            {
                                images.map((item, index) => {
                                    return (
                                        <div
                                            style={{borderRadius: "10px"}}
                                            aria-label={`Slide ${index}`}
                                            className={index === i ? "carousel-item active" : "carousel-item"}
                                        >
                                            <ImageWrapper>
                                                <CustomImageMobile
                                                    alt='image-of-the-product'
                                                    src={item.src}
                                                />
                                                <PseudoElement>{item.text}</PseudoElement>
                                            </ImageWrapper>
                                        </div>
                                    );
                                })
                            }
                        </CarouselInner>
                        <button id='left-button-mobile-main-page' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDarkMobile" data-bs-slide="prev">
                            <CarouselNavigationWrapper>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </CarouselNavigationWrapper>
                        </button>
                        <button id='right-button-mobile-main-page' className="carousel-control-next" type="button" data-bs-target="#carouselExampleDarkMobile" data-bs-slide="next">
                            <CarouselNavigationWrapper>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </CarouselNavigationWrapper>
                        </button>
                    </div>
                </ImageSlideWrapper>
            </Wrapper>
        </Container>
    )
}

export default ImageGalery;
