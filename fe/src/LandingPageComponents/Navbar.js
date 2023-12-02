import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Logo from '../images/landingPage/logo.png';
import MobileLogo from '../images/landingPage/mobile_logo.png';
import { useNavigate} from 'react-router-dom';
import BurgerIcon from './BurgerIcon';
import LoginIcon from '../images/account/login.png';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 40px;
  padding-left: 10px;
  width: 100%;
  align-items: center;

  overflow: ${props => props.toggle ? "visible" : "hidden"};

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  z-index: 99;
  /*
  overflow-y: ${props => props.toggle ? "visible" : "hidden"};
  */
  background-color: white;
  padding: 0px;
  padding-bottom: 8px;

  -webkit-box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
  box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    height: 82px;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 0px 60px 0px;
    gap: 20px;
    height: fit-content;
    background-color: white;
    z-index: 99;
    transform: ${props => props.toggle ? "scaleY(1)": "scaleY(0.1)"};
    opacity: ${props => props.toggle ? "1": "0"};
    transition: transform 350ms ease-in, opacity 150ms ease-in 200ms;
    transform-origin: top;
    margin-top: 6px;
    border-top: ${props => props.toggle ? "2px solid #f59f4c" : "none"};
    -webkit-box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);
    box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);
  }

`;

const LogoImg = styled.img`
  height: 60px;

  @media only screen and (max-width: 1200px) {
    height: 50px;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const LogoImgMobile = styled.img`
  height: 45px;
  margin-right: 20px;
  margin-left: 20px;

  @media only screen and (min-width: 500px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const LinkButton = styled.div`
  border: 2px solid #f59f4c;
  
  -webkit-border-top-left-radius: 10px;
  -webkit-border-bottom-right-radius: 20px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-bottomright: 20px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 20px;


  margin: 0px 5px;
  padding: 3px 8px;
  color: #f59f4c;
  color: rgb(82, 82, 102);;
  font-size: 16px;
  position: relative;

  &:hover {
    cursor: pointer;

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #f59f4c;
    transform: scaleX(0);
    transform-origin: right;
    border: 1px solid #f59f4c;

    transition: transform 250ms ease-in;
    -webkit-border-top-left-radius: 6px;
    -webkit-border-bottom-right-radius: 16px;
    -moz-border-radius-topleft: 6px;
    -moz-border-radius-bottomright: 16px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 16px;
  }

  @media only screen and (max-width: 1200px) {
    margin-left: 20px;
  }

  @media only screen and (max-width: 490px) {
    font-size: 13px;
  }

`;

const NavbarButtonWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    display: block;
    position: absolute;
    top: 10px;
    right: -40px;
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: center;
  }
`;

const Legal = styled.div`
  display: flex;
  flex-direction: row;
  background: #f3f2f2;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  gap: 35px;
  padding-right: 40px;
  font-size: 14px;
  color: #333;
  padding-top: 1px;
  padding-bottom: 1px;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const LegalText = styled.div`
  &: hover {
    cursor: pointer;
    color: #f59f4c;
  }
`;

const MobileLegal = styled(Legal)`
  display: flex;
  flex-direction: row;
  background: #f3f2f2;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  gap: 35px;
  padding-right: 40px;
  font-size: 14px;
  color: #333;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-right: 15px;

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  gap: 12px;

`;

const LogoContainer = styled.div`
  width: 98vw;  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  font-size: 22px;

  @media only screen and (min-width: 800px) {
    width: fit-content; 
    gap: 40px;
  }
`;


const LogoText = styled.div`
  font-size: 16px;

  @media only screen and (min-width: 800px) {
    font-size: 20px;
  }
`;

const SingleLoginComponent = styled.div`
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  transform: translateY(10%);
`;


const LoginImage = styled.img`
  height: 26px;
  width: auto;

  @media only screen and (max-width: 500px) {
    height: 28px;
  }
`;


function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navbarName,setNavbarName] = useState(null);
  const navigate = useNavigate();
  const {userInfo} = useSelector(state=>state.login);

  function toggleFunction(nav){
    navigate(nav);
    setToggle(false);
  }

  function handleAccountClick(){
    if (!userInfo) {
      const button = document.getElementById("loginPopup");
        if (button)
      button.click();
    } else {
      // redirect to account page!!!
      toggleFunction("/profile");
    }
  }

  useEffect(()=>{
    if (!userInfo){
      setNavbarName(null);
    } else { 
      let name = userInfo?.firstName?.split(" ");
      if (name[0].length>=10)
        name = name[0].substring(0,9) + "..." 
      setNavbarName(name);
    }
  },[userInfo])

  return (
    <NavbarContainer toggle={toggle}>
      <Legal>
          <LegalText onClick={ () => toggleFunction("/impressum")} >Impressum</LegalText>
          <LegalText onClick={ () => toggleFunction("/widerrufsbelehrung")}>Widerrufsbelehrung</LegalText>
          <LegalText onClick={ () => toggleFunction("/datenschutz")}>Datenschutz</LegalText>
      </Legal>

      <NavbarWrapper toggle={toggle}>
        <LogoContainer>
          <LogoImg onClick={ () => toggleFunction("/")} src={Logo}/>
          <LogoImgMobile onClick={ () => toggleFunction("/")} src={MobileLogo}/>
          <LoginContainer>
                <SingleLoginComponent onClick={()=>handleAccountClick()}>
                    <AccountCircleIcon fontSize='large'/>
                    <LogoText>{navbarName || "Konto"}</LogoText>
                </SingleLoginComponent>
                
              <SingleLoginComponent onClick={ () => toggleFunction("/warenkorb")}>
                <Badge badgeContent={2} color="warning">
                  <ShoppingCartIcon fontSize='large' />
                </Badge>
                <LogoText>Warenkorb</LogoText>
              </SingleLoginComponent>

              <SingleLoginComponent onClick={ () => toggleFunction("/geschaft")}>
                <StorefrontIcon fontSize='large' />
                <LogoText>Geschäft</LogoText>
              </SingleLoginComponent>
          </LoginContainer>
          <NavbarButtonWrapper>
            <BurgerIcon toggle={toggle} setToggle={setToggle}/>
          </NavbarButtonWrapper>
        </LogoContainer>
          
        <LinkContainer toggle={toggle} >
          <MobileLegal>
            <LegalText onClick={ () => toggleFunction("/impressum")} >Impressum</LegalText>
            <LegalText onClick={ () => toggleFunction("/widerrufsbelehrung")}>Widerrufsbelehrung</LegalText>
            <LegalText onClick={ () => toggleFunction("/datenschutz")}>Datenschutz</LegalText>
          </MobileLegal>
          <LinkButton onClick={ () => toggleFunction("/turen")}>
            Für Türen
          </LinkButton>
          <LinkButton onClick={() => toggleFunction("/fenster")}>
            Für Fenster
          </LinkButton>
          <LinkButton onClick={() => toggleFunction("/dachfenster")}>
            Für Dachfenster
          </LinkButton>
          <LinkButton onClick={() => toggleFunction("/lich")}>
            Für Lichtschächte
          </LinkButton>
          <LinkButton onClick={() => toggleFunction("/sonderformen")}>
            Sonderformen
          </LinkButton>
          <LinkButton onClick={() => toggleFunction("/zusatzprodukte")}>
            Zusatzprodukte
          </LinkButton>
          <LinkButton onClick={() => toggleFunction("/gewebearten")}>
            Gewebearten
          </LinkButton>
        </LinkContainer>
      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar