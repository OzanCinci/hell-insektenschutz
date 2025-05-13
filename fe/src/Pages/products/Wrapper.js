import React, {useMemo} from 'react';
import {uniqueProductData} from './data/data';
import {uniqueNDimProductsData} from "./data/nDimProductsData";
import {insekProductData} from "./data/insekProductData";
import { useParams } from 'react-router-dom';
import TwoDimProduct from './productPages/TwoDimProduct';
import NDimProduct from "./productPages/NDimProduct";
import InsectProducts from "./productPages/InsectProducts";

const twoDimensionalProducts = [
    "BasicPlissee",
    "PremiumPlissee",
    "WabenPlissee",
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
    "AkkuRollo",
];

const nDimensionalProducts = [
    "DachfensterPlissee",
    "SonderformenPlissee",
    "LamellenvorhangSchrag",
];

const insekProducts = [
    "InsektenschutzFensterSpannrahmen",
    "InsektenschutzPlisseetür",
    "InsektenschutzPendeltür",
]

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
    } else if (insekProducts.includes(productName)) {
        const dataFromJSON = insekProductData[productName];
        const extraCartInfoArray = null;
        return <InsectProducts dataFromJSON={dataFromJSON} extraCartInfoArray={extraCartInfoArray}/>;
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
