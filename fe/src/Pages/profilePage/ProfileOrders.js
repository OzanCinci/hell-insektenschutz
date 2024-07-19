import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import { convertDate } from '../../utils/datetime';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from '@mui/material/Rating';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import NoOrderImg from '../../images/account/sepet.jpeg';
import ReviewModal from '../../CustomComponents/ReviewModal';

////////////////////////////////////////////////
/////// DESKTOP COMPONENTS BELOW ////////////////
////////////////////////////////////////////////

const Container = styled.div`

`;

const Header = styled.div`
    background-color: #f0f2f2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    text-align: left;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    display: ${props => props.expand ? "block": "none"};
`;

const ImageBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 25px;
    padding: 10px 20px;
    flex-wrap: wrap;


    display: ${props => props.expand ? "flex": "none"};
`;

const SingleOrder = styled.div`
    border-radius: 0px 0px 10px 10px;
    margin-top: 25px;
    width: 100%;

    border: 1px solid #f0f2f2;
    box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
`;

const OrderTitle = styled.div`
    text-decoration: underline;
    text-align: left;
`;

const OrderItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    padding-left: 25px;
    gap: 30px;
`;

const CustomImage = styled.img`
    width: 200px;
    height: auto;
`;

const ItemDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    gap: 5px;
`;

const DesktopOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 850px;
    gap: 20px;
    margin: auto;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const HeaderColumn = styled.div`
    max-width: 38%;
    text-align: left;
`;

const ReapetOrderWrapper = styled.div`
    width: fit-content;
    margin-right: auto;
    margin-left: 20px;
    margin-top: -3px;
    margin-bottom: 12px;
`;

////////////////////////////////////////////////
/////// DESKTOP COMPONENTS ABOVE ////////////////
////////////////////////////////////////////////



////////////////////////////////////////////////
/////// MOBILE COMPONENTS BELOW ////////////////
////////////////////////////////////////////////

const MobileOrderContainer = styled.div`
    @media only screen and (min-width: 600px) {
        display: none;
    }    

    min-height: 60vh;

    display: flex;
    width: fit-content;
    gap: 0px;
    transform: ${props => props.showDetail? "translateX(-50%)" : "translateX(0%)"};
    transition: all 0.8s ease-in-out;

`;

const MobileOrderWrapper = styled.div`
    margin: 25px 0px;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
`;

const MobileBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 25px;
    gap: 35px;
    padding-top: 5px;
`; 

const MobileCustomImg = styled.img`
    height: 100px;
    width: auto;
`;

const MobileImageWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

const MobileBottomText = styled.div`
    text-align: left;
    padding-left: 20px;
    padding-bottom: 10px;
`;

const MobileDetailButton = styled.div`
    color: #f59f4c;
    font-weight: bold;
    text-decoration: underline;
`;

const MobileDetailsOrder = styled.div`
    min-height: 400px;
    width: 94vw;
    height: 80vh;
    overflow-y: scroll;
`;

const BackButtonWrapper = styled.div`
    text-align: left;
    padding-left: 50px;
`;

const CustomMobileDetailsOrder = styled(MobileDetailsOrder)`
    height: fit-content;
`;

const HoverBlock = styled.div`
    margin: 10px auto;
    text-align: left;
    padding: 10px 30px;
    background: white;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid grey;
    font-size: 19px;
`;

const CustomHoverBlock = styled(HoverBlock)`
    border-bottom: none;
`;

const MobileSingleItemImg = styled.img`
    height: auto;
    width: 70%;
    align-self: center;
    display: block;
    margin: 0px auto;
    margin-bottom: 10px;
`;

const CustomMobileSingleItemImg = styled.img`
    height: auto;
    width: 70%;
    max-width: 300px;
    align-self: center;
    display: block;
    margin: 0px auto;
`;

const MobileOrderTitle = styled(OrderTitle)`
    color: #f59f4c;
    font-size: 21px;
    font-weight: bold;
`;

const MobileItemName = styled.div`
    font-size: 21px;
`;

const CustomRating = styled(Rating)`
    margin-bottom: 20px;
    transform: scale(0.7);
`;

const MobileDetailItem = styled.div`
    margin-bottom: 40px;
`;

const NoOrderMessage = styled.div`
    width: 80%;
    margin: 20px auto;
    margin-bottom: 0px;
    font-size: 20px;
    color: rgb(82, 82, 102);
`;

