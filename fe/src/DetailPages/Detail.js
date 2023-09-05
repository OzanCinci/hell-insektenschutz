import React, { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {data} from './Data'
import { Row, ServiceWrapper, Container } from '../LandingPageComponents/Products';


const DetailContainer = styled.div`
    min-height: 900px;
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    padding-top: 60px;
    align-items: center;
    flex-direction: column;
`;

const ImageWrapper = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media only screen and (min-width: 1300px) {
    width: 100vw;
    /*
    background-image: linear-gradient(to left, #db5424, #debe40);
    */
   background-color: #f3f2f2;
}
`;

const Img = styled.img`
   width: 100vw;
   max-width: 1300px;

  @media only screen and (max-width: 820px) {
    width: 140vw;
    transform: translateX(15%);
  }
  @media only screen and (max-width: 630px) {
    transform: translateX(13%);
  }
  @media only screen and (max-width: 550px) {
    width: 220vw;
    transform: translateX(0%);
  }

`;

const WelcomingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 2px;
  width: 80%;
  max-width: 1000px;
`;

const WelcomeTitle = styled.div`
  margin-top: 20px;
  font-size: 35px;
  font-weight: 600;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 27px;
  }

  @media only screen and (max-width: 620px) {
    font-size: 23px;
  }
`;

const WelcomeText = styled.div`
  font-size: 28px;
  color: rgb(82, 82, 102);

  @media only screen and (max-width: 1000px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 23px;
  }

  @media only screen and (max-width: 620px) {
    font-size: 19px;
  }
`


function Detail() {
    const { 
        detailName , category
    } = useParams();
    const [subData,setSubdata] = useState({});
    const [detailData,setDetailData] = useState(null);

    useLayoutEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        //console.log("detailName: ", detailName, "category: ", category);
        
        
        setSubdata(data[category]); 
        //console.log("SUBDATA: ",data[category]);

        //console.log("TEST123", data[category][detailName])
        setDetailData(data[category][detailName]);
    
    },[window.location.pathname])

  return (
    <DetailContainer>
            {
                subData?.image!==null &&
                    <ImageWrapper>
                        <Img src={subData.image}/>
                    </ImageWrapper>
            }
        
            {
                detailData && detailData?.welcoming !==null &&
                <WelcomingTextWrapper>
                    <WelcomeTitle>{detailData.welcoming.title}</WelcomeTitle>
                    <WelcomeText>{detailData.welcoming.desc}</WelcomeText>
                </WelcomingTextWrapper>
            }

            {
                detailData && detailData?.data_array !==null &&
                <Container>
                    <ServiceWrapper>
                        {
                            detailData.data_array.map((item,index)=> <Row key={index} img={item.img}  text={item.text} def={item.def} title={item.title}/>)
                        }
                    </ServiceWrapper>
            </Container>
            }
         
    </DetailContainer>
  )
}

export default Detail