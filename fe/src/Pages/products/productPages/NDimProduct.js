import React, { useCallback, useEffect, useState } from 'react';
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
import CONFIGURATION from "../../../config/config";

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
  margin-top: 165px;
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

const SelectorComponent = styled(({ data }) => {
    return (
        <div>
            <button
                id="product-color-option-detail-btn"
                style={{ display: "none" }}
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
                                    <img height="200px" width="auto" src={data.img} alt="Modal Content" />
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

function NDimProduct({dataFromJSON, id, extraCartInfoArray}) {
    /////// PARSE DATA IMMEDIATELY ///////
    const defaultImages = dataFromJSON.defaultImages;
    const selectionData = dataFromJSON.selectionData;
    const subcategoryTitle = dataFromJSON.subcategoryTitle;
    const blendcolorTitle = dataFromJSON.blendcolorTitle;
    const requestCategory = dataFromJSON.requestCategory;
    const saleMultiplier = dataFromJSON.saleMultiplier;
    const measurementUrl = dataFromJSON.measurementUrl;
    const productDetailUrl = dataFromJSON.productDetailUrl;
    const EXTERNAL_URL = dataFromJSON.EXTERNAL_URL;
    let freeSamplingTitle = dataFromJSON.freeSamplingTitle;
    const assemblyInfo = dataFromJSON.assemblyInfo;
    const cartName = dataFromJSON.cartName;

    const dimensionSelector = dataFromJSON.dimensionSelector;
    const secondDimensionSelector = dataFromJSON.secondDimensionSelector;
    const dimensionCalculators = dataFromJSON.dimensionCalculators;
    /////// PARSE DATA IMMEDIATELY ///////


    const dispatch = useDispatch();
    const nav = useNavigate();
    const [moreDetailInfo, setMoreDetailInfo] = useState(null);
    const {userInfo} = useSelector(state=>state.login);

    const {discountOptionMap} = useSelector(state=>state.config);
    const enableDiscount = discountOptionMap["PUBLIC"] != null;
    const percentage = discountOptionMap["PUBLIC"]?.percentage ?? 0.0;

    /////////// QUERY PARAMS ///////////
    const [queryParam, setQueryParam] = useState('');

    useEffect(() => {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const queryParams = new URLSearchParams(url.search);
        const qParamValue = queryParams.get('q');

        if (qParamValue) {
            setQueryParam(qParamValue);
        }
    }, []);
    /////////// QUERY PARAMS ///////////



    /////// ITEM REQUEST AND RESPONSE DATA ///////
    const url = `${EXTERNAL_URL}${id}`;
    const { data, loading, error } = useFetch(url, config, 0);
    const [itemData, setItemData] = useState(null);
    const [images, setImages] =  useState([])

    useEffect(() => {
        if (data !== null) {
            setItemData(data);
            const mainImage = data.color.previewImage;
            const secondaryImage = data.color.tileImage;
            let tmp;
            if (secondaryImage)
                tmp = [mainImage, secondaryImage, ...defaultImages];
            else
                tmp = [mainImage, ...defaultImages];

            setImages(tmp);
        }
    }, [data]);
    /////// ITEM REQUEST AND RESPONSE DATA ///////



    /////// CONFIGURATION DATA ///////
    const [canAddCart,setCanAddCart] = useState(true);
    const [itemConfiguration,setItemConfiguration] = useState(null);
    const [configPrice,setConfigPrice] = useState(0);
    const [dimensions, setDimensions] = useState(null);

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
            const tempConfigPrice = sumValues(itemConfiguration);
            setConfigPrice(tempConfigPrice);
        }
    },[itemConfiguration])
    /////// CONFIGURATION DATA ///////


    /////////// DYNAMIC CALCULATOR COMPONENT ///////////
    const [calculatorComponent, setCalculatorComponent] = useState(null);
    useEffect(() => {
        const tmp = findDimensionSelection();
        if (tmp)
            setCalculatorComponent(() => tmp);
    }, [itemConfiguration]);

    const findDimensionSelection = () => {
        if (!itemConfiguration || calculatorComponent===dimensionCalculators["default"]) return null;
        if (dimensionCalculators["default"]) return dimensionCalculators["default"].component;

        let selection = Object.keys(itemConfiguration?.[dimensionSelector]?.[0] || {})[0];
        if (secondDimensionSelector)
            selection = selection + " " + Object.keys(itemConfiguration?.[secondDimensionSelector]?.[0] || {})[0];

        if (
            selection
            && dimensionCalculators[selection]?.component
            && dimensionCalculators[selection]?.component!==calculatorComponent){
            return dimensionCalculators[selection].component
        }

        return null;
    }
    /////////// DYNAMIC CALCULATOR COMPONENT ///////////



    /////// TOTAL PRICE DATA ///////
    const [validPrice,setValidPrice] = useState(0);

    useEffect(()=>{
        if (itemConfiguration!==null && itemData!==null) {
            let request = {};

            const sampleColor = itemData.color.id;
            const sampleSubCategories = itemData.subCategories;
            const sampleBlendColors = itemData.blendColors;


            let current, subCat;
            if (subcategoryTitle==="check-basic-plissee") {
                subCat = queryParam;
            } else {
                subCat = Object.keys(itemConfiguration[subcategoryTitle][0])[0];
            }

            for (let i=0;i<sampleSubCategories.length;i++) {
                current = sampleSubCategories[i];
                if (current.title===subCat) {
                    request.subcategory = Number(current.id);
                    break;
                }
            }

            const blendCol = Object.keys(itemConfiguration[blendcolorTitle][0])[0];
            for (let i=0;i<sampleBlendColors.length;i++) {
                current = sampleBlendColors[i];
                if (current.title===blendCol) {
                    request.blendcolor = Number(current.id);
                    break;
                }
            }

            request.color = Number(sampleColor);

            if (!dimensions) return;

            request.width = Math.floor((dimensions.width ?? 0) / 10);
            request.height = Math.floor((dimensions.height ?? 0 ) / 10);
            request.width2 = Math.floor((dimensions.width2 ?? 0) / 10);
            request.height2 = Math.floor((dimensions.height2 ?? 0 ) / 10);
            request.depth = Math.floor((dimensions.depth ?? 0 ) / 10);
            request.heightleft = Math.floor((dimensions.heightleft ?? 0 ) / 10);
            request.heightright = Math.floor((dimensions.heightright ?? 0 ) / 10);
            request.widthtop = Math.floor((dimensions.widthtop ?? 0 ) / 10);
            request.widthbottom = Math.floor((dimensions.widthbottom ?? 0 ) / 10);
            request.category = requestCategory;
            request.kasondaExtendedPriceBuildType = dimensions.kasondaExtendedPriceBuildType;

            debouncedGetPriceFromBackend(request);
        }
    },[itemConfiguration, dimensions, itemData]);

    const getPriceFromBackend = async (requestBody) => {
        const BASE_URL = process.env.REACT_APP_BE_API;
        try {
            const response = await axios.post(`${BASE_URL}/api/external-products/price/extended`, requestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const salePriceStr = get(response.data, 'data.price.salePrice');
            const parsedSalePrice = parseFloat(salePriceStr.replace(',', '.'));
            const tmpValidPrice = parsedSalePrice * saleMultiplier;
            setValidPrice(tmpValidPrice);
            setCanAddCart(true);
        } catch (error) {
            setCanAddCart(false);
        }
    }

    // Wrap the getPriceFromBackend function with debounce
    const debouncedGetPriceFromBackend = useCallback(debounce(getPriceFromBackend, 1000), []);
    /////// TOTAL PRICE DATA ///////


    /////// ADD TO CART LOGIC ///////
    const generateUniqueCode = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

    const enrichAttributes = (attributes) => {
        let result = [...attributes];
        let tmp = []

        if (dimensions.Fenstertyp) {
            tmp.push(dimensions.Fenstertyp);
            tmp.push(dimensions["B x H:"]);
            return [...tmp, ...result];
        }

        if (dimensions.height && dimensions.height > 0) {
            tmp.push(`Höhe: ${dimensions.height}mm`);
        }
        if (dimensions.width && dimensions.width > 0) {
            tmp.push(`Breite: ${dimensions.width}mm`);
        }
        if (dimensions.height2 && dimensions.height2 > 0) {
            tmp.push(`Höhe 2: ${dimensions.height2}mm`);
        }
        if (dimensions.width2 && dimensions.width2 > 0) {
            tmp.push(`Breite 2: ${dimensions.width2}mm`);
        }
        if (dimensions.depth && dimensions.depth > 0) {
            tmp.push(`Tiefe: ${dimensions.depth}mm`);
        }
        if (dimensions.heightleft && dimensions.heightleft > 0) {
            tmp.push(`Höhe links: ${dimensions.heightleft}mm`);
        }
        if (dimensions.heightright && dimensions.heightright > 0) {
            tmp.push(`Höhe rechts: ${dimensions.heightright}mm`);
        }
        if (dimensions.widthtop && dimensions.widthtop > 0) {
            tmp.push(`Breite oben: ${dimensions.widthtop}mm`);
        }
        if (dimensions.widthbottom && dimensions.widthbottom > 0) {
            tmp.push(`Breite unten: ${dimensions.widthbottom}mm`);
        }

        return [...tmp, ...result];
    }


    const handleAddIntoCard = (e,quantity,itemPrice) => {
        e.preventDefault();

        const uniqueCode = generateUniqueCode();
        let itemName = cartName ? cartName:( itemData?.id || "").split(/(?=[A-Z])/).join(" ");
        const secondaryName = itemData?.color?.title;
        const temp = extractAttributes(itemConfiguration);
        let attributes = enrichAttributes(temp);


        if (itemName.includes("Plissee")) {
            const material = itemData?.color?.properties.MaterialType;
            if (material && material==="Wabenplissee") {
                itemName = itemName.replace("Plissee","Wabenplissee");
            }
        }

        if (itemName.includes("Lamellenvorhang")) {
            itemName = itemName + " "  + queryParam;
        }

        if (queryParam) {
            if (["127 mm", "89 mm"].includes(queryParam)) {
                const additionalData = "Lamellenbreite: " + queryParam;
                attributes = [additionalData, ...attributes];
            }
        }

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

        if (queryParam) {
            if (["127 mm", "89 mm"].includes(queryParam)) {
                const additionalData = "Lamellenbreite: " + queryParam;
                attributes = [additionalData, ...attributes];
            }
        }

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
                                    <ProductDetails itemData={itemData} image={images[1]} queryParam={queryParam}/>
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

                                    {/* BURAYA GELECEK DIMENSIONLAR AGA */}
                                    {calculatorComponent !== null &&
                                        React.createElement(calculatorComponent, { measurementUrl, dimensions, setDimensions })
                                    }

                                    <div>
                                        <AddToCart
                                            canAddCart={canAddCart}
                                            itemPrice={validPrice + configPrice}
                                            validPrice={validPrice}
                                            setMoreDetailInfo={setMoreDetailInfo}
                                            handleAddIntoCard={handleAddIntoCard}
                                            handleAddFreeSamplingIntoCard={handleAddFreeSamplingIntoCard}
                                        />
                                    </div>
                                </RightColumn>
                            </ColumnContainer>
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

export default NDimProduct;
