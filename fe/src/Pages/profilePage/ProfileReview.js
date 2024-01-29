import React from 'react'
import TempImg from '../../images/details/plissee.jpg'
import styled from 'styled-components';
import { convertDate } from '../../utils/datetime';
import StarImg from '../../images/reviews/star.svg'
import EmptyStarImg from '../../images/reviews/empty.png';
import Button from '@mui/material/Button';
import NoOrderImg from '../../images/account/sepet.jpeg';
import { useNavigate } from 'react-router-dom';


const CustomImage = styled.img`
    height: auto;
    width: 35%;
    align-self: center;
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    width: 60%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px 10px;
`;

const Body = styled.div`
    font-size: 16px;
    text-align: left;
`;

const SingleReviewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    padding: 15px 5px;
    border-radius: 8px;

    box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.75);
`;

const Container = styled.div`
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 600px;
    margin: auto;
    margin-top: 0px;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
    min-height: 50vh;
`;

const DateWrapper = styled.div`
    border-top: 1px solid #f59f4c;
    margin-top: -4px;
`;

const NoOrderMessage = styled.div`
    width: 100%;
    margin: 20px auto;
    margin-bottom: 0px;
    font-size: 20px;
    color: rgb(82, 82, 102);

    @media only screen and (max-width: 600px) {
        width: 95%;
    }
`;

const CustomMobileSingleItemImg = styled.img`
    height: auto;
    width: 70%;
    max-width: 300px;
    align-self: center;
    display: block;
    margin: 0px auto;
`;

function ProfileReview({reviews}) {
    const nav = useNavigate();


  return (
    <div>
    {
        reviews.length === 0
        ? (<Container>
            <div>
                <NoOrderMessage>Sie haben noch keine Bewertungen abgegeben. Wenn Sie bereits Bestellungen bei uns getätigt haben, besuchen Sie bitte Ihre Bestellhistorie, um Produkte zu bewerten und Ihre Erfahrungen mit anderen Kunden zu teilen, oder besuchen Sie unsere Shop-Seite.</NoOrderMessage>
                <CustomMobileSingleItemImg src={NoOrderImg}/>
                <Button onClick={(e)=>nav("/geschaft")} size='large' variant="outlined" color="warning">Sehen Sie unsere Produkte</Button>
            </div>
        </Container>)  
        : (<Container>
            {
                reviews.map((review,index)=>{
                    const rating = review.rating;
                    return (
                        <SingleReviewWrapper key={index}>
                            <CustomImage src={TempImg}/>
                            <CommentWrapper>
                                <Header>
                                    <div>
                                        <div>{review.product.name}</div>
                                        <DateWrapper>({convertDate(review.createdAt)})</DateWrapper>
                                    </div>
                                    <div>
                                        <img alt='star-img' height='14px' src={rating>=1 ? StarImg: EmptyStarImg}/>
                                        <img alt='star-img' height='14px' src={rating>=2 ? StarImg: EmptyStarImg}/>
                                        <img alt='star-img' height='14px' src={rating>=3 ? StarImg: EmptyStarImg}/>
                                        <img alt='star-img' height='14px' src={rating>=4 ? StarImg: EmptyStarImg}/>
                                        <img alt='star-img' height='14px' src={rating>=5 ? StarImg: EmptyStarImg}/>
                                    </div>
                                </Header>
                                <Body>
                                    {review.comment}
                                </Body>
                            </CommentWrapper>
                        </SingleReviewWrapper>
                    );
                })
            }
        </Container>)
    }
    </div>
  )
}

export default ProfileReview