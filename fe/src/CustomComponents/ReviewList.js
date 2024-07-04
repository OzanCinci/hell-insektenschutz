import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import Rating from '@mui/material/Rating';
import { convertDate } from '../utils/datetime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import SingleReview from './SingleReview';

const config = {
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
    }
};

const ModifiedAlert = styled(Alert)`
    width: fit-content;
    font-size: 18px !important;
    text-align: left;
    margin: 0 auto;
`;

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  margin-bottom: 30px;
  background: white;
  border-bottom: 1px solid grey;
`;

const TopPart = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ReviewDate = styled.div`
  @media only screen and (max-width: 470px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  text-align: left;
  color: rgb(82, 82, 102);
  font-size: 18px;
  width: 100%;

  @media only screen and (max-width: 860px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px
  }
`;

const ReviewTopWrapper = styled.div`
    text-align: left;
`;

const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

/*
const SingleReview = styled(({name,date,rating,description})=>{ 
    return (
      <Container>
        <TopPart>
          <ReviewTopWrapper>
            <div style={{fontSize: "18px", borderBottom: "1px solid #f59f4c", textDecorationColor: "#f59f4c"}}>
                <AccountCircleIcon className='mx-2' fontSize='large' style={{color: "grey"}}/>
                {name}
            </div>
            <DateWrapper>
                <Rating className='mx-2' name="read-only" value={rating} precision={0.5} readOnly />
                <ReviewDate>( {convertDate(date)} )</ReviewDate>  
            </DateWrapper>
          </ReviewTopWrapper>
        </TopPart>
        <Description>
          {description}
        </Description>
      </Container>
    )})``;
    */

function ReviewList({productId}) {
    const [page,setPageNumber] = useState(0);
    const [allReviews, setAllReviews] = useState([]);
    const [isLastPage,setIsLastPage] = useState(false);
    const url = `/api/review?productId=${productId}&approved=true`

    const { data, loading, error } = useFetch(url, config, page, true);

    const handleLoadMore = (e) => {
        e.preventDefault();
        setPageNumber(prev=>prev+1);
    }

    useEffect(()=>{
        if (data) {
            setAllReviews(prev=>[...prev,...data.content]);
            if (data.last) {
                setIsLastPage(true);
            }
        }
    },[data]);

    return (
        <div>
          <button
            id="review-list-modal-pop-up-btn"
            style={{ display: "none" }}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#reviewListPopUpModal"
          />
          {productId ? (
            <div>
              <div
                className="modal fade"
                id="reviewListPopUpModal"
                tabIndex="-1"
                aria-labelledby="reviewListPopUpModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 style={{textAlign: "left"}} className="modal-title" id="reviewListPopUpModalLabel">Bewertungen des Produkt</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div  style={{height: "70vh", overflow: "scroll" }} className="modal-body">
                      {
                        allReviews.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <SingleReview name={item.userName} date={item.createdAt} description={item.comment} rating={item.rating}/>
                                </div>
                            )
                        })
                      }
                      {
                        error && <ModifiedAlert severity="error">{error}</ModifiedAlert>
                      }
                      {
                        loading && <CircularProgress color='warning'/>
                      }
                      {
                        isLastPage===false && !loading &&
                        <Button onClick={(e)=>handleLoadMore(e)} variant="contained" color='warning'>
                            Mehr laden
                            <ArrowDropDownIcon style={{marginLeft: "5px", marginRight: "-12px"}}/>    
                        </Button>
                      }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )
}

export default ReviewList;
