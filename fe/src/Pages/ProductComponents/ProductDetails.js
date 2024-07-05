import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { extractProperties } from '../../CustomComponents/extractProperties';

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
