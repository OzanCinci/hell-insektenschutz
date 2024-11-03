import React, {useEffect} from "react";
import {
    areObjectsEqual,
    CenterImage,
    FlexBoxWrapper,
    HowToMeasureComponent,
    SingleMeasurementInput,
    Title
} from "./common";
import Lammellen3dleft from '../../../images/dimensionCalculators/lammellen3dleft.webp';

const defaultDimensions = {
    "width": 600,
    "heightleft": 400,
    "heightright": 500,
    "kasondaExtendedPriceBuildType": "LAMELLENVORHANG_SLOPE_3D_PRICE_OBJ",
}

function Lamellenvorhang3DLeftDimensionCalculator({measurementUrl, dimensions, setDimensions}){

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
                <FlexBoxWrapper>
                    <SingleMeasurementInput
                        title=""
                        inputWidth={100}
                        placeholder="Höhe links (mm)"
                        value={dimensions.heightleft}
                        setter={(e)=>setDimensions((prev)=>({...prev, heightleft: e.target.value}))}
                    />
                    <CenterImage src={Lammellen3dleft} alt={"Lammellen3dleft sample image for dimensions"} />
                    <SingleMeasurementInput
                        title=""
                        inputWidth={100}
                        placeholder="Höhe rechts (mm)"
                        value={dimensions.heightright}
                        setter={(e)=>setDimensions((prev)=>({...prev, heightright: e.target.value}))}
                    />
                </FlexBoxWrapper>
                <FlexBoxWrapper style={{margin: "auto", width: "30%"}}>
                    <SingleMeasurementInput
                        title=""
                        inputWidth={100}
                        placeholder="Breite rechts (mm)"
                        value={dimensions.width}
                        setter={(e)=>setDimensions((prev)=>({...prev, width: e.target.value}))}
                    />
                </FlexBoxWrapper>
            </div>
        </div>
    );
}

export default Lamellenvorhang3DLeftDimensionCalculator;
