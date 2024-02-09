import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import Review from './components/Review';
import Info from './components/Info';
import Color from './components/Color';
import Brush from './components/Brush';
import Measurement from './components/Measurement';
import AddToCart from './components/AddToCart';
import Notification from './components/Notification';
import MobileReview from './components/MobileReview';


const Container = styled.div`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: flex-start;
  max-width: 1350px;
  margin: auto;
  margin-top: 180px;
  padding-left: 50px;
  padding-right: 50px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
`;

const CarouselWrapper = styled.div`
  width: fit-content;
`;

const SelectionWrapper = styled.div`
  width: 45%;
  height: fit-content;

  @media only screen and (max-width: 1000px) {
    width: 90vw;
    margin-top: -20%;
  }
`;

const Title = styled.div`
  color: #696984;
  font-size: 26px;
`;

const OptionsContainer = styled.div`
`;

const SingleOption = styled.div`
    text-align: left;
    margin-top: 40px;
`;

function SingleProduct() {
  return (
    <Container>
        <Notification/>
        <div>
            <CarouselWrapper>
                <Carousel/>
            </CarouselWrapper>
            <Review/>
        </div>
        <SelectionWrapper>
            <Title>Lichtschachtabdeckungen</Title>
            <Info/>

            <OptionsContainer>
                <SingleOption>
                    <Color/>
                </SingleOption>
                <SingleOption>
                    <Brush/>
                </SingleOption>
            </OptionsContainer>

            <Measurement/>
            <AddToCart/>
        </SelectionWrapper>

        <MobileReview/>
    </Container>
  )
}

export default SingleProduct