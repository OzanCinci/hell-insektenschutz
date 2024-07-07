import React from 'react';
import { uniqueProductData } from './data';
import { useParams } from 'react-router-dom';
import TwoDimProduct from './TwoDimProduct';


const twoDimensionalProducts = [
    "BasicPlissee",
    "PremiumPlissee"
];

function Wrapper() {
    const {produkt, id} = useParams();
    const dataFromJSON = uniqueProductData[produkt];

  return (
    <div>
        {
            twoDimensionalProducts.includes(produkt) && <TwoDimProduct dataFromJSON={dataFromJSON} id={id}/>
        }

    </div>
  )
}

export default Wrapper;
