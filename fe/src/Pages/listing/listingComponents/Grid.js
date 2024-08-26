import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '@mui/material/Button';
import ReviewList from '../../../CustomComponents/ReviewList';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Alert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import { extractProperties } from '../../../CustomComponents/extractProperties';

const ModifiedAlert = styled(Alert)`
    width: fit-content;
    font-size: 18px !important;
    text-align: left;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    column-gap: 10px;
    width: fit-content;

    /* Grid layout for screens smaller than or equal to 1350px */
    @media (max-width: 1350px) {
        grid-template-columns: repeat(3, 1fr);
    }

    /* Grid layout for screens smaller than or equal to 1050px */
    @media (max-width: 1050px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CustomImg = styled.img``;

const ImgWrapper = styled.div`
    position: relative;
    width: fit-content;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%; /* Adjust size as needed */
        height: 50%; /* Adjust size as needed */
        transform: translate(-30%, 25%);
        background-image: url(${props => props.url});
        background-size: cover;
        background-repeat: no-repeat;
    }
`;


const MoreDetail = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: all 0.3s ease;
    height: ${props => (props.visible ? "100%" : 0)};
    overflow: hidden;
    pointer-events: ${props => (props.visible ? 'auto' : 'none')};

    @media (max-width: 600px) {
        overflow: visible;
    }
`;

const CustomButtonFilter = styled(Button)`
    @media (min-width: 850px) {
        display: none !important;
    }   
    text-transform: none !important;
`;

const CustomButtonFilterWrapper = styled.div`
    margin-bottom: 5px;
`;


const ModeDetailInnerPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10%;
    align-items: flex-start;
    gap: 5px;
    padding-left: 10%;
    text-align: left;
`;

const BottomInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10%;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;

    @media (max-width: 850px) {
        gap: 0%;
        padding-left: 0%;
        justify-content: space-around;
    }
`;

const CustomArrowDropDownIcon = styled(ArrowDropDownIcon)`
    transform: ${props => props.visible ? "rotate(180deg)" : "none)"};
    transition: all 0.3s ease !important;
`;


const InfoButton = styled.div`
    width: fit-content;
    margin-left: auto;
    color: rgb(82, 82, 102);
    cursor: pointer;
    font-weight: 400;
    &:hover {
        text-decoration: underline;
    }
`;

const PriceTag = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: rgb(82, 82, 102);

    @media (max-width: 650px) {
        text-align: right;
        
        .price-tag {
            display: block;
        }
    }
    
`;

const CustomButton = styled(Button)`
    border-width: 3px !important;
    border-radius: 0 !important;
    border-radius: 0px 0px 5px 5px !important;

    /* Grid layout for screens smaller than or equal to 1350px */
    @media (max-width: 1050px) {
        font-size: 11px !important;
    }

`;

const ItemContainer = styled.div`
    width: 95%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 0px 0px 5px 5px;
    padding: 10px;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    /* Grid layout for screens smaller than or equal to 1350px */
    @media (max-width: 850px) {
        width: 99%;
    }
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 5%;
    margin-bottom: 40px;

    /* Grid layout for screens smaller than or equal to 1350px */
    @media (max-width: 850px) {
        padding-right: 1%;
    }    
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direciton: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    /* Grid layout for screens smaller than or equal to 1350px */
    @media (max-width: 850px) {
        transform: scale(0.9);
    }
`;

const GridContainer = styled.div`
    padding-left: 10px;
    margin-top: 0px;
    max-width: 1200px;

    @media (min-width: 850px) {
        width: 1200px;
    }   

    @media (max-width: 850px) {
        padding-left: 0px;
    }   
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 1150px;
    margin: auto;
    margin-bottom: 40px;
    gap: 10px;

    @media (max-width: 1200px) {
       flex-direction: column;
    }
    @media (max-width: 800px) {
        flex-direction: row; 
        justify-content: flex-end; 
        align-items: center; 
        margin-bottom: 20px;
        gap: 0px;
        padding-left: 5px;
    }
`;
const RightCol = styled.div`
    width: 80%;
    max-width: 750px;
    text-align: left;
    font-size: 18px;

    @media (max-width: 1200px) {
        width: 90%;
        max-width: 1200px;
        margin: auto;
    }

    @media (max-width: 800px) {
        display: none;
    }
`;

const LeftCol = styled.div`
    width: 20%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justfiy-content: flex-start;
    align-items: center;

    @media (max-width: 1200px) {
        width: fit-content;
        max-width: 1200px;
        margin: auto;
    }

    @media (max-width: 800px) {
        text-align: right;
        align-items: flex-end;
        padding-right: 10px;
    }
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: rgb(82, 82, 102);
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 21px;
  color: #696984;
