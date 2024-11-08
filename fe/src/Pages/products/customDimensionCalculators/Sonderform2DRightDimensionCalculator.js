import React, {useEffect} from "react";
import {
    areObjectsEqual,
    CenterImage,
    HowToMeasureComponent,
    FlexBoxWrapper,
    SingleMeasurementInput,
    Title
} from "./common";
import Sonderform2dImage from "../../../images/dimensionCalculators/sonderform2d.webp";

const defaultDimensions = {
    "width" : 500,
    "height": 500,
    "kasondaExtendedPriceBuildType": "SONDERFORM_2D_PRICE_OBJ",
}

function Sonderform2DRightDimensionCalculator({measurementUrl, dimensions, setDimensions}) {
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
            <div>
                <CenterImage style={{transform: "scaleX(-1)", margin: "auto"}} src={Sonderform2dImage} alt={"sonderform sample image for dimensions"}/>
                <FlexBoxWrapper>
                    <SingleMeasurementInput
                        title={`Höhe (${dimensions.height/10}cm)`}
                        placeholder="Höhe (mm)"
                        inputWidth={90}
                        value={dimensions.height}
                        setter={(e)=>setDimensions((prev)=>({...prev, height: e.target.value}))}
                    />
                    <SingleMeasurementInput
                        inputWidth={90}
                        title={`Breite (${dimensions.width/10}cm)`}
                        placeholder="Breite (mm)"
                        value={dimensions.width}
                        setter={(e)=>setDimensions((prev)=>({...prev, width: e.target.value}))}
                    />
                </FlexBoxWrapper>
            </div>
        </div>
    );

}

export default Sonderform2DRightDimensionCalculator;
