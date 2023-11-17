import React, { useState } from 'react';
import styled from 'styled-components';
import { convertDate } from '../../utils/datetime';
import TempImg from '../../images/details/plissee.jpg';
import TempImg2 from '../../images/details/alt_schiebetür.jpg';
import Button from '@mui/material/Button';

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
    border: 1px solid #f0f2f2;
    border-radius: 0px 0px 10px 10px;
    margin-top: 25px;
    width: 100%;

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
`;
////////////////////////////////////////////////
/////// MOBILE COMPONENTS ABOVE ////////////////
////////////////////////////////////////////////

function ProfileOrders({orders}) {
    const [showDetail,setShowDetail] = useState(false);
    const [orderShowed,setOrderShowed] = useState(null);

    const handleShowDetail = (order) => {
        // TODO: navigation to detail page;
        setShowDetail(true);
        setOrderShowed(order);
        console.log("order: ",order);
    }


  return (
    <Container>
        {
            orders.length === 0 && 
            <div>
                <div>No Order Yet</div>
                <button>Go shopping</button>
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
                                    <OrderTitle>Order Date:</OrderTitle>
                                    <div>{convertDate(order.createdAt)}</div>   
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Status:</OrderTitle>
                                    <div>{order.orderStatus}</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Total:</OrderTitle>
                                    <div>{order.totalPrice} €</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Delivery Address:</OrderTitle>
                                    <div>{order.address}</div>
                                </HeaderColumn>
                                <HeaderColumn>
                                    <OrderTitle>Payment Method:</OrderTitle>
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
                                                        <div>{item.quantity} x {item.product.name}</div>
                                                        <div>{item.measurements}</div>
                                                        <div>{item.quantity} x {item.price}€</div>
                                                    </ItemDetailWrapper>
                                                    <ButtonWrapper>
                                                        <Button onClick={(e)=>{}} size='small' variant="outlined" color="warning">Buy Again</Button>
                                                        <Button onClick={(e)=>{}} size='small' variant="outlined" color="warning">Contact Us</Button>
                                                        <Button onClick={(e)=>{}} size='small' variant="outlined" color="warning">Add a Review</Button>
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
                                                <div>Total: {order.totalPrice} €</div>
                                            </div>
                                            <MobileDetailButton onClick={()=>handleShowDetail(order)}>Details</MobileDetailButton>
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
                                        <MobileBottomText>{itemCount} Product(s)</MobileBottomText>
                                    </MobileOrderWrapper>
                                );
                            })
                        }
                </MobileDetailsOrder>
            }
            {
                orders.length > 0 &&
                <MobileDetailsOrder>
                    test123
                </MobileDetailsOrder>
            }
            </MobileOrderContainer>
        </div>
    </Container>
  )
}

export default ProfileOrders