import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import SuccessIcon from '../images/account/success.png';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import axios from 'axios';
import _ from 'lodash';
import Alert from '@mui/material/Alert';

const ModifiedAlert = styled(Alert)`
  width: fit-content;
  font-size: 18px !important;
  text-align: left;
  margin: 0 auto;
`;

const TopBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 10%;
    gap: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const BottomBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalBody = styled.div`

`;

const CustomImg = styled.img`
    height: auto;
    width: 25%;
    align-self: center;
`;

const CommentInput = styled.textarea`
    resize: vertical; 
    overflow: scroll; /* Hide content that overflows its box */
    width: 80%; /* Set an initial width */
    min-height: 130px;
    border-radius: 5px;
    outline: none !important;
    border-color: rgb(82, 82, 102) !important;
    padding: 15px;
    padding-top: 5px;

    &:focus,&:hover {
        outline: none !important;
        border-color: rgba(237, 108, 2, 0.5) !important;
    }
`;

const CommentText = styled.div`
    width: 80%;
    margin: auto;
    text-align: left;
    margin-bottom: 5px;
    font-size: 18px;
    color: rgb(82, 82, 102);
`;

const ConsentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    min-width: 250px;
    margin: auto;
    justify-content: center;
    padding: 8px;
    align-items: flex-start;
    border: 1px solid white;
    margin-bottom: 10px;
`;

const ConsentText = styled.div`
    font-size: 11px;
`;

const CustomImgSuccess = styled.img`
    height: 250px;
    width: auto;
`;

const Desc = styled.div`
    color: #696984;
    font-size: 19px;
    max-width: 600px;
    min-width: 150px;
    margin: auto;
    margin-top: 20px;
    text-align: left;
`;

const RatingWrapper = styled.div`
    width: 60%;
`;

const TitleWrapper = styled.div`
    text-align: left;
    width: fit-content;
    margin-bottom: 10px;
`;

const BASE_URL = process.env.REACT_APP_BE_API;
const url = `${BASE_URL}/api/review`;
function ReviewModal({currentProduct, productImage, token}) {
    // TODO:
    // reducer kısmı implement edildi
    // reducerı baştan yazmana gerek yok sen git ve
    // orders kısmını handle et!

    // TODO:
    // seçilen ürün değiştiğinde tüm datalar sıfırlansın!
    const [value, setValue] = useState(null);
    const [consent, setConsent] = useState(true);
    const [comment,setComment] = useState("");
    const [success, setSuccess] = useState(false);
    const [waiting,setWaiting] = useState(false);
    const [error,setError] = useState(false);

    const handleReviewSent = async (e) => {
        e.preventDefault();

        const configObject = {
            "url": url,
            "method": "post",
            "headers": {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            "data": {
                productId: currentProduct.id,
                rating: value,
                comment: comment
            }
        };
    
        setError(false);
        setWaiting(true);
        await axios.request(configObject)
            .then(res => {
                setSuccess(true);
            })
            .catch(e => {
                const reviewMessage = _.get(e, 'response.data.errors[0].detail', 'Default message if not found');
                console.log("reviewMessage: ",reviewMessage);
                if (reviewMessage==="You have already made a review on this product.")
                    setError("Sie haben bereits eine Bewertung für dieses Produkt abgegeben.")
                else 
                    setError("Bitte aktualisieren Sie die Seite oder versuchen Sie es später erneut!");
            });

        setWaiting(false);
    }

    const resetState = () => {
        setValue(null);
        setConsent(true);
        setSuccess(false);
        setError(null);
    }


    useEffect(()=>{
        console.log("currentProduct: ",currentProduct);
    },[currentProduct]);

  return (
    currentProduct ?
    (<div>

        <button style={{display:"none"}} onClick={()=>resetState()} id='leave-a-review-modal' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal">
            launch review modal
        </button>

        <div class="modal fade" data-bs-backdrop="static" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 style={{textAlign: "left"}} class="modal-title" id="reviewModalLabel">{success===false?"Wie haben Sie das Produkt gefunden?": "Danke"}</h5>
                    <button  id='close-button-review-model' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <ModalBody class="modal-body">
                    {
                        success===true
                        ?(<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <CustomImgSuccess src={SuccessIcon} alt='action-succes-image'/>
                            <Desc style={{padding: "20px"}}>Vielen Dank für Ihre Bewertung des Produkts. Nach einer schnellen Vorprüfung wird Ihre Bewertung veröffentlicht werden. Wir wünschen Ihnen einen schönen Tag. - Hell Insektenschutz</Desc>
                        </div>)
                        :(
                            <>
                            {error && <ModifiedAlert severity="error">{error}</ModifiedAlert>}
                            <TopBox>
                                <CustomImg src={productImage} alt='image-of-current-product'/>
                                <RatingWrapper>
                                    <TitleWrapper>
                                        <div>
                                            <div style={{fontSize: "18px"}}>{currentProduct.category}</div>
                                            <div style={{display: "flex", alignItems: "center"}}>
                                                <SubdirectoryArrowRightIcon/>
                                                <span style={{fontSize: "18px"}}>
                                                    {currentProduct.name}
                                                </span>
                                                <span style={{marginLeft: "10px", textDecoration: "underline", fontWeight: "bold"}}>
                                                    {currentProduct.rating < 0.1 ? "(Noch keine Bewertungen)": `(${currentProduct.rating.toFixed(1)}/5)` }
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            {}
                                        </div>
                                    </TitleWrapper>
                                    <TitleWrapper>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                            setValue(newValue);
                                            }}
                                        />
                                    </TitleWrapper>
                                </RatingWrapper>
                            </TopBox>
                            <BottomBox>
                                <div style={{width: "80%", display: "flex", justifyContent: "space-between"}}>
                                    <CommentText>Ihre Bewertung</CommentText>
                                    <div>{`${comment.length}/1000`}</div>
                                </div>
                                <CommentInput
                                    value={comment}
                                    onChange={(e)=>setComment(e.target.value)}
                                    style={{fontSize: "14px"}}
                                    class="resizable-input"
                                    placeholder='Das Produkt ist sowohl preislich erschwinglich als auch qualitativ hochwertig, so wie es aussieht. Ich bin wirklich zufrieden.'
                                />
                                <ConsentWrapper>
                                    <input 
                                        type='checkbox'
                                        checked={consent}
                                        onChange={()=>setConsent(prev=>!prev)}
                                    />
                                    <ConsentText>Mein Name darf in den Bewertungen angezeigt werden, und ich erlaube die Verwendung der Bewertungsdetails auf der gesamten Website.</ConsentText>
                                </ConsentWrapper>
                            </BottomBox>
                            </>
                        )
                    }
                </ModalBody>
                {
                    waiting 
                    ? <div>
                        <CircularProgress color='warning' fontSize='large'/>
                    </div>
                    : (success===false &&
                    <div class="modal-footer">
                        <Button 
                            className='my-1' 
                            onClick={(e)=>handleReviewSent(e)} 
                            size='small' 
                            variant="outlined" 
                            color="warning"
                            disabled={comment.length>1000 || value===null || !consent}
                        >
                            Eine Bewertung abgeben
                        </Button>
                    </div>)
                }
                </div>
            </div>
        </div>
    
    </div>)
    :(<div>
    </div>)
  )
}

export default ReviewModal;
