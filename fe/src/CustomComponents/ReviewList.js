import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import SingleReview from './SingleReview';
import NoOrderImg from '../images/account/sepet.jpeg';

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

const CustomMobileSingleItemImg = styled.img`
    height: auto;
    width: 70%;
    max-width: 300px;
    align-self: center;
    display: block;
    margin: 0px auto;
`;

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
                        allReviews.length===0 &&
                        <div style={{fontSize: "21px", margin: "auto", color: "rgb(82, 82, 102)"}}>
                            Es gibt noch keinen Kommentar zu diesem Produkt. Wir freuen uns auf Ihre Rückmeldung!
                          <div>
                            <CustomMobileSingleItemImg src={NoOrderImg}/>
                          </div>
                        </div>
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
