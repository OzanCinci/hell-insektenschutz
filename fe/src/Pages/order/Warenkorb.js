import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    CHANGE_SHIPPING_COST,
    INCREMENT_NUMBER_IN_CART,
    DECREMENT_NUMBER_FROM_CART,
    REMOVE_FROM_CART,
    REMOVE_ALL_CART,
    CREATE_NEW_WISHLIST,
    CREATE_WISHLIST_NAME,
    DELETE_WISHLIST_ITEM,
    ADD_SUBITEM_WISHLIST,
    DELETE_SUBITEM_WISHLIST,
    INCREMENT_SUBITEM_WISHLIST, DECREMENT_SUBITEM_WISHLIST, CHANGE_ALL_BASKET, DELETE_ITEM_WISHLIST,
} from '../../constants/user';
import NoOrderImg from '../../images/account/sepet.jpeg';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShippingPriceTable from '../../images/shop/shippingprices.webp';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import TextField from "@mui/material/TextField";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import {convertDateForWishlist} from "../../utils/datetime";

const Container = styled.div`
    min-height: 100vh;
    margin: auto;
    padding-top: 140px;
    padding-bottom: 50px;
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

    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 100px;
    }
`;

const Items = styled.div`
    min-height: 200px;
    border: 1px solid white;
    background-color: white;
    padding: 40px;
    text-align: left;
    margin-bottom: 30px;

    @media only screen and (max-width: 600px) {

    }
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
    color: #9f9f9f;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        color: #007185;
    }
`;

const OtherButtonWrapper = styled.div`
    text-align: right;
    display: flex;
    gap: 15px;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        gap: 5px;
        width: fit-content;
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
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: 25px;

    @media only screen and (max-width: 800px) {
        margin-top: 10px;
    }

    @media only screen and (max-width: 600px) {
        gap: ${props=> !props.isWishlistUsage ? "1px" : "20px"};
        width: ${props=> !props.isWishlistUsage ? "80vw" : "fit-content"};
        transform: ${props=> !props.isWishlistUsage ? "translateX(-7.5%)" : ""};
        align-items: ${props=> !props.isWishlistUsage ? "flex-end" : "center"};
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
    font-weight: 600;
    font-size: 20px;
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

const SingleItem = styled(({url,index,attributes,secondaryName, quantity, price, itemName, handleButtonClick,uniqueCode,removeFromCart, handleWishlistClick, isWishlistUsage = false})=>{
    return (
        <SingItemContainer>
            <LeftPart>
                <CustomImg src={url}/>
                <ItemInfo style={{textAlign: "left"}}>
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
                    <AntiPreis>{`${price.toFixed(2)}€`}</AntiPreis>
                    <ButtonGroupWrapper isWishlistUsage={isWishlistUsage}>
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                            >
                            <Button style={{borderColor: "rgba(237, 108, 2, 0.5)", width:"20px"}} onClick={()=>handleButtonClick("decrement",uniqueCode)} variant="outlined" color='warning'>{quantity>1?"-":(<DeleteOutlineIcon/>)}</Button>
                            <CustomTextField>
                                <div>
                                    {quantity}
                                </div>
                            </CustomTextField>
                            <Button style={{ width:"20px"}} onClick={()=>handleButtonClick("increment",uniqueCode)} variant="outlined" color='warning'>+</Button>
                        </ButtonGroup>
                        {
                            !isWishlistUsage &&
                            <OtherButtonWrapper>
                                <RemoveAll onClick={()=>removeFromCart(uniqueCode)}>Entfernen</RemoveAll>
                                <RemoveAll onClick={()=>handleWishlistClick(uniqueCode)}>Zur Wunschliste hinzufügen</RemoveAll>
                            </OtherButtonWrapper>
                        }
                    </ButtonGroupWrapper>
                </ItemInfo>
            </LeftPart>
            <Preis>
                  {price.toFixed(2)} €
            </Preis>
        </SingItemContainer>
    );
})``;

const SelectorComponent = styled(({ data }) => {
    return (
      <div>
        <button
          id="cart-shipping-price-more-detail-btn"
          style={{ display: "none" }}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#productColorMoreDetail"
        />
        {data ? (
          <div>
            <div
              className="modal fade"
              id="productColorMoreDetail"
              tabIndex="-1"
              aria-labelledby="productColorMoreDetailLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 style={{textAlign: "left"}} className="modal-title" id="productColorMoreDetailLabel">{data.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img height="200px" width="auto" src={data.img} alt="Modal Content" />
                    <div style={{ textAlign: "left" }} className="my-4">
                      {data.body.map((item, index) => (
                        <li className="my-2" key={index}>{item}</li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  })`
    .modal-dialog-centered {
        display: flex;
    }
