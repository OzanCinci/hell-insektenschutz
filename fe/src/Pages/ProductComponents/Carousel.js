import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ReviewList from '../../CustomComponents/ReviewList';
import Rating from '@mui/material/Rating';
import useFetch from '../../hooks/useFetch';


const Container = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 20px;
    min-height: 40vh;
    max-width: 700px;
    overflow: hidden;
`;


const LeftColumn = styled.div`
    width: 100%;
    min-height: 45vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const RightColumn = styled.div`
    width: 20%;
    height: 100%;
    min-height: 35vh;

    display: flex;
    flex-direction: column;
    gap: 20px;

    max-height: 55vh;
    transform: ${props => "translateY(" + props.slide + ")"};
    transition: all 0.4s ease-in-out;
`;

const CustomImage = styled.img`
    height: auto;
    width: 100%;
    align-self: center;
    max-width: 100%;
    /*max-height: 45vh;*/
    max-height: 35vw;
`;

const CustomImageMobile = styled.img`
    /*height: auto;
    width: 100vw;
    align-self: center;*/
    width: 100vw;
    height: auto;
`;

const CustomSmallImage = styled.img`
    height: auto;
    width: 75%;
    align-self: center;
    border: ${props => props.active ? "3px solid #f59f4c": "none"};
    cursor: pointer;
    border-radius: 2px;
    margin-top: 15px;
`;

const DesktopWrapper = styled.div`
    @media only screen and (max-width: 1000px) {
       display: none;
    }
`;

const MobileWrapper = styled.div`
    @media only screen and (min-width: 1000px) {
        display: none;
    }
    margin-top: -7%;
`;

const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    @media only screen and (max-width: 500px) {
       margin-left: -2vw;
    }
`;


const StickyDiv = styled.div`
  position: -webkit-sticky; /* For Safari */
  position: sticky;
    
  top: 160px;
  left: 50px;
  width: 700px;
  background-color: #f8f9fa;
  background-color: white;
  
  padding: 30px 20px;
  padding-top: 15px;
  box-shadow: 0px 0px 34px rgba(0, 0, 0, 0.11);

  @media only screen and (max-width: 1200px) {
        width: 500px;
  }

  @media only screen and (max-width: 1000px) {
       display: none;
  }
`;

const ColumHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 8px;
`;

const CarouselNavigationWrapper = styled.div`
  padding: 10px 15px;
  background: white;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 17px;
  color: #696984;
`;

const RatingContainer = styled.div`
    width: fit-content;
    margin-left: auto;
`;

const config = {
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
        }
};


