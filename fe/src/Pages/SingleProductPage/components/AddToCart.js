import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { ADD_TO_CART } from '../../../constants/user';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useDispatch } from 'react-redux';
import Notification from './Notification';
import ShippingPriceTable from '../../../images/shop/shippingprices.webp';

const Container = styled.div`
    box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: fit-content;
    width: 100%;
    gap: 20px;
    min-width: 350px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18%;
`;

const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: fit-content;
`;

const ButtonGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;

    @media only screen and (max-width: 800px) {
        margin-top: 10px;
    }
`;

const CustomAmountText = styled.div`
    border-bottom: 1px solid black;
    width: 40px;
    text-align: center;
    border-bottom: 1px solid rgba(237, 108, 2, 0.5);
    border-top: 1px solid rgba(237, 108, 2, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TotalPrice = styled.div`
    font-size: 22px;
    text-align: right;
`;

const ExtraInfoWrapper = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 5px;
    color: grey;
    margin-top: 12px;
    margin-bottom: 10px;
`;

const moreDetailObj = {
    title: "über den Versand",
    img: ShippingPriceTable,
    body: [
        "Die Lieferzeit beträgt 5 bis 12 Werktage.",
        "Der Preis beinhaltet die Mehrwertsteuer (MwSt.), jedoch fallen zusätzliche Versandkosten an.",
        "Sie können der obigen Tabelle die detaillierten Versandkosten entnehmen.",
        "Die Versandgebühr wird nur einmal pro Bestellung berechnet, auch wenn es mehr als ein Produkt sind. Die Berechnung erfolgt anhand des größten Produkts, und die Gebühr wird nur einmal erhoben."
    ]
};

function AddToCart({itemPrice, setMoreDetailInfo, handleAddIntoCard,canAddCart}) {
    const [quantity,setQuantity] = useState(1);

    const handleSetMoreInfoClick = (e) => {
        e.preventDefault();
        setMoreDetailInfo(moreDetailObj)

        const button = document.getElementById("product-color-option-detail-btn");
        if (button) {
            setTimeout(() => {
                button.click();
            }, 0);
        }
    }

  return (
    <>
        <Notification/>
        <Container>
            <Wrapper>
                <QuantityWrapper>
                <div style={{width: "fit-content", fontSize: "17px"}}> {itemPrice ?`${itemPrice.toFixed(2)}€ pro Produkt`: ""}</div>
                <ButtonGroupWrapper>
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                        >
                        <Button style={{borderColor: "rgba(237, 108, 2, 0.5)"}} onClick={e=>setQuantity(prev=>prev>1?prev-1:prev)} variant="outlined" color='warning'>-</Button>
                        <CustomAmountText>
                            <div>
                                {quantity}
                            </div>
                        </CustomAmountText>
                        <Button onClick={e=>setQuantity(prev=>prev+1)} variant="outlined" color='warning'>+</Button>
                    </ButtonGroup>
                </ButtonGroupWrapper>
                <ExtraInfoWrapper onClick={(e)=>handleSetMoreInfoClick(e)}>
                        Über die Versandgebühr
                        <HelpOutlineOutlinedIcon style={{ color: "grey" }} />
                </ExtraInfoWrapper>
                </QuantityWrapper>
                <TotalPrice>
                <div>Gesamt:</div>
                <b>{canAddCart && `${(itemPrice*quantity).toFixed(2)}€`}</b>
                {
                    !canAddCart &&
                    <div style={{fontSize: "21px", textAlign: "center", color: "#f59f4c"}}>Wir können die Produkte in diesen Maßen nicht anbieten.</div>
                }
                </TotalPrice>
            </Wrapper>
            <Button disabled={canAddCart===false} onClick={e=>handleAddIntoCard(e,quantity,itemPrice)} style={{width: "100%"}} color='warning' variant="contained">In den Warenkorb</Button>

        </Container>
    </>
  )
}

export default AddToCart;
