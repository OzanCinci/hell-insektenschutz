import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddCardIcon from '@mui/icons-material/AddCard';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import PayPalButton from '../paypalTest/PayPalButton';


const Container = styled.div`
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    margin-top: 60px;

    @media only screen and (min-width: 1200px) {
        margin-top: 110px;
    }
`;

const CustomBox = styled(Box)`
    width: 50%;
    margin-top: 40px;
    position: relative;

    @media only screen and (max-width: 450px) {
        width: 70vw;
    }

    &::after {
        content: "";
        position: absolute;
        left: ${props => (props.progress-2) + "%"};
        bottom: 0px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transition: all .4s linear;
        background-color: #de6502; 
      }
`;

const Phases = styled.div`
    width: 106%;
    transform: translateX(-6%);
    position: relative;
    margin-top: 5px;

    @media only screen and (min-width: 450px) {
        transform: translateX(-2%);
    }
`;

const Phase = styled.div`
    position: absolute;
    left: ${props => (props.left) + "%"};
`;

const CustomLinearProgress = styled(LinearProgress)`
    height: 10px !important;
    border-radius: 5px;
`;

const SlideContainer = styled.div`
    min-height: 600px;
    min-width: 550px;
    width: 32vw;

    @media only screen and (max-width: 700px) {
        width: 92vw;
        min-width: 0px;
    }
`;


const SingleSlide = styled.div`
    min-height: 200px;
    width: 100%;
    height: 80%;
    margin: auto;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-top: -50px;
`;

const LastSingleSlide = styled(SingleSlide)`
    margin-top: 10px;
`;

const ArrowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled.div`
    text-align: left;
    padding-left: 10px;
    font-size: 22px;
    margin-top: 15px;
    font-weight: bold;
    color: #696984;
    margin-bottom: 20px;
`;

const ProductTitle = styled.div`
    text-align: left;
    padding-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #696984;
`;

const SecondaryTitle = styled.div`
    text-align: left;
    padding-left: 10px;
    font-size: 17px;
    font-weight: 600;
    text-decoration: underline;
    color: #696984;
    color: black;
    margin-bottom: 10px;
`;

const ModifiedAlert = styled(Alert)`
    width: 90%;
    font-size: 18px !important;
    text-align: left;
    margin: 17px auto;
`;

const Desc = styled.div`
    color: #696984;
    font-size: 20px;
`;

const CustomImage = styled.img`
    height: auto;
    width: 180px;
    align-self: start;
    display: block;

    @media only screen and (max-width: 800px) {
        align-self: center;
    }
`;

const ItemDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: 800px) {
        padding-left: 30px;
    }
`;

const OrderItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-base;
    padding: 20px;
    padding-left: 25px;
    gap: 30px;
    border-bottom: 1px solid grey;
    margin-bottom: 20px;


    @media only screen and (max-width: 800px) {
        flex-direction: column;
        width: 95vw;
        transform: translateX(-10vw);
        padding-left: 0px;
    }
`;

const titleData = {
    0 : "Mein Konto",
    33.3: "Mein Adresse",
    66.6: "Zahlungsinformationen",
    99.9: "Bestelldetails"
}

const DoubleInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    width: 100%;
`;

const CustomInput = styled(TextField)`
    width: 28.75%;

    @media only screen and (max-width: 1200px) {
        width: 40%;
    }
`;

const CustomLongInput  = styled(TextField)`
    width: 60%;

    @media only screen and (max-width: 1200px) {
        width: 80%;
    }
`;

const ConfirmContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-base;

    @media only screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        justify-content: column-reversed;
        width: 95vw;
        gap: 20px;
        align-items: center;
    }
`;

const Products = styled.div`
    width: 700px;
    margin-right: 40px;

    @media only screen and (max-width: 1200px) {
        width: 64vw;
    }

    @media only screen and (max-width: 1000px) {
        width: 65vw;
    }
`;

const Summary = styled.div`
`;


const Shipping = styled.div`
    text-align: left;
    padding-left: 30px;

        @media only screen and (max-width: 1200px) {
        padding-left: 0px;
    }
`;

