import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import NotFoundImage from "../images/landingPage/not_found.png";

const Container = styled.div`
    margin-top: 150px;
    height: 70vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    ul > li {
        text-align: left;
        margin-bottom: 3px;
    }

    @media only screen and (max-width: 1200px) {
        margin-top: 180px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 800px) {
        margin-top: 180px;
    }

    @media only screen and (max-width: 400px) {
        margin-top: 260px;
    }
`;

const InfoTitle = styled.h1`
    color: rgb(82, 82, 102);
    font-weight: bold;
    font-size: 29px;
    margin-left: 0 !important;
    
    @media only screen and (max-width: 470px) {
        font-size: 26px;
        margin-bottom: 20px;
        text-align: left;
        padding: 0px 20px;
    }
`;

const DesktopInfoTitle = styled(InfoTitle)`
    @media only screen and (max-width: 1200px) {
        display: none;
    }
`;

const MobileInfoTitle = styled(InfoTitle)`
    @media only screen and (min-width: 1200px) {
        display: none;
    }
`;

const InfoBodyText = styled.div`
    color: rgb(82, 82, 102);
    max-width: 65vw;
    margin-top: 10px;
    font-size: 19px;
`;

export const StyledLink = styled(Link)`
    color: #ff7d0e;
    margin-bottom: 5px;
    font-size: 17px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: #ff7d0e;
    }

    @media only screen and (max-width: 1200px) {
        font-size: 18px;
    }
`;

const CustomNotFoundImage = styled.img`
    height: 400px;
    width: auto;
    border-radius: 50%;

    @media only screen and (max-width: 1200px) {
        height: 250px;
    }
`;

const LeftColumn = styled.div`
    max-width: 600px;
    text-align: left;
`;

function PageNotFound() {

  return (
      <Container>
          <MobileInfoTitle>Hoppla, diese Seite gibt es leider nicht.</MobileInfoTitle>
          <CustomNotFoundImage src={NotFoundImage}/>
          <LeftColumn>
              <DesktopInfoTitle>Hoppla, diese Seite gibt es leider nicht.</DesktopInfoTitle>
              <InfoBodyText>Die Seite, die Sie aufrufen wollten, wurde nicht gefunden. Möglicherweise wurde sie verschoben
                  oder gelöscht.</InfoBodyText>
              <ul>
                  <li>Die URL wurde falsch eingegeben.</li>
                  <li>Der Link ist veraltet oder nicht mehr gültig.</li>
              </ul>
              <p>Was können Sie tun?</p>
              <ul>
                  <li>
                      <StyledLink onClick={() => {
                      }} to="/">Zur Startseite gehen</StyledLink>
                  </li>
                  <li>
                      <StyledLink onClick={() => {
                      }} to="/kontakt">Kontaktieren Sie uns</StyledLink>
                  </li>
                  <li>
                      <StyledLink onClick={() => {
                      }} to="/geschaft/plissees"> Zu den Plissees gehen</StyledLink>
                  </li>
                  <li>
                      <StyledLink onClick={() => {
                      }} to="/geschaft/jalousien"> Zu den Jalousien gehen</StyledLink>
                  </li>
                  <li>
                      <StyledLink onClick={() => {
                      }} to="/geschaft/rollos"> Zu den Rollos gehen</StyledLink>
                  </li>
                  <li>
                      <StyledLink onClick={() => {
                      }} to="/geschaft/lamellenvorhang"> Zu den Lamellenvorhängen gehen</StyledLink>
                  </li>
                  <li>
                      <StyledLink onClick={() => {
                      }} to="/geschaft/insektenschutz"> Zum Insektenschutz gehen</StyledLink>
                  </li>
              </ul>
          </LeftColumn>
      </Container>
  )
}

export default PageNotFound;
