import React from 'react';
import { Row, ServiceWrapper, Container } from '../../LandingPageComponents/Products';
import data from '../../Data/data';
import Header from '../../CustomComponents/Header';

const dataList = data.fenster;

function Fenster() {
  return (
    <div>
        <Header h1={"Fliegengitter für Ihre  Fenster "}/>
        <Container>
            <ServiceWrapper>
                {
                    dataList.map((item,index)=> <Row url={`/einzelheiten/fenster/${item.url}`} showNav={true} key={index} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
                }
            </ServiceWrapper>
        </Container>
    </div>
  )
}

export default Fenster