`;

const SignleAttribute = styled.div`
    @media (max-width: 600px) {
        font-size: 15px;
        padding-top: 0%;
        padding-left: 0%;
        text-align: left;
        max-width: 50vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform: translateX(-6vw);
        gap: 0px;
    }
`;

const ProductCount = styled.div`
    font-size: 19px;
    text-align: left;

    /* Grid layout for screens smaller than or equal to 1350px */
    @media (max-width: 850px) {
        font-size: 15px;
        padding-left: 10px;
    }
`;

const config = {
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
    }
};

const discount = false;
const Grid = ({ loading, data, link, productInfoUrl }) => {
    const nav = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [detailVisible, setDetailVisible] = useState([]);
    const [pageLoading, setPageLoading] = useState(false);
    const itemsPerPage = 12;

    const { data: productData, loading: productLoading, error: productError } = useFetch(productInfoUrl, config, 0);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
    },[]);



    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const current = data.slice(startIndex, endIndex).map(item=> {
            const extraDetails = extractProperties(item.properties);
            return {...item,extraDetails}
        });
        
        setCurrentData(current);
        // Initialize detailVisible array
        setDetailVisible(new Array(data.length).fill(false)); 
    }, [currentPage, data]);

    useEffect(()=>{
        setCurrentPage(1);
    },[data]);


    const toggleDetail = (index) => {
        setDetailVisible(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handlePageChange = (val) => {
        setPageLoading(true);
          
        if (val>0) setCurrentPage(prev=>prev+1);
        else  setCurrentPage(prev=>prev-1);

        setTimeout(() => {
            setPageLoading(false);
        }, 600);
    }

    const handlePageBottomChange = (val) => {
        setPageLoading(true);

        window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
          
          
        if (val>0) setCurrentPage(prev=>prev+1);
        else  setCurrentPage(prev=>prev-1);

        setTimeout(() => {
            setPageLoading(false);
        }, 600);
        
    }

    const handleClickReviewList = () => {
        const button = document.getElementById("review-list-modal-pop-up-btn");
        if (button) {
            setTimeout(() => {
                button.click();
            }, 0);
        }
    }
    

    return (
        <>        
            <GridContainer>
                {productData && <ReviewList productId={productData.id}/>}
                {
                    productLoading && <CircularProgress color='warning' />
                }
                {
                    productError && <ModifiedAlert severity="error">{productError}</ModifiedAlert>
                }
            
                <CustomButtonFilterWrapper>
                    {
                        !productLoading && !productError && productData &&
                        <ProductInfo>
                            <CustomButtonFilter 
                                variant="outlined" color="warning"
                                onClick={(e)=>{
                                    e.preventDefault();
                                    const button = document.getElementById("filter-modal-mobile-filter");
                                    if (button)
                                        button.click();
                            }}> Filteroptionen </CustomButtonFilter>
                            <LeftCol>
                                <Title>{productData.name}</Title>
                                <RatingWrapper>
                                    <div className='d-flex gap-3'>
                                    <div>{(productData.rating).toFixed(1)}/5</div>
                                    <Rating name="read-only" value={productData.rating} precision={0.5} readOnly />
                                    </div>
                                    <div onClick={()=>handleClickReviewList()} style={{textDecoration: "underline", cursor: "pointer"}}>({productData.numberOfRating} Bewertungen)</div>
                                </RatingWrapper>
                            </LeftCol>
                            <RightCol>
                                <div>
                                    {productData.description}
                                </div>
                            </RightCol>
                        </ProductInfo>
                    }
                                        
                </CustomButtonFilterWrapper>
                <PaginationWrapper>
                    <ProductCount>
                        Wir haben 
                        <b>{` ${data.length} Optionen `}</b>
                        für Sie gefunden
                    </ProductCount> 
                    <ButtonWrapper>
                        <Button disabled={currentPage===1} onClick={()=>handlePageChange(-1)} variant="outlined" color="warning">Zurück</Button>
                        <div>
                            {`Seite ${currentPage} von ${Math.ceil(data.length / itemsPerPage)}`}
                        </div>
                        <Button disabled={currentPage===Math.ceil(data.length / itemsPerPage)} onClick={()=>handlePageChange(1)} variant="outlined" color="warning">Weiter</Button>
                    </ButtonWrapper>
                </PaginationWrapper>
                {(loading === true || pageLoading === true) ? (
                    <div style={{marginTop: "150px"}}>
                        <CircularProgress color='warning' />
                    </div>
                ) : (
                    <div>
                        <Wrapper>
                            {data !== null &&
                                currentData.map((item, index) => {
                                    return (
                                        <ItemContainer>
                                            <InfoButton onClick={()=>toggleDetail(index)}>{detailVisible[index] ? "Weniger Infos" : "Mehr Infos"} <CustomArrowDropDownIcon visible={detailVisible[index]}/></InfoButton>
                                            <ImgWrapper url={item.secondaryImage}>
                                                <div style={{cursor: "pointer"}} onClick={e=>{
                                                    if (item.q)
                                                        nav(`/produkts/${link}/${item.id}?q=${item.q}`);
                                                    else if (item.detailedLink)
                                                        nav(`/produkts/${item.detailedLink}/${item.id}`);
                                                    else
                                                        nav(`/produkts/${link}/${item.id}`);
                                                }}>
                                                    <CustomImg src={item.mainImage} width='100%' height='auto' />
                                                </div>
                                                <MoreDetail visible={detailVisible[index]}>
                                                    <ModeDetailInnerPage>
                                                    {
                                                    item.extraDetails.map((el, elIndex) => {
                                                        return (
                                                            <SignleAttribute key={elIndex}>
                                                                <TaskAltIcon className='mx-1' fontSize='small' color='warning'/>
                                                                {el}
                                                            </SignleAttribute>
                                                        )
                                                    })   
                                                    }
                                                    </ModeDetailInnerPage>
                                                </MoreDetail>
                                            </ImgWrapper>
                                            <div className='my-2' style={{ textAlign: "left", marginTop: "10px", fontSize: "18px", paddingLeft: "10px" }}>{item.title}</div>
                                            <BottomInfoWrapper>
                                                <div style={{minWidth: "35px"}}>
                                                    {item.ternaryImage !== null && <img height='35px' width='35px' src={item.ternaryImage}/>}
                                                </div>
                                                {
                                                    discount===true &&
                                                    <PriceTag>
                                                        <span className='price-tag' style={{textDecoration: "line-through", fontSize: "15px"}}>{`${(item.properties.MinPrice * 2.5).toFixed(2)}€`}</span>
                                                        <span className='price-tag' style={{color: "red", marginLeft: "10px"}}>
                                                            {`${(item.properties.MinPrice * 2.5 * 0.7).toFixed(2)}€`}
                                                        </span>
                                                        <div style={{ fontSize: "17px"}}>
                                                            30% Rabatt
                                                        </div>
                                                    </PriceTag>
                                                }
                                                {
                                                    discount===false &&
                                                    <PriceTag>
                                                        <span className='price-tag' style={{marginLeft: "10px"}}>
                                                            {`${(item.properties.MinPrice * 2.5).toFixed(2)}€`}
                                                        </span>
                                                    </PriceTag>
                                                }
                                                
                                            </BottomInfoWrapper>
                                            <div>
                                                <CustomButton onClick={(e)=>{
                                                    if (item.q)
                                                        nav(`/produkts/${link}/${item.id}?q=${item.q}`);
                                                    else if (item.detailedLink)
                                                        nav(`/produkts/${item.detailedLink}/${item.id}`);
                                                    else
                                                        nav(`/produkts/${link}/${item.id}`);
                                                }} variant="outlined" color="warning">Jetzt konfigurieren</CustomButton>
                                            </div>
                                        </ItemContainer>
                                    );
                                })}
                        </Wrapper>
                        {   
                                (data && data.length > 6) ?
                                <PaginationWrapper className='my-5'>
                                    <ProductCount>
                                        Wir haben 
                                        <b>{` ${data.length} Optionen `}</b>
                                        für Sie gefunden
                                    </ProductCount> 
                                    <ButtonWrapper>
                                        <Button disabled={currentPage===1} onClick={()=>handlePageBottomChange(-1)} variant="outlined" color="warning">Zurück</Button>
                                        <div>
                                            {`Seite ${currentPage} von ${Math.ceil(data.length / itemsPerPage)}`}
                                        </div>
                                        <Button disabled={currentPage===Math.ceil(data.length / itemsPerPage)} onClick={()=>handlePageBottomChange(1)} variant="outlined" color="warning">Weiter</Button>
                                    </ButtonWrapper>
                                </PaginationWrapper>
                                :
                                <>
                                    {
                                    (loading===false && pageLoading===false && data.length===0)
                                    ? 
                                    <div className='my-3'>
                                        <ProductionQuantityLimitsIcon style={{fontSize: "150px"}}/>
                                        <div style={{maxWidth: "80%", margin: "30px auto", textAlign: "left"}}>
                                            Entschuldigung, es wurden keine Produkte gefunden, die zu Ihren Filtern passen. Versuchen Sie, die Filter zurückzusetzen, um Produkte zu finden.
                                        </div>
                                    </div>
                                    :<div></div>
                                    }
                                </>
                        }
                        
                    </div>
                )}
            </GridContainer>
        </>
    );
};

export default Grid;
