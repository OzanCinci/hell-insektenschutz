import React from 'react';
import styled from 'styled-components';
import StraightenIcon from '@mui/icons-material/Straighten';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {data} from './shopData';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Services from '../../LandingPageComponents/Services';
import Reviews from '../../LandingPageComponents/Reviews';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    max-width: 1700px;
    margin: auto;
    margin-top: 100px;

    @media only screen and (max-width: 650px) {
        margin-top: 80px;
    }

    @media only screen and (max-width: 470px) {
        margin-top: 100px;
    }

`;

const InfoContainer = styled.div`
    margin: 20px;
    padding: 40px;
    padding-bottom: 04px;
    margin-bottom: 30px;

    @media only screen and (max-width: 470px) {
        padding: 10px;
    }
`;

const InfoTitle = styled.div`
    color: rgb(82, 82, 102);
    font-weight: bold;
    font-size: 24px;

    @media only screen and (max-width: 470px) {
        font-size: 19px;
    }
`;

const InfoBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;

    @media only screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const InfoBodyText = styled.div`
    color: rgb(82, 82, 102);
    max-width: 18vw;
    margin-top: 10px;

    @media only screen and (max-width: 750px) {
        max-width: 270px;
    }
`;

const ItemWrapper = styled.div`

    @media only screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
    }

    @media only screen and (max-width: 470px) {
        gap: 12px;
        width: 75vw;
        margin: auto;
        margin-bottom: 2px;
    }
`;

const ItemWrapperModified = styled(ItemWrapper)`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

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

const SingleProduct = styled.div`
    width: 45vw;
    max-width: 800px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

function Insek() {
    const nav = useNavigate();

    const handleClick = (url) => {
        if (!url)
            return;

        console.log(url);
        nav(url);
    }

  return (
    <Container>
        <InfoContainer>
            <InfoTitle>MESS, GESTALTE, ZUSAMMENBAUEN – Einfacher geht's nicht!</InfoTitle>
            <InfoBody>
                <ItemWrapper>
                    <StraightenIcon color='warning' style={{ fontSize: 60 }}/>
                    <InfoBodyText>Nehmen Sie die Maße des Produkts auf der Produktseite wie angegeben.</InfoBodyText>
                </ItemWrapper>

                <ItemWrapperModified>
                    <ArrowForwardIosIcon fontSize='large' style={{ color: "rgb(82, 82, 102)" }}/>
                </ItemWrapperModified>

                <ItemWrapper>
                    <AddShoppingCartIcon color='warning' style={{ fontSize: 60 }}/>
                    <InfoBodyText>Passen Sie das Produkt nach Ihren Wünschen an und bestellen Sie es.</InfoBodyText>
                </ItemWrapper>

                <ItemWrapperModified>
                    <ArrowForwardIosIcon fontSize='large' style={{ color: "rgb(82, 82, 102)" }}/>
                </ItemWrapperModified>

                <ItemWrapper>
                    <HandymanIcon color='warning' style={{ fontSize: 60 }}/>
                    <InfoBodyText>Die Installation ist einfach durchzuführen.</InfoBodyText>
                </ItemWrapper>
            </InfoBody>
            <br></br>
        </InfoContainer>
        <Splitter>
            <Line></Line>
            <LineText>Unsere Produkte</LineText>
            <Line></Line>
        </Splitter>
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

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Reviews noAnimation={true}/>

        <div style={{scale:"0.9"}}>
            <Services noAnimation={true}/>
        </div>
    </Container>
  )
}

export default Insek