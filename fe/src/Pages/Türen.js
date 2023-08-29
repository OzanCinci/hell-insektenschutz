import React, { useLayoutEffect } from 'react'
import { Row, ServiceWrapper, Container } from '../LandingPageComponents/Products'
import data from '../Data/data'
import Header from '../CustomComponents/Header';

const dataList = data.türen;

function Türen() {

    useLayoutEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },[])

  return (
      <div>
          <Header/>
          <Container>
              <ServiceWrapper>
                  {
                  dataList.map((item,index)=> <Row key={index} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
                  }
              </ServiceWrapper>
          </Container>
      </div>
  )
}

export default Türen