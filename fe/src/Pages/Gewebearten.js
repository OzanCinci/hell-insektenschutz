import React from 'react'
import { Row, ServiceWrapper, Container } from '../LandingPageComponents/Products'
import data from '../Data/data'

const dataList = data.gewebearten;

function Gewebearten() {
  return (
    <div>
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