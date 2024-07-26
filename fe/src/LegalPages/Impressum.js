import React, { useLayoutEffect } from 'react'
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
`

function Impressum() {

    useLayoutEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },[])

      

  return (
    <Wrapper>
        <PhotoComponent/>
        <Container>
            <h1 style={{textAlign:'center'}} className='header'>IMPRESSUM</h1>
            <br></br>
            <h3>
                Hakan Aydin
            </h3>
            <h3>Lochfeldstraße 30,</h3>
            <h3>76437 Rastatt, Deutschland</h3>
            <h3>Umsatzsteuer-Identi kationsnummer</h3>
            <h3>gemäß §27 a Umsatzsteuergesetz:</h3>
            <h3>Steur id Nr. 92415358078</h3>
        </Container>
    </Wrapper>
  )
}

export default Impressum;
