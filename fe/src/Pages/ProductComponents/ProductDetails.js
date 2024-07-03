import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const SignleAttribute = styled.div`
    @media (max-width: 600px) {
        font-size: 15px;
        padding-top: 0%;
        padding-left: 0%;
        text-align: left;
        max-width: 50vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform: translateX(-6vw);
        gap: 0px;
    }
`;

const Title = styled.div`
    font-size: 18px;
    color: rgb(82, 82, 102);
    font-weight: bold;
    border-bottom: 2px solid rgb(82, 82, 102);
    text-align: left;
    padding-left: 15px;
`;

const CustomFabricImg = styled.img`
    height: 160px;
    width: auto;
    display: block;
`;

const Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    padding: 20px 0px;

    @media only screen and (max-width: 500px) {
       margin-bottom: 15px;
    }
`;

const DetailList = styled.div`
    text-align: left;
`;

function extractProperties(properties) {
    const result = [];

    // Translation map for all possible keys and array elements
    const translationMap = {
        "Translucency": "Transluzenz",
        "MaterialType": "Materialtyp",
        "DampWipeable": "Feucht abwischbar",
        "SuitableHumidRooms": "Geeignet für feuchte Räume",
        "DirtRepellant": "Schmutzabweisend",
        "PearlCoated": "Perlbeschichtet",
        "OekoTexStandard100": "Öko-Tex Standard 100",
        "Availability": "Verfügbarkeit",
        "MinPrice": "Mindestpreis",
        "Hue": "Farbton",
        "Material": "Material",
        "Room": "Raum",
        "Look": "Aussehen",
        "LamellaWidth": "Lamellenbreite",
        "Function": "Funktion",
        "halbtransparent": "Halbtransparent",
        "Feuchtraum": "Feuchtraum",
        "Handwaschbar bis 30°": "Handwaschbar bis 30°",
        "Schadstoffgeprüft": "Schadstoffgeprüft",
        "100% Polyester": "100% Polyester",
        "Plissee": "Plissee",
        "Hitzeschutz": "Hitzeschutz"
    };

    const keysToExtract = [
        "Translucency",
        "MaxWidth",
        "MaterialType",
        "DampWipeable",
        "SuitableHumidRooms",
        "DirtRepellant",
        "PearlCoated",
        "OekoTexStandard100",
        "Material",
        "Room",
        "Look",
        "LamellaWidth",
        "Function"
    ];

    keysToExtract.forEach(key => {
        const value = properties[key];
        
        if (key==='MaxWidth') {
            result.push(`Max. Breite ${value} cm`);
            return;   
        }
        
        if (value === '0') {
            // Skip if the value is 0
            return;
        } else if (value === '1') {
            // Add the German version of the key if the value is 1
            if (translationMap[key]) {
                result.push(translationMap[key]);
            }
        } else if (Array.isArray(value)) {
            // Add all elements if the value is an array
            value.forEach(item => {
                if (item !== null && translationMap[item]) {
                    result.push(translationMap[item]);
                }
            });
        } else {
            // Add the translated value if it exists, otherwise add the value itself
            if (translationMap[value]) {
                result.push(translationMap[value]);
            } else {
                result.push(value);
            }
        }
    });

    return result;
}

function ProductDetails({itemData, image}) {
    const [details,setDetails] = useState(null);

    useEffect(()=>{
        if (itemData!==null && !details) {
            setDetails(extractProperties(itemData.color.properties));
        }
    },[itemData])


  return (
    <div>
        <Title>Stoffart</Title>
        <Body>
            <CustomFabricImg src={image}/>
            <DetailList>
            {
                details && details.map((el, elIndex) => {
                    return (
                        <SignleAttribute key={elIndex}>
                            <TaskAltIcon className='mx-1' fontSize='small' color='warning'/>
                            {el}
                        </SignleAttribute>
                    )
                })   
            }
            </DetailList>
        </Body>

    </div>
  )
}

export default ProductDetails
