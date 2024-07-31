import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { convertDate } from '../../utils/datetime';
import StarImg from '../../images/reviews/star.svg'
import EmptyStarImg from '../../images/reviews/empty.png';
import Button from '@mui/material/Button';
import NoOrderImg from '../../images/account/sepet.jpeg';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const ModifiedAlert = styled(Alert)`
  width: fit-content;
  font-size: 18px !important;
  text-align: left;
  margin: 0 auto;
`;

const CustomImage = styled.img`
    height: auto;
    width: 30%;
    align-self: start;

    @media only screen and (max-width: 450px) {
        align-self: center;
        width: 40%;
    }
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    width: 60%;

    @media only screen and (max-width: 450px) {
        width: 99%;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px 10px;
    text-align: left;

    .title {
        color : black;
        font-weight: 700;
        font-size: 20px;
    }

    .secondary-title {
        color : #696984;
        font-weight: 700;
        font-size: 19px;
    }

    @media only screen and (max-width: 450px) {
    }
`;

const Body = styled.div`
    font-size: 19px;
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

    @media only screen and (max-width: 450px) {
        flex-direction: column;
        align-items: center;
    }
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

function ProfileReview({ token}) {
    const nav = useNavigate();

    const [page,setPageNumber] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [isLastPage,setIsLastPage] = useState(false);
    const url = `/api/review/me`;
    const config = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };
    const { data, loading, error } = useFetch(url, config, page);

    useEffect(()=>{
        //console.log("data reviews: ",data);
    },[data])

    const handleLoadMore = (e) => {
        e.preventDefault();
        setPageNumber(prev=>prev+1);
    }

    useEffect(() => {
        if (data) {
            setReviews(prev => {
                const uniqueIds = new Set(prev.map(review => review.id));
                const newReviews = data.content.filter(review => !uniqueIds.has(review.id));
                return [...prev, ...newReviews];
            });
            if (data.last) {
                setIsLastPage(true);
            }
        }
    }, [data]);  

  return (
    <div>
    {
        !loading && error &&
        <div>
            <ModifiedAlert severity="error">Etwas ist auf unserer Seite schiefgelaufen. Bitte aktualisieren Sie die Seite.</ModifiedAlert>
        </div>
    }
    {
        reviews.length === 0 
        ? (<Container>
            {
                !error && !loading &&
                <div>
                    <NoOrderMessage>Sie haben noch keine Bewertungen abgegeben. Wenn Sie bereits Bestellungen bei uns getätigt haben, besuchen Sie bitte Ihre Bestellhistorie, um Produkte zu bewerten und Ihre Erfahrungen mit anderen Kunden zu teilen, oder besuchen Sie unsere Shop-Seite.</NoOrderMessage>
                    <CustomMobileSingleItemImg src={NoOrderImg}/>
                    <Button onClick={(e)=>nav("/geschaft")} size='large' variant="outlined" color="warning">Sehen Sie unsere Produkte</Button>
                </div>
            }
        </Container>)  
        : (<Container>
            {
                reviews.map((review,index)=>{
                    const rating = review.rating;
                    return (
                        <SingleReviewWrapper key={index}>
                            <CustomImage src={review.reviewImage}/>
                            <CommentWrapper>
                                <Header>
                                    <div>
                                        <div className='title'>{review.itemName}</div>
                                        <div className='secondary-title'>{review.secondaryName}</div>
                                        <DateWrapper>({convertDate(review.createdAt)})</DateWrapper>
                                    </div>
                                    <div style={{display: 'flex', flexWrap: "nowrap"}}>
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
            {
                loading && 
                <div style={{}}>
                    <CircularProgress color='warning' />    
                </div>
            }
            {
            isLastPage===false && !loading && !error &&
            <Button onClick={(e)=>handleLoadMore(e)} variant="contained" color='warning'>
                    Mehr laden
                <ArrowDropDownIcon style={{marginLeft: "5px", marginRight: "-12px"}}/>    
            </Button>
            }
        </Container>)
    }
    </div>
  )
}

export default ProfileReview