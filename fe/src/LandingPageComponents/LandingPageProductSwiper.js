import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import PlisseImg from '../images/shop/plissee.webp';
import JalousienImg from '../images/shop/jalousien.webp';
import RollosImg from '../images/shop/rollow.webp';
import LamellenvorhangImg from '../images/shop/lamellenvorhang.webp';
import InsekImg from '../images/shop/insek.webp';
import DoppelRoolo from '../images/shop/doppelrollo.webp';
import HolzHalousie from '../images/shop/jalousie_holz.webp';
import AkuRollo from '../images/shop/rollo_aku.webp';
import SingleProduct from './SingleProduct';

import DoppelRolloTestImg from '../images/test/doppelrollo.jpg';
import JalousienTestImg from '../images/test/jalousien.jpg';
import LamellanTestImg from '../images/test/lamellan.jpg';
import PlisseeTestImg from '../images/test/plissee.jpg';
import RolloTestImg from '../images/test/rollo.jpg';

import PrevArrowImage from '../images/landingPage/prev-arrow.svg';
import NextArrowImage from '../images/landingPage/next-arrow.svg';

const data = [
    {title: "Premium Plissee", image: PlisseeTestImg, link: "/geschaft/plissees/premium-plissee-optionen", discountAmount: 0},
    {title: "Premium Jalousie", image: JalousienTestImg, link: "/geschaft/jalousie/premium-jalousie-optionen", discountAmount: 0},
    {title: "Premium Rollo", image: RolloTestImg, link: "/geschaft/rollo/premium-rollo-optionen", discountAmount: 0},
    {title: "Doppelrollo", image: DoppelRolloTestImg, link: "/geschaft/rollo/doppel-rollo-optionen", discountAmount: 0},
    {title: "Akku Rollo", image: AkuRollo, link: "/geschaft/rollo/akku-rollo-optionen", discountAmount: 0},
    {title: "Insektenschutz", image: InsekImg, link: "/geschaft/insektenschutz", discountAmount: 0},
    {title: "Holzjalousie", image: HolzHalousie, link: "/geschaft/jalousie/holzjalousie-optionen", discountAmount: 0},
    {title: "Premium Lamellenvorhang", image: LamellanTestImg, link: "/geschaft/lamellenvorhang/premium-lamellenvorhang-optionen", discountAmount: 0},
    {title: "Plissee", image: PlisseImg, link: "/geschaft/plissees", discountAmount: 0},
    {title: "Lamellenvorhang", image: LamellenvorhangImg, link: "/geschaft/lamellenvorhang", discountAmount: 0},
    {title: "Jalousie", image: JalousienImg, link: "/geschaft/jalousien", discountAmount: 0},
    {title: "Rollo", image: RollosImg, link: "/geschaft/rollos", discountAmount: 0},
    {title: "Doppelrollo", image: DoppelRoolo, link: "/geschaft/rollo/doppel-rollo-optionen", discountAmount: 0},
];

const CustomSwiperContainer = styled.div`
    position: relative;
    padding: 0 50px; 
    
    .swiper {
        width: 100%;
        height: 100%;
    }
    
    .swiper-button-prev, .swiper-button-next {
        width: 80px;
        height: 80px;
        background-position: center;
        background-repeat: no-repeat;
    }
    
    .swiper-button-prev::after, .swiper-button-next::after {
        display: none;
    }
    
    .swiper-button-next, .swiper-button-prev {
        background-size: contain;
    } 
    
    .swiper-button-prev {
        background-image: url(${PrevArrowImage});
        left: 10px;
    }
    
    .swiper-button-next {
        background-image: url(${NextArrowImage});
        right: 10px;
    }
    
    .swiper-slide {
        width: auto !important;
    }

    @media only screen and (max-width: 900px) {
        padding: 0 0px;

        .swiper-button-prev, .swiper-button-next {
            width: 60px;
            height: 60px;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
`;

const Splitter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
    margin-top: 40px;
`;

const Line = styled.div`
    border-bottom: 1px solid #696984;
    flex-grow: 1;
`;

const LineText = styled.h2`
    color: #696984;
    font-size: 25px;
    font-weight: 700;
    width: fit-content;
    
    @media only screen and (max-width: 550px) {
        font-size: 20px;
    }   
`;

const LineSeperatorTitleComponent = ({msg}) => {
    return (
        <Splitter>
            <Line></Line>
            <LineText>{msg}</LineText>
            <Line></Line>
        </Splitter>
    );
};

const ResponsiveCarousel = ({maxHeight}) => {
    return (
        <>
            <LineSeperatorTitleComponent msg={"Unsere Produkte"}/>
            <CustomSwiperContainer className="carousel-container">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    loop={true}
                    centeredSlides={false}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.title}>
                            <div className={"all-products-with-base"} style={{border: '1px solid #ddd', borderRadius: '8px'}}>
                                {<SingleProduct item={item} maxHeight={maxHeight}/>}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CustomSwiperContainer>
        </>
    );
};

function LandingPageProductSwiper() {
    const [maxHeight, setMaxHeight] = useState(0);
    useEffect(() => {
        var elementsByClassName = document.getElementsByClassName("all-products-with-base");
        const calculatedMaxHeight = Math.max(...Array.from(elementsByClassName).map(item => item.clientHeight));
        setMaxHeight(calculatedMaxHeight);
    }, []);

    return (
        <div>
            <ResponsiveCarousel maxHeight={maxHeight}/>
        </div>
    );
}

export default LandingPageProductSwiper;
