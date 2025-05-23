import React from 'react'
import styled from 'styled-components';
import Logo from '../images/landingPage/logo.png'
import TelephoneIcon from '../images/footer/telephone-call.png'
import InstagramIcon from '../images/footer/instagram.png'
import FacebookIcon from '../images/footer/facebook.png'
import TiktokIcon from '../images/footer/tiktok.png'
import MasterCardIcon from '../images/footer/mastercard.svg';
import VisaIcon from '../images/footer/visa.svg';
import PaypalIcon from '../images/footer/paypal.svg';
import BankTransferIcon from '../images/footer/bank-transfer.svg';
import Lastschrift from '../images/footer/icons8-lastschrift.svg';

import {FooterStyledLink} from "../CustomComponents/Link";

const FooterContainer = styled.div`
    height: fit-content;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px 0px;
    background-image: linear-gradient(to left, #db5424, #debe40);
    margin-bottom: 0;
    width: 100%;
    position: relative;
    padding-top: 50px;

  .custom-shape-divider-top-1692110202 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }
  
  .custom-shape-divider-top-1692110202 svg {
    position: relative;
    display: block;
    width: calc(168% + 1.3px);
    height: 82px;
  }
  
  .custom-shape-divider-top-1692110202 .shape-fill {
    fill: #FFFFFF;
  }

  @media only screen and (max-width: 1050px) {
    min-height: 650px;
  }

  @media only screen and (max-width: 760px) {
    min-height: 750px;
  }

  @media only screen and (max-width: 530px) {
    min-height: 950px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-weight: bold;
  width: 80%;
  max-width: 1250px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 45px;
  }

  @media only screen and (max-width: 600px) {  
    margin-top: -100px;
  }
`;

const LogoImg = styled.img`
  height: 130px;
  border-radius: 12px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1050px) {
    height: 110px;
  }

  @media only screen and (max-width: 760px) {
    height: 90px;
  }

  @media only screen and (max-width: 530px) {
    height: 80px;
  }
`;

const FooterGeneralInfoWrapper = styled.div`
    text-align: left;
    font-size: 18px;
    max-width: 1200px;
    cursor: pointer;
    display: flex;
    gap: 100px;
    width: fit-content;

    @media only screen and (max-width: 576px) {
        gap: 40px;
    }
`;

function Footer() {
  return (
    <FooterContainer>
      <div class="custom-shape-divider-top-1692110202">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>

      <FooterWrapper>
        <div>
          <LogoImg alt='logo' src={Logo}/>
          <div style={{fontSize:"17px"}}>Lochfeldstraße 30, 76437 Rastatt, Deutschland</div>
          <div>Öffnungszeiten: Mo-Sa 09.00-18.00 Uhr</div>
          <div onClick={() => {
              window.location.href="tel:+49176/62960342";
          }} className='d-flex flex-row justify-content-center align-items-center my-2'> <img height='30px' alt='telephone-icon' src={TelephoneIcon}/> 
          <span className='mx-2'> +49 176 62960342 </span>
          </div>
          <div onClick={() => {
              window.location.href="tel:+491573943936";
          }} className='d-flex flex-row justify-content-center align-items-center my-2'> <img height='30px' alt='telephone-icon' src={TelephoneIcon}/> 
          <span className='mx-2 my-1'>
            <div>Torsten Köpke:</div>
            <div>+49 1573 9439363 </div>
          </span>
          </div>
          <div className='my-2'></div>
          <div className='d-flex flex-row justify-content-center align-items-center my-2'>
            <a className='mx-3' href="https://instagram.com/hell_insektenschutz?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
              <img alt='instagram-logo' height='30px' src={InstagramIcon}/>
            </a>
            <a href="https://www.facebook.com/HellInsektenschutz"  target="_blank" rel="noopener noreferrer">
              <img alt='facebook-logo' height='30px' src={FacebookIcon}/>
            </a>
            <a className='mx-3' href="https://www.tiktok.com/@hellinsektenschutz?_t=8fC4cPKW0tk&_r=1"  target="_blank" rel="noopener noreferrer">
              <img alt='facebook-logo' height='30px' src={TiktokIcon}/>
            </a>
          </div>
        </div>
          <div>
              <FooterGeneralInfoWrapper>
                  <div>
                      <div style={{textDecoration: "underline", fontSize: "21px"}}>Über uns:</div>
                      <FooterStyledLink to="/kontakt">Kontakt</FooterStyledLink>
                      {/*<FooterStyledLink to="/impressum" className='my-1'>Impressum</FooterStyledLink>*/}
                      {/*<FooterStyledLink to="/datenschutz">Datenschutz</FooterStyledLink>*/}
                      <FooterStyledLink to="/widerrufsbelehrung" className='my-1'>Widerrufsbelehrung</FooterStyledLink>
                      <FooterStyledLink to="/baden-baden" className='my-1'> Baden-Baden</FooterStyledLink>
                      <FooterStyledLink to="/pforzheim" className='my-1'>Pforzheim</FooterStyledLink>
                      <FooterStyledLink to="/karlsruhe" className='my-1'>Karlsruhe</FooterStyledLink>
                  </div>
                  <div style={{textAlign: "left"}}>
                      <div style={{textDecoration: "underline", fontSize: "21px"}}>Dienstleistungen:</div>
                      <FooterStyledLink to="/geschaft/plissees">Plissees</FooterStyledLink>
                      <FooterStyledLink to="/geschaft/jalousien">Jalousien</FooterStyledLink>
                      <FooterStyledLink to="/geschaft/rollos">Rollos</FooterStyledLink>
                      <FooterStyledLink to="/geschaft/lamellenvorhang">Lamellenvorhang</FooterStyledLink>
                      <FooterStyledLink to="/geschaft/insektenschutz">Insektenschutz</FooterStyledLink>
                  </div>
              </FooterGeneralInfoWrapper>
              <FooterGeneralInfoWrapper className="my-4">
                  <div>
                      <div style={{textDecoration: "underline", fontSize: "21px"}}>Zahlungsarten:</div>
                      <span><img src={MasterCardIcon} height="65px" width="auto"/></span>
                      <span className="mx-2"><img src={VisaIcon} height="65px" width="auto"/></span>
                      <span><img src={PaypalIcon} height="65px" width="auto"/></span>
                      <span className="mx-2"><img src={BankTransferIcon} height="65px" width="auto"/></span>
                      <span><img src={Lastschrift} height="65px" width="auto"/></span>
                  </div>
              </FooterGeneralInfoWrapper>
          </div>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer;
