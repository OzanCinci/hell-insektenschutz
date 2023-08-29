import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    min-height: 500px;
    margin-top: 180px;
    text-align: left;
    max-width: 1300px;
    min-width: 300px;
    width: 80%;
    margin: 180px auto;

    &> div {
        font-size: 20px;
        margin: 20px 10px;
    }

    .liElement {
        font-size: 20px;
    }

    &> h4, .header {
        font-weight: bold;
    }

    @media only screen and (max-width: 1200px) {
        margin-top: 110px;
    }
`;

function Impressum() {
  return (
    <Container>
        <h1 style={{textAlign:'center'}} className='header'>IMPRESSUM</h1>
        <br></br>
        <h3>
            Hakan Aydin
        </h3>
        <h3>Zeppelinstr.10</h3>
        <h3>76448 Durmersheim</h3>
        <h3>Umsatzsteuer-Identi kationsnummer</h3>
        <h3>gemäß §27 a Umsatzsteuergesetz:</h3>
        <h3>Steur id Nr. 92415358078</h3>
    </Container>
  )
}

export default Impressum