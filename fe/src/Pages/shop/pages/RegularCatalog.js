import React from 'react';
import styled from 'styled-components';
import { catalogData } from '../data/productCatalog';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import VerifiedIcon from '@mui/icons-material/Verified';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import GratisMutterImg from '../../../images/shop/gratis.webp';
import {RegularProductCatalogProductLink, StyledButtonLink} from "../../../CustomComponents/Link";

const CustomButton = styled(Button)`
    margin-top: 5px !important;
    text-transform: none !important;
    font-size: 17px !important;

    @media only screen and (max-width: 800px) {
        margin-top: 15px !important;
        width: 100%;
    }    
`;

const ProductsContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1800px;
    padding-left: 40px;
    padding-right: 40px;

    @media only screen and (max-width: 1200px) {
        flex-wrap: no-wrap;
        justify-content: center;
    }

    @media only screen and (max-width: 470px) {
        padding: 0px;
    }
`;

const SingleProduct = styled.div`
    width: 45vw;
    max-width: 800px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 1200px) {
        width: 75vw;
        max-width: 1000px;
    }

    @media only screen and (max-width: 1000px) {
        width: 85vw;
    }

    @media only screen and (max-width: 470px) {
        width: 81vw;
        margin-bottom: 40px;
    }


    padding-top: 10px;
    padding-bottom: 20px;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 10px;
    -webkit-box-shadow: 24px 16px 31px -24px rgba(245,159,76,0.5);
    -moz-box-shadow: 24px 16px 31px -24px rgba(245,159,76,0.5);
    box-shadow: 24px 16px 31px -24px rgba(245,159,76,0.25);

    &:hover {
        transition: all 0.1s ease-in;
        box-shadow: 24px 16px 31px -24px rgba(245,159,76,1);
    }
`;

const SingleProductBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    text-align: left;
    max-width: 650px;
    
    @media only screen and (max-width: 650px) {
        flex-direction: column;
        max-width: 400px;
        align-items: center;
    }

    @media only screen and (max-width: 450px) {
        max-width: 450px;
        width: 80vw;
        align-items: flex-start;
    }
`;

const ImageWrapper = styled.div`
`;

const CustomImg = styled.img`
    height: auto;
    width: 400px;
    align-self: center;
    border-radius: 3px;

    @media only screen and (max-width: 450px) {
        width: 80vw;
        border-radius: 10px;
    }
`;

const Title = styled.h2`
    text-align: left;
    color: #696984;
    font-size: 21px;
    margin-bottom: 20px;
    margin-left: -20px;
    font-weight: bold;
    width: 80%;

    @media only screen and (max-width: 450px) {
        width: 100%;
        padding-left: 10%;
    }    
`;

const Desc = styled.div`
    color: #696984;
    margin-bottom: 10px;

    @media only screen and (max-width: 450px) {
        padding-left: 5%;
    }
`;

const ProductLink = styled.span`
    color: #f59f4c;
    cursor: pointer;
    width: fit-content;
    font-size: 20px;
    margin-left: 5px;

    position: relative;
    width: fit-content;
  
    &:hover {
      text-decoration: underline;
    }
`;

const BottomBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 450px) {
        align-items: flex-start;
        width: 100%;
    }
`;

const ClickForRedirectionWrapper = styled.div`
    @media only screen and (max-width: 450px) {
        width: 100%;
        text-align: right;
        padding-right: 5%;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
    max-width: 1000px;
    margin: auto;
    margin-top: -20px;
    margin-bottom: 30px;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        width: fit-content;
    }
`;

const CustomPopUpImg = styled.img`
    height: 200px; 
    width: auto;

    @media only screen and (max-width: 800px) {
        height: auto; 
        width: 105%;
        transform: translateX(-2.5%);
    }
`;

const SelectorComponent = styled(({ data }) => {
    return (
      <div>
        <button
          id="free-sampling-more-detail-btn"
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
                    <CustomPopUpImg  src={data.img} alt="Modal Content" />
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

const freeSamplingData = {
    title: "Wie man ein Gratis-Muster erhält?",
    img: GratisMutterImg,
    body: [
        "Sie können für jedes Produkt ein Gratis-Muster erhalten.",
        "Gehen Sie zur Produktseite und wählen Sie den Artikel aus.",
        "Scrollen Sie auf der Seite nach unten.Dann können Sie auf die oben gezeigte Box klicken, um das Gratis-Muster in Ihren Warenkorb zu legen.",
        "Beachten Sie, dass Sie nur 8 Gratis-Muster auf einmal erhalten können."
    ]
}

function extractLocationName(pathName) {
    var elements = pathName.split("/");
    return elements.at(-1)==="" ? elements.at(-2) : elements.at(-1);
}

function RegularCatalog() {
    const location = extractLocationName(useLocation()?.pathname);
    const {data, measurement, assembly} = catalogData[location];

    const handleFreeSampleClick = (e) => {
        e.preventDefault();
        const buttonId = "free-sampling-more-detail-btn";
        const button = document.getElementById(buttonId);
        if (button) {
            setTimeout(() => {
                button.click();
            }, 0);
        }
    }

  return (
    <>
        <SelectorComponent data={freeSamplingData}/>
        <ButtonWrapper>
                <CustomButton variant='outlined' color='warning'><StyledButtonLink to={measurement}>Anleitung für die richtige Messung</StyledButtonLink></CustomButton>
                <CustomButton variant='outlined' color='warning'><StyledButtonLink to={assembly}>Anleitung für die richtige Installation</StyledButtonLink></CustomButton>
                <CustomButton onClick={(e)=>handleFreeSampleClick(e)} variant='outlined' color='warning'>Gratis Muster</CustomButton>
        </ButtonWrapper>
        <CardComponent data={data}/>
    </>
  )
}


export function CardComponent({data}) {

    return (
        <ProductsContainer>
            {
                data.map((item,index)=>{
                    return (
                        <SingleProduct key={index}>
                            <Title>{item.title}</Title>
                            <SingleProductBody>
                                <ImageWrapper>
                                    <CustomImg src={item.image}></CustomImg>
                                </ImageWrapper>
                                <BottomBoxWrapper>
                                    <Desc>
                                        {
                                            item.desc.map((i,indexOfI) => {
                                                return (
                                                    <div index={indexOfI} className='my-1'>
                                                        <VerifiedIcon style={{ color: "#f59f4c" }} fontSize='small' />
                                                        <span style={{fontSize: "17px"}} className='mx-1'>{i}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Desc>
                                    <ClickForRedirectionWrapper>
                                        {
                                            item.links.map((link, index)=>{
                                                return (
                                                    <div key={index} style={{textDecoration:"none"}}>
                                                        <div style={{marginBottom: "1px"}} key={link.text}>
                                                            <DoubleArrowIcon style={{ color: "#f59f4c" }}/>
                                                            <RegularProductCatalogProductLink to={link.url}>
                                                                {link.text}
                                                            </RegularProductCatalogProductLink>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ClickForRedirectionWrapper>
                                </BottomBoxWrapper>
                            </SingleProductBody>
                        </SingleProduct>
                    );
                })
            }
        </ProductsContainer>
    );
}


export default RegularCatalog;
