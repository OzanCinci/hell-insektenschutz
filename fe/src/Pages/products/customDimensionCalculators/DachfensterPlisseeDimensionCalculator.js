import React, { useEffect, useState } from "react";
import {
    Title,
    MeasurementWrapper,
    areObjectsEqual,
    HowToMeasureComponent,
    SingleMeasurementInput,
} from "./common";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import axios from "axios";
import styled from "styled-components";

const defaultDimensions = {
    width: 300,
    width2: 300,
    height: 500,
    height2: 500,
    depth: 45,
    kasondaExtendedPriceBuildType: "DACHFENSTER_PRICE_OBJ",
};

const CustomBackgroundComponent = styled.div`
    background: #f1f1f1;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 20px;
`;

const config = {
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
    },
};
const BASE_URL = process.env.REACT_APP_BE_API;

function DachfensterPlisseeDimensionCalculator({ measurementUrl, dimensions, setDimensions }) {
    const [dropdownValues, setDropdownValues] = useState({
        fenstertyp: "Ungenormtes Dachfenster",
        typ: "",
        fensternummer: "",
    });
    const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
    const [thirdDropdownOptions, setThirdDropdownOptions] = useState([]);
    const [localDimensions, setLocalDimensions] = useState(null);

    const handleDropdownChange = (field) => async (event) => {
        const value = event.target.value;
        const encodedFenstertyp = encodeURIComponent(dropdownValues.fenstertyp);
        const encodedTyp = encodeURIComponent(dropdownValues.typ).replaceAll("%2F","|::|");
        const encodedValue = encodeURIComponent(value).replaceAll("%2F","|::|");


        setDropdownValues((prev) => ({ ...prev, [field]: value }));

        if (field === "fenstertyp") {
            setLocalDimensions(null);
            if (value !== "Ungenormtes Dachfenster") {
                try {
                    const response = await axios.get(`${BASE_URL}/api/predefined-windows/${encodedValue}`, config);
                    setSecondDropdownOptions(response.data.data);
                    setDropdownValues((prev) => ({
                        ...prev,
                        typ: "", // Reset dependent dropdown
                        fensternummer: "", // Reset dependent dropdown
                    }));
                    setThirdDropdownOptions([]); // Clear third dropdown options
                } catch (error) {
                    //console.error("Error fetching second dropdown options:", error);
                }
            } else {
                setSecondDropdownOptions([]);
                setThirdDropdownOptions([]);
                setDropdownValues((prev) => ({
                    ...prev,
                    typ: "",
                    fensternummer: "",
                }));
            }
        }

        if (field === "typ") {
            setLocalDimensions(null);
            try {
                const response = await axios.get(
                    `${BASE_URL}/api/predefined-windows/${encodedFenstertyp}/${encodedValue}`,
                    config
                );
                setThirdDropdownOptions(response.data.data || []);
                setDropdownValues((prev) => ({ ...prev, fensternummer: "" })); // Reset third dropdown value
            } catch (error) {
                //console.error("Error fetching third dropdown options:", error);
            }
        }

        if (field === "fensternummer") {
            try {
                const url = `${BASE_URL}/api/predefined-windows/${encodedFenstertyp}/${encodedTyp}/${encodedValue}`;
                const response = await axios.get(
                    url,
                    config
                );
                const obj = {
                    ...response.data,
                    "Fenstertyp": `Fenstertyp: ${dropdownValues.fenstertyp} ${dropdownValues.typ} ${value}`,
                    "B x H:": `B x H: ${response.data.width/10}cm x ${response.data.height/10}cm`
                }
                setDimensions(obj);
                setLocalDimensions({
                    width: response.data.width,
                    height: response.data.height
                })
            } catch (error) {
                //console.error("Error on final request:", error);
            }
        }
    };

    useEffect(() => {
        if (!areObjectsEqual(dimensions, defaultDimensions)) {
            setDimensions({ ...defaultDimensions });
        }
    }, []);

    if (!dimensions) {
        return <div></div>;
    }

    if (dropdownValues.fenstertyp!=="Ungenormtes Dachfenster") {
        return (
            <div>
                <Title>Abmessungen</Title>
                <HowToMeasureComponent measurementUrl={measurementUrl} />
                <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "10px" }}>
                    {/* First Dropdown */}
                    <FormControl variant="outlined" style={{ flex: 1 }}>
                        <InputLabel color="warning" id="fenstertyp-label">
                            Fenstertyp
                        </InputLabel>
                        <Select
                            labelId="fenstertyp-label"
                            value={dropdownValues.fenstertyp || ""}
                            onChange={handleDropdownChange("fenstertyp")}
                            label="Fenstertyp"
                            color="warning"
                        >
                            <MenuItem value="Ungenormtes Dachfenster">Ungenormtes Dachfenster</MenuItem>
                            <MenuItem value="Velux">Velux</MenuItem>
                            <MenuItem value="Roto">Roto</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Second Dropdown */}
                    {dropdownValues.fenstertyp !== "Ungenormtes Dachfenster" && secondDropdownOptions && secondDropdownOptions.length>0 && (
                        <FormControl variant="outlined" style={{ flex: 1 }}>
                            <InputLabel color="warning" id="typ-label">
                                Typ
                            </InputLabel>
                            <Select
                                labelId="typ-label"
                                value={dropdownValues.typ || ""}
                                onChange={handleDropdownChange("typ")}
                                label="Typ"
                                color="warning"
                            >
                                {secondDropdownOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {/* Third Dropdown */}
                    {dropdownValues.typ && thirdDropdownOptions && thirdDropdownOptions.length>0 && (
                        <FormControl variant="outlined" style={{ flex: 1 }}>
                            <InputLabel color="warning" id="fensternummer-label">
                                Fensternummer
                            </InputLabel>
                            <Select
                                labelId="fensternummer-label"
                                value={dropdownValues.fensternummer || ""}
                                onChange={handleDropdownChange("fensternummer")}
                                label="Fensternummer"
                                color="warning"
                            >
                                {thirdDropdownOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </div>
                {
                    localDimensions &&
                    <MeasurementWrapper className="my-4">
                        <SingleMeasurementInput
                            inputWidth={80}
                            title={`Breite (${localDimensions.width/10}cm)`}
                            placeholder="Breite (mm)"
                            value={localDimensions.width}
                            readOnly
                        />
                        <SingleMeasurementInput
                            inputWidth={80}
                            title={`Höhe (${localDimensions.height/10}cm)`}
                            placeholder="Höhe (mm)"
                            value={localDimensions.height}
                            readOnly
                        />
                    </MeasurementWrapper>
                }
            </div>
        );
    }

    return (
        <div>
            <Title>Abmessungen</Title>
            <HowToMeasureComponent measurementUrl={measurementUrl} />
            <FormControl fullWidth variant="outlined" style={{ flex: 1 }}>
                <InputLabel color="warning" id="fenstertyp-label">
                    Fenstertyp
                </InputLabel>
                <Select
                    labelId="fenstertyp-label"
                    value={dropdownValues.fenstertyp || ""}
                    onChange={handleDropdownChange("fenstertyp")}
                    label="Fenstertyp"
                    color="warning"
                >
                    <MenuItem value="Ungenormtes Dachfenster">Ungenormtes Dachfenster</MenuItem>
                    <MenuItem value="Velux">Velux</MenuItem>
                    <MenuItem value="Roto">Roto</MenuItem>
                </Select>
            </FormControl>
            <CustomBackgroundComponent>
                <MeasurementWrapper>
                    <SingleMeasurementInput
                        customBackground={"white"}
                        title={`Breite (${dimensions.width/10}cm)`}
                        placeholder="Breite (mm)"
                        value={dimensions.width}
                        setter={(e)=>setDimensions((prev)=>({...prev, width: e.target.value}))}
                    />
                    <SingleMeasurementInput
                        customBackground={"white"}
                        title={`Höhe (${dimensions.height/10}cm)`}
                        placeholder="Höhe (mm)"
                        value={dimensions.height}
                        setter={(e)=>setDimensions((prev)=>({...prev, height: e.target.value}))}
                    />
                </MeasurementWrapper>
                <MeasurementWrapper style={{marginTop: "-4%"}}>
                    <SingleMeasurementInput
                        customBackground={"white"}
                        title={`Breite 2: (${dimensions.width2/10}cm)`}
                        placeholder={"Breite 2 (mm)"}
                        value={dimensions.width2}
                        setter={(e)=>setDimensions((prev)=>({...prev, width2: e.target.value}))}
                    />
                    <SingleMeasurementInput
                        customBackground={"white"}
                        title={`Höhe 2: (${dimensions.height2/10}cm)`}
                        placeholder={"Höhe 2 (mm)"}
                        value={dimensions.height2}
                        setter={(e)=>setDimensions((prev)=>({...prev, height2: e.target.value}))}
                    />
                </MeasurementWrapper>
                <MeasurementWrapper style={{marginTop: "-4%"}}>
                <SingleMeasurementInput
                    customBackground={"white"}
                    title={`Tiefe: (${dimensions.depth/10}cm)`}
                    placeholder="Tiefe (mm)"
                    value={dimensions.depth}
                    setter={(e)=>setDimensions((prev)=>({...prev, depth: e.target.value}))}
                />
            </MeasurementWrapper>
            </CustomBackgroundComponent>
        </div>
    );
}

export default DachfensterPlisseeDimensionCalculator;
