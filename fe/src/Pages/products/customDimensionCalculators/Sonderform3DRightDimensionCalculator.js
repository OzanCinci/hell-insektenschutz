import React, {useEffect} from "react";
import {
    areObjectsEqual,
    CenterImage,
    FlexBoxWrapper,
    HowToMeasureComponent,
    SingleMeasurementInput,
    Title
} from "./common";
import Sonderform3dImage from '../../../images/dimensionCalculators/sonderform3d.webp';

const defaultDimensions = {
    "width": 300,
    "heightleft": 500,
    "heightright": 400,
    "kasondaExtendedPriceBuildType": "SONDERFORM_3D_PRICE_OBJ",
}

function Sonderform3DRightDimensionCalculator({measurementUrl, dimensions, setDimensions}) {

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
                    <CenterImage style={{transform: "scaleX(-1)"}} src={Sonderform3dImage} alt={"sonderform sample image for dimensions"} />
                    <SingleMeasurementInput
                        title=""
                        inputWidth={100}
                        placeholder="Höhe rechts (mm)"
                        value={dimensions.heightright}
                        setter={(e)=>setDimensions((prev)=>({...prev, heightright: e.target.value}))}
                    />
                </FlexBoxWrapper>
                <FlexBoxWrapper style={{margin: "-7% auto auto auto", marginTop: "-3%", width: "30%"}}>
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

export default Sonderform3DRightDimensionCalculator;
