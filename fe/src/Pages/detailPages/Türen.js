import React from 'react';
import { Row, ServiceWrapper, Container } from '../../LandingPageComponents/Products';
import data from '../../Data/data';
import Header from '../../CustomComponents/Header';

const dataList = data.türen;

function Türen() {
  return (
      <div>
          <Header h1={"Insektenschutz & Fliegengitter für Ihre Tür "}/>
          <Container>
              <ServiceWrapper>
                  {
                  dataList.map((item,index)=> <Row url={`/einzelheiten/turen/${item.url}`} showNav={true} key={index} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
                  }
              </ServiceWrapper>
          </Container>
      </div>
  )
}

export default Türen;
