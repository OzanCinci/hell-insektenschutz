import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';


const CustomButton = styled(Button)`
    background-color: white !important;
    margin-right: 8px !important;
`;

const Container = styled.div`
    margin-bottom: 10px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 50px;
    gap: 20px;
`;


const PAGE_SIZE = 5;
function Paginate({data, setPageNumber, pageNumber}) {
    const pageable = data.pageable;
    const init = pageable.offset;
    const last = (init+PAGE_SIZE) > data.totalElements ? data.totalElements: (init+PAGE_SIZE);

  return (
    <Container>
        <Wrapper>
            <div>{`${init+1}-${last} von ${data.totalElements}`}</div>
            <div>
                <CustomButton onClick={()=>setPageNumber(pageNumber-1)} disabled={data.first===true} size='small' variant="outlined" color="warning">vorherige</CustomButton>
                <CustomButton onClick={()=>setPageNumber(pageNumber+1)} disabled={data.last===true} size='small' variant="outlined" color="warning">nächste</CustomButton>
            </div>
        </Wrapper>

    </Container>
  )
}

export default Paginate