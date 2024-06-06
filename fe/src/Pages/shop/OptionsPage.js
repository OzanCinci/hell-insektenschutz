import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BasicPlissee from '../listing/BasicPlissee';

const Container = styled.div`
    margin-top: 150px;

    @media (max-width: 850px) {
      margin-top: 95px;
  }   
`;


////////////////////////////////////////////
/////////////// options ////////////////////
////////////////////////////////////////////



////////////////////////////////////////////
/////////////// options ////////////////////
////////////////////////////////////////////


function OptionsPage() {
  const { category, model } = useParams();

  useEffect(()=>{
    //console.log("OPTIONS: ",category,model);
  },[])


  return (
    <Container>
      {
        model==="basic-plissee-optionen" && <BasicPlissee/>
      }

    </Container>
  )
}

export default OptionsPage