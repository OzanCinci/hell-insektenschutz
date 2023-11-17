import React from 'react'
import TempImg from '../../images/details/plissee.jpg'
import styled from 'styled-components';
import { convertDate } from '../../utils/datetime';
import StarImg from '../../images/reviews/star.svg'
import EmptyStarImg from '../../images/reviews/empty.png'


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
    margin-top: 20px;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

const DateWrapper = styled.div`
    border-top: 1px solid #f59f4c;
    margin-top: -4px;
`;

function ProfileReview({reviews}) {
  return (
    <Container>
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
    </Container>
  )
}

export default ProfileReview