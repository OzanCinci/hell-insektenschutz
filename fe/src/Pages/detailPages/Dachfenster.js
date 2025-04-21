import React from 'react';
import { Row, ServiceWrapper, Container } from '../../LandingPageComponents/Products';
import data from '../../Data/data';
import Header from '../../CustomComponents/Header';

const dataList = data.dachfenster;

function Dachfenster() {
  return (
    <div>
      <Header h1={"Insektenschutz für Dachfenster "}/>
      <Container>
          <ServiceWrapper>
              {
              dataList.map((item,index)=> <Row url={`/einzelheiten/dachfenster/${item.url}`} showNav={true} key={index} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
              }
          </ServiceWrapper>
      </Container>
    </div>
  )
}

export default Dachfenster;
