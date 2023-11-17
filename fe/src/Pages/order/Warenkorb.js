import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TempImg from '../../images/details/plissee.jpg';
import TempImg2 from '../../images/details/alt_schiebetür.jpg';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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

const CustomInput = styled.input`
    width: 40px;
    text-align: center;
    border: none;
    border-bottom: 1px solid rgba(237, 108, 2, 0.5);
    border-top: 1px solid rgba(237, 108, 2, 0.5);
    color: #696984;
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

const Preis = styled.div`
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

const SingleItem = styled(({url,index, measurements, quantity, price, product, handleQuantityChange, handleButtonClick})=>{
    return (
        <SingItemContainer>
            <LeftPart>
                <CustomImg src={index%2===0? TempImg: TempImg2}/>
                <ItemInfo>
                    <div>
                        <div>{product.name}</div>
                        <div>{measurements}</div>
                        
                    </div>
                    <AntiPreis>{price} €</AntiPreis>
                    <ButtonGroupWrapper>
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                            >
                            <Button style={{borderColor: "rgba(237, 108, 2, 0.5)"}} onClick={e=>handleButtonClick(e,index,-1)} variant="outlined" color='warning'>-</Button>
                            <CustomInput 
                                value={quantity} 
                                type='number'
                                onChange={handleQuantityChange}  
                            />
                            <Button onClick={e=>handleButtonClick(e,index,1)} variant="outlined" color='warning'>+</Button>
                        </ButtonGroup>
                            <RemoveAll>entfernen</RemoveAll>
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

/*
const mockData = {
    shippingPrice: 6.0,
    price : 460.0,
    items : [
        {
            measurements: "248x500",
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
            measurements: "560x1200",
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
*/
function Warenkorb() {
    const [mockData,setMockData] = useState({
        shippingPrice: 6.0,
        price : 460.0,
        items : [
            {
                measurements: "248x500",
                price: 140,
                quantity: 2,
                product: {
                    category: "ürün kategorisi",
                    description: "ürün hakkında açıklama: ",
                    id: 1,
                    imageUrl: "url",
                    name: "Ürün adı 2",
                    rating: 4.8,
                    numberOfRating: 12
                }
            },
            {
                measurements: "560x1200",
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
    });
    const nav = useNavigate();

    const handleQuantityChange = (e,index) => {
        // TODO: extra checks for deletion
        let items = mockData.items;
        let price = mockData.price;
        const diff = e.target.value - items[index].quantity;
        items[index].quantity =  e.target.value;
        price += diff * items[index].price; 
        setMockData({...mockData, price:price, items: [...items]});
        return;
    };

    const handleButtonClick = (e,index,value) => {
        e.preventDefault();
        // TODO: extra checks for deletion
        let items = mockData.items;
        let price = mockData.price;
        items[index].quantity +=  Number(value);
        price += value * items[index].price; 
        setMockData({...mockData, price:price,  items: [...items]});
        return;
    }


  return (
    <Container>
        <Items>
            <Desc>Artikel in Ihrem Warenkorb</Desc>
            <SubDesc>
                <RemoveAll>Alles entfernen</RemoveAll>
                <Preis>Preis</Preis>
            </SubDesc>
            <hr></hr>
            <div>
                {
                    mockData.items.map((item,index)=>{
                        return (
                            <>
                            <SingleItem 
                                key={index} 
                                index={index} 
                                url='' 
                                measurements={item.measurements} 
                                quantity={item.quantity} 
                                price={item.price} 
                                product={item.product} 
                                handleQuantityChange={e=>handleQuantityChange(e,index)} 
                                handleButtonClick={handleButtonClick}
                            />
                            <hr></hr>
                            </>
                        );
                    })
                }
            </div>
            <TotalAmount><TotalAmountDesc>Zwischensumme (3) Artikel: </TotalAmountDesc>{mockData.price} €</TotalAmount>
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
            <Button onClick={()=>nav("/order-create")} style={{width: "18rem"}} variant="contained" color='warning'>Bestellung abschließen</Button>
        </Summary>
    </Container>
  )
}

export default Warenkorb