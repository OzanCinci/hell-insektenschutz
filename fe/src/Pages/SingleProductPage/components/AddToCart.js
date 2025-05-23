import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Notification from './Notification';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShippingPriceTable from '../../../images/shop/shippingprices.webp';
import CONFIGURATION from "../../../config/config";
import {useSelector} from "react-redux";


const CustomButton = styled(Button)`
    text-transform: none !important;
    font-size: 17px !important;
    
    width: fit-content !important;
    padding: 0.75% 10% !important;
    white-space: nowrap !important;

    @media only screen and (max-width: 700px) {
        font-size: 15px !important;
        padding: 0.75% 11% !important;
    }
`;

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

const BottomButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const insectProductMoreDetailObj = {
    title: "über den Versand",
    img: ShippingPriceTable,
    body: [
        "Die obige Tabelle zeigt die Versandkosten für Sonnenschutzprodukte. Die Versandkosten für Insektenschutzprodukte betragen unabhängig von der Größe der Insektenschutzprodukte konstant 25€.",
        "Eine zusätzliche Versandgebühr von 25€ wird beim Checkout für Insektenschutzprodukte berechnet.",
        "Die Versandkosten werden im Warenkorb berechnet. Falls durch Sonnenschutzprodukte andere Versandkosten anfallen, wird nur eine Versandgebühr berechnet. Die Versandkosten können durch Gebühren für andere Produkte überschrieben werden. Bitte prüfen Sie Ihren Warenkorb für detaillierte Informationen.",
        "Die Lieferzeit beträgt 5 bis 12 Werktage.",
        "Der Preis beinhaltet die Mehrwertsteuer (MwSt.), jedoch fallen zusätzliche Versandkosten an.",
    ]
};

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

function AddToCart({itemPrice, setMoreDetailInfo, handleAddIntoCard, canAddCart, handleAddFreeSamplingIntoCard,validPrice, showGetSampleButton = true, isInsectProtectionProduct=false, defaultCategoryForDiscount = "PUBLIC"}) {
    const [quantity,setQuantity] = useState(1);
    const {discountOptionMap} = useSelector(state=>state.config);
    const enableDiscount = discountOptionMap[defaultCategoryForDiscount] != null;
    const percentage = discountOptionMap[defaultCategoryForDiscount]?.percentage ?? 0.0;

    const handleSetMoreInfoClick = (e) => {
        e.preventDefault();
        if (isInsectProtectionProduct) {
            setMoreDetailInfo(insectProductMoreDetailObj);
        } else {
            setMoreDetailInfo(moreDetailObj);
        }

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
                {
                    enableDiscount===true ?
                    <>
                        <div style={{width: "fit-content", fontSize: "17px"}}> {itemPrice ?`${(itemPrice-validPrice + validPrice * (1-percentage)).toFixed(2)}€ pro Produkt`: ""}</div>
                    </>
                    : <>
                        <div style={{width: "fit-content", fontSize: "17px"}}> {itemPrice ?`${(itemPrice-validPrice + validPrice).toFixed(2)}€ pro Produkt`: ""}</div>
                    </>
                }
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
                {
                    canAddCart && (
                        enableDiscount===true ? <>
                            <div>
                                <div style={{textDecoration: "line-through", fontSize: "18px"}}>{`${(itemPrice*quantity).toFixed(2)}€`}</div>
                                <div style={{color: "red", fontWeight: "bold",fontSize: "24px"}}>{`${((itemPrice-validPrice + validPrice * (1-percentage))*quantity).toFixed(2)}€`}</div>
                            </div>
                        </>:
                        <>
                            <div style={{color: "rgb(82, 82, 102)",fontWeight: "bold",fontSize: "24px"}}>{`${((itemPrice-validPrice + validPrice)*quantity).toFixed(2)}€`}</div>
                        </>
                    )
                }
                {
                    !canAddCart &&
                    <div style={{fontSize: "21px", textAlign: "center", color: "#f59f4c"}}>Wir können die Produkte in diesen Maßen nicht anbieten.</div>
                }
                </TotalPrice>
            </Wrapper>
            <BottomButtonWrapper>
                {
                    enableDiscount===true ?
                    <>
                        <Button disabled={canAddCart===false} onClick={e=>handleAddIntoCard(e,quantity,(itemPrice-validPrice + validPrice))} style={{width: "100%"}} color='warning' variant="contained">In den Warenkorb</Button>
                    </>
                    : <>
                        <Button disabled={canAddCart===false} onClick={e=>handleAddIntoCard(e,quantity,(itemPrice-validPrice + validPrice))} style={{width: "100%"}} color='warning' variant="contained">In den Warenkorb</Button>
                    </>
                }
                {showGetSampleButton===true && <CustomButton onClick={(e)=>handleAddFreeSamplingIntoCard(e)} variant='outlined' color='warning'> <AddShoppingCartIcon className='mx-2'/> Gratis Muster  </CustomButton>}
            </BottomButtonWrapper>

        </Container>
    </>
  )
}

export default AddToCart;
