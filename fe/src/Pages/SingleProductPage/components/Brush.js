import React, { useState } from 'react';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Title = styled.div`
  color: #696984;
  font-size: 26px;
`;


function Brush() {
    const [brush, setBrush] = useState("Ja");
    const handleChange = (event) => {
        setBrush(event.target.value);
      };
    


  return (
    <>
        <Title>die optional Wandanschluss Bürsten </Title>
        <hr></hr>
        <FormControl sx={{ m: 1, minWidth: 120,  }} size="small">
            <InputLabel id="demo-select-small-label">Ihre Wahl</InputLabel>
            <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={brush}
            label="Ihre Wahl"
            onChange={handleChange}
            >
            <MenuItem  value={"Ja"}>Ja</MenuItem>
            <MenuItem value={"Nein"}>Nein</MenuItem>
            </Select>
        </FormControl>
        <div style={{paddingLeft: "30px", paddingRight: "30px", paddingBottom: "10px", color: "#696984", marginTop: "10px"}}>
            Für den Fall, dass Ihre Lichtschachtabdeckung an einer oder mehreren Seiten an eine Wand anschließt, empfiehlt es sich, die optional wählbaren Wandabschlussbürsten anzubringen. Diese sorgen für einen zuverlässigen Schutz und eine sichere Abdichtung.
        </div>
    </>
  )
}

export default Brush
