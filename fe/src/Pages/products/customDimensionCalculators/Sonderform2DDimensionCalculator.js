import React, {useEffect} from "react";
import {areObjectsEqual, HowToMeasureComponent, MeasurementWrapper, SingleMeasurementInput, Title} from "./common";

const defaultDimensions = {
    "width" : 500,
    "height": 500,
    "kasondaExtendedPriceBuildType": "SONDERFORM_2D_PRICE_OBJ",
}

function Sonderform2DDimensionCalculator({measurementUrl, dimensions, setDimensions}) {
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
        </div>
    );

}

export default Sonderform2DDimensionCalculator;
