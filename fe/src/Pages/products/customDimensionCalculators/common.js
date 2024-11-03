import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export const CenterImage = styled.img`
    width: 50%;
    height: auto;
    display: block;
    max-width: 300px;
`;

export const FlexBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;


export const Title = styled.div`
    font-size: 18px;
    color: rgb(82, 82, 102);
    font-weight: bold;
    border-bottom: 2px solid rgb(82, 82, 102);
    text-align: left;
    padding-left: 15px;
`;

export const HowtoMeasureWrapper = styled.div`
  text-align: left;
  margin-top: 10px;
  margin-bottom: 30px;
  padding-left: 10px;
`;

export const MeasurementWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 50px;
`;


export const FormControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

    @media only screen and (max-width: 500px) {
       align-items: center;
    } 
`;


export const HowToMeasureComponent = ({measurementUrl}) => {
    const nav = useNavigate();
    return (
        <HowtoMeasureWrapper>
            Anleitung zum
            <span onClick={()=>nav(measurementUrl)} className='mx-1' style={{textDecoration: "underline", color: "#f59f4c", cursor: "pointer", fontWeight: "bold"}}>
                Richtig messen
            </span>
        </HowtoMeasureWrapper>
    );
};

export const SingleMeasurementInput = ({title, placeholder, value, setter = ()=>{}, inputWidth = 60}) => {
    return <FormControlContainer>
        <div>{title}</div>
        <FormControl sx={{ width: `${inputWidth}%`, marginTop: "5px" }} variant="outlined">
            <OutlinedInput
                type="text"
                color="warning"
                placeholder={placeholder}
                value={value}
                onChange={setter}
                endAdornment={
                    <InputAdornment position="end">
                        mm
                    </InputAdornment>
                }
            />
        </FormControl>
    </FormControlContainer>
}



export function areObjectsEqual(obj1, obj2) {
    // Check if both are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    // Get keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if both objects have the same number of keys
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys and values are equal
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}
