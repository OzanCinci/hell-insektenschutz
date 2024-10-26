import React, { useState } from 'react';
import styled from 'styled-components';
import OrderSuccess from './OrderSuccess';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


const CustomButton = styled(Button)`
    text-transform: none !important;
    font-size: 17px !important;

    @media only screen and (max-width: 800px) {
        margin-top: 15px !important;
    }    
`;

const Container = styled.div`
    margin-top: 0px;
    min-height: 120vh;
    background: #eaeded;
    padding-top: 140px;

    @media only screen and (max-width: 1200px) {
        padding-top: 110px;
    }    
   
`;

const Wrapper = styled.div`
    width: fit-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 650px;
    padding: 20px 30px;
    text-align: left;
    gap: 25px;

    margin-bottom: -50px;

    @media only screen and (max-width: 800px) {
        margin-bottom: -20px;
        max-width: 95vw;
        padding: 20px 10px;
    }
    
    -webkit-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    border-radius: 5px;
    background: white;
`;

const InputWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    width: fit-content;

     @media only screen and (max-width: 800px) {
        gap: 2px;
    }
`;

const CustomInput = styled.input`
    width: 90px;
    font-size: 18px;
    text-align: center;
    padding: 0px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;

    &:focus {
        outline: none;
        border-color: #f59f4c;
    }
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #696984;
`;

const Desc = styled.div`
    font-size: 19px;
    color: #696984;
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchOrder() {
    const nav = useNavigate();
    const query = useQuery();
    const traceCode = query.get('traceCode');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const handleSearch = (e) => {
        if (input1.length<3 || input2.length<3 || input3.length<3)
            return;


        const code = "?traceCode="+ input1 + "" + input2 + "" + input3 + "&init=false";
        nav(code);
    }

  return (
    <Container>
        <Wrapper>
            <Title>Haben Sie eine Bestellung?</Title>
            <Desc>
                Geben Sie Ihre Bestellnummer ein, um Ihre Bestellung zu verwalten. Sie finden Ihre Bestellnummer in der Bestätigungs-E-Mail. Bitte prüfen Sie auch den Spam-Ordner.
                <p>(Bestellnummer ist eine 9-stellige Nummer im Format xxx-xxx-xxx.)</p>
            </Desc>
        <InputWrapper>
                <CustomInput
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    maxLength={3}
                    placeholder="xxx"
                />
                <HorizontalRuleIcon fontSize='medium'/>
                <CustomInput
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    maxLength={3}
                    placeholder="xxx"
                />
                <HorizontalRuleIcon/>
                <CustomInput
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                    maxLength={3}
                    placeholder="xxx"
                />
            </InputWrapper>
            <div style={{width: "100%", textAlign: "right"}}>
                <CustomButton onClick={(e)=>handleSearch(e)} variant='outlined' color='warning'>suchen</CustomButton>
            </div>
        </Wrapper>
        <div>
            {
                traceCode && <OrderSuccess/>
            }
        </div>

    </Container>
  )
}

export default SearchOrder;
