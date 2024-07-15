import React, { useState } from 'react';
import styled from 'styled-components';
import Plissee1 from '../images/mainPageGalery/plissee1.webp';
import Rollo1 from '../images/mainPageGalery/rollo1.jpg';
import HolzJal2 from '../images/mainPageGalery/holzjalousie2.jpg';
import Lamellenvorhang from '../images/mainPageGalery/lamellenvorhang2.jpg';
import Jal1 from '../images/mainPageGalery/jalousie1.jpg';

const Container = styled.div`
    border: 0px solid red;
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
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 15px;
    margin-top: 5px;

    @media only screen and (max-width: 470px) {
        font-size: 25px;
        padding: 0px 20px;
    }
`;

const CarouselInner = styled.div`
    height: 75vh;
`;

const images = [
    { src: HolzJal2, text: "Individuell für Sie angefertigte Holzjalousien. Sie können auch ein kostenloses Muster zur Absicherung erhalten." },
    { src: Rollo1, text: "Individuell für Sie angefertigte Rollos. Sie können auch ein kostenloses Muster zur Absicherung erhalten." },
    { src: Plissee1, text: "Individuell für Sie angefertigte Plissees. Sie können auch ein kostenloses Muster zur Absicherung erhalten." },
    { src: Lamellenvorhang, text: "Individuell für Sie angefertigte Lamellenvorhänge. Sie können auch ein kostenloses Muster zur Absicherung erhalten." },
    { src: Jal1, text: "Individuell für Sie angefertigte Jalousien. Sie können auch ein kostenloses Muster zur Absicherung erhalten." }
];

function ImageGalery() {
    const [i, setI] = useState(0);

    return (
        <Container data-aos="fade-up">
            <Wrapper>
                <InfoTitle>Insekten- und Sonnenschutz nach Maß!</InfoTitle>
                <ImageSlideWrapper>
                    <div style={{ height: "100% !important" }} id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                        <div style={{ background: "white", opacity: "0.5", borderRadius: "10px", transform: "scaleY(1.25)", width: "fit-content", margin: "10px auto", padding: "0px 20px", zIndex: 95 }} className="carousel-indicators">
                            {
                                images.map((item, index) => {
                                    return (
                                        <button
                                            style={{ transform: "scaleY(2.25)" }}
                                            type="button"
                                            data-bs-target="#carouselExampleDark"
                                            data-bs-slide-to={index}
                                            aria-label={`Slide ${index}`}
                                            className={index === i ? "active" : ""}
                                            onClick={() => setI(index)}
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
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <CarouselNavigationWrapper>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </CarouselNavigationWrapper>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
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
