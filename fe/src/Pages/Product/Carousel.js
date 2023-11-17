import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image1 from '../../images/dumps/lich2.jpg';
import Image2 from '../../images/dumps/lich3.jpg';
import Image3 from '../../images/details/alt_schiebetür.jpg';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    customPaging: i => (
      <Dot className='dot'>
      </Dot>
    )
  };

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-top: 20px;
  background: white;
  -webkit-box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
  -moz-box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
  box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
`

const Container = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 20px;
    min-height: 40vh;
    max-width: 700px;
    overflow: hidden;
`;


const LeftColumn = styled.div`
    width: 80%;
    min-height: 45vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RightColumn = styled.div`
    width: 20%;
    height: 100%;
    min-height: 35vh;

    display: flex;
    flex-direction: column;
    gap: 20px;

    max-height: 55vh;
    transform: ${props => "translateY(" + props.slide + ")"};
    transition: all 0.4s ease-in-out;
`;

const CustomImage = styled.img`
    height: auto;
    width: 95%;
    align-self: center;
    max-width: 100%;
    max-height: 45vh;
`;

const CustomImageMobile = styled.img`
    height: auto;
    width: 95vw;
    align-self: center;
    max-width: 100%;
    max-height: 35vh;
`;

const CustomSmallImage = styled.img`
    height: auto;
    width: 75%;
    align-self: center;
    border: ${props => props.active ? "3px solid #f59f4c": "none"};
    cursor: pointer;
    border-radius: 2px;
    margin-top: 15px;
`;

const CustomSmallImageMobile = styled.img`
    height: 40px;
    width: auto;
    border: ${props => props.active ? "3px solid #f59f4c": "none"};
    cursor: pointer;
    border-radius: 2px;
    margin-top: 15px;
`;

const DesktopWrapper = styled.div`
    @media only screen and (max-width: 1000px) {
       display: none;
    }
`;

const MobileWrapper = styled.div`
    @media only screen and (min-width: 1000px) {
        display: none;
    }
`;

const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95vw;
`;

const Photos = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    transform: ${props => "translateX(" + props.slide + ")"};
    transition: all 0.4s ease-in-out;
`;

const MobileImage = styled.div`
    height: 35vh;
`;

const HorizantalSlide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-item: center;
`;

function Carousel() {
    const [i,setI] = useState(0);
    const [slide,setSlide] = useState(0);

    const images = [
        Image1,
        Image2,
        Image3,
        Image1,
        Image2,
        Image3,
        Image1,
        Image2,
        Image3,
        // Add more images as needed
      ];

      const handleClick = (value) => {
        let calcIndex;
        if ( value < 0)
            calcIndex = i + value < 0 ? -1 : i-1;
        else
            calcIndex = i + value > images.length -1 ? -1 : i+1;

        if (calcIndex===-1)
            return;

        setI(calcIndex);
        const img = document.getElementById(`slicked-img${calcIndex}`).getBoundingClientRect();
        const slider = document.getElementById("slider-element").getBoundingClientRect();
        if (img && slider) {
            const diff =  slider.top - (img.top);
            setSlide(diff + "px");
        }
      }

  return (
    <div>
        <DesktopWrapper>
            <Container >
                <LeftColumn>
                    <div style={{cursor: "pointer"}}>
                        <ArrowCircleLeftIcon fontSize='large' onClick={()=>handleClick(-1)}/>
                    </div>
                    <div>
                        <CustomImage alt='image-of-the-product' src={images[i]} />
                    </div>
                    <div style={{cursor: "pointer"}}>
                        <ArrowCircleRightIcon fontSize='large' onClick={()=>handleClick(1)}/>
                    </div>
                </LeftColumn>
                <RightColumn id='slider-element' slide={slide}>
                    {
                        images.map((item,index)=>{
                            return (
                                <CustomSmallImage id={`slicked-img${index}`} active={i===index} key={index} src={item} alt='small-image'/>
                                );
                            })
                    }
                </RightColumn>

            </Container>
        </DesktopWrapper>
        <MobileWrapper>
            <MobileContainer>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                 
                    <div class="carousel-indicators">
                        {
                            images.map((item,index)=>{
                                return (
                                    <button 
                                        type="button" 
                                        data-bs-target="#carouselExampleDark" 
                                        data-bs-slide-to={index} 
                                        aria-label={`Slide ${index}`}
                                        className={index === i ? "active" : ""}
                                        ></button>
                                );
                            })
                        }
                    </div>
                    <div class="carousel-inner" style={{height: "42vh"}}>
                        {
                        images.map((item,index)=>{
                            return (
                                <div 
                                    aria-label={`Slide ${index}`}
                                    className={index === i ? "carousel-item active" : "carousel-item"}
                                >
                                    <CustomImageMobile alt='image-of-the-product' src={item} />
                                </div>
                            );
                        })
                        }
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </MobileContainer>
        </MobileWrapper>
    </div>
  )
}

export default Carousel