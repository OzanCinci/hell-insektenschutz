import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

const CustomTextArea = styled.textarea`
    width: 145%;
    height: 130px;
    color: #696984;
    padding: 12px;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
`;

const ReviewContainer = styled.div`
    padding-left: 60px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    margin-top: 100px;

    @media only screen and (max-width: 1000px) {
      display: none;
    }
`;

const Title = styled.div`
  color: #696984;
  font-size: 26px;
`;

function Review() {
    const [comment, setComment] = useState("");
    const [hover, setHover] = useState(-1);
    const [value, setValue] = useState(5);


  return (
    <ReviewContainer>
        <Title id='review-title'>Eine Bewertung hinzufügen</Title>
            <div>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: "20px"
              }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
              <CustomTextArea value={comment} onChange={e=>setComment(e.target.value)} class="resizable-input"></CustomTextArea>
            </div>
            <Button style={{marginTop: "12px"}} variant='outlined' color='warning'>bestätigen</Button>
    </ReviewContainer>
  )
}

export default Review