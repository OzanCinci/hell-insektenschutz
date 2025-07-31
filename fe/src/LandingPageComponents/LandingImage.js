import React, {useEffect} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Container = styled.div`
    width: 100vw;
    overflow: hidden;

    @media only screen and (max-width: 1100px) {
        margin-top: -15%;
    }

    @media only screen and (min-width: 1023px) and (max-width: 1025px) {
        margin-top: -50%;
    }

    @media only screen and (max-width: 900px) {
        margin-top: -25%;
    }

    @media only screen and (max-width: 821px) {
        margin-top: -45%;
    }

    @media only screen and (max-width: 780px) {
        margin-top: -45%;
    }

    @media only screen and (max-width: 700px) {
        margin-top: -55%;
    }

    @media only screen and (max-width: 600px) {
        margin-top: -65%;
    }

    @media only screen and (max-width: 500px) {
        margin-top: -75%;
    }

    @media only screen and (max-width: 450px) {
        margin-top: -90%;
    }

    @media only screen and (max-width: 425px) {
        margin-top: -100%;
    }

    @media only screen and (max-width: 400px) {
        margin-top: -85%;
    }

    @media only screen and (max-width: 376px) {
        margin-top: -60%;
    }

    @media only screen and (max-width: 361px) {
        margin-top: -80%;
    }
`;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: clip;
    position: relative;


    @media only screen and (max-width: 1200px) {
        height: 80vh;
    }

    @media only screen and (max-width: 700px) {
        height: 90vh;
    }

    @media only screen and (max-width: 600px) {
        height: 80vh;
    }
`;

const CustomIFrame = styled.iframe`
    height: 130vh;
    width: 100vw;
    border: none;

    @media only screen and (max-width: 600px) {
        height: 120vh;
    }

    @media only screen and (max-width: 500px) {
        height: 130vh;
    }
`;

const AbsoluteText = styled.div`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #333;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
    max-width: fit-content;
`;

const CustomButton = styled(Button)`
    margin-top: 5px !important;
    text-transform: none !important;
    font-size: 17px !important;
    color: white !important;
    border-width: 2px !important;
`;

const Title = styled.h1`
  font-size: min(3rem, 6vw);
  font-weight: bold;
  margin: 0;
  color: white;
  white-space: nowrap;
  padding: 10px 40px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: white;
  margin: 20px 0;
  margin-top: 0px;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

function LandingImage() {
    const nav = useNavigate();
    const {discountOptionMap} = useSelector(state => state.config);
    const percentage = discountOptionMap["PUBLIC"]?.percentage ?? 0;
    const amount = percentage * 100;

    return (
        <Container>
            <Wrapper>
                <CustomIFrame src="https://player.vimeo.com/video/756709552?app_id=122963&background=1" title="HTML Viewer" />
                <AbsoluteText>
                    <Title>
                        {
                            amount > 0
                            ? `${amount}% Rabatt auf Akku Rollos`
                            : "Premium Coulisse Akku Rollos"
                        }
                    </Title>
                    <Subtitle>
                        Die Rollo-Generation der Zukunft bei Hell Insekten&Sonnenschutz
                    </Subtitle>
                    <CustomButton onClick={()=>nav("/geschaft/rollo/akku-rollo-optionen")} variant='outlined' color='warning'>Jetzt shoppen</CustomButton>
                </AbsoluteText>
            </Wrapper>
        </Container>
    );
}

export default LandingImage;
