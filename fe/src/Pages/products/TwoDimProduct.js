import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { ADD_TO_CART } from '../../constants/user';
import { useDispatch, useSelector } from 'react-redux';
import { debounce, get } from 'lodash';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Carousel from '../ProductComponents/Carousel';
import ProductDetails from '../ProductComponents/ProductDetails';
import Selection from '../ProductComponents/Selection';
import Installation from '../ProductComponents/Installation';
import Reviews from '../../LandingPageComponents/Reviews';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AddToCart from '../SingleProductPage/components/AddToCart';
import Button from '@mui/material/Button';
import ReviewModal from '../../CustomComponents/ReviewModal';

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
  margin-top: 120px;
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

function TwoDimProduct({dataFromJSON,id, extraCartInfoArray}) {
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
    const defaultHeight = dataFromJSON.defaultHeight;
    const defaultWidth = dataFromJSON.defaultWidth;
    /////// PARSE DATA IMMEDIATELY ///////


  const dispatch = useDispatch();
  const nav = useNavigate();
  const [moreDetailInfo, setMoreDetailInfo] = useState(null);
  const {userInfo} = useSelector(state=>state.login);

  /////////// QUERY PARAMS ///////////
  const [queryParam, setQueryParam] = useState('');

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Parse the URL
    const url = new URL(currentUrl);

    // Get the value of the 'q' query parameter
    const queryParams = new URLSearchParams(url.search);
    const qParamValue = queryParams.get('q');

    // Update the state with the query parameter value
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
      //console.log("SINGLE COLOR DATA:" ,data);
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
                    // TODO: you assume default ones add 0€ cost!
                    // if not change the code here!
                    //const tmp = {[singleOption.title]:0};
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
        //console.log("tempItemConfiguration: ",tempItemConfiguration);
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

        const sampleColor = itemData.color.id;
        const sampleSubCategories = itemData.subCategories;
        const sampleBlendColors = itemData.blendColors;

        
        let subCat;
        let current;
        if (subcategoryTitle==="check-mm") {
          subCat = itemData.color.properties.BlindWidth;
        } else if (subcategoryTitle==="check-basic-plissee") {
          subCat = queryParam;
        } else if (subcategoryTitle==="") {
          subCat = "rollo";
        } else if (subcategoryTitle==="PlisseeWintergarten") {
          // HARDCODED VALUE FOR WINTERGARTEN PLISSEE
          subCat = "PL11"; 
        } else {
          subCat = Object.keys(itemConfiguration[subcategoryTitle][0])[0];
        }


        if (subCat==="rollo") {
          request.subcategory = "";
        } else {
          for (let i=0;i<sampleSubCategories.length;i++) {
            current = sampleSubCategories[i];
            if (current.title===subCat) {
                request.subcategory = Number(current.id);
                break;
            }
          }
        }
        
        //console.log("Object.keys(itemConfiguration[blendcolorTitle][0]): ",Object.keys(itemConfiguration[blendcolorTitle][0]));
        const blendCol = Object.keys(itemConfiguration[blendcolorTitle][0])[0];
        for (let i=0;i<sampleBlendColors.length;i++) {
            current = sampleBlendColors[i];
            if (current.title===blendCol) {
                request.blendcolor = Number(current.id);
                break;
            }
        }

        request.color = Number(sampleColor);

        request.width = Math.floor(dimensions.width / 10); 
        request.height = Math.floor(dimensions.height / 10);
        request.category = requestCategory;

        //console.log("AAAAAAAAAAAA!!!!!");
        //console.log("PRICE REQUEST ATACAK");
        //console.log("REQUESTTT: ",request);
        debouncedGetPriceFromBackend(request);
        //console.log("PRICE REQUEST ATTI");
        
    }
  },[itemConfiguration, dimensions,itemData]);

  const getPriceFromBackend = async (requestBody) => {
    const BASE_URL = process.env.REACT_APP_BE_API;
    try {
        const response = await axios.post(`${BASE_URL}/api/external-products/price`, requestBody, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        //console.log('Response:', response.data);
        const salePriceStr = get(response.data, 'data.price.salePrice');
        const parsedSalePrice = parseFloat(salePriceStr.replace(',', '.'));
        //console.log("parsedSalePrice: ",parsedSalePrice);
        const tmpValidPrice = parsedSalePrice * saleMultiplier;
        //console.log("validPrice: ", tmpValidPrice); 
        setValidPrice(tmpValidPrice);
        setCanAddCart(true);
        //console.log("PRICE REQUEST SON");
      } catch (error) {
        setCanAddCart(false);
        //console.log("PRICE REQUEST HATA");
      }
  }

  // Wrap the getPriceFromBackend function with debounce
  const debouncedGetPriceFromBackend = useCallback(debounce(getPriceFromBackend, 1000), []);
  /////// TOTAL PRICE DATA ///////


  /////// ADD TO CART LOGIC ///////
  const generateUniqueCode = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

  const handleAddIntoCard = (e,quantity,itemPrice) => {
    e.preventDefault();

    const uniqueCode = generateUniqueCode();
    const itemName = ( itemData?.id || "").split(/(?=[A-Z])/).join(" ");
    const secondaryName = itemData?.color?.title;
    const temp = extractAttributes(itemConfiguration);
    let attributes = [`Höhe: ${dimensions.height/10}cm`, `Breite: ${dimensions.width/10}cm`, ...temp];

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
        ...dimensions,
        attributes: attributes,
        shippingWidth: dimensions.width,
        cartImage: images[0],
        quantity: quantity,
        price: itemPrice,
        uniqueCode: uniqueCode,
        itemName: itemName,
        secondaryName: secondaryName
    };

    //console.log("CART ITEM: ", item);

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
    //console.log("userInfo: ",userInfo);

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
                        <Carousel productDetailUrl={productDetailUrl} images={images} itemData={itemData} setCurrentProduct={setCurrentProduct}/>
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
                        <button onClick={()=>console.log("ITEM CONFIGURATION: ", itemConfiguration)}>printf item configuration</button>
                        <Title>Abmessungen</Title>
                            <HowtoMeasureWrapper>
                                Anleitung zum 
                                <span onClick={()=>nav(measurementUrl)} className='mx-1' style={{textDecoration: "underline", color: "#f59f4c", cursor: "pointer", fontWeight: "bold"}}>
                                    Richtig messen
                                </span>
                            </HowtoMeasureWrapper>
                        <MeasurementWrapper>
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
                                </FormControl>
                            </FormControlContainer>
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
                                </FormControl>
                            </FormControlContainer>
                        </MeasurementWrapper>
                        <div>
                            <AddToCart 
                                canAddCart={canAddCart}
                                itemPrice={validPrice + configPrice}
                                setMoreDetailInfo={setMoreDetailInfo}
                                handleAddIntoCard={handleAddIntoCard}
                            />
                        </div>
                    </RightColumn>
                </ColumnContainer>
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

export default TwoDimProduct;
