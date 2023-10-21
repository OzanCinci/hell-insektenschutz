import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../images/landingPage/logo.png';
import { useNavigate } from 'react-router-dom'
import BurgerIcon from './BurgerIcon';
import LoginIcon from '../images/account/login.png'
import ShoppingCartIcon from '../images/account/shopping-cart.png'


const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 40px;
  width: 100%;
  align-items: center;

  overflow: ${props => props.toggle ? "visible" : "hidden"};

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 108px;
  z-index: 99;
  /*
  overflow-y: ${props => props.toggle ? "visible" : "hidden"};
  */
  background-color: white;
  padding: 0px;
  padding-bottom: 4px;

  -webkit-box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
  box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    height: 76px;
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
    margin-top: 0px;
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

  &:hover {
    cursor: pointer;
  }
  
`;

const Link = styled.div`
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
    right: -30px;
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: center;
  }
`

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
`


const LegalText = styled.div`
  &: hover {
    cursor: pointer;
    color: #f59f4c;
  }
`

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
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  gap: 10px;

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
  font-size: 14px;

  @media only screen and (min-width: 800px) {
    font-size: 20px;
  }
`

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
`;

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  function toggleFunction(nav){
    navigate(nav);
    setToggle(false);
  }

  function openPopup(){
    const button = document.getElementById("loginPopup");
    if (button)
      button.click();
  }

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
          <LoginContainer>
              <SingleLoginComponent onClick={()=>openPopup()}>
                <LoginImage src={LoginIcon}/>
                <LogoText >Mein Konto</LogoText>
              </SingleLoginComponent>
              <SingleLoginComponent>
                <LoginImage src={ShoppingCartIcon}/>
                <LogoText>Warenkorb</LogoText>
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
          <Link onClick={ () => toggleFunction("/turen")}>
            Für Türen
          </Link>
          <Link onClick={() => toggleFunction("/fenster")}>
            Für Fenster
          </Link>
          <Link onClick={() => toggleFunction("/dachfenster")}>
            Für Dachfenster
          </Link>
          <Link onClick={() => toggleFunction("/lich")}>
            Für Lichtschächte
          </Link>
          <Link onClick={() => toggleFunction("/sonderformen")}>
            Sonderformen
          </Link>
          <Link onClick={() => toggleFunction("/zusatzprodukte")}>
            Zusatzprodukte
          </Link>
          <Link onClick={() => toggleFunction("/gewebearten")}>
            Gewebearten
          </Link>
        </LinkContainer>
      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default Navbar