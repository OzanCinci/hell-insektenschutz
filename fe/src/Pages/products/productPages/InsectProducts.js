import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';
import { ADD_TO_CART } from '../../../constants/user';
import { useDispatch, useSelector } from 'react-redux';
import { debounce, get } from 'lodash';
import { extractProperties } from '../../../CustomComponents/extractProperties';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Carousel from '../../ProductComponents/Carousel';
import ProductDetails from '../../ProductComponents/ProductDetails';
import Selection from '../../ProductComponents/Selection';
import Installation from '../../ProductComponents/Installation';
import Reviews from '../../../LandingPageComponents/Reviews';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AddToCart from '../../SingleProductPage/components/AddToCart';
import Button from '@mui/material/Button';
import ReviewModal from '../../../CustomComponents/ReviewModal';
import HowToAssemble from '../../ProductComponents/HowToAssemble';
import {SET_PRODUCT_BASED_MEASUREMENT} from "../../../constants/productBasedMeasurement";
import ProductBasedMeasurement from "../../howToMeasure/ProductBasedMeasurement";

const CustomButton = styled(Button)`
    margin-top: 5px !important;
    text-transform: none !important;
    font-size: 17px !important;

    @media only screen and (max-width: 800px) {
        margin-top: 15px !important;
    }
`;

const CustomButtonWrapper = styled.div`
    text-align: right;
`;

const ModifiedAlert = styled(Alert)`
    width: fit-content;
    font-size: 18px !important;
    text-align: left;
    margin: 0 auto;
`;

const ColumnContainer = styled.div`
    margin-top: 150px;
    min-height: fit-content;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;

    max-width: 1300px;
    gap: 50px;
    margin-left: auto;
    margin-right: auto;


    @media only screen and (max-width: 1300px) {
        gap: 10px;
    }

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 500px) {
        width: 100vw;
        margin-top: 115px;
    }
`;

const Column = styled.div`
    flex: 1;
    padding: 20px;

    @media only screen and (max-width: 500px) {
        padding: 2vw;
    }
`;

const LeftColumn = styled(Column)`

`;

const RightColumn = styled(Column)`
    height: fit-content;
`;

const MeasurementWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 50px;
`;

const StyledModalBody = styled.div`
  height: 85vh;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
`;

const ShowPdfComponent = styled(({ pdfUrl }) => {
    return (
        <div>
            <button
                id="measurement-option-detail-btn"
                style={{ display: "none" }}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#MeasurementPopupMoreDetail"
            />
            {pdfUrl ? (
                <div>
                    <div
                        className="modal fade"
                        id="MeasurementPopupMoreDetail"
                        tabIndex="-1"
                        aria-labelledby="measurementPopupMoreDetailLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        style={{ textAlign: "left" }}
                                        className="modal-title"
                                        id="measurementPopupMoreDetailLabel"
                                    >
                                        Sieh dir dieses PDF unten an.
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <StyledModalBody>
                                    {pdfUrl ? (
                                        <embed
                                            src={pdfUrl}
                                            type="application/pdf"
                                            width="100%"
                                            height="100%"
                                            style={{
                                                border: "none",
                                                minHeight: "100%",
                                            }}
                                        />
                                    ) : (
                                        <p>No PDF URL available</p>
                                    )}
                                </StyledModalBody>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
})``;

const SelectorComponent = styled(({data}) => {
    return (
        <div>
            <button
                id="product-color-option-detail-btn"
                style={{display: "none"}}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#productColorMoreDetail"
            />
            {data ? (
                <div>
                    <div
                        className="modal fade"
                        id="productColorMoreDetail"
                        tabIndex="-1"
                        aria-labelledby="productColorMoreDetailLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 style={{textAlign: "left"}} className="modal-title" id="productColorMoreDetailLabel">{data.title}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {data.img && <img height="200px" width="auto" src={data.img} alt="Modal Content"/>}
                                    <div style={{ textAlign: "left" }} className="my-4">
                                        {data.body.map((item, index) => (
                                            <li className="my-2" key={index}>{item}</li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
})`
    .modal-dialog-centered {
        display: flex;
    }
