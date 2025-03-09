import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 330px;
    width: 22vw;
    padding: 20px 5px;
    cursor: pointer;
    min-height: ${props => (props.maxHeight !== 0 && props.maxHeight !== null)
                    ? `${props.maxHeight}px`
                    : "0px"};

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1200px) {
        width: 30vw;
    }

    @media (max-width: 700px) {
        padding: 20px 2px;
        width: 45vw;
    }
`;

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
    const nav = useNavigate();

  return (
    <Container maxHeight={maxHeight} onClick={()=>nav(item.link)}>
        <Title>{item.title}</Title>
        <CustomImg alt={`image for products of ${item.title} category`} src={item.image}/>
    </Container>
  )
}

export default SingleProduct;
