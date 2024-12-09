import React from 'react';
import styled from 'styled-components';

import PlisseImg from '../images/shop/plissee.webp';
import JalousienImg from '../images/shop/jalousien.webp';
import RollosImg from '../images/shop/rollow.webp';
import LamellenvorhangImg from '../images/shop/lamellenvorhang.webp';
import InsekImg from '../images/shop/insek.webp';
import DoppelRoolo from '../images/shop/doppelrollo.webp';
import Wintergarten from '../images/shop/wintergarten.webp';
import HolzHalousie from '../images/shop/jalousie_holz.webp';
import AkuRollo from '../images/shop/rollo_aku.webp';
import SingleProduct from './SingleProduct';

const Container = styled.div`
    margin: auto;
    margin-top: 40px;
    max-width: 1400px;
`;

const Wrapper = styled.div`
    min-height: 300px;
    width: fit-content;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    row-gap: 20px;
`;

const data = [
    {title: "Plissee", image: PlisseImg, link: "/geschaft/plissees"},
    {title: "Akku Rollo", image: AkuRollo, link: "/geschaft/rollo/akku-rollo-optionen"},
    {title: "Lamellenvorhang", image: LamellenvorhangImg, link: "/geschaft/lamellenvorhang"},
    {title: "Jalousie", image: JalousienImg, link: "/geschaft/jalousien"},
    {title: "Doppelrollo", image: DoppelRoolo, link: "/geschaft/rollo/doppel-rollo-optionen"},
    {title: "Rollo", image: RollosImg, link: "/geschaft/rollos"},
    {title: "Holzjalousie", image: HolzHalousie, link: "/geschaft/jalousie/holzjalousie-optionen"},
    {title: "Insektenschutz", image: InsekImg, link: "/geschaft/insektenschutz"},
];

const Splitter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
`;

const Line = styled.div`
    border-bottom: 1px solid #696984;
    flex-grow: 1;
`;

const LineText = styled.div`
    color: #696984;
    font-size: 25px;
    font-weight: 700;
    width: fit-content;
    
    @media only screen and (max-width: 550px) {
        font-size: 20px;
    }   
`;

function ProduktCatalog() {
    // data-aos="fade-up"
  return (
    <Container>
        <Splitter>
            <Line></Line>
            <LineText>Unser Produktkatalog</LineText>
            <Line></Line>
        </Splitter>
        <Wrapper>
            {
                data.map((item,index)=>{
                    return (
                        <div key={index}>
                            <SingleProduct item={item}/>
                        </div>
                    )
                })
            }
        </Wrapper>
        
    </Container>
  )
}

export default ProduktCatalog;