`;

const Title = styled.div`
    font-size: 18px;
    color: rgb(82, 82, 102);
    font-weight: bold;
    border-bottom: 2px solid rgb(82, 82, 102);
    text-align: left;
    padding-left: 15px;
`;

const HowtoMeasureWrapper = styled.div`
    text-align: left;
    margin-top: 10px;
    margin-bottom: 30px;
    padding-left: 10px;
`;

const FormControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (max-width: 500px) {
        align-items: center;
    }
`;

function sumValues(obj) {
    let sum = 0;

    function traverse(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(item => traverse(item));
        } else if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    traverse(obj[key]);
                }
            }
        } else if (typeof obj === 'number') {
            sum += obj;
        }
    }

    traverse(obj);
    return sum;
}

function extractAttributes(obj) {
    const result = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && key.charAt(0) === key.charAt(0).toUpperCase()) {
            const value = obj[key];
            if (Array.isArray(value)) {
                value.forEach(item => {
                    for (const subKey in item) {
                        if (item.hasOwnProperty(subKey)) {
                            if (typeof item[subKey] === 'object' && !Array.isArray(item[subKey])) {
                                for (const innerKey in item[subKey]) {
                                    if (item[subKey].hasOwnProperty(innerKey)) {
                                        result.push(`${key}: ${subKey} ${innerKey}`);
                                    }
                                }
                            } else {
                                result.push(`${key}: ${subKey}`);
                            }
                        }
                    }
                });
            }
        }
    }

    return result;
};

const config = {
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
    },
};


