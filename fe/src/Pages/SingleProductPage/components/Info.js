import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 21px;
  color: #696984;
`;


function Info() {
    // TODO: get real data from product!
    const scrollAddReview = (e) => {
        e.preventDefault();
        let review;
        if (window.innerWidth>1000)
            review = document.getElementById("review-title").getBoundingClientRect().top - 150;
        else
            review = document.getElementById("review-title-mobile").getBoundingClientRect().top;
        
            if (review)
            window.scrollTo({ top: review , behavior: 'smooth' });
        return;
    }

  return (
    <Container>
        <Wrapper>
            <div className='d-flex gap-3'>
              <div>4.8</div>
              <Rating name="read-only" value={4.7} readOnly />
            </div>
            <div style={{textDecoration: "underline", cursor: "pointer"}}>(24 Rezension)</div>
        </Wrapper>
        <Button onClick={(e)=>scrollAddReview(e)} variant='outlined' color='warning'>Kommentar hinzufügen</Button>
    </Container>
  )
}

export default Info