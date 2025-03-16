import React from 'react';
import styled from 'styled-components';
import {ProductCartLink} from "../CustomComponents/Link";

const CustomImg = styled.img`
    width: 100%;
    height: auto;
`;

const Title = styled.div`
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
`;

function SingleProduct({item, maxHeight}) {
  return (
    <ProductCartLink  maxHeight={maxHeight} to={item.link}>
        <Title>{item.title}</Title>
        <CustomImg alt={`image for products of ${item.title} category`} src={item.image}/>
    </ProductCartLink>
  )
}

export default SingleProduct;
