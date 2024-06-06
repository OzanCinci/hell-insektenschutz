import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {data} from './data/productOptionData';
import BasicPlissee from '../listing/BasicPlissee';

const Container = styled.div`
    border: 1px solid red;
    margin-top: 150px;
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