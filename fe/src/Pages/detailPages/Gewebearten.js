import React, { useLayoutEffect } from 'react'
import { Row, ServiceWrapper, Container } from '../../LandingPageComponents/Products'
import data from '../../Data/data'
import Header from '../../CustomComponents/Header';

const dataList = data.gewebearten;

function Gewebearten() {

  useLayoutEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])

  return (
    <div>
      <Header/>
      <Container>
          <ServiceWrapper>
              {
              dataList.map((item,index)=> <Row data-aos-delay="350" key={index} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
              }
          </ServiceWrapper>
      </Container>
    </div>
  )
}

export default Gewebearten