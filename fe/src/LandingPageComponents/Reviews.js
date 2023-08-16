import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarImg from "../images/reviews/star.svg"
import EmptyStarImg from "../images/reviews/empty.png"
import Logo from "../images/reviews/alt_logo.png"
import { getReviews } from '../Requests/reviews';


const ReviewContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #e8fbff;
  min-height: 1000px;
  gap: 5vh;

  @media only screen and (max-width: 880px) {
    gap: 2vh;
    padding-bottom: 40px;
  }
`

const ReviewsWrapper = styled.div`
  min-height: 400px;
  min-width: 360px;
  max-width: 2000px;
  width: 80%;


  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  .slick-active .dot { 
    background: orange;
  }
`

const Container = styled.div`
  border-radius: 12px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  margin-bottom: 30px;
  max-height: 300px;
  background: white;

  -webkit-box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
  -moz-box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
  box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
  

  overflow: hidden; /* Hide any overflowing content */
  text-overflow: ellipsis; /* Display "..." to indicate truncated text */
`


const TopPart = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Description = styled.div`
  text-align: left;
  color: rgb(82, 82, 102);
  font-size: 22px;

  @media only screen and (max-width: 860px) {
    font-size: 18px
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px
  }
`

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-top: 20px;
  background: white;
  -webkit-box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
  -moz-box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
  box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
`

const Title = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: rgb(82, 82, 102);
  margin: 20px 0px;
`

const SingleReview = styled(({name,date,rating,description})=>{ 
  return (
    <Container>
      <TopPart>
        <div>
          <div style={{fontSize: "18px", borderBottom: "1px solid #f59f4c", textDecorationColor: "#f59f4c"}}>{name}</div>
          <div>( {date} )</div>
        </div>
        <div>
          <div className='d-flex flex-row'>
            <img alt='star-img' height='20px' src={StarImg}/>
            <img alt='star-img' height='20px' src={StarImg}/>
            <img alt='star-img' height='20px' src={StarImg}/>
            <img alt='star-img' height='20px' src={StarImg}/>
            {rating >= 5 ? <img alt='star-img' height='20px' src={StarImg}/> : <img alt='star-img' height='20px' src={EmptyStarImg}/>}
          </div>
        </div>
      </TopPart>
      <Description>
        {description.length <= 260 ? description : description.substring(0, 260) + "..."}
      </Description>
    </Container>
  )})``;


const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging: i => (
      <Dot className='dot'>
      </Dot>
    )
  };

const GoogleReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center:
  align-items: center;
  gap: 80px;

  @media only screen and (max-width: 1200px) {
    gap: 50px;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 6px;
  }
`

const LogoImg = styled.img`
  height: 220px;
  width: auto;
  border-radius: 50%;
  -webkit-box-shadow: 11px 19px 24px -24px rgba(0,0,0,1);
  -moz-box-shadow: 11px 19px 24px -24px rgba(0,0,0,1);
  box-shadow: 11px 19px 24px -24px rgba(0,0,0,1);
`

const Font = styled(Title)`
  fontSize: 50px;
  margin: 0px;

  @media only screen and (max-width: 880px) {
    font-size: 28px;
  }
`

const CommentCount = styled.div`
  font-size: 30px;

  @media only screen and (max-width: 880px) {
    font-size: 22px;
  }
`

function Reviews() {
  const [data,setData] = useState(null);

  useEffect(()=>{
    async function getData() {
      const response = await getReviews();
      const temp = response.data.place_reviews_results.map(item => {
        return {
          name: item.source,
          date: item.date || "kürzlich",
          rating: item.rating,
          description: item.body
        }
      })
      .filter(item => item.rating >= 4)
      setData(temp)
    }

    if (data===null)
      getData();
  },[data]);



  return (
    data!==null ? 
    (<ReviewContainer>
      <GoogleReviewContainer >
        <div  className='d-flex flex-column justify-content-center'>
          <Font data-aos="fade-left">Google Bewertungen</Font>
          <CommentCount data-aos="fade-right" className='d-flex flex-row justify-content-around'>
            50+ Rezension   
          </CommentCount>
          <div data-aos="fade-left">
            <img alt='star-img'  height='20px' src={StarImg}/>
            <img alt='star-img' height='20px' src={StarImg}/>
            <img alt='star-img' height='20px' src={StarImg}/>
            <img alt='star-img' height='20px' src={StarImg}/>
            <img alt='star-img' height='20px' src={StarImg}/>
            (4.9)
          </div>
        </div>
        <LogoImg data-aos="fade-right" src={Logo}/>

      </GoogleReviewContainer>
      <ReviewsWrapper data-aos="zoom-in"  data-aos-offset="200" data-aos-delay="100">
        <Title> Zufriedene Kunden </Title>
        <Slider   {...settings}>
            {
              data.map((item,index) => <SingleReview key={index} name={item.name} date={item.date} rating={item.rating} description={item.description} />)
            }
        </Slider>
      </ReviewsWrapper>
    </ReviewContainer>) : <div>LOADING...</div>
  )
}

export default Reviews