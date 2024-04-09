import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {data} from './data/productOptionData';

const Container = styled.div`
    border: 1px solid red;
    margin-top: 150px;
`;


////////////////////////////////////////////
/////////////// options ////////////////////
////////////////////////////////////////////

const AttributeLine = styled(({img, title})=>{ 
  return (
    <div>
      <img src={img} height='20px'/>
      <div>
          {
            title
          }
      </div>
    </div>
  )})``;


////////////////////////////////////////////
/////////////// options ////////////////////
////////////////////////////////////////////


function OptionsPage() {
  const { category, model } = useParams();
  const [options, setOptions] = useState(data[category][model]);

  useEffect(()=>{
    console.log("OPTIONS: ", options);
  },[options])


  return (
    <Container>


      {
        options!==null && options.map(item => {
          return (
            <div>
              {
                item.attributes!==null && item.attributes.map(item=>{
                  return (
                    <AttributeLine key={item.title} img={item.image} title={item.title}/>
                  )
                })
              }

            </div>
          )
        })
      }

      

    </Container>
  )
}

export default OptionsPage