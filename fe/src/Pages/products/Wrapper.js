import React, {useMemo} from 'react';
import { uniqueProductData } from './data';
import {uniqueNDimProductsData} from "./nDimProductsData";
import { useParams } from 'react-router-dom';
import TwoDimProduct from './TwoDimProduct';
import NDimProduct from "./NDimProduct";

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
    "SmartAkkuPlissee",
    "FreihangendPlissee",
];

const nDimensionalProducts = [
    "DachfensterPlissee",
    "SonderformenPlissee",
    "LamellenvorhangSchrag",
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

function ProductFactory(productName, id){
    if (twoDimensionalProducts.includes(productName)){
        const dataFromJSON = uniqueProductData[productName];
        const extraCartInfoArray = extraCartInfo[productName];
        return <TwoDimProduct dataFromJSON={dataFromJSON} id={id} extraCartInfoArray={extraCartInfoArray}/>;
    } else if (nDimensionalProducts.includes(productName)) {
        const dataFromJSON = uniqueNDimProductsData[productName];
        const extraCartInfoArray = null;
        return <NDimProduct dataFromJSON={dataFromJSON} id={id} extraCartInfoArray={extraCartInfoArray}/>;
    } else {
        return <div>Something went wrong.</div>
    }
}

function Wrapper() {
    const {produkt, id} = useParams();
    const Component = useMemo(() => ProductFactory(produkt, id), [produkt, id]);

  return (
    <div>
        {Component}
    </div>
  )
}

export default Wrapper;
