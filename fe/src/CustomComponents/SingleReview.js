import React, { useState } from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import { convertDate } from '../utils/datetime';

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
    font-size: 18px;
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

const SingleReview = styled(({ name, date, rating, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = description.length > 200;
  const shortDescription = isLongDescription ? `${description.slice(0, 220)}...` : description;

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <TopPart>
        <ReviewTopWrapper>
          <div style={{ fontSize: '18px', borderBottom: '1px solid #f59f4c', textDecorationColor: '#f59f4c' }}>
            <AccountCircleIcon className='mx-2' fontSize='large' style={{ color: 'grey' }} />
            {name}
          </div>
          <DateWrapper>
            <Rating className='mx-2' name="read-only" value={rating} precision={0.5} readOnly />
            <ReviewDate>( {convertDate(date)} )</ReviewDate>
          </DateWrapper>
        </ReviewTopWrapper>
      </TopPart>
      <Description>
        {isExpanded ? description : shortDescription}
        {isLongDescription && (
          <span style={{ color: '#f59f4c', cursor: 'pointer', fontWeight: "bold" }} onClick={handleReadMoreClick}>
            {isExpanded ? ' weniger lesen' : '  mehr lesen'}
          </span>
        )}
      </Description>
    </Container>
  );
})``;

export default SingleReview;
