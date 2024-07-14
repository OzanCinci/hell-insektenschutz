import React from 'react';
import { uniqueProductData } from './data';
import { useParams } from 'react-router-dom';
import TwoDimProduct from './TwoDimProduct';

const twoDimensionalProducts = [
    "BasicPlissee",
    "PremiumPlissee",
    "WintergartenPlissee",
    "BasicJalousie25mm",
    "BasicJalousie16mm",
    "BasicJalousie50mm",
    "PremiumJalousie25mm",
    "PremiumJalousie16mm",
    "PremiumJalousie50mm",
    "Holzjalousie25mm",
    "Holzjalousie50mm",
    "BasicLamellenvorhang",
    "PremiumLamellenvorhang",
    "PremiumRollo",
    "Doppelrollo",
    "BasicRollo",
];

const extraCartInfo = {
  "BasicJalousie25mm": ["Lamellenbreite: 25 mm"],
  "BasicJalousie16mm": ["Lamellenbreite: 16 mm"],
  "BasicJalousie50mm": ["Lamellenbreite: 50 mm"],
  "PremiumJalousie25mm": ["Lamellenbreite: 25 mm"],
  "PremiumJalousie16mm": ["Lamellenbreite: 16 mm"],
  "PremiumJalousie50mm": ["Lamellenbreite: 50 mm"],
  "Holzjalousie25mm": ["Lamellenbreite: 25 mm"],
  "Holzjalousie50mm": ["Lamellenbreite: 50 mm"],
}

function Wrapper() {
    const {produkt, id} = useParams();
    const dataFromJSON = uniqueProductData[produkt];
    const extraCartInfoArray = extraCartInfo[produkt];

  return (
    <div>
        {
            twoDimensionalProducts.includes(produkt) && <TwoDimProduct dataFromJSON={dataFromJSON} id={id} extraCartInfoArray={extraCartInfoArray}/>
        }

    </div>
  )
}

export default Wrapper;
