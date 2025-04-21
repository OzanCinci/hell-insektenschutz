import React from 'react';
import { Row, ServiceWrapper, Container } from '../../LandingPageComponents/Products';
import data from '../../Data/data';
import Header from '../../CustomComponents/Header';

const dataList = data.lich;

function Lichtschachte() {
  return (
    <div>
      <Header h1={"Insektenschutz für Lichtschacht "}/>
      <Container>
          <ServiceWrapper>
              {
              dataList.map((item,index)=> <Row url={`/einzelheiten/lichtschachte/${item.url}`} showNav={item.url||false} key={index} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
              }
          </ServiceWrapper>
      </Container>
    </div>
  )
}

export default Lichtschachte