////////////////////////////////////////////////
/////// MOBILE COMPONENTS ABOVE ////////////////
////////////////////////////////////////////////



function ProfileOrders({token}) {
    const [showDetail,setShowDetail] = useState(false);
    const [orderShowed,setOrderShowed] = useState(null);
    const [currentProduct,setCurrentProduct] = useState({
        category: "category",
        name: "name",
        cartImage: null
    });
    const nav = useNavigate();
    
    const [page,setPageNumber] = useState(0);
    const [expandeds,setExpandeds] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isLastPage,setIsLastPage] = useState(false);
    const url = `/api/orders/me`;
    const config = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };
    const { data, loading, error } = useFetch(url, config, page);


    const handleLoadMore = (e) => {
        e.preventDefault();
        setPageNumber(prev=>prev+1);
    }

    useEffect(() => {
        if (data) {
            setOrders(prev => {
                const uniqueIds = new Set(prev.map(order => order.id));
                const newOrders = data.content.filter(order => !uniqueIds.has(order.id));
                return [...prev, ...newOrders];
            });
            if (data.last) {
                setIsLastPage(true);
            }
        }
    }, [data]);  
    

    const handleShowDetail = (order) => {
        // TODO: navigation to detail page;
        setShowDetail(true);
        setOrderShowed(order);
    }

    const handleHideDetail = () => {
        // TODO: navigation to detail page;
        setShowDetail(false);
        setTimeout(()=>setOrderShowed(null),700);
    }

    const handleAddReview = (e,item) => {
        e.preventDefault();
        const tempItem = {
            category: item.itemName,
            name: item.secondaryName,
            cartImage: item.cartImage,
            id: item.productId
        };

        console.log("item: ",item);
        setCurrentProduct(tempItem);
        const button = document.getElementById("leave-a-review-modal");
        if (!button)
            return;
        setTimeout(()=>button.click(),0);
    }

  return (
    <Container>
        <ReviewModal currentProduct={currentProduct} productImage={currentProduct? currentProduct.cartImage : null} token={token}/>
        {
            !loading && orders.length === 0 && 
            <div>
                <NoOrderMessage>Sie haben bisher keine Bestellungen aufgegeben. Entdecken Sie unsere vielfältige Produktauswahl auf unserer Einkaufsseite und finden Sie etwas, das Ihnen gefällt!</NoOrderMessage>
                <CustomMobileSingleItemImg src={NoOrderImg}/>
                <Button onClick={(e)=>nav("/geschaft")} size='large' variant="outlined" color="warning">Sehen Sie unsere Produkte</Button>
            </div>
        }
        <DesktopOrderContainer>
        {
            orders.length > 0 &&
            
            orders.map((order,index)=>{
                const images = order.orderItems.map(item=>item.cartImage);
                return (
                        <SingleOrder key={index}>
                            <Header>
                                <HeaderColumn>
                                    <OrderTitle>Erstellt am:</OrderTitle>
                                    <div>{convertDate(order.createdAt)}</div>   
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Status:</OrderTitle>
                                    <div>{order.orderStatus}</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Sendungscode:</OrderTitle>
                                    <div>{order.cargoCode || "-"}</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Bestellnummer:</OrderTitle>
                                    <div>{order.traceCode.slice(0,3)+" - "+order.traceCode.slice(3,6)+" - "+order.traceCode.slice(6,9)}</div>
                                </HeaderColumn>
                            </Header>
                            <Header>
                                <HeaderColumn>
                                    <OrderTitle>Artikel:</OrderTitle>
                                    <div>{(order.price).toFixed(2)} €</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Versand:</OrderTitle>
                                    <div>{(order.shippingPrice).toFixed(2)} €</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Gesamt:</OrderTitle>
                                    <div>{(order.price + order.shippingPrice).toFixed(2)} €</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Bezahlverfahren:</OrderTitle>
                                    <div>{order.paymentMethod}</div>
                                </HeaderColumn>
                            </Header>
                            <Header>
                                <div><b>Lieferadresse:</b> {order.street} {order.doorNumber}, {order.city} / {order.state} ({order.postalCode})</div>
                            </Header>
                            {
                                expandeds.includes(index) &&
                                <ReapetOrderWrapper>
                                <div onClick={()=>setExpandeds(prev=>{
                                    if (prev.includes(index))
                                        return prev.filter(item=>item!==index);
                                    else
                                        return [...prev, index];
                                })}>
                                    <Button color='warning'>Weniger Infos</Button>
                                </div>
                                </ReapetOrderWrapper>
                            }
                            
                            <Body expand={expandeds.includes(index)}>
                                {
                                    order.orderItems?.map((item,index)=>{
                                        const attr = JSON.parse(item.attributes);
                                        return (
                                            <OrderItemContainer key={index}>
                                                    <CustomImage src={item.cartImage}/>
                                                    <ItemDetailWrapper>
                                                        <div style={{color: "black", fontWeight: "700", fontSize: "20px"}}>{item.itemName}</div>
                                                        <div style={{color: "#696984", fontWeight: "700", fontSize: "19px"}}>{item.secondaryName}</div>
                                                        <div>
                                                            {
                                                                attr.map((a,i)=>{
                                                                    return (
                                                                        <li key={i}>{a}</li>
                                                                    );
                                                                })
                                                            }
                                                        </div>
                                                        <div style={{color: "#696984", fontWeight: "700", fontSize: "19px", marginTop: "10px"}}>{item.quantity} x {item.price.toFixed(2)}€</div>
                                                    </ItemDetailWrapper>
                                                    <ButtonWrapper>
                                                        <Button onClick={(e)=>handleAddReview(e,item)} size='small' variant="outlined" color="warning">Kommentar</Button>
                                                        <Button 
                                                            onClick={(e)=>{
                                                                e.preventDefault();
                                                                window.location.href = "mailto:info@hell-insektenschutz.de";
                                                            }} 
                                                            size='small' 
                                                            variant="outlined" 
                                                            color="warning"
                                                        >
                                                            Kontaktiere uns
                                                        </Button>
                                                    </ButtonWrapper>
                                            </OrderItemContainer>
                                        );
                                    })
                                }
                            </Body>
                            <ImageBody expand={!expandeds.includes(index)}>
                                {
                                    images.map((item,i)=> {
                                        return (
                                            <img alt='image of sold product' height='110px' width='auto' src={item}/>
                                        )
                                    })
                                }
                            </ImageBody>
                            <hr></hr>
                            <ReapetOrderWrapper>
                                <div onClick={()=>setExpandeds(prev=>{
                                    if (prev.includes(index))
                                        return prev.filter(item=>item!==index);
                                    else
                                        return [...prev, index];
                                })}>
                                    <Button color='warning'>{expandeds.includes(index)?"Weniger Infos": "Mehr Infos"}</Button>
                                </div>
                            </ReapetOrderWrapper>
                        </SingleOrder>
                );
            })
        }

        {
            isLastPage===false && !loading &&
            <Button onClick={(e)=>handleLoadMore(e)} variant="contained" color='warning'>
                    Mehr laden
                <ArrowDropDownIcon style={{marginLeft: "5px", marginRight: "-12px"}}/>    
            </Button>
        }
        {
                loading && 
                <div style={{}}>
                    <CircularProgress color='warning' />    
                </div>
        }
        </DesktopOrderContainer>

        <div style={{overflow: "hidden"}}>
            <MobileOrderContainer showDetail={showDetail}>
            {
                orders.length > 0 &&
                <MobileDetailsOrder>
                        {  
                        orders.map((order,index)=>{
                            const imageArray = order.orderItems.map(item=>item.cartImage);
                            const itemCount = order.numberOfItems;
                            return (
                                    <MobileOrderWrapper key={index}>
                                        <Header>
                                            <div>
                                                <div>{convertDate(order.createdAt)}</div>
                                                <div>Bestellnummer: {order.traceCode.slice(0,3)+"-"+order.traceCode.slice(3,6)+"-"+order.traceCode.slice(6,9)}</div>
                                                <div>Gesamt: {(order.price + order.shippingPrice).toFixed(2)} €</div>
                                            </div>
                                            <MobileDetailButton onClick={()=>handleShowDetail(order)}>Einzelheiten</MobileDetailButton>
                                        </Header>
                                        <MobileBody>
                                            <div>Status: {order.orderStatus}</div>
                                            <MobileImageWrapper>
                                                {
                                                    imageArray.map((item,index)=>{
                                                        // TODO:  USE ITEM AS PROPS!!!!!!!!
                                                        return (
                                                            <MobileCustomImg key={index} src={item}/>
                                                        );
                                                    })
                                                }
                                            </MobileImageWrapper>
                                        </MobileBody>
                                        <hr></hr>
                                        <MobileBottomText>{itemCount} Artikel</MobileBottomText>
                                    </MobileOrderWrapper>
                                );
                            })
                        }
                        {
                        isLastPage===false && !loading &&
                        <Button onClick={(e)=>handleLoadMore(e)} variant="contained" color='warning'>
                                Mehr laden
                            <ArrowDropDownIcon style={{marginLeft: "5px", marginRight: "-12px"}}/>    
                        </Button>
                        }
                        {
                            loading && 
                            <div style={{}}>
                                <CircularProgress color='warning' />    
                            </div>
                        }
                </MobileDetailsOrder>
            }
            {
                orders.length===0 && loading && 
                    <div style={{transform: "translateX(45vw)"}}>
                        <CircularProgress color='warning' />    
                    </div>
            }
            {
                orders.length > 0 && orderShowed!==null &&
                <CustomMobileDetailsOrder>
                    <BackButtonWrapper onClick={()=>handleHideDetail()}>
                        <ArrowBackIcon fontSize='large' color='warning'/>
                    </BackButtonWrapper>
                    <HoverBlock>
                        <MobileOrderTitle>Einzelheiten:</MobileOrderTitle>
                        <div>
                            Status: {orderShowed.orderStatus}
                        </div>
                        <div>
                            Bezahlverfahren: {orderShowed.paymentMethod}
                        </div>
                        <div>
                            Sendungscode: {orderShowed.cargoCode || "-"}
                        </div>
                        <div>
                                Bestellnummer: {orderShowed.traceCode.slice(0,3)+"-"+orderShowed.traceCode.slice(3,6)+"-"+orderShowed.traceCode.slice(6,9)}
                        </div>
                        <div>
                            Erstellt am: {convertDate(orderShowed.createdAt)}
                        </div>
                        <div>
                            Letztes Update: {convertDate(orderShowed.lastUpdate) || "-"}
                        </div>
                    </HoverBlock>

                    <HoverBlock>
                        <MobileOrderTitle>Lieferadresse:</MobileOrderTitle>
                        <div>{orderShowed.street} {orderShowed.doorNumber}, {orderShowed.city} / {orderShowed.state} ({orderShowed.postalCode})</div>
                    </HoverBlock>

                    <CustomHoverBlock>
                        <MobileOrderTitle>Artikel:</MobileOrderTitle>
                        <div>
                            {
                                orderShowed.orderItems?.map((item,index)=>{
                                    const arr = JSON.parse(item.attributes);
                                    return (
                                        <div className='my-5' key={index}>
                                            <MobileSingleItemImg src={item.cartImage} height='100px'/>
                                            <MobileDetailItem>
                                                <MobileItemName style={{fontWeight: "bold", color: "black", fontSize: "22px"}}>{item.itemName}</MobileItemName>
                                                <MobileItemName style={{fontWeight: "bold", color: "#696984", marginBottom: "15px"}}>{item.secondaryName}</MobileItemName>
                                                {
                                                    false && item.product.numberOfRating > 0 && 
                                                    <div>
                                                        <CustomRating fontSize='large' name="half-rating-read" defaultValue={item.product.rating} precision={0.5} readOnly />
                                                    </div>
                                                }
                                                <div>
                                                    {
                                                        arr.map((a,i)=>{
                                                            return (
                                                                <li key={i}>{a}</li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div style={{fontWeight: "bold", color: "#696984", marginBottom: "15px", marginTop: "25px", fontSize: "21px"}}>{item.quantity} x {item.price.toFixed(2)}€  </div>
                                                <Button className='my-2' onClick={(e)=>handleAddReview(e,item)} size='large' variant="outlined" color="warning">Kommentar</Button>
                                                <Button className='mx-2' 
                                                        size='large'
                                                        onClick={(e)=>{
                                                                e.preventDefault();
                                                                window.location.href = "mailto:info@hell-insektenschutz.de";
                                                            }} 
                                                            variant="outlined" 
                                                            color="warning"
                                                        >
                                                            Kontakt
                                                        </Button>
                                            </MobileDetailItem>
                                            
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </CustomHoverBlock>
                </CustomMobileDetailsOrder>
            }
            </MobileOrderContainer>
        </div>
    </Container>
  )
}

export default ProfileOrders;