const Payment = styled.div`
    text-align: left;
    padding-left: 30px;

    @media only screen and (max-width: 1200px) {
        padding-left: 0px;
    }
`;

const LastPageTitle = styled(Title)`
    font-size: 20px;
    padding-left: 0;
`;

const CreditCardCustomInput = styled(CustomInput)`
    width: ${props => props.w};

    @media only screen and (max-width: 1200px) {
        width: ${props => props.m};
    }
`;

const Splitter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    align-items: center;
    gap: 15px;
    margin-bottom: 0px;
`;

const Line = styled.div`
    border-bottom: 1px solid #696984;
    flex-grow: 1;
`;

const LineText = styled.div`
    color: #696984;
    font-size: 19px;
    width: fit-content;
    
    @media only screen and (max-width: 450px) {
        font-size: 21px;
        margin-bottom: -10px;
    }   
`;

const CustomButton = styled(Button)`
    margin-top: 25px !important;
    margin-bottom: -10px !important;
    text-transform: none !important;
`;

const PaymentSelectionWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const PaymentSelectionContainer = styled.div`

`;

const URL = process.env.REACT_APP_BE_API;
function CreateOrder() {
    // backdrop code
    const [backdrop, setBackdrop] = useState(false);
    // backdrop code
    const [buttonContent, setButtonContent] = useState("Weiter");
    const [progress, setProgress] = useState(0);
    const [formError,setFormError] = useState(null)
    const nav = useNavigate();

    /*
    Straße und Hausnummer (Sokak ve Kapı Numarası): Kullanıcının yaşadığı sokak adı ve ev numarası.
    Postleitzahl (Posta Kodu): Kullanıcının yaşadığı bölgenin posta kodu.
    Ort (Şehir): Kullanıcının yaşadığı şehir.
    Bundesland (Eyalet): Almanya gibi ülkelerde, kullanıcının yaşadığı eyalet.
    Land (Ülke): Kullanıcının yaşadığı ülke.
    Örnek bir adres formu şu şekilde olabilir:

    Straße und Hausnummer: [ ]
    Postleitzahl: [ ]
    Ort: [ ]
    Bundesland: [ ]
    Land: [ ]
    */

    const [paymentChoice, setPaymentChoice] = useState("Debit- oder Kreditkarte");
    const handlePaymentChoice = (event) => {
        setPaymentChoice(event.target.value);
    };

    const [accountlessInfo,setAccountlessInfo] = useState({
        email: "",
        firstName: "",
        lastName: "",
        telephone: ""
    });

    const [address,setAddress] = useState({
        street: "",
        doorNumber: "",
        postalCode: "",
        city: "",
        state: "",
        country: "Deutschland",
    })
    const [creditCardInfo,setCreditCardInfo] = useState({
        name: "",
        number: "",
        expiration: "",
        cvv: null
    });
    const {userInfo} = useSelector(state=>state.login);
    const cart = useSelector(state=>state.cart);

    const validateLoginInfo = () => {
        if (userInfo) return true;
        if (accountlessInfo.email.trim().length!==0 && accountlessInfo.firstName.trim().length!==0 && accountlessInfo.lastName.trim().length!==0 && accountlessInfo.telephone.trim().length!==0) return true;
        setFormError("Sie müssen sich entweder einloggen oder das Formular ausfüllen, um fortzufahren.");
        return false;
    }

    const validateAddress = () => {
        if (address.street.trim().length===0 || address.doorNumber.trim().length===0 || address.postalCode.trim().length===0 ||
            address.city.trim().length===0 || address.state.trim().length===0 || address.country.trim().length===0) {
                setFormError("Bitte füllen Sie das Adressformular vollständig aus.");
                return false;
        }
        return true;
    }

    const handleCreateOrder = async (token, address, cart, transactionID, orderStatus) => {

        const requestBody = {
            transactionID: transactionID,
            orderStatus: orderStatus,
            address: {...address},
            cart: {
                numberOfItems: cart.numberOfItems,
                price: cart.price,
                shippingPrice: cart.shippingPrice,
                items: cart.items.map(item=>({
                    attributes: JSON.stringify(item.attributes),
                    productID: item.productID,
                    cartImage: item.cartImage,
                    itemName: item.itemName,
                    secondaryName: item.secondaryName,
                    price: item.price,
                    quantity: item.quantity
                }))
            }
        };
    
        const url = `${URL}/api/orders`;
        const configObject = {
            "url": url,
            "method": "post",
            "headers": {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            "data": {...requestBody}
        };
    
        return await axios.request(configObject)
            .then(res => {
                console.log("request result: ", res.data);
                return res.data?.traceCode;
            })
            .catch(e => {
                console.log("error reaised: ", e);
                return false;
            });
    }

    const handleCreateOrderVisitor = async (address, cart, transactionID, orderStatus) => {
        const requestBody = {
            transactionID: transactionID,
            orderStatus: orderStatus,
            address: {...address},
            cart: {
                numberOfItems: cart.numberOfItems,
                price: cart.price,
                shippingPrice: cart.shippingPrice,
                items: cart.items.map(item=>({
                    attributes: JSON.stringify(item.attributes),
                    productID: item.productID,
                    cartImage: item.cartImage,
                    itemName: item.itemName,
                    secondaryName: item.secondaryName,
                    price: item.price,
                    quantity: item.quantity
                }))
            },
            ...accountlessInfo
        };
    
        const url = `${URL}/api/orders/anonymous`;
        const configObject = {
            "url": url,
            "method": "post",
            "headers": {
                'Content-Type': 'application/json',
            },
            "data": {...requestBody}
        };
    
        return await axios.request(configObject)
            .then(res => {
                console.log("handleCreateOrderVisitor request result: ", res.data);
                return res.data?.traceCode;
            })
            .catch(e => {
                console.log("error reaised: ", e);
                return false;
            });
    }

    const handleCreateTransactionRecord = async (email, amount) => {
        const requestBody = {
            email: email,
            amount: amount,
            transactionResource: "PAYPAL",
        };
    
        const url = `${URL}/api/transactions`;
        const configObject = {
            "url": url,
            "method": "post",
            "headers": {
                'Content-Type': 'application/json',
            },
            "data": {...requestBody}
        };
    
        return await axios.request(configObject)
            .then(res => {
                console.log("request result: ", res.data);
                return res.data?.id;
            })
            .catch(e => {
                console.log("error reaised: ", e);
                return null;
            });
        
    }

    const handlePayPalPaymentSuccess = async () => {
        let traceCode;
        setBackdrop(true);
        // initiate transaction record
        const amount = cart.shippingPrice + cart.price;
        let email;
        if (userInfo) {
            email = userInfo.email;
        } else {
            email = accountlessInfo.email;
        }

        const transactionID = await handleCreateTransactionRecord(email, amount);

        if (!transactionID) {
            console.log("Failed to create transaction.");
            return;
        }

        if (userInfo) {
            // handle transaction
            traceCode = await handleCreateOrder(userInfo.access_token, address, cart, transactionID, "ACTIVE");
        } else {
            traceCode = await handleCreateOrderVisitor(address, cart, transactionID , "ACTIVE");
        }

        // redirect
        setTimeout(function() {
            setBackdrop(false);
        }, 1000);

        if (traceCode) {
            const redirectLink = `/order-success?traceCode=${traceCode}&init=true`;   
            nav(redirectLink);
            return;
        } else {
            console.log("something went wrong");
            setFormError("Etwas ist schiefgelaufen.")
            return;
        }
    };

    const handleClickArrowButton = async (e,direction) => {
        e.preventDefault();

        //console.log("CHECKPOINT: 1");
        const change = direction==="left" 
            ? (progress === 0 ? progress : progress - 33.3) 
            : (progress > 99 ? progress : progress + 33.3);

        if (direction==="right") {
            // progress = 33.3 -> address check
            // progress = 66.6 -> credit cart check
            let valid = true;
            if (progress<10) {
                valid = validateLoginInfo();
            } else if (progress<34) {
                valid = validateAddress();
            } else if (progress<68) {
                valid = true;
            } 

            if (!valid) return;
        }
        

        //console.log("CHECKPOINT: 2");
        if (progress > 99 && direction==="right"){
            setBackdrop(true);

            let traceCode;
            if (userInfo) {
                // handle transaction
                traceCode = await handleCreateOrder(userInfo.access_token, address, cart, null, "PENDING_PAYMENT");
            } else {
                traceCode = await handleCreateOrderVisitor(address, cart, null , "PENDING_PAYMENT");
            }

            setTimeout(function() {
                setBackdrop(false);
            }, 1500);

            if (traceCode) {
                const redirectLink = `/order-success?traceCode=${traceCode}&init=false&pending=true`;   
                // redirect to success screen
                nav(redirectLink);
                return;
            } else {
                console.log("something went wrong");
                setFormError("Etwas ist schiefgelaufen.")
                return;
            }
        }

        setProgress(change);
        setFormError(null);
    } 

    const handleExpirationChange = (event) => {
        const input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        const formattedInput = input
          .replace(/(\d{2})(?=\d)/g, ' $1 / ') // Add a '/' after the first two digits
          .trim()
          .substring(0, 7); // Limit the input to 'MM/YY'
    
        setCreditCardInfo({...creditCardInfo, expiration: formattedInput})
      };

    function handleAuth(e) {
        e.preventDefault();
        setFormError(null);
        const button = document.getElementById("loginPopup");
        if (button)
            button.click();
    }

    const handleCardNumberChange = (event) => {
        const input = event.target.value.replace(/\D/g, '');
        const formattedInput = input
          .slice(0, 16) // Limit the input to 16 characters
          .match(/.{1,4}/g)
          ?.join(' ')
          .replace(/_/g, ' ');
    
        // Update the state with the formatted input
        setCreditCardInfo({...creditCardInfo, number: formattedInput});
      };


    useEffect(()=>{
        if (userInfo!==null && progress===0)
            setProgress(33.3);
    },[userInfo]);

    useEffect(()=>{
        if (progress>99 && buttonContent!=="Bestellung abschließen.")
            setButtonContent("Bestellung abschließen.");
        else if (progress<99 && buttonContent!=="Weiter")
            setButtonContent("Weiter");
    },[progress]);

  return (
    <>    
    <Container>
            <Backdrop
                sx={{ color: '#fff', zIndex: 99 }}
                open={backdrop}
                onClick={()=>{}}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        <CustomBox progress={progress}>
            <CustomLinearProgress variant="determinate" color='warning' value={progress} />
            <Phases>
                <Phase left={-1}>Konto</Phase>
                <Phase left={28}>Adresse</Phase>
                <Phase left={60}>Zahlung</Phase>
                <Phase left={88}>Bestätigen</Phase>
            </Phases>
        </CustomBox>
        <br></br>
        <br></br>


        <SlideContainer>
            <ArrowWrapper>
                <IconButton onClick={(e)=> handleClickArrowButton(e,"left")} aria-label="delete" size="large">
                    <ArrowCircleLeftIcon />
                </IconButton>
                {
                    (buttonContent==="Weiter") && <Button onClick={(e)=> handleClickArrowButton(e,"right")} size='large' variant="outlined" color="warning">{buttonContent}</Button>
                }
            </ArrowWrapper>
            <Title>{titleData[progress]}</Title>
            {formError!==null && <ModifiedAlert severity="error">{formError}</ModifiedAlert>}
                {
                    progress === 0 && 
                    <SingleSlide>
                        {/* <AccountCircleIcon style={{ fontSize: '5em' }}/> */}
                        {
                            userInfo===null ? 
                            (<>
                                <CustomButton color='warning' onClick={(e)=>handleAuth(e)} variant="contained">Einloggen / Anmelden</CustomButton>
                                
                                <Splitter>
                                    <Line></Line>
                                    <LineText>oder Kauf ohne Konto</LineText>
                                    <Line></Line>
                                </Splitter>
                                
                                <Desc>
                                    Produktkauf ist auch ohne Konto möglich, allerdings ohne Zugriff auf frühere Bestellungen und ohne Schnellkauf-Funktion.
                                </Desc>

                                <TextField 
                                    sx={{ width: "35ch" }}
                                    value={accountlessInfo.email} onChange={e=>setAccountlessInfo({...accountlessInfo, email: e.target.value})}
                                    label="Email" variant="outlined" color="warning"/>
                                <TextField 
                                    sx={{ width: "35ch" }}
                                    value={accountlessInfo.firstName} onChange={e=>setAccountlessInfo({...accountlessInfo, firstName: e.target.value})}
                                    label="Name" variant="outlined" color="warning"/>
                                <TextField 
                                    sx={{ width: "35ch" }}
                                    value={accountlessInfo.lastName} onChange={e=>setAccountlessInfo({...accountlessInfo, lastName: e.target.value})}
                                    label="Nachname" variant="outlined" color="warning"/>
                                <TextField 
                                    sx={{ width: "35ch" }}
                                    value={accountlessInfo.telephone} onChange={e=>setAccountlessInfo({...accountlessInfo, telephone: e.target.value})}
                                    type='tel'
                                    label="Telefonnummer" variant="outlined" color="warning"/>
                            </>) :
                            (<>
                                <Desc>
                                    Hallo {userInfo.firstName +" "+ userInfo.lastName}, 
                                </Desc>
                                <Desc>
                                    du kannst fortfahren, um deine Bestellung zu bestätigen.
                                </Desc>
                            </>)
                        }
                    </SingleSlide>
                }
                {
                    progress === 33.3 && 
                    <SingleSlide>
                        <LocalShippingIcon style={{ fontSize: '5em' }}/>
                        <DoubleInputWrapper style={{gap: "2%"}}>
                            <CustomInput 
                                value={address.street} 
                                onChange={e=>setAddress({...address, street: e.target.value})} 
                                label="Straße" 
                                variant="outlined" 
                                color="warning"/>
                            <CustomInput 
                                value={address.doorNumber} 
                                onChange={e=>setAddress({...address, doorNumber: e.target.value})} 
                                label="Hausnummer" 
                                variant="outlined" 
                                color="warning"/>
                        </DoubleInputWrapper>
                        <DoubleInputWrapper style={{gap: "2%"}}>
                            <CustomInput 
                                value={address.postalCode} 
                                onChange={e=>setAddress({...address, postalCode: e.target.value})} 
                                label="Postleitzahl" 
                                variant="outlined" 
                                color="warning"/>
                            <CustomInput 
                                value={address.city} 
                                onChange={e=>setAddress({...address, city: e.target.value})} 
                                label="Ort" 
                                variant="outlined" 
                                color="warning"/>
                        </DoubleInputWrapper>

                        <CustomLongInput 
                            value={address.state} 
                            onChange={e=>setAddress({...address, state: e.target.value})} 
                            label="Bundesland" 
                            variant="outlined" 
                            color="warning"/>
                        <CustomLongInput 
                            value={address.country} 
                            onChange={e=>setAddress({...address, country: e.target.value})} 
                            label="Land" 
                            variant="outlined" 
                            color="warning"/>
                    </SingleSlide>
                }
                {
                    progress === 66.6 && 
                    <SingleSlide>
                        <AddCardIcon className='my-2' style={{ fontSize: '5em' }}/>
                        <Desc style={{textAlign: "left"}}>Bitte wählen Sie eine Zahlungsmethode aus. Die Zahlung erfolgt im nächsten Schritt.</Desc>
                        <PaymentSelectionContainer>
                            <div style={{width: "fit-content", margin: "auto"}}>
                                <PaymentSelectionWrapper>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color='warning'
                                                checked={paymentChoice==="Debit- oder Kreditkarte"}
                                                onChange={() => setPaymentChoice("Debit- oder Kreditkarte")}
                                            />
                                        }
                                    />
                                    <div style={{fontSize: "20px"}}>Debit- oder Kreditkarte</div>
                                </PaymentSelectionWrapper>
                                <PaymentSelectionWrapper>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color='warning'
                                                checked={paymentChoice==="PayPal"}
                                                onChange={() => setPaymentChoice("PayPal")}
                                            />
                                        }
                                    />
                                    <div style={{fontSize: "20px"}}>PayPal</div>
                                </PaymentSelectionWrapper>
                                <PaymentSelectionWrapper>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color='warning'
                                                checked={paymentChoice==="Banküberweisung"}
                                                onChange={() => setPaymentChoice("Banküberweisung")}
                                            />
                                        }
                                    />
                                    <div style={{fontSize: "20px"}}>Banküberweisung</div>
                                </PaymentSelectionWrapper>
                            </div>
                            <Desc style={{textAlign: "left", fontSize: "18px", marginTop: "15px"}}>
                                    Warnung: Wenn Sie mit Banküberweisung fortfahren, wird eine Bestellung ohne Zahlung erstellt. Sie sollten den Gesamtbetrag auf das Bankkonto überweisen, das Ihnen nach der Erstellung der Bestellung mitgeteilt wird. Sie sollten die 'Bestellnummer' Ihrer Bestellung in die Beschreibung einfügen, damit wir Ihre Zahlung nachverfolgen können.
                            </Desc>
                        </PaymentSelectionContainer>
                    </SingleSlide>
                }
                {
                    progress > 90 && 
                    <LastSingleSlide>
                        <ConfirmContainer>

                            <Products>
                                <Shipping>
                                    <LastPageTitle>Lieferadresse:</LastPageTitle>
                                    <div>
                                        {address.street} {address.doorNumber}, {address.city} / {address.state} ({address.postalCode})
                                    </div>
                                </Shipping>
                                <br></br>
                                <hr></hr>
                                {
                                    false && 
                                    <>
                                        <Payment>
                                            <LastPageTitle>Zahlung:</LastPageTitle>
                                            <div>
                                                {paymentChoice}
                                            </div>
                                        </Payment>
                                        <br></br>
                                        <hr></hr>
                                        </>
                                }
                                <Payment>
                                    <LastPageTitle>Artikel:</LastPageTitle>
                                    <div>
                                        {
                                            cart.items.map((item,index)=>{
                                                return <OrderItemContainer key={index}>
                                                    <CustomImage src={item.cartImage}/>
                                                    <ItemDetailWrapper>
                                                        <ProductTitle>{item.itemName}</ProductTitle>
                                                        <SecondaryTitle>{item.secondaryName}</SecondaryTitle>
                                                        <div>
                                                            {
                                                                item.attributes.map((attr,i)=>{
                                                                    return (
                                                                        <li 
                                                                        style={{fontSize: "17px"}}
                                                                        key={i}>{attr}</li>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div>
                                                            <div
                                                                style={{marginTop: "20px", fontSize: "18px", fontWeight: "bold", color: "#696984"}}
                                                            >
                                                                {item.quantity} x {item.price.toFixed(2)}€
                                                            </div>
                                                        </div>
                                                    </ItemDetailWrapper>
                                                </OrderItemContainer>;
                                            })
                                        }
                                    </div>
                                </Payment>
                            </Products>
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
                                                {cart.shippingPrice.toFixed(2)} €
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
                                    {
                                        paymentChoice!== "Banküberweisung" &&
                                        <div style={{marginTop: "15px"}}>
                                            <PayPalButton amount={(cart.shippingPrice + cart.price).toFixed(2)} onSuccess={()=>handlePayPalPaymentSuccess()}/>
                                        </div>
                                    }
                                    {
                                        (paymentChoice==="Banküberweisung") && <Button style={{marginTop: "0px"}} onClick={(e)=> handleClickArrowButton(e,"right")} size='large' variant="contained" color="warning">{buttonContent}</Button>
                                    }
                                </div>
                            </Summary>
                        </ConfirmContainer>
                    </LastSingleSlide>
                }
                
        </SlideContainer>

    </Container>
    </>
  )
}

export default CreateOrder;
