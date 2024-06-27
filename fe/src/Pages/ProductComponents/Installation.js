import React from 'react';
import styled from 'styled-components';
import StraightenIcon from '@mui/icons-material/Straighten';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HandymanIcon from '@mui/icons-material/Handyman';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const InfoContainer = styled.div`
    margin: 20px;
    padding: 40px;
    padding-bottom: 04px;
    margin-bottom: 30px;
    margin-top: 60px;

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

const InfoBodyText = styled.div`
    color: rgb(82, 82, 102);
    max-width: 18vw;
    margin-top: 10px;

    @media only screen and (max-width: 750px) {
        max-width: 270px;
    }
`;

const ItemWrapperModified = styled(ItemWrapper)`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 750px) {
        display: none;
    }
`;


function Installation() {
  return (
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
  )
}

export default Installation;
