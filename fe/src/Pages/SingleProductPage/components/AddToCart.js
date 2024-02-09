import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { ADD_TO_CART } from '../../../constants/user';
import { useDispatch } from 'react-redux';

const Container = styled.div`
    box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: fit-content;
    width: 45%;
    gap: 20px;
    min-width: 350px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
`;

function AddToCart() {
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch();
    // to help finding the customized item easily later on...
    const generateUniqueCode = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

    const handleAddToCard = (e) => {
    e.preventDefault();
    console.log("add to card!!");
    const uniqueCode = generateUniqueCode();

    const item = {
        //measurements: `${breite}x${tiefe}`,

        // TODO: GERÇEK OLÇÜLER GELCEK TABİKİ
        measurements: `300X400`,
        price: 140, // tekil fiyat
        quantity: quantity, // 2 x 140€
        uniqueCode: uniqueCode,
        product: {
            category: "ürün kategorisi",
            description: "ürün hakkında açıklama: ",
            id: 1,
            imageUrl: "url",
            name: "Ürün adı 2",
            rating: 4.8,
            numberOfRating: 12
        }
    }

    dispatch({type:ADD_TO_CART,payload:item});

    const button = document.getElementById('open-notification-button');
    if (button)
        setTimeout(()=>button.click(),300);
    }

  return (
    <Container>
          <Wrapper>
            <QuantityWrapper>
              <div style={{width: "fit-content", fontSize: "20px"}}> 140 €</div>
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
            </QuantityWrapper>
            <TotalPrice>
              <div>Gesamt:</div>
              <div>{140*quantity} €</div>
            </TotalPrice>
          </Wrapper>
          <Button onClick={e=>handleAddToCard(e)} style={{width: "100%"}} color='warning' variant="contained">In den Warenkorb</Button>

    </Container>
  )
}

export default AddToCart