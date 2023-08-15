import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarImg from "../images/reviews/star.svg"
import EmptyStarImg from "../images/reviews/empty.png"
import Logo from "../images/reviews/alt_logo.png"

const mockData = [
  {
    name: "Ozan Cinci",
    date: "20/08/23",
    rating: "4/5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcotat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Ozan Cinci",
    date: "20/08/23",
    rating: "4/5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Ozan Cinci",
    date: "20/08/23",
    rating: "4/5",
    description: "Sed ut perspiciatis unde omnis iste natus erudanab illo inventorae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur uam est,quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    name: "Ozan Cinci",
    date: "20/08/23",
    rating: "4/5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Ozan Cinci",
    date: "20/08/23",
    rating: "4/5",
    description: "Lorem ipsum itation u in reprehenderit in voluptate veliiatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    name: "Ozan Cinci",
    date: "20/08/23",
    rating: "4/5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Ozan Cinci",
    date: "20/08/23",
    rating: "4/5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Ozan Cinci",
    date: "20/08/23",
    rating: "4/5",
    description: "Lorem ipsum dolor sit amet, consectetuExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
]

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
          <div>{name}</div>
          <div>{date}</div>
        </div>
        <div>
          <div className='d-flex flex-row'>
            <img height='20px' src={StarImg}/>
            <img height='20px' src={StarImg}/>
            <img height='20px' src={StarImg}/>
            <img height='20px' src={StarImg}/>
            <img height='20px' src={EmptyStarImg}/>
          </div>
        </div>
      </TopPart>
      <Description>
        {description}
      </Description>
    </Container>
  )})``;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
    gap: 0px;
  }
`

const LogoImg = styled.img`
  height: 250px;
  border-radius: 50%;
  -webkit-box-shadow: 11px 19px 24px -24px rgba(0,0,0,1);
  -moz-box-shadow: 11px 19px 24px -24px rgba(0,0,0,1);
  box-shadow: 11px 19px 24px -24px rgba(0,0,0,1);
  transition: all 350ms ease-in;

  &:hover {
    -webkit-box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
    -moz-box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
    box-shadow: 11px 19px 24px -18px rgba(0,0,0,1);
  }



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
  return (
    <ReviewContainer>
      <GoogleReviewContainer >
        <div  className='d-flex flex-column justify-content-center'>
          <Font data-aos="fade-left">Google Reviews</Font>
          <CommentCount data-aos="fade-right" className='d-flex flex-row justify-content-around'>
            51 comment   
          </CommentCount>
          <div data-aos="fade-left">
            <img  height='20px' src={StarImg}/>
            <img height='20px' src={StarImg}/>
            <img height='20px' src={StarImg}/>
            <img height='20px' src={StarImg}/>
            <img height='20px' src={StarImg}/>
            (4.9)
          </div>
        </div>
        <LogoImg data-aos="fade-right" src={Logo}/>

      </GoogleReviewContainer>
      <ReviewsWrapper data-aos="zoom-in"  data-aos-offset="200" data-aos-delay="100">
        <Title  >Happy Customers</Title>
        <Slider   {...settings}>
            {
              mockData.map((item,index) => <SingleReview key={index} name={item.name} date={item.date} rating={item.rating} description={item.description} />)
            }
        </Slider>
      </ReviewsWrapper>
    </ReviewContainer>
  )
}

export default Reviews