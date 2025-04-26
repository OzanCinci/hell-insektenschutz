import React from 'react';
import styled from 'styled-components';
import PhotoComponent from './PhotoComponent';

const Container = styled.div`
    min-height: 500px;
    text-align: left;
    max-width: 1300px;
    min-width: 300px;
    width: 80%;
    margin: auto;
    margin-top: 40px;
   
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
        margin-top: 30px;

        &> div {
            font-size: 18px;
        }
    
        .liElement {
            font-size: 18px;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Impressum() {
  return (
    <Wrapper>
        <PhotoComponent/>
        <Container>
            <h1 style={{textAlign: 'center'}} className='header'>IMPRESSUM</h1>
            <br></br>
            <h3>
                Hakan Aydin
            </h3>
            <h3>Lochfeldstraße 30</h3>
            <h3>76437 Rastatt</h3>
            <h3>Deutschland</h3>
            <br/>
            <h3>Tel.: +49 176 62960342</h3>
            <h3>E-Mail: info@hell-insektenschutz.de</h3>
            <h3>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</h3>
            <h3>DE 354 90 90 66</h3>
        </Container>
    </Wrapper>
  )
}

export default Impressum;
