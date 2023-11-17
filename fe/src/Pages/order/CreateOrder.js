import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InputAdornment from "@mui/material/InputAdornment";
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import TempImg from '../../images/details/plissee.jpg';
import TempImg2 from '../../images/details/alt_schiebetür.jpg';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


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
    width: 80px;
    align-self: center;
`;

const ItemDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const OrderItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-base;
    padding: 20px;
    padding-left: 25px;
    gap: 30px;
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
        width: 40vw;
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


const mockData = {
    shippingPrice: 6.0,
    price : 460.0,
    items : [
        {
            measurements: "kullanıcıdan alınan ölçüm sonuçları",
            price: 140,
            quantity: 2,
            product: {
                category: "ürün kategorisi",
                description: "ürün hakkında açıklama: ",
                id: 1,
                imageUrl: "url",
                name: "Ürün adı 1",
                rating: 4.8,
                numberOfRating: 12
            }
        },
        {
            measurements: "kullanıcıdan alınan ölçüm sonuçları",
            price: 180,
            quantity: 1,
            product: {
                category: "ürün kategorisi",
                description: "ürün hakkında açıklama: ",
                id: 1,
                imageUrl: "url",
                name: "Ürün adı 1",
                rating: 4.4,
                numberOfRating: 78
            }
        }
    ]
};

function CreateOrder() {
    // backdrop code
    const [backdrop, setBackdrop] = useState(false);


    // backdrop code

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
    const [address,setAddress] = useState({
        street: "",
        doorNumber: null,
        postalCode: null,
        city: "",
        state: "",
        country: "Deutschland",
    })
    const [creditCardInfo,setCreditCardInfo] = useState({
        name: "",
        number: null,
        expiration: null,
        cvv: null
    });
    const {userInfo} = useSelector(state=>state.login);

    const handleClickArrowButton = (e,direction) => {
        e.preventDefault();
        const change = direction==="left" 
            ? (progress === 0 ? progress : progress - 33.3) 
            : (progress > 99 ? progress : progress + 33.3);

        if (progress > 99 && direction==="right"){
            // do checks for information

            // use animation
            setBackdrop(true);

            setTimeout(function() {
                nav("/order-success");
                setBackdrop(false);
            }, 3500);

            

            // redirect to success screen
        }


        if (change===33.3 && userInfo===null){
            setFormError("Um fortzufahren, müssen Sie sich anmelden. Wenn Sie kein Konto haben, können Sie sich über die Schaltfläche 'Einloggen' auch registrieren.");
            return;
        }


        setProgress(change);
        setFormError(null);
    } 

    const paymentInfoGenerator = () => {
        const number = creditCardInfo.number;
        return number?.slice(-4);
    }

    const handleExpirationChange = (event) => {
        const input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        const formattedInput = input
          .replace(/(\d{2})(?=\d)/g, ' $1 / ') // Add a '/' after the first two digits
          .trim()
          .substring(0, 7); // Limit the input to 'MM/YY'
    
        setCreditCardInfo({...creditCardInfo, expiration: formattedInput})
      };

    function handleAuth(e){
        e.preventDefault();
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

  return (
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
                <Button onClick={(e)=> handleClickArrowButton(e,"right")} size='large' variant="outlined" color="warning">Weiter</Button>
            </ArrowWrapper>
            <Title>{titleData[progress]}</Title>
            {formError!==null && <ModifiedAlert severity="error">{formError}</ModifiedAlert>}
                {
                    progress === 0 && 
                    <SingleSlide>
                        <AccountCircleIcon style={{ fontSize: '5em' }}/>
                        {
                            userInfo===null ? 
                            (<>
                                <Desc>Bitte loggen Sie sich ein, um fortzufahren.</Desc>
                                <Button  color='warning' onClick={(e)=>handleAuth(e)} variant="contained">Einloggen / Anmelden</Button>
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
                        <CustomLongInput 
                            value={creditCardInfo.name} 
                            onChange={e=>setCreditCardInfo({...creditCardInfo, name: e.target.value})} 
                            label="Name des Karteninhabers" 
                            variant="outlined" 
                            color="warning"
                        />

                         <CustomLongInput
                            label="Kartennummer"
                            variant="outlined"
                            color='warning'
                            value={creditCardInfo.number}
                            onChange={handleCardNumberChange}
                            inputProps={{
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                                maxLength: 19, // 16 digits + 3 spaces
                            }}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <span role="img" aria-label="credit card">
                                    💳
                                    </span>
                                </InputAdornment>
                                ),
                            }}
                            />
                            <DoubleInputWrapper style={{gap: "2%"}}>
                            <CreditCardCustomInput 
                                w="38%"
                                m="60%"
                                value={creditCardInfo.expiration} 
                                onChange={handleExpirationChange} 
                                label="Ablaufdatum (MM/JJ)" 
                                variant="outlined" 
                                color="warning"
                                />
                            <CreditCardCustomInput
                                w="20%"
                                m="18%" 
                                value={creditCardInfo.cvv} 
                                onChange={e=>setAddress({...creditCardInfo, cvv: e.target.value})} 
                                label="CVC" 
                                variant="outlined" 
                                color="warning"
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                    maxLength: 3, // 16 digits + 3 spaces
                                }}
                                />
                        </DoubleInputWrapper>
                    </SingleSlide>
                }
                {
                    progress > 90 && 
                    <SingleSlide>
                        <LocalMallIcon className='my-2' style={{ fontSize: '5em' }}/>
                        <ConfirmContainer>

                            <Products>
                                <Shipping>
                                    <LastPageTitle>Adresse:</LastPageTitle>
                                    <div>
                                        {address.street} {address.doorNumber}, {address.city} / {address.state} ({address.postalCode})
                                    </div>
                                </Shipping>
                                <br></br>
                                <hr></hr>
                                <Payment>
                                    <LastPageTitle>Zahlung:</LastPageTitle>
                                    <div>
                                        **** **** **** {paymentInfoGenerator()}
                                    </div>
                                </Payment>
                                <br></br>
                                <hr></hr>
                                <Payment>
                                    <LastPageTitle>Artikel:</LastPageTitle>
                                    <div>
                                        {
                                            mockData.items.map((item,index)=>{
                                                return (
                                                    <>
                                                        <img/>
                                                        <OrderItemContainer key={index}>
                                                            <CustomImage src={index === 0 ? TempImg: TempImg2}/>
                                                            <ItemDetailWrapper>
                                                                <div>{item.product.name}</div>
                                                                <div>{item.quantity} x {item.price}€</div>
                                                            </ItemDetailWrapper>
                                                        </OrderItemContainer>
                                                    </>
                                                );
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
                                                {mockData.price} €
                                            </span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-space-around">
                                            <span style={{marginRight: "auto", marginLeft: "0"}}>
                                                Versand:
                                            </span>
                                            <span>
                                                {mockData.shippingPrice} €
                                            </span>
                                        </li>
                                        <div className="list-group-item d-flex justify-content-space-around">
                                            <div style={{marginRight: "auto", marginLeft: "0"}}>
                                                Gesamt:
                                            </div>
                                            <div>
                                                {mockData.shippingPrice + mockData.price} €
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </Summary>
                        </ConfirmContainer>
                    </SingleSlide>
                }
                
        </SlideContainer>

    </Container>
  )
}

export default CreateOrder