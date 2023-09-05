import React, { useLayoutEffect } from 'react'
import { Row, ServiceWrapper, Container } from '../LandingPageComponents/Products'
import data from '../Data/data'
import Header from '../CustomComponents/Header';
import { useNavigate } from 'react-router-dom';

const dataList = data.fenster;

function Fenster() {
  const navigate = useNavigate()
  const nav = (arg) => {
    navigate(arg);
  }

  useLayoutEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])


  return (
    <div>
        <Header/>
        <Container>
            <ServiceWrapper>
                {
                dataList.map((item,index)=> <Row func={()=>nav(`/einzelheiten/fenster/${item.url}`)} showNav={true} key={index} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
                }
            </ServiceWrapper>
        </Container>
    </div>
  )
}

export default Fenster