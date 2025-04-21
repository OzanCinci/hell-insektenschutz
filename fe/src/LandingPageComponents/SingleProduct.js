import React from 'react';
import styled from 'styled-components';
import {ProductCartLink} from "../CustomComponents/Link";

const CustomImg = styled.img`
    width: 100%;
    height: auto;
    position: relative; /* Make the image a positioning context */
`;

const Title = styled.h2`
    font-size: 18px;
    text-align: left;
    padding-left: 20%;
    padding-bottom: 5px;
    font-weight: bold;
    color: rgb(82, 82, 102);

    @media (max-width: 700px) {
        font-size: 18px;
        text-align: center;
        padding: 0px;
        width: 100%;
        margin-bottom: 10px;
    }

    @media (max-width: 1000px) {
        white-space: nowrap;
        font-size: 17px;
        padding-left: 0%;
        text-align: center;
    }

    @media (max-width: 576px) {
        white-space: nowrap;
        font-size: 14px;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
`;

const DiscountFlag = styled.div`
    position: absolute;
    top: 0;
    right: 2.5%;
    background-color: #f59f4c;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 18px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
    min-width: 25%;
    min-height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 5;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.4);

    @media (max-width: 1000px) {
        min-width: 35%;
        min-height: 36%;
    }
`;

const ProductWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

function SingleProduct({item, maxHeight}) {
    return (
        <ProductCartLink maxHeight={maxHeight} to={item.link}>
            <ProductWrapper>
                <Title>{item.title}</Title>
                <ImageContainer>
                    {item.discountAmount > 0 && (
                        <DiscountFlag>
                            {item.discountAmount}%<br />Rabatt
                        </DiscountFlag>
                    )}
                    <CustomImg alt={`image for products of ${item.title} category`} src={item.image}/>
                </ImageContainer>
            </ProductWrapper>
        </ProductCartLink>
    )
}

export default SingleProduct;
