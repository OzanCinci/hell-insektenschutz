import React, { useState } from 'react';
import styled from 'styled-components';
import TempImg from '../images/details/plissee.jpg';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import SuccessIcon from '../images/account/success.png';

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
`;

const ModalBody = styled.div`

`;

const CustomImg = styled.img`
    height: auto;
    width: 120px;
    align-self: center;
`;

const CommentInput = styled.textarea`
    resize: vertical; 
    overflow: hidden; /* Hide content that overflows its box */
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
    font-size: 14px;
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
    font-size: 20px;
    max-width: 600px;
    min-width: 150px;
    margin: auto;
    margin-top: 20px;
    text-align: left;
`;

function ReviewModal() {
    // TODO:
    // reducer kısmı implement edildi
    // reducerı baştan yazmana gerek yok sen git ve
    // orders kısmını handle et!

    // TODO:
    // seçilen ürün değiştiğinde tüm datalar sıfırlansın!
    const [value, setValue] = useState(null);
    const [consent, setConsent] = useState(true);
    const [success, setSuccess] = useState(false);

    const handleReviewSent = (e) => {
        e.preventDefault();

        // TODO: required data check

        // make api call

        // show success and close the window
        setSuccess(true);
    }

  return (
    <div>

        <button style={{display:"none"}} id='leave-a-review-modal' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal">
            launch review modal
        </button>

        <div class="modal fade" data-bs-backdrop="static" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="reviewModalLabel">{success===false?"Wie haben Sie das Produkt gefunden?": "Danke"}</h5>
                    <button onClick={()=>setTimeout(()=>setSuccess(prev=>!prev),1000)} id='close-button-review-model' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <ModalBody class="modal-body">
                    {
                        success===true
                        ?(<div>
                            <CustomImgSuccess src={SuccessIcon} alt='action-succes-image'/>
                            <Desc style={{padding: "20px"}}>Vielen Dank für Ihre Bewertung des Produkts. Nach einer schnellen Vorprüfung wird Ihre Bewertung veröffentlicht werden. Wir wünschen Ihnen einen schönen Tag. - Hell Insektenschutz</Desc>
                        </div>)
                        :(
                            <>
                            <TopBox>
                                <CustomImg src={TempImg} alt='image-of-current-product'/>
                                <div>
                                    <div className='my-2'>Drehfenster</div>
                                    <div>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                            setValue(newValue);
                                            }}
                                        />
                                    </div>
                                </div>
                            </TopBox>
                            <BottomBox>
                                <CommentText>Ihre Bewertung</CommentText>
                                <CommentInput
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
                    success===false &&
                    <div class="modal-footer">
                        <Button 
                            className='my-1' 
                            onClick={(e)=>handleReviewSent(e)} 
                            size='small' 
                            variant="outlined" 
                            color="warning"
                            disabled={value===null}
                        >
                            Eine Bewertung abgeben
                        </Button>
                    </div>
                }
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default ReviewModal