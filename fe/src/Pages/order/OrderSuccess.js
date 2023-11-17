import React from 'react';
import styled from 'styled-components';
import SuccessIcon from '../../images/account/success.png';

const Container = styled.div`
    min-height: 400px;
    margin-top: 120px;

    @media only screen and (max-width: 800px) {
        margin-top: 70px;
    }
`;

const CustomImg = styled.img`
    height: auto;
    width: 100%;
    align-self: center;
    margin: auto;
`;

const ImageWrapper = styled.div`
    width: 95vw;
    max-width: 400px;
    margin: auto;
`;

const Desc = styled.div`
    color: #696984;
    font-size: 20px;
    max-width: 600px;
    min-width: 300px;
    width: 40vw;
    margin: auto;
    margin-top: 20px;
    text-align: left;

    @media only screen and (max-width: 800px) {
        margin-top: 0px;
    }
`;

function OrderSuccess() {
  return (
    <Container data-aos="zoom-in">
        <ImageWrapper>
            <CustomImg src={SuccessIcon}/>
        </ImageWrapper>
        <Desc>
            Vielen Dank für Ihre Bestellung. Sie haben Ihre Bestellung abgeschlossen. Sie können diese Seite verlassen und den Status Ihrer Bestellung in Ihrem Profil anzeigen.
        </Desc>
    </Container>
  )
}

export default OrderSuccess