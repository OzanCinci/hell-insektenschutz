import React, {useEffect} from "react";
import {
    areObjectsEqual,
    CenterImage,
    FlexBoxWrapper,
    HowToMeasureComponent,
    SingleMeasurementInput,
    Title
} from "./common";
import Lammellen3dright from '../../../images/dimensionCalculators/lammellen3dright.webp';

const defaultDimensions = {
    "width": 600,
    "heightleft": 500,
    "heightright": 400,
    "kasondaExtendedPriceBuildType": "LAMELLENVORHANG_SLOPE_3D_PRICE_OBJ",
}

function Lamellenvorhang3DRightDimensionCalculator({measurementUrl, dimensions, setDimensions}){

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
                    <CenterImage src={Lammellen3dright} alt={"Lammellen3dleft sample image for dimensions"} />
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

export default Lamellenvorhang3DRightDimensionCalculator;
