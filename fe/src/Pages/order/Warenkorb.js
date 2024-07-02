import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT_NUMBER_IN_CART, DECREMENT_NUMBER_FROM_CART, REMOVE_FROM_CART, REMOVE_ALL_CART } from '../../constants/user';
import NoOrderImg from '../../images/account/sepet.jpeg';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Container = styled.div`
    min-height: 100vh;
    margin: auto;
    padding-top: 140px;
    max-width: 100vw;
    background-color: #eaeded;
    display: flex;
    flex-direction: row;
    justify-content: center;
    aling-items: flex-end;
    gap: 80px;

    @media only screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        width: 100vw;
        padding-left: 10vw;
        padding-right: 10vw;
        padding-top: 100px;
        gap: 30px;
    }
`;

const Items = styled.div`
    min-height: 200px;
    border: 1px solid white;
    background-color: white;
    padding: 40px;
    text-align: left;
    margin-bottom: 200px;
`;

const Summary = styled.div`
    -webkit-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1200px) {
        margin: auto;
    }
`;

const Desc = styled.div`
    color: #696984;
    font-size: 23px;
`;

const SubDesc = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const TotalAmount = styled.div`
    text-align: right;
    font-size: 18px;
`;

const TotalAmountDesc = styled.div`
    color: #696984;
    font-size: 20px;
    display: inline-block;
    margin-right: 10px;
`;

const RemoveAll = styled.div`
    text-decoration: underline;
    cursor: pointer;

    &: hover {
        color: #007185;
    }
`;

const CustomImg = styled.img`
    height: auto;
    width: 150px;
    align-self: center;
`;

const SingItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px auto;
    width: 50vw;

    @media only screen and (max-width: 1200px) {
        width: 100%;
    }
`;

const LeftPart = styled.div`
    display: flex;
    gap: 30px;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
        
    }
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;

const ButtonGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    margin-top: 25px;

    @media only screen and (max-width: 800px) {
        margin-top: 10px;
    }
`;

const Preis = styled.b`
    font-size: 19px;
    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

const AntiPreis = styled.div`
    margin-top: 30px;
    @media only screen and (min-width: 800px) {
        display: none;
    }
`;

const CustomTextField = styled.div`
    border-bottom: 1px solid black;
    width: 40px;
    text-align: center;
    border-bottom: 1px solid rgba(237, 108, 2, 0.5);
    border-top: 1px solid rgba(237, 108, 2, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SingleItem = styled(({url,index,attributes,secondaryName, quantity, price, itemName, handleButtonClick,uniqueCode,removeFromCart})=>{
    return (
        <SingItemContainer>
            <LeftPart>
                <CustomImg src={url}/>
                <ItemInfo>
                    <div>
                        <b>{itemName}</b>
                        <div>{secondaryName}</div>
                        <div>
                            {
                                attributes.map((att,i)=>{
                                    return (
                                        <li key={i}>{att}</li>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                    <AntiPreis>{price} €</AntiPreis>
                    <ButtonGroupWrapper>
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                            >
                            <Button style={{borderColor: "rgba(237, 108, 2, 0.5)", width:"20px"}} onClick={e=>handleButtonClick(e,"decrement",uniqueCode)} variant="outlined" color='warning'>{quantity>1?"-":(<DeleteOutlineIcon/>)}</Button>
                            <CustomTextField>
                                <div>
                                    {quantity}
                                </div>
                            </CustomTextField>
                            <Button style={{ width:"20px"}} onClick={e=>handleButtonClick(e,"increment",uniqueCode)} variant="outlined" color='warning'>+</Button>
                        </ButtonGroup>
                            <RemoveAll onClick={()=>removeFromCart(uniqueCode)}>entfernen</RemoveAll>
                    </ButtonGroupWrapper>
                </ItemInfo>
            </LeftPart>
            <Preis>
                  {price} €
            </Preis>
        </SingItemContainer>
    );
})`

`;

const NoOrderMessage = styled.div`
    width: 80%;
    margin: 20px auto;
    margin-bottom: 0px;
    font-size: 20px;
    color: rgb(82, 82, 102);
