import React, { useState } from 'react';
import styled from 'styled-components';
import { convertDate } from '../../utils/datetime';
import TempImg from '../../images/details/plissee.jpg';
import TempImg2 from '../../images/details/alt_schiebetür.jpg';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import NoOrderImg from '../../images/account/sepet.jpeg';

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
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
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
`;

const OrderItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    padding-left: 25px;
    gap: 30px;
`;

const CustomImage = styled.img`
    height: 80px;
    width: auto;
`;

const ItemDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
    height: 60px;
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
    font-size: 18px;
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

function ProfileOrders({orders}) {
    const [showDetail,setShowDetail] = useState(false);
    const [orderShowed,setOrderShowed] = useState(null);
    const nav = useNavigate();

    const handleShowDetail = (order) => {
        // TODO: navigation to detail page;
        setShowDetail(true);
        setOrderShowed(order);
        console.log("order: ",order);
    }

    const handleHideDetail = () => {
        // TODO: navigation to detail page;
        setShowDetail(false);
        setTimeout(()=>setOrderShowed(null),700);
    }

    const handleAddReview = (e) => {
        e.preventDefault();
        const button = document.getElementById("leave-a-review-modal");
        if (!button)
            return;
        button.click();
    }

  return (
    <Container>
        {
            orders.length === 0 && 
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
                                    <OrderTitle>Gesamt:</OrderTitle>
                                    <div>{order.totalPrice} €</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Lieferadresse:</OrderTitle>
                                    <div>{order.address}</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Bezahlverfahren:</OrderTitle>
                                    <div>{order.paymentMethod}</div>
                                </HeaderColumn>
                            </Header>
                            <Body>
                                {
                                    order.orderItems?.map((item,index)=>{
                                        return (
                                            <OrderItemContainer key={index}>
                                                    <CustomImage src={TempImg}/>
                                                    <ItemDetailWrapper>
                                                        <div>{item.quantity> 1 ? `${item.quantity} x`: ""} {item.product.name}</div>
                                                        <div>{item.measurements}</div>
                                                        <div>{item.quantity} x {item.price}€</div>
                                                    </ItemDetailWrapper>
                                                    <ButtonWrapper>
                                                        <Button onClick={(e)=>{}} size='small' variant="outlined" color="warning">Wieder Kaufen</Button>
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
                                                        <Button onClick={(e)=>handleAddReview(e)} size='small' variant="outlined" color="warning">Kommentar</Button>
                                                    </ButtonWrapper>
                                            </OrderItemContainer>
                                        );
                                    })
                                }
                            </Body>
                            <hr></hr>
                            <ReapetOrderWrapper>
                                <Button onClick={(e)=>{}} size='small' variant="outlined" color="warning">Repeat The Order</Button>
                            </ReapetOrderWrapper>
                        </SingleOrder>
                );
            })
        }
        </DesktopOrderContainer>

        <div style={{overflow: "hidden"}}>
            <MobileOrderContainer showDetail={showDetail}>
            {
                orders.length > 0 &&
                <MobileDetailsOrder>
                        {  
                        orders.map((order,index)=>{
                            const imageArray = order.orderItems.map(item=>item.product.imageUrl);
                            const uniqueImageArray = imageArray.filter((value, index, self) => self.indexOf(value) === index);
                            const mockDataArray = [TempImg2,TempImg,TempImg2,TempImg,TempImg2];

                            const itemCount = order.orderItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
                            return (
                                    <MobileOrderWrapper key={index}>
                                        <Header>
                                            <div>
                                                <div>{convertDate(order.createdAt)}</div>
                                                <div>Gesamt: {order.totalPrice} €</div>
                                            </div>
                                            <MobileDetailButton onClick={()=>handleShowDetail(order)}>Einzelheiten</MobileDetailButton>
                                        </Header>
                                        <MobileBody>
                                            <div>{order.orderStatus}</div>
                                            <MobileImageWrapper>
                                                {
                                                    mockDataArray.map((item,index)=>{
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
                </MobileDetailsOrder>
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
                            Erstellt am: {convertDate(orderShowed.createdAt)}
                        </div>
                        <div>
                            Letztes Update: {convertDate(orderShowed.lastUpdate)}
                        </div>
                    </HoverBlock>

                    <HoverBlock>
                        <MobileOrderTitle>Lieferadresse:</MobileOrderTitle>
                        <div>{orderShowed.address}</div>
                        <div>{orderShowed.city} / {orderShowed.country}</div>
                        <div>{orderShowed.postalCode}</div>
                    </HoverBlock>

                    <CustomHoverBlock>
                        <MobileOrderTitle>Artikel:</MobileOrderTitle>
                        <div>
                            {
                                orderShowed.orderItems?.map((item,index)=>{
                                    console.log("here: ",item);
                                    return (
                                        <div className='my-5' key={index}>
                                            <MobileSingleItemImg src={index%2==0? TempImg: TempImg2} height='100px'/>
                                            <MobileDetailItem>
                                                <MobileItemName>{item.quantity> 1 ? `${item.quantity} x`: ""} {item.product.name}</MobileItemName>
                                                {
                                                    item.product.numberOfRating > 0 && 
                                                    <div>
                                                        <CustomRating fontSize='large' name="half-rating-read" defaultValue={item.product.rating} precision={0.5} readOnly />
                                                    </div>
                                                }
                                                <div>{item.measurements}</div>
                                                <div>{item.price}€  {item.quantity>1 ? `(${item.price/item.quantity} euro pro Artikel)`: ""}</div>
                                                <Button className='my-2' onClick={(e)=>handleAddReview(e)} size='small' variant="outlined" color="warning">Kommentar</Button>
                                                <Button className='mx-2' onClick={(e)=>{}} size='small' variant="outlined" color="warning">Wieder Kaufen</Button>
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

export default ProfileOrders