`;

const WishlistContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;  // Two columns: one for checkbox and one for the name
    gap: 0px;  // Space between columns
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    align-items: center;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const WishlistName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: left;
`;

const WishlistGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px; // Space between rows (wishlist items)
`;

const WishlistModalComponent = styled(({ wishlist, handleAddNewWishlist, selectedItem, handleAddItemIntoWishlist}) => {
    const [wishlistName,setWishlistName] = useState("");
    const [includes,SetIncludes] = useState([]);

    useEffect(() => {
        const tmp = wishlist.map(
            item => item.items.some(
                subItem => subItem.uniqueCode===selectedItem
            )
        );
        SetIncludes([...tmp]);
    }, [wishlist, selectedItem]);


    return (
        <div>
            <button
                id="wishliht-modal-open-button"
                style={{ display: "none" }}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#wishlishModalPupupSelector"
            />
            <div>
                <div
                    className="modal fade"
                    id="wishlishModalPupupSelector"
                    tabIndex="-1"
                    aria-labelledby="wishlishModalPupupSelectorLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 style={{textAlign: "left"}} className="modal-title" id="wishlishModalPupupSelectorLabel">
                                    Wählen Sie, zu welcher Wunschliste Ihr Artikel hinzugefügt werden soll.
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                                    <TextField sx={{ width: "25ch" }} value={wishlistName} onChange={e=>setWishlistName(e.target.value)} id="new-wishlist-generator" label="Neuer Wunschlistenname" variant="outlined" color="warning"/>
                                    <CustomButton
                                        onClick={()=>handleAddNewWishlist(wishlistName,setWishlistName)}
                                        style={{borderRadius: "30px", marginLeft: "15px" }}
                                        size='large'
                                        variant="outlined"
                                        color="warning"
                                    >
                                        hinzufügen+
                                    </CustomButton>
                                </div>
                                <WishlistGrid>
                                    {wishlist.map((item, index) => (
                                        <WishlistContainer key={index}>
                                            <Checkbox
                                                color='warning'
                                                checked={includes?.[index] || false}
                                                onChange={(e) => handleAddItemIntoWishlist((includes?.[index] || false), item, selectedItem)}
                                            />
                                            <WishlistName>{item.name || item.createdAt}</WishlistName>
                                        </WishlistContainer>
                                    ))}
                                </WishlistGrid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})`
    .modal-dialog-centered {
        display: flex;
    }
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
    text-transform: none !important;
`;

const HelpTextWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 5%;
    margin: 10px 20px;
    margin-right: 5px;
    color: grey;
    font-weight: bold;
`;

const CustomAccordionSummary = styled(AccordionSummary)`
    background: white !important;
    border-radius: 60px !important;
`;

const CustomAccordionDetails = styled(AccordionDetails)`
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: flex-start;
`;

