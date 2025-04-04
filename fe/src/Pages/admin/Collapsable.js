import React, { useState } from 'react';
import styled from 'styled-components';
import ManagerIcon from '../../images/account/manager.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const SingleItem = styled.div`
    margin: 9px 0px 0px 30px;
    cursor: pointer;
    text-align: left;
    width: fit-content;
    padding: 2px 5px 2px 5px;
    cursor: pointer;
    color: black;
    font-weight: 500;

    position: relative;

    &:hover {
        text-decoration: underline;
        color: #f59f4c;
    }
`;

const TitleText = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: white;
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    pading-top: 10px;
    padding-bottom: 20px;
`;

const ImageContainer = styled.div`
    background-image: linear-gradient(to right, #db5424, #debe40);
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 250px;
`;

const Filler = styled.div`
    width: 100%;
    height: 30px;
    background-image: linear-gradient(to right, #db5424, #debe40);
`;

const Container = styled.div`
    position: fixed;
    z-index: 90;
    left: ${props => props.collapse + "px"};
    top: 130px;
    transition: all 0.4s ease-in-out;
    min-width: 350px;

    -webkit-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);


    .accordion-button:not(.collapsed) {
        color: white;
        background: #f59f4c;
        border: none;
        font-weight: bold;
    }

    .accordion-item {
        border: 1px solid #db5424;
        border: none;
        border-bottom: 1px solid grey;
        border-radius: 0px;
    }

    .accordion-button:focus {
        box-shadow: inherit;
    }

    .accordion-button:not(.collapsed)::after{
        filter: brightness(0%) invert(100%);
    }
`;

const CollapsePart = styled.div`
    width: 140%;
    text-align: right;
    padding: 50px auto;
`;

const Selection = styled.div`
    cursor: pointer;
    width: fit-content;
    margin-left: auto;
    min-width: 20px;

    transform: ${props => props.collapse!==0?"rotate(180deg)":""};
    transition: all 0.4s ease-in-out;
`;

function Collapsable() {
    const [collapse,setCollapse] = useState(0);
    const nav = useNavigate();
    const {userInfo} = useSelector(state=>state.login);
    const  {selfID, firstName, lastName, role} = userInfo ? userInfo : {};

    const handleClick = () => {
        if (collapse!==0)
            setCollapse(0);
        else {
            const element = document.getElementById('collapse-admin-panel');
            if (element) {
                const attributes = element.getBoundingClientRect();
                const w = attributes.left - attributes.right;
                setCollapse(w);
            }
        }
    }

    const handlePanelChange = (url) => {
        handleClick();
        nav(url);
    }


  return (
    <Container id='collapse-admin-panel' collapse={collapse}>
        <Filler></Filler>
        <ImageContainer>
            <CollapsePart>
                <Selection collapse={collapse} onClick={handleClick}>
                    <ArrowBackIosNewIcon fontSize='large' color='warning'/>
                </Selection>
            </CollapsePart>
            <TitleText>{firstName} {lastName}</TitleText>
            <TitleText>Rolle: {role}</TitleText>
        </ImageContainer>


        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingZero">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseZero" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseZero">
                        <div>Analytisch</div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseZero" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingZero">
                    <div className="accordion-body">
                        <div>
                            <SingleItem onClick={() => handlePanelChange('number-of-visits')}>Anzahl der
                                Besucher</SingleItem>
                        </div>
                    </div>
                </div>
            </div>


            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingDiscount">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseRabatt" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseRabatt">
                        <div>Rabatt</div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseRabatt" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingDiscount">
                    <div className="accordion-body">
                        <div>
                            <SingleItem onClick={() => handlePanelChange('discount-management')}>
                                Rabatt-Management-Center
                            </SingleItem>
                        </div>
                    </div>
                </div>
            </div>


            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                        <div>Bestellungen</div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                     aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <div>
                            <SingleItem onClick={() => handlePanelChange('bestellnummber')}>Suche mit
                                Bestellnummer</SingleItem>
                            <SingleItem onClick={() => handlePanelChange('orders/PENDING_PAYMENT')}>ausstehende Zahlung
                                Bestellungen</SingleItem>
                            <SingleItem onClick={() => handlePanelChange('orders/ACTIVE')}>aktive
                                Bestellungen</SingleItem>
                            <SingleItem onClick={() => handlePanelChange('orders/IN_SHIPPING')}>in Versand
                                Bestellungen</SingleItem>
                            <SingleItem onClick={() => handlePanelChange('orders/DELIVERED')}>vollendet
                                Bestellungen</SingleItem>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo">
                        <div>Rezension</div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <div>
                            <SingleItem onClick={() => handlePanelChange('pending-reviews')}>ausstehend
                                Rezension</SingleItem>
                            <SingleItem onClick={() => handlePanelChange('approved-reviews')}>genehmigt
                                Rezension</SingleItem>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree">
                        <div>Nutzer</div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        <div>
                            <SingleItem onClick={() => handlePanelChange('change-role')}>Rolle ändern</SingleItem>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFour">
                        <div>Transaktion</div>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingFour">
                    <div className="accordion-body">
                        <div>
                            <SingleItem onClick={() => handlePanelChange('transactions')}>Alle
                                Transaktionen</SingleItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </Container>
  )
}

export default Collapsable