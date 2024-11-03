import React, {useEffect} from "react";
import {
    Title, MeasurementWrapper,
    areObjectsEqual, HowToMeasureComponent, SingleMeasurementInput
} from "./common";

const defaultDimensions = {
        "width": 300,
        "width2": 300,
        "height": 500,
        "height2": 500,
        "depth": 45,
        "kasondaExtendedPriceBuildType": "DACHFENSTER_PRICE_OBJ",
}

function DachfensterPlisseeDimensionCalculator({measurementUrl, dimensions, setDimensions}){

    useEffect(() => {
        if (!areObjectsEqual(dimensions, defaultDimensions)) {
            setDimensions({...defaultDimensions});
        }
    }, []);

    if (!dimensions) {
        return <div></div>;
    }

    return (
        <div>
            <Title>Abmessungen</Title>
            <HowToMeasureComponent measurementUrl={measurementUrl}/>
            <MeasurementWrapper>
                <SingleMeasurementInput
                    title={`Breite (${dimensions.width/10}cm)`}
                    placeholder="Breite (mm)"
                    value={dimensions.width}
                    setter={(e)=>setDimensions((prev)=>({...prev, width: e.target.value}))}
                />
                <SingleMeasurementInput
                    title={`Höhe (${dimensions.height/10}cm)`}
                    placeholder="Höhe (mm)"
                    value={dimensions.height}
                    setter={(e)=>setDimensions((prev)=>({...prev, height: e.target.value}))}
                />
            </MeasurementWrapper>
            <MeasurementWrapper style={{marginTop: "-4%"}}>
                <SingleMeasurementInput
                    title={`Breite 2: (${dimensions.width2/10}cm)`}
                    placeholder={"Breite 2 (mm)"}
                    value={dimensions.width2}
                    setter={(e)=>setDimensions((prev)=>({...prev, width2: e.target.value}))}
                />
                <SingleMeasurementInput
                    title={`Höhe 2: (${dimensions.height2/10}cm)`}
                    placeholder={"Höhe 2 (mm)"}
                    value={dimensions.height2}
                    setter={(e)=>setDimensions((prev)=>({...prev, height2: e.target.value}))}
                />
            </MeasurementWrapper>
            <MeasurementWrapper style={{marginTop: "-4%"}}>
                <SingleMeasurementInput
                    title={`Tiefe: (${dimensions.depth/10}cm)`}
                    placeholder="Tiefe (mm)"
                    value={dimensions.depth}
                    setter={(e)=>setDimensions((prev)=>({...prev, depth: e.target.value}))}
                />
            </MeasurementWrapper>
        </div>
    );
}

export default DachfensterPlisseeDimensionCalculator;
