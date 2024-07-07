import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import OptionComponent from './OptionComponent';

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
const defaultOptionsPage = ["plissees", "jalousie"];

function OptionsPage() {
  const { category, model } = useParams();

  return (
    category 
      ? <Container>
        {
          defaultOptionsPage.includes(category) && <OptionComponent category={category} model={model}/>
        }
        {/* DO NOT FORGET TO REMOVE "BasicPlissee" COMPONENT BEFORE GOING LIVE */}
      </Container>
      : <div>You've made a mistake!</div>
  )
}

export default OptionsPage