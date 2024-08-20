import React from 'react';
import styled from 'styled-components';
import {data} from '../data/insekData';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
import PersonalisierteImg from '../../../images/product/p5.jpg';
import MaterialImg from '../../../images/product/p7.jpg';

const ProductsContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1800px;
    padding-left: 40px;
    padding-right: 40px;

    @media only screen and (max-width: 1200px) {
        flex-wrap: no-wrap;
    }

    @media only screen and (max-width: 470px) {
        padding: 0px;
    }
`;

const BottomListContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1800px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;

    @media only screen and (max-width: 1200px) {
        flex-wrap: no-wrap;
    }

    @media only screen and (max-width: 470px) {
        padding: 0px;
        padding-top: 20px;
    }
`;

const SingleProduct = styled.div`
    width: 45vw;
    max-width: 800px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 1200px) {
        width: 75vw;
        max-width: 1000px;
    }

    @media only screen and (max-width: 1000px) {
        width: 85vw;
    }

    @media only screen and (max-width: 470px) {
        width: 81vw;
        margin-bottom: 40px;
    }

`;

const SingleProductBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    text-align: left;
    max-width: 650px;
    
    @media only screen and (max-width: 650px) {
        flex-direction: column;
        max-width: 400px;
        align-items: center;
    }

    @media only screen and (max-width: 450px) {
        max-width: 450px;
        width: 80vw;
    }
`;

const ImageWrapper = styled.div`
`;

const CustomImg = styled.img`
    height: auto;
    width: 270px;
    align-self: center;
    border-radius: 3px;

    @media only screen and (max-width: 450px) {
        width: 80vw;
        border-radius: 10px;
    }
`;

const Title = styled.div`
    text-align: left;
    color: #696984;
    font-size: 21px;
    margin-bottom: 20px;
    margin-left: -20px;
    font-weight: bold;
    width: 80%;

    @media only screen and (max-width: 450px) {
        width: 100%;
    }    
`;

const Desc = styled.div`
    color: #696984;
    margin-bottom: 10px;
`;

const ProductLink = styled.span`
    color: #f59f4c;
    cursor: pointer;
    width: fit-content;

    position: relative;
    width: fit-content;
  
    &:hover {
      text-decoration: underline;
    }
`;

const Splitter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    margin-top: 70px;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
`;

const Line = styled.div`
    border-bottom: 1px solid #696984;
    flex-grow: 1;
`;

const LineText = styled.div`
    color: #696984;
    font-size: 19px;
    width: fit-content;
    
    @media only screen and (max-width: 450px) {
        font-size: 25px;
    }   
`;

const aboutProductData = [
    {
        title: "Personalisierte",
        image: PersonalisierteImg,
        desc: "Sonderformen bieten individuelle Gestaltungsfreiheit. Mit präziser CAD-Technik fertigen wir auch komplexe Rahmenformen millimetergenau. Egal ob Rund- oder Segmentbögen, wir setzen Ihre Ideen in exakte Formen um.",
        links: [
            {
                text: "Sonderformen",
                url: "/sonderformen",
            },
            {
                text: "Zusatzprodukte",
                url: "/zusatzprodukte",
            },
        ]
    },
    {
        title: "Die Materialien",
        image: MaterialImg,
        desc: "Für uns bedeutet Weiterdenken: Ein gutes Produkt wird durch Details perfektioniert. Wir optimieren unsere Varianten kontinuierlich und legen mit präziser Produktion und optimalen Montagevoraussetzungen den Grundstein für das Premium-Insektenschutz-Erlebnis.",
        links: [
            {
                text: "Gewebearten",
                url: "/gewebearten",
            },
        ]
    }
]

function Insek() {
    const nav = useNavigate();

    const handleClick = (url) => {
        if (!url)
            return;

        nav(url);
    }

  return (
    <>
        <ProductsContainer>
            {
                data.map((item,index)=>{
                    return (
                        <SingleProduct key={index}>
                            <Title>{item.title}</Title>
                            <SingleProductBody>
                                <ImageWrapper>
                                    <CustomImg src={item.image}></CustomImg>
                                </ImageWrapper>
                                <div>
                                    <Desc>{item.desc}</Desc>
                                    <div style={{color: "black",fontWeight:"bold", marginBottom: "10px"}}>Unsere Produkte:</div>
                                    <div>
                                        {
                                            item.links.map((link)=>{
                                                return (
                                                    <div onClick={()=>handleClick(link.url)} style={{marginBottom: "1px"}} key={link.text}>
                                                        <ArrowRightIcon style={{ color: "#696984" }}/>
                                                        <ProductLink>
                                                            {link.text}
                                                        </ProductLink>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </SingleProductBody>
                        </SingleProduct>
                    );
                })
            }
        </ProductsContainer>


        <Splitter>
            <Line></Line>
            <LineText>Über unsere Produkte</LineText>
            <Line></Line>
        </Splitter>

        <BottomListContainer>
            {
                aboutProductData.map((item,index)=>{
                    return (
                        <SingleProduct key={`about-products-${index}`}>
                            <Title>{item.title}</Title>
                            <SingleProductBody>
                                <ImageWrapper>
                                    <CustomImg src={item.image}></CustomImg>
                                </ImageWrapper>
                                <div>
                                    <Desc>{item.desc}</Desc>
                                    <div style={{color: "black",fontWeight:"bold", marginBottom: "10px"}}>Unsere Produkte:</div>
                                    <div>
                                        {
                                            item.links.map((link)=>{
                                                return (
                                                    <div onClick={()=>handleClick(link.url)} style={{marginBottom: "1px"}} key={link.text}>
                                                        <ArrowRightIcon style={{ color: "#696984" }}/>
                                                        <ProductLink>
                                                            {link.text}
                                                        </ProductLink>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </SingleProductBody>
                        </SingleProduct>
                    );
                })
            }
        </BottomListContainer>
    </> 
  )
}

export default Insek