`;

const CustomMobileSingleItemImg = styled.img`
    height: auto;
    width: 70%;
    max-width: 300px;
    align-self: center;
    display: block;
    margin: 0px auto;
`;

const NoProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 80%;
    max-width: 700px;
    margin: auto;
    margin-top: 120px;

    @media only screen and (max-width: 800px) {
        margin: auto;
        width: 100vw;
        margin-top: 100px;
    }
`;

const CustomButton = styled(Button)`
    background-color: white !important;
`;

function Warenkorb() {
    const cart = useSelector(state=>state.cart);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleButtonClick = (e,type,uniqueCode) => {
        e.preventDefault();

        if (type==="increment")
            dispatch({type:INCREMENT_NUMBER_IN_CART,payload:uniqueCode});
        else
            dispatch({type:DECREMENT_NUMBER_FROM_CART,payload:uniqueCode});
    }

    const removeFromCart = (uniqueCode) => {
        dispatch({type:REMOVE_FROM_CART,payload:uniqueCode});
    }

    const removeAllInCart = () => {
        dispatch({type:REMOVE_ALL_CART});
    }

  return (
    <>
    {
        cart.numberOfItems===0
        ? (<div>
            <NoProductWrapper>
                <NoOrderMessage>Derzeit befinden sich keine Artikel in Ihrem Einkaufswagen. Stöbern Sie durch unser vielfältiges Angebot und entdecken Sie Produkte, die perfekt zu Ihnen passen. Besuchen Sie unsere Produktseiten, um Ihre Lieblingsartikel zu finden!</NoOrderMessage>
                <CustomMobileSingleItemImg src={NoOrderImg}/>
                <CustomButton onClick={(e)=>nav("/geschaft")} size='large' variant="outlined" color="warning">Sehen Sie unsere Produkte</CustomButton>
            </NoProductWrapper>
        </div>)
        : ( <Container>
            <Items>
                <Desc>Artikel in Ihrem Warenkorb</Desc>
                <SubDesc>
                    <RemoveAll onClick={()=>removeAllInCart()}>Alles entfernen</RemoveAll>
                    <Preis>Preis</Preis>
                </SubDesc>
                <hr></hr>
                <div>
                    {
                        cart.items.map((item,index)=>{
                            return (
                                <>
                                <SingleItem 
                                    key={index} 
                                    index={index} 
                                    url={item.cartImage}
                                    quantity={item.quantity} 
                                    price={item.price} 
                                    
                                    itemName={item.itemName} 
                                    secondaryName={item.secondaryName}
                                    attributes={item.attributes}
                                    
                                    handleButtonClick={handleButtonClick}
                                    uniqueCode={item.uniqueCode}
                                    removeFromCart={removeFromCart}
                                />
                                <hr></hr>
                                </>
                            );
                        })
                    }
                </div>
                <TotalAmount><TotalAmountDesc>Zwischensumme ({cart.numberOfItems}) Artikel: </TotalAmountDesc>{cart.price.toFixed(2)} €</TotalAmount>
            </Items>
            <Summary>
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-header">
                        BESTELLÜBERSICHT
                    </div>
                    <ul class="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-space-around">
                            <span style={{marginRight: "auto", marginLeft: "0"}}>
                                Artikel: 
                            </span>
                            <span>
                                {cart.price.toFixed(2)} €
                            </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-space-around">
                            <span style={{marginRight: "auto", marginLeft: "0"}}>
                                Versand:
                            </span>
                            <span>
                                {cart.shippingPrice} €
                            </span>
                        </li>
                        <div className="list-group-item d-flex justify-content-space-around">
                            <div style={{marginRight: "auto", marginLeft: "0"}}>
                                Gesamt:
                            </div>
                            <div>
                                {(cart.shippingPrice + cart.price).toFixed(2)} €
                            </div>
                        </div>
                    </ul>
                </div>
                <Button onClick={()=>nav("/order-create")} style={{width: "18rem"}} variant="contained" color='warning'>Bestellung abschließen</Button>
            </Summary>
        </Container>)
    }
   </>
  )
}

export default Warenkorb