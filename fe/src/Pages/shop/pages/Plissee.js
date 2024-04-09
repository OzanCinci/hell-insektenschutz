import React from 'react';
import styled from 'styled-components';
import {data} from '../data/plisseeData';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';

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

function Plissee() {
    const nav = useNavigate();

    const handleClick = (url) => {
        if (!url)
            return;

        console.log(url);
        nav(url);
    }


  return (
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
  )
}

export default Plissee