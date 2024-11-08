import React, {useEffect} from "react";
import {
    areObjectsEqual,
    CenterImage,
    FlexBoxWrapper,
    HowToMeasureComponent,
    SingleMeasurementInput,
    Title
} from "./common";
import Sonderform4dImage from '../../../images/dimensionCalculators/sonderform4d.webp';

const defaultDimensions = {
    "widthtop" : 500,
    "widthbottom": 750,
    "heightleft": 850,
    "heightright": 450,
    "kasondaExtendedPriceBuildType": "SONDERFORM_4D_PRICE_OBJ",
}

function Sonderform4DRightDimensionCalculator({measurementUrl, dimensions, setDimensions}) {
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
                <FlexBoxWrapper style={{margin: "auto auto 5px 25%", width: "30%"}}>
                    <SingleMeasurementInput
                        title=""
                        inputWidth={100}
                        placeholder="Breite rechts (mm)"
                        value={dimensions.widthtop}
                        setter={(e) => setDimensions((prev) => ({...prev, widthtop: e.target.value}))}
                    />
                </FlexBoxWrapper>
                <FlexBoxWrapper>
                    <SingleMeasurementInput
                        title=""
                        inputWidth={100}
                        placeholder="Höhe links (mm)"
                        value={dimensions.heightleft}
                        setter={(e) => setDimensions((prev) => ({...prev, heightleft: e.target.value}))}
                    />
                    <CenterImage style={{transform: "scaleX(-1)"}} src={Sonderform4dImage} alt={"sonderform sample image for dimensions"}/>
                    <SingleMeasurementInput
                        title=""
                        inputWidth={100}
                        placeholder="Höhe rechts (mm)"
                        value={dimensions.heightright}
                        setter={(e) => setDimensions((prev) => ({...prev, heightright: e.target.value}))}
                    />
                </FlexBoxWrapper>
                <FlexBoxWrapper style={{margin: "auto", width: "30%"}}>
                    <SingleMeasurementInput
                        title=""
                        inputWidth={100}
                        placeholder="Breite rechts (mm)"
                        value={dimensions.widthbottom}
                        setter={(e) => setDimensions((prev) => ({...prev, widthbottom: e.target.value}))}
                    />
                </FlexBoxWrapper>
            </div>
        </div>
    );
}

export default Sonderform4DRightDimensionCalculator;