function InsectProducts({dataFromJSON, extraCartInfoArray}) {
    /////// PARSE DATA IMMEDIATELY ///////
    const defaultImages = dataFromJSON.defaultImages;
    const selectionData = dataFromJSON.selectionData;
    const measurementUrl = dataFromJSON.measurementUrl;
    const moreThanOnePdf = dataFromJSON.moreThanOnePdf;
    const pdfArray = dataFromJSON.pdfArray;
    const measurementExplanation = dataFromJSON.measurementExplanation;
    const productDetailUrl = dataFromJSON.productDetailUrl;
    const widthText = dataFromJSON.widthText;
    const heightText = dataFromJSON.heightText;
    const priceType = dataFromJSON.priceType;
    const defaultHeight = dataFromJSON.defaultHeight;
    const defaultWidth = dataFromJSON.defaultWidth;
    let freeSamplingTitle = dataFromJSON.freeSamplingTitle;
    const assemblyInfo = dataFromJSON.assemblyInfo;
    const cartName = dataFromJSON.cartName;
    /////// PARSE DATA IMMEDIATELY ///////

    const dispatch = useDispatch();
    const nav = useNavigate();
    const [moreDetailInfo, setMoreDetailInfo] = useState(null);
    const {userInfo} = useSelector(state=>state.login);
    const {discountOptionMap} = useSelector(state=>state.config);
    const enableDiscount = discountOptionMap["INSEKTENSCHUTZ"] != null;
    const percentage = discountOptionMap["INSEKTENSCHUTZ"]?.percentage ?? 0.0;

    const [pdfUrl, setPdfUrl] = useState(null);

    /////// ITEM REQUEST AND RESPONSE DATA ///////
    const { data, loading, error } = useFetch(productDetailUrl, config, 0);
    const [itemData, setItemData] = useState(null);
    const [images, setImages] =  useState([])

    useEffect(() => {
        if (data !== null) {
            // NO COLORED IMAGE OPTION -> ALL WE GOT IS DEFAULTS ONES
            setItemData(data);
            setImages([...defaultImages]);
        }
    }, [data]);
    /////// ITEM REQUEST AND RESPONSE DATA ///////

    /////// CONFIGURATION DATA ///////
    const [canAddCart,setCanAddCart] = useState(true);
    const [itemConfiguration,setItemConfiguration] = useState(null);
    const [configPrice,setConfigPrice] = useState(0);
    const [dimensions,setDimensions] = useState({
        height: defaultHeight,
        width: defaultWidth,
    });

    useEffect(()=>{
        if (itemConfiguration===null) {
            let tempItemConfiguration = {};
            selectionData.forEach(item => {

                let arr = [];
                const options = item.options;

                options.forEach(singleOption=> {
                    if (singleOption.defaultSelected === true) {
                        let tmp;
                        if (typeof singleOption.price === 'object') {
                            const selectedOption = Object.keys(singleOption.price)[0];
                            tmp = {[`${singleOption.title} ${selectedOption}`]: singleOption.price[selectedOption]};
                        } else {
                            tmp = {[singleOption.title]: singleOption.price};
                        }

                        arr.push(tmp);
                    }
                });

                tempItemConfiguration[item.title] = [...arr];
            });

            setItemConfiguration(tempItemConfiguration);
        } else {
            // calculate price logic
            const tempConfigPrice = sumValues(itemConfiguration);
            setConfigPrice(tempConfigPrice);
        }
    },[itemConfiguration])
    /////// CONFIGURATION DATA ///////


    /////// TOTAL PRICE DATA ///////
    const [validPrice,setValidPrice] = useState(0);

    useEffect(()=>{
        if (itemConfiguration!==null && itemData!==null) {
            let request = {};
            request.width = dimensions.width;
            request.height = dimensions.height;
            request.type = priceType;
            debouncedGetPriceFromBackend(request);
        }
    },[itemConfiguration, dimensions,itemData]);

    const getPriceFromBackend = async (requestBody) => {
        const BASE_URL = process.env.REACT_APP_BE_API;
        try {
            const response = await axios.post(`${BASE_URL}/api/sun-protection-product/price`, requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setValidPrice(get(response.data, 'price'));
            setCanAddCart(true);
        } catch (error) {
            setCanAddCart(false);
        }
    }

    const debouncedGetPriceFromBackend = useCallback(debounce(getPriceFromBackend, 1000), []);
    /////// TOTAL PRICE DATA ///////

    /////// ADD TO CART LOGIC ///////
    const generateUniqueCode = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

    const handleAddIntoCard = (e,quantity,itemPrice) => {
        e.preventDefault();

        const uniqueCode = generateUniqueCode();
        let itemName = cartName ? cartName:( itemData?.id || "").split(/(?=[A-Z])/).join(" ");
        const secondaryName = itemData?.color?.title;
        const temp = extractAttributes(itemConfiguration);
        let attributes = [`Höhe: ${dimensions.height}mm`, `Breite: ${dimensions.width}mm`, ...temp];


        if (extraCartInfoArray) {
            attributes = [...extraCartInfoArray, ...attributes];
        }

        const item = {
            attributes: attributes,
            shippingWidth: dimensions.width,
            cartImage: images[0],
            quantity: quantity,
            price: itemPrice,
            uniqueCode: uniqueCode,
            itemName: itemName,
            secondaryName: secondaryName,
            productID: currentProduct?.id,

            // discount related data below
            enableDiscount: enableDiscount,
            discountPercentage: percentage,
        };

        dispatch({type:ADD_TO_CART,payload:item});

        const button = document.getElementById('open-notification-button');
        if (button)
            setTimeout(()=>button.click(),300);
    }


    const handleAddFreeSamplingIntoCard = (e) => {
        e.preventDefault();

        const uniqueCode = generateUniqueCode();
        const secondaryName = itemData?.color?.title;
        const temp = extractProperties(itemData?.color?.properties);
        let attributes = [...temp];


        if (extraCartInfoArray) {
            attributes = [...extraCartInfoArray, ...attributes];
        }

        if (freeSamplingTitle.includes("Plissee")) {
            const MaterialType = itemData.color.properties.MaterialType;
            if (MaterialType==="Wabenplissee") {
                freeSamplingTitle = freeSamplingTitle.replace("Plissee", "Wabenplissee");
            }
        }

        const item = {
            attributes: attributes,
            shippingWidth: 0,
            cartImage: images[1],
            price: 0,
            quantity: 1,
            uniqueCode: uniqueCode,
            itemName: freeSamplingTitle,
            secondaryName: secondaryName,
            productID: currentProduct?.id,
        };

        dispatch({type:ADD_TO_CART,payload:item});

        const button = document.getElementById('open-notification-button');
        if (button)
            setTimeout(()=>button.click(),300);

    }

    /////// ADD TO CART LOGIC ///////

    /////// DO REVIEW LOGIC ///////
    const [currentProduct,setCurrentProduct] = useState(null);

    const handleClickReview = (e) => {
        e.preventDefault();

        if (userInfo===null) {
            const button = document.getElementById("loginPopup");
            if (button)
                setTimeout(()=>{button.click();},0);
        } else {
            const button = document.getElementById("leave-a-review-modal");
            if (button)
                setTimeout(()=>{button.click();},0);
        }
    }
    /////// DO REVIEW LOGIC ///////
    const checkLatestConfig = useMemo(
        () =>
            debounce(() => {
                dispatch({type:SET_PRODUCT_BASED_MEASUREMENT, payload:cartName});
            }, 500),
        [cartName]
    );

    useEffect(() => {
        checkLatestConfig(itemConfiguration);
        return () => {
            checkLatestConfig.cancel();
        };
    }, [itemConfiguration, cartName]);

    if (loading) {
        return <CircularProgress color="warning" />;
    }

    if (error) {
        return (
            <div>
                {error !== null && <ModifiedAlert severity="error">{error}</ModifiedAlert>}
            </div>
        );
    }

    return (
        <>
            {
                itemData ?
                    (
                        <div>
                            <ColumnContainer>
                                <LeftColumn>
                                    <Carousel productDetailUrl={productDetailUrl} images={images} itemData={itemData} setCurrentProduct={setCurrentProduct} itemName2={cartName}/>
                                </LeftColumn>
                                <RightColumn>
                                    {/* component below is a popup */}
                                    <SelectorComponent data={moreDetailInfo}/>
                                    {/* component above is a popup */}
                                    {/* component below is a popup */}
                                    <ShowPdfComponent pdfUrl={pdfUrl}/>
                                    {/* component above is a popup */}
                                    <CustomButtonWrapper>
                                        {
                                            userInfo?.access_token && currentProduct &&
                                            <ReviewModal
                                                token={userInfo.access_token}
                                                currentProduct={currentProduct}
                                                itemName={currentProduct.name}
                                                secondaryName={itemData?.color?.title}
                                                productImage={images[0]}
                                            />

                                        }
                                        <CustomButton onClick={(e)=>handleClickReview(e)} variant='outlined' color='warning'>Bewertung abgeben</CustomButton>
                                    </CustomButtonWrapper>
                                    {/* <ProductDetails itemData={itemData} image={images[1]} queryParam={null}/> */}
                                    {
                                        selectionData.map((item,index)=>{
                                            return (
                                                <Selection
                                                    key={index}
                                                    index={index}
                                                    optionList={item}
                                                    itemConfiguration={itemConfiguration}
                                                    setItemConfiguration={setItemConfiguration}
                                                    setMoreDetailInfo={setMoreDetailInfo}
                                                />)
                                        })
                                    }


                                    <Title>Abmessungen</Title>
                                    <HowtoMeasureWrapper>
                                        {
                                            moreThanOnePdf===true &&
                                            <>
                                            {
                                                pdfArray.map((item,index)=>{

                                                    return (
                                                        <li className="my-2" key={index}>
                                                            {item.message !== null ? item.message : "Anleitung zum"}
                                                            <span onClick={() => {
                                                                    setPdfUrl(item.measurementUrl);
                                                                    const button = document.getElementById("measurement-option-detail-btn");
                                                                    if (button) {
                                                                        setTimeout(() => {
                                                                            button.click();
                                                                        }, 0);
                                                                    }
                                                                }} className='mx-1' style={{
                                                                    textDecoration: "underline",
                                                                    color: "#f59f4c",
                                                                    cursor: "pointer",
                                                                    fontWeight: "bold"
                                                                }}>
                                                                Richtig messen
                                                            </span>
                                                        </li>
                                                    );
                                                })
                                            }
                                            </>
                                        }
                                        {
                                            moreThanOnePdf !== true && measurementUrl !== null &&
                                            <>
                                                {measurementExplanation !== null ? measurementExplanation : "Anleitung zum"}
                                                <span onClick={() => {
                                                    // measurementUrl
                                                    setPdfUrl(measurementUrl);
                                                    const button = document.getElementById("measurement-option-detail-btn");
                                                    if (button) {
                                                        setTimeout(() => {
                                                            button.click();
                                                        }, 0);
                                                    }
                                                }} className='mx-1' style={{
                                                    textDecoration: "underline",
                                                    color: "#f59f4c",
                                                    cursor: "pointer",
                                                    fontWeight: "bold"
                                                }}>
                                                Richtig messen
                                                </span>
                                            </>
                                        }
                                    </HowtoMeasureWrapper>
                                    <MeasurementWrapper>
                                        <FormControlContainer>
                                        <div>{`Breite (${dimensions.width/10}cm)`}</div>
                                            <FormControl sx={{ width: "60%", marginTop: "5px" }} variant="outlined">
                                                <OutlinedInput
                                                    type="text"
                                                    color="warning"
                                                    placeholder="Breite (mm)"
                                                    value={dimensions.width}
                                                    onChange={(e)=>setDimensions((prev)=>({...prev, width: e.target.value}))}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            mm
                                                        </InputAdornment>
                                                    }
                                                />
                                                {
                                                    widthText!==null && <p
                                                        style={{
                                                            marginTop: "5px",
                                                            marginLeft: "2px",
                                                            textAlign: "left",
                                                            color: "grey"
                                                        }}
                                                    >
                                                        {widthText}
                                                    </p>
                                                }
                                            </FormControl>
                                        </FormControlContainer>
                                        <FormControlContainer>
                                            <div>{`Höhe (${dimensions.height/10}cm)`}</div>

                                            <FormControl sx={{ width: "60%", marginTop: "5px" }} variant="outlined">
                                                <OutlinedInput
                                                    type="text"
                                                    color="warning"
                                                    placeholder="Höhe (mm)"
                                                    value={dimensions.height}
                                                    onChange={(e)=>setDimensions((prev)=>({...prev, height: e.target.value}))}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            mm
                                                        </InputAdornment>
                                                    }
                                                />
                                                {
                                                    heightText!==null && <p
                                                        style={{
                                                            marginTop: "5px",
                                                            marginLeft: "2px",
                                                            textAlign: "left",
                                                            color: "grey"
                                                        }}
                                                    >
                                                        {heightText}
                                                    </p>
                                                }
                                            </FormControl>
                                        </FormControlContainer>
                                    </MeasurementWrapper>
                                    <div>
                                        <AddToCart
                                            isInsectProtectionProduct={true}
                                            showGetSampleButton={false}
                                            canAddCart={canAddCart}
                                            itemPrice={validPrice + configPrice}
                                            validPrice={validPrice}
                                            setMoreDetailInfo={setMoreDetailInfo}
                                            handleAddIntoCard={handleAddIntoCard}
                                            handleAddFreeSamplingIntoCard={handleAddFreeSamplingIntoCard}
                                            defaultCategoryForDiscount={"INSEKTENSCHUTZ"}
                                        />
                                    </div>
                                </RightColumn>
                            </ColumnContainer>
                            <ProductBasedMeasurement/>
                            <HowToAssemble assemblyInfo={assemblyInfo}/>
                            <Installation/>
                            <br/>
                            <br/>
                            <br/>
                            <Reviews/>
                            <br/>
                            <br/>
                        </div>
                    )
                    : (<div></div>)
            }
        </>
    );
}

export default InsectProducts;