function Carousel({images, itemData,productDetailUrl,setCurrentProduct,itemName2}) {
    const [i,setI] = useState(0);
    const [slide,setSlide] = useState(0);
    const [itemName, setItemName] = useState(null);
    const { data, loading, error } = useFetch(productDetailUrl, config, 0);
    const productId = data?.id;

    const handleClickReviewList = () => {
        const button = document.getElementById("review-list-modal-pop-up-btn");
        if (button) {
            setTimeout(() => {
                button.click();
            }, 0);
        }
    }


    const handleClick = (value) => {
        let calcIndex;
        if ( value < 0)
            calcIndex = i + value < 0 ? -1 : i-1;
        else
            calcIndex = i + value > images.length -1 ? -1 : i+1;

        if (calcIndex===-1)
            return;

        setI(calcIndex);
        const img = document.getElementById(`slicked-img${calcIndex}`).getBoundingClientRect();
        const slider = document.getElementById("slider-element").getBoundingClientRect();
        if (img && slider) {
            const diff =  slider.top - (img.top);
            setSlide(diff + "px");
        }
    }

    useEffect(()=>{
        setCurrentProduct(data);
    },[productId]);

    useEffect(()=>{
        //console.log("CAROUSELDEN SELAMLAR: ", itemData);
        if (!itemName) {
            const tmpItemName = itemName2;
            if (tmpItemName.includes("Plissee")) {
                const material = itemData?.color?.properties.MaterialType;
                if (material && material==="Wabenplissee") {
                    const newItemName = tmpItemName.replace("Plissee","Wabenplissee");
                    setItemName(newItemName);
                } else {
                    setItemName(tmpItemName);
                }
            } else {
                const newItemName = tmpItemName;
                setItemName(newItemName);
            }
        }
    },[itemData]);

  return (
    images.length!==0 
    ?(<>
        {productId && <ReviewList productId={productId}/>}
        <StickyDiv>
            <ColumHeader>
                <div
                    style={{ textAlign: "left", paddingLeft: "10px", color: "rgb(82, 82, 102)"}}>
                    <KeyboardDoubleArrowLeftIcon fontSize='medium' color='warning'/>     
                    <span style={{cursor: "pointer", fontSize: "16px"}} onClick={()=>window.history.back()}>Zurück</span>
                    <div style={{fontSize: "21px", marginTop: "3px"}}>{itemName}</div>
                </div>
                <div style={{textAlign: "right"}}>
                    <RatingContainer>
                    {       
                            !loading && !error && data && 
                            <RatingWrapper>
                                <div onClick={()=>handleClickReviewList()} style={{textDecoration: "underline", cursor: "pointer"}}>{data.numberOfRating} Bewertungen</div>
                                <div className='d-flex gap-3'>
                                    <div>({(data.rating).toFixed(1)}/5)</div>
                                    <Rating name="read-only" value={data.rating} precision={0.5} readOnly />
                                </div>
                            </RatingWrapper>
                        }
                    </RatingContainer>
                    <div style={{fontSize: "21px", fontWeight: "bold", color: "rgb(82, 82, 102)"}}>{itemData?.color?.title} </div>
                </div>
            </ColumHeader>
            <DesktopWrapper>
                <Container >
                    <LeftColumn>
                        <div style={{cursor: "pointer", position: "sticky", top: "190px"}}>
                            <ArrowCircleLeftIcon fontSize='large' onClick={()=>handleClick(-1)}/>
                        </div>
                        <div style={{borderRadius: "8px", overflow: "clip"}}>
                            <CustomImage alt='image-of-the-product' src={images[i]} />
                        </div>
                        <div style={{cursor: "pointer", position: "sticky", top: "190px"}}>
                            <ArrowCircleRightIcon fontSize='large' onClick={()=>handleClick(1)}/>
                        </div>
                    </LeftColumn>
                    <RightColumn id='slider-element' slide={slide}>
                        {
                            images.map((item,index)=>{
                                return (
                                    <CustomSmallImage id={`slicked-img${index}`} active={i===index} key={index} src={item} alt='small-image'/>
                                    );
                                })
                        }
                    </RightColumn>

                </Container>
            </DesktopWrapper>
        </StickyDiv>
        <MobileWrapper>   
            <ColumHeader>
                <div
                    onClick={()=>window.history.back()} 
                    style={{cursor: "pointer", textAlign: "left", paddingLeft: "0px", color: "rgb(82, 82, 102)"}}>     
                    <span style={{fontSize: "16px"}}>
                        <KeyboardDoubleArrowLeftIcon fontSize='medium' color='warning'/>
                        Zurück
                    </span>
                    <div style={{fontSize: "21px"}}>{itemName}</div>
                </div>
                <div style={{textAlign: "right"}}>
                    <RatingContainer>
                        {       
                            !loading && !error && data && 
                            <RatingWrapper>
                                <div onClick={()=>handleClickReviewList()} style={{textDecoration: "underline", cursor: "pointer"}}>{data.numberOfRating} Bewertungen</div>
                                <div className='d-flex gap-3'>
                                    <div>({(data.rating).toFixed(1)}/5)</div>
                                    <Rating name="read-only" value={data.rating} precision={0.5} readOnly />
                                </div>
                            </RatingWrapper>
                        }
                    </RatingContainer>
                    <div style={{fontSize: "21px", fontWeight: "bold", color: "rgb(82, 82, 102)"}}>{itemData?.color?.title} </div>
                </div>
            </ColumHeader>
            <MobileContainer>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                 
                    <div style={{background: "white", opacity: "0.9", borderRadius: "15px", transform: "scaleY(1.25)"}} class="carousel-indicators">
                        {
                            images.map((item,index)=>{
                                return (
                                    <button
                                        style={{transform: "scaleY(2.25)"}} 
                                        type="button" 
                                        data-bs-target="#carouselExampleDark" 
                                        data-bs-slide-to={index} 
                                        aria-label={`Slide ${index}`}
                                        className={index === i ? "active" : ""}
                                        ></button>
                                );
                            })
                        }
                    </div>
                    <div class="carousel-inner" style={{height: "52vh"}}>
                        {
                        images.map((item,index)=>{
                            return (
                                <div 
                                    aria-label={`Slide ${index}`}
                                    className={index === i ? "carousel-item active" : "carousel-item"}
                                >
                                    <CustomImageMobile alt='image-of-the-product' src={item} />
                                </div>
                            );
                        })
                        }
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <CarouselNavigationWrapper>
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </CarouselNavigationWrapper>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <CarouselNavigationWrapper>
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </CarouselNavigationWrapper>
                    </button>
                </div>

            </MobileContainer>
        </MobileWrapper>
    </>)
    : <div style={{marginTop: "0px"}}>
    <CircularProgress color='warning' fontSize='large'/>
    </div>
  )
}

export default Carousel