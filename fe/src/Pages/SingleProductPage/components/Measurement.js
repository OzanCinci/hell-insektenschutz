import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const MeasurementsWrapper = styled.div`
  background-color: #eaeded;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  padding-left: 5%;
  min-height: 180px;
  margin-top: 60px;
  margin-bottom: 50px;
`;

const Title = styled.div`
  color: #696984;
  font-size: 26px;
`;

const Measurements = styled.div`
  display: flex;
  gap: 20px;
  background-color: #eaeded;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const CustomTextField = styled(TextField)`
  width: 120px;
  background-color: white;
`;

function Measurement() {
    const [breite, setBreite] = useState(400);
    const [tiefe, setTiefe] = useState(300);

  return (
    <MeasurementsWrapper>
        <Title>Abmessungen</Title>
        <Measurements>
        <CustomTextField 
            value={breite} 
            onChange={e=>setBreite(e.target.value)}
            label="Breite (mm)" 
            variant="outlined" 
            color="warning"/>
        <CustomTextField 
            value={tiefe} 
            onChange={e=>setTiefe(e.target.value)}
            label="Tiefe (mm)" 
            variant="outlined" 
            color="warning"/>
        </Measurements>
    </MeasurementsWrapper>
  )
}

export default Measurement