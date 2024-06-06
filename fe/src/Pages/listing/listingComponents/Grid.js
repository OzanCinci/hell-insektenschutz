import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '@mui/material/Button';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    column-gap: 10px;
    /*border: 2px solid purple;*/
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

/*
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
    /*opacity: ${props => (props.visible ? 1 : 0)};*/
//    height: ${props => (props.visible ? "100%" : 0)};
//    overflow: hidden;
//    pointer-events: ${props => (props.visible ? 'auto' : 'none')};
//
//    @media (max-width: 850px) {
//        overflow-x: visible;
//    }
//`;

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
`;

const BottomInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 10%;
    gap: 40%;
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

function extractProperties(properties) {
    const result = [];

    // Translation map for all possible keys and array elements
    const translationMap = {
        "Translucency": "Transluzenz",
        "MaterialType": "Materialtyp",
        "DampWipeable": "Feucht abwischbar",
        "SuitableHumidRooms": "Geeignet für feuchte Räume",
        "DirtRepellant": "Schmutzabweisend",
        "PearlCoated": "Perlbeschichtet",
        "OekoTexStandard100": "Öko-Tex Standard 100",
        "Availability": "Verfügbarkeit",
        "MinPrice": "Mindestpreis",
        "Hue": "Farbton",
        "Material": "Material",
        "Room": "Raum",
        "Look": "Aussehen",
        "LamellaWidth": "Lamellenbreite",
        "Function": "Funktion",
        "halbtransparent": "Halbtransparent",
        "Feuchtraum": "Feuchtraum",
        "Handwaschbar bis 30°": "Handwaschbar bis 30°",
        "Schadstoffgeprüft": "Schadstoffgeprüft",
        "100% Polyester": "100% Polyester",
        "Plissee": "Plissee",
        "Hitzeschutz": "Hitzeschutz"
    };

    const keysToExtract = [
        "Translucency",
        "MaxWidth",
        "MaterialType",
        "DampWipeable",
        "SuitableHumidRooms",
        "DirtRepellant",
        "PearlCoated",
        "OekoTexStandard100",
        "Material",
        "Room",
        "Look",
        "LamellaWidth",
        "Function"
    ];

    keysToExtract.forEach(key => {
        const value = properties[key];
        
        if (key==='MaxWidth') {
            result.push(`Max. Breite ${value} cm`);
            return;   
        }
        
        if (value === '0') {
            // Skip if the value is 0
            return;
        } else if (value === '1') {
            // Add the German version of the key if the value is 1
            if (translationMap[key]) {
                result.push(translationMap[key]);
            }
        } else if (Array.isArray(value)) {
            // Add all elements if the value is an array
            value.forEach(item => {
                if (item !== null && translationMap[item]) {
                    result.push(translationMap[item]);
                }
            });
        } else {
            // Add the translated value if it exists, otherwise add the value itself
            if (translationMap[value]) {
                result.push(translationMap[value]);
            } else {
                result.push(value);
            }
        }
    });

    return result;
}

const Grid = ({ loading, data, link }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [detailVisible, setDetailVisible] = useState([]);
    const [pageLoading, setPageLoading] = useState(false);
    const itemsPerPage = 12;

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

    

    return (
        <GridContainer>
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
                                            <a style={{textDecoration: "none"}} href={`/produkts/${link}/${item.id}`}>
                                                <CustomImg src={item.mainImage} width='100%' height='auto' />
                                            </a>
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
                                            <PriceTag>
                                                {`${item.properties.MinPrice}€`}
                                            </PriceTag>
                                        </BottomInfoWrapper>
                                        <a style={{textDecoration: "none"}} href={`/produkts/${link}/${item.id}`}>
                                            <CustomButton onClick={(e)=>console.log("asd")} variant="outlined" color="warning">Jetzt konfigurieren</CustomButton>
                                        </a>
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
    );
};

export default Grid;