const CustomExpandMoreIcon = styled(ExpandMoreIcon)`
    color: orange;
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

const discount40percentList = [
    "premium.insektenschutz@gmail.com",
    "mkinsektenschutz@outlook.de",
    "insektenschutz.k@gmail.com",
    "Weher@laemmermann.de",
    "inso.insektenschutz@gmail.com",
    "ozan_cinci2001@hotmail.com",
]

const discount = false;
function Warenkorb() {
    const cart = useSelector(state=>state.cart);
    const {userInfo} = useSelector(state=>state.login);
    const wishlistCart = useSelector(state=>state.wishlistCart);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);


    useEffect(()=>{
        handleShippingPriceChange();
    },[]);

    const handleAddNewWishlist = (wishlistName, setWishlistName) => {
        let emptyWishlistCart = {
            name: wishlistName,
            numberOfItems: 0,
            shippingPrice: 0,
            price : 0.0,
            items : [],
        };

        if (userInfo && userInfo.email && discount40percentList.includes(userInfo.email)) {
            emptyWishlistCart.discount = true;
            emptyWishlistCart.discountedPrice = cart.price * 0.6;
        }

        dispatch({type:CREATE_NEW_WISHLIST,payload:emptyWishlistCart});
        setWishlistName("");
    }

    const handleWishlistClick = (uniqueCode) => {
        const button = document.getElementById("wishliht-modal-open-button");
        if (button) {
            setTimeout(() => {
                button.click();
            }, 0);
        }
        setSelectedItem(uniqueCode);
    }

    const handleAddItemIntoWishlist = (currentState, wishlistItem, selectedItemUniqueCode) => {
        if (currentState) {
            // removal
            const payload = {selectedItemUniqueCode, wishlistItem}
            dispatch({type:DELETE_SUBITEM_WISHLIST, payload: payload});
        } else {
            // addition
            const selectedItem = cart.items.find(item => item.uniqueCode === selectedItemUniqueCode) || null;
            const payload = {selectedItem, wishlistItem}
            dispatch({type:ADD_SUBITEM_WISHLIST, payload: payload});
        }
    }

    const handleMoreDetailclicked = () => {
        const button = document.getElementById("cart-shipping-price-more-detail-btn");
        if (button) {
            setTimeout(() => {
                button.click();
            }, 0);
        }
    }

    const handleShippingPriceChange = () => {
        const widths = cart.items.map(item=>item.shippingWidth).filter(item=>item);
        const maxWidth = Math.max(...widths);

        let shippingCost = 0.0;
        if (widths.length === 0)
            shippingCost = 0.0;
        else if (maxWidth===-Infinity)
            shippingCost = 3.90;
        else if (maxWidth<=1800)
            shippingCost = 5.90;
        else if (maxWidth<=2500)
            shippingCost = 15.90;
        else if (maxWidth<=3800)
            shippingCost = 49.90;
        else if (maxWidth<=5000)
            shippingCost = 99.90;


        let payload = {
            shippingCost: shippingCost,
            discount: false,
            discountedPrice: null
        };

        if (userInfo && userInfo.email && discount40percentList.includes(userInfo.email)) {
            payload.discount = true;
            payload.discountedPrice = cart.price * 0.6;
        }
        dispatch({type:CHANGE_SHIPPING_COST,payload:payload});            
    }
    
    useEffect(()=>{
        handleShippingPriceChange();
    },[userInfo])

    const handleAmountChangeCart = (type,uniqueCode) => {
        if (type==="increment")
            dispatch({type:INCREMENT_NUMBER_IN_CART,payload:uniqueCode});
        else
            dispatch({type:DECREMENT_NUMBER_FROM_CART,payload:uniqueCode});

        handleShippingPriceChange()
    }

    const removeFromCart = (uniqueCode) => {
        dispatch({type:REMOVE_FROM_CART,payload:uniqueCode});
        handleShippingPriceChange();
    }

    const removeAllInCart = () => {
        dispatch({type:REMOVE_ALL_CART});
        handleShippingPriceChange();
    }

    const saveAllFromBasketIntoWishlist = () => {
        if (cart.items.length === 0)
            return;

        let tmpCart = {...cart};
        if (!cart.name) {
            tmpCart.name = `Für später gespeichert (${convertDateForWishlist(Date.now())}) `;
        }

        dispatch({type:CREATE_NEW_WISHLIST,payload:tmpCart});
        dispatch({type:REMOVE_ALL_CART});
    };

    const restoreFromWishlist = (wishlistCart) => {
        saveAllFromBasketIntoWishlist();
        dispatch({type:CHANGE_ALL_BASKET,payload:wishlistCart});
        dispatch({type:DELETE_ITEM_WISHLIST,payload:wishlistCart});
        //handleShippingPriceChange();
    }


  return (
      <>
          <SelectorComponent
              data={moreDetailObj}
          />
          <WishlistModalComponent
              wishlist={wishlistCart}
              handleAddNewWishlist={handleAddNewWishlist}
              selectedItem={selectedItem}
              handleAddItemIntoWishlist={handleAddItemIntoWishlist}
          />
          {
              (cart?.items?.length === 0 && wishlistCart.length === 0)
                  ? (<div>
                      <NoProductWrapper>
                          <NoOrderMessage>Derzeit befinden sich keine Artikel in Ihrem Einkaufswagen. Stöbern Sie durch
                              unser vielfältiges Angebot und entdecken Sie Produkte, die perfekt zu Ihnen passen. Besuchen
                              Sie unsere Produktseiten, um Ihre Lieblingsartikel zu finden!</NoOrderMessage>
                          <CustomMobileSingleItemImg src={NoOrderImg}/>
                          <CustomButton onClick={(e) => nav("/geschaft")} size='large' variant="outlined" color="warning">Sehen
                              Sie unsere Produkte</CustomButton>
                      </NoProductWrapper>
                  </div>)
                  : (<Container>

                      <div>
                          <Items>
                              <Desc>Artikel in Ihrem Warenkorb {cart.name ? `(für ${cart.name})` : ""}</Desc>
                              <SubDesc>
                                  <div>
                                      <RemoveAll onClick={() => removeAllInCart()}>Alles entfernen</RemoveAll>
                                      <RemoveAll onClick={() => saveAllFromBasketIntoWishlist()}>Alle zur Wunschliste
                                          hinzufügen</RemoveAll>
                                  </div>
                                  <Preis>Preis</Preis>
                              </SubDesc>
                              <hr></hr>
                              <div>
                                  {
                                      cart?.items?.length === 0 && <div style={{marginTop: "-110px"}}>
                                          <NoProductWrapper>
                                              <NoOrderMessage>
                                                  Ihre Wunschliste ist momentan leer. Stöbern Sie weiter und fügen Sie Artikel
                                                  hinzu, die Sie später kaufen möchten. Scrollen Sie nach unten, um Ihre
                                                  gespeicherten Wunschlisten zu sehen und Ihren Favoriten hinzuzufügen!
                                              </NoOrderMessage>
                                              <CustomMobileSingleItemImg src={NoOrderImg}/>
                                          </NoProductWrapper>
                                      </div>
                                  }
                                  {
                                      cart.items.map((item, index) => {
                                          return (
                                              <>
                                                  <SingleItem
                                                      key={`original-cart-indexed-${index}-key`}
                                                      index={`original-cart-indexed-${index}-key`}
                                                      url={item.cartImage}
                                                      quantity={item.quantity}
                                                      price={cart.discount ? ((item.price / cart.price) * cart.discountedPrice || 0) : item.price}
                                                      itemName={item.itemName}
                                                      secondaryName={item.secondaryName}
                                                      attributes={item.attributes}
                                                      handleButtonClick={handleAmountChangeCart}
                                                      uniqueCode={item.uniqueCode}
                                                      removeFromCart={removeFromCart}
                                                      handleWishlistClick={handleWishlistClick}
                                                  />
                                                  <hr></hr>
                                              </>
                                          );
                                      })
                                  }
                              </div>
                              <TotalAmount><TotalAmountDesc>Zwischensumme ({cart.numberOfItems})
                                  Artikel: </TotalAmountDesc>{cart.discount ? cart.discountedPrice.toFixed(2) : cart.price.toFixed(2)} €</TotalAmount>
                          </Items>
                          <Desc style={{textAlign: "left"}}>Deine Wunschliste</Desc>
                          <hr></hr>
                          <div>
                              {
                                  wishlistCart?.length === 0 &&
                                  <div style={{background: "white", margin: "10px auto", padding: "12px 10px", borderRadius: "10px", color: "#9f9f9f", cursor: "default"}}>
                                      Keine Wunschliste erstellt.
                                  </div>
                              }
                              {
                                  wishlistCart.map((item, index) => <SingleWishlistCartComponent key={`single-wishlist-component-${index}`} item={item} restoreFromWishlist={restoreFromWishlist}/>)
                              }
                          </div>
                      </div>
                      <Summary>
                          <div className="card" style={{width: "18rem"}}>
                              <div className="card-header">
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
                                    {cart?.shippingPrice?.toFixed(2)} €
                                </span>
                                  </li>
                                  {
                                      cart?.discount && <>
                                          <div className="list-group-item d-flex justify-content-space-around">
                                              <div style={{marginRight: "auto", marginLeft: "0"}}>
                                                  Rabatt:
                                              </div>
                                              <div>
                                                  {(cart.price - cart.discountedPrice).toFixed(2)} €
                                              </div>
                                          </div>
                                          <div className="list-group-item d-flex justify-content-space-around">
                                              <div style={{marginRight: "auto", marginLeft: "0"}}>
                                                  Gesamt:
                                              </div>
                                              <div>
                                                  {(cart.shippingPrice + cart.discountedPrice).toFixed(2)} €
                                              </div>
                                          </div>
                                      </>
                                  }
                                  {
                                      !cart?.discount && <>
                                          <div className="list-group-item d-flex justify-content-space-around">
                                              <div style={{marginRight: "auto", marginLeft: "0"}}>
                                                  Gesamt:
                                              </div>
                                              <div>
                                                  {(cart.shippingPrice + cart.price).toFixed(2)} €
                                              </div>
                                          </div>
                                      </>
                                  }
                                  <HelpTextWrapper>
                                      <div>
                                          Über die Versandgebühr
                                      </div>
                                      <div style={{cursor: "pointer"}} onClick={() => handleMoreDetailclicked()}>
                                          <HelpOutlineOutlinedIcon style={{color: "grey"}}/>
                                      </div>
                                  </HelpTextWrapper>
                              </ul>
                          </div>
                          <Button onClick={() => nav("/order-create")} style={{width: "18rem"}} variant="contained"
                                  color='warning'>Bestellung abschließen</Button>
                      </Summary>
                  </Container>)
          }
      </>
  )
}

const WishlistButtonWrapper = styled.div`
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: row;
    }
`;


const WishlistButtonContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: flex-start;
    margin-bottom: 10px;
    
    @media only screen and (max-width: 850px) {
        flex-direction: column;
        gap: 30px;
    }
`;


const SingleWishlistCartComponent = ({item, restoreFromWishlist}) => {
    const [newName, setNewName] = useState(item.name);
    const dispatch = useDispatch();

    const handleWishlistNameChange = (newName, currentItem) => {
        const payload = {newName, currentItem}
        dispatch({type:CREATE_WISHLIST_NAME,payload:payload});
    }
    const handleWishlistDelete = (currentItem) => {
        const result = window.confirm("Bitte bestätigen Sie die Entfernung der Wunschliste.");
        if (!result) return;
        dispatch({type:DELETE_WISHLIST_ITEM,payload:currentItem});
    }

    const handleAmountChangeInWishlist = (type,uniqueCode) => {
        const payload = {uniqueCode, item};

        if (type==="increment")
            dispatch({type: INCREMENT_SUBITEM_WISHLIST, payload:payload});
        else
            dispatch({type: DECREMENT_SUBITEM_WISHLIST, payload:payload});
    }

    return (
        <div>
            <Accordion
                className='my-2'
                TransitionProps={{ timeout: 300 }}
            >
                <CustomAccordionSummary
                    expandIcon={<CustomExpandMoreIcon />}
                    id={`panel${item.name}-${item.createdAt}-header`}
                >
                    {item.name || item.createdAt} - {(item.discountedPrice || item.price).toFixed(2)}€
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                    <WishlistButtonContainer>
                        <div style={{display: "flex", gap: "8px"}}>
                            <TextField sx={{ width: "25ch", height: "1ch" }} value={newName} onChange={e=>setNewName(e.target.value)} label="Neuer Wunschlistenname" variant="outlined" color="warning"/>
                            <CustomButton
                                onClick={()=>handleWishlistNameChange(newName,item)}
                                variant="outlined"
                                color="warning"
                            >
                                speichern
                            </CustomButton>
                        </div>
                        <WishlistButtonWrapper>
                            <CustomButton onClick={()=>handleWishlistDelete(item)} color='warning' variant='outlined'><DeleteOutlineIcon/></CustomButton>
                            <CustomButton onClick={()=>restoreFromWishlist(item)} className='mx-2' color='warning' variant='outlined'>Als aktiven Warenkorb festlegen.</CustomButton>
                        </WishlistButtonWrapper>
                    </WishlistButtonContainer>
                    <div>
                        {
                            item?.items.map((subItem)=>{
                                return (
                                  <div key={subItem.uniqueCode + "-" + item.name + "-" + item.createdAt + "wishlist"}>
                                      <SingleItem
                                          key={subItem.uniqueCode + "-" + item.name + "-" + item.createdAt + "wishlist"}
                                          index={subItem.uniqueCode + "-" + item.name + "-" + item.createdAt + "wishlist"}
                                          url={subItem.cartImage}
                                          quantity={subItem.quantity}
                                          price={item.discount ? ((subItem.price / item.price) * item.discountedPrice || 0) : subItem.price}
                                          itemName={subItem.itemName}
                                          secondaryName={subItem.secondaryName}
                                          attributes={subItem.attributes}
                                          handleButtonClick={handleAmountChangeInWishlist}
                                          uniqueCode={subItem.uniqueCode}
                                          removeFromCart={()=>{}}
                                          handleWishlistClick={()=>{}}
                                          isWishlistUsage={true}
                                      />
                                      <hr></hr>
                                  </div>
                                );
                            })
                        }
                    </div>
                </CustomAccordionDetails>
            </Accordion>
        </div>
    )
}

export default Warenkorb;
