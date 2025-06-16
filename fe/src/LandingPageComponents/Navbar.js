import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Logo from '../images/landingPage/logo.png';
import MobileLogo from '../images/landingPage/mobile_logo.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate} from 'react-router-dom';
import BurgerIcon from './BurgerIcon';
import { useSelector } from 'react-redux';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PhoneIcon from '@mui/icons-material/Phone';
import PolicyIcon from '@mui/icons-material/Policy';

// images
import PlisseeImg from '../images/shop/plissee.webp';
import JalousienImg from '../images/shop/jalousien.webp';
import HolzJalousienImg from '../images/shop/jalousie_holz.webp';
import RolloImg from '../images/shop/smartrollo.webp';
import DopelRolloImg from '../images/shop/doppelrollo.webp';
import LamellenImg from '../images/shop/lamellenvorhang.webp';
import InsekImg from '../images/shop/insek.webp';
import TrustedShopsLogo from '../images/landingPage/trusted_shops_siegel.svg';
import MadeInGermanyIcon from '../images/navbar/made-in-germany-icon.png';

// images for mobile menu
import PlisseeImgMobile from '../images/navbar/plissee.webp';
import JalousienImgMobile from '../images/navbar/jalousie.webp';
import RolloImgMobile from '../images/navbar/rollo.webp';
import LamellenImgMobile from '../images/navbar/lamellen.webp';
import InsekmgMobile from '../images/navbar/insektenschutz.webp';
import QuestionImg  from '../images/navbar/question.webp';
import {
  NavbarDesktopListStyledLink,
  NavbarDesktopSubListStyledLink,
  NavbarLegalTextStyledLink, NavbarMobileListStyledLink
} from "../CustomComponents/Link";


const NavbarWrapper = styled.div`
  background-color: white;
  z-index: auto;
  position: relative;
  
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 10px 0px;
    width: 100vw;
    -webkit-box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
    box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
  }

  @media only screen and (max-width: 780px) {
    z-index: 99;
  }
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  /*
  overflow-y: ${props => props.toggle ? "visible" : "clip"};
  */
  //background-color: white;
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
    height: fit-content;
  }

  @media only screen and (min-width: 780px) {
    background-color: white;
  }

  @media only screen and (max-width: 780px) {
    padding-bottom: 0px;
    overflow-y: ${props => props.toggle ? "visible" : "hidden"};
    height: ${props => !props.toggle ? props.overflowHeight : "100vh"};
    transition-property: all;
    transition-duration: 0s;
    transition-delay: ${props => (props.toggle ? "0s" : "0.3s")};
  }
`;

const LogoImg = styled.img`
  height: 75px;
  transform: translateY(7.5%);

  @media only screen and (max-width: 1200px) {
    height: 60px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 500px) {
    //display: none;
    height: 60px;
    margin-left: 5px;
    margin-right: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const NavbarButtonWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 780px) {
    display: block;
    transform: scale(1.2);
    margin-left: 7px;
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

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
  gap: 14px;

  @media only screen and (max-width: 780px) {
    margin-left: auto;
    margin-right: 10px;
    gap: 10px;
  }
`;

const LogoContainer = styled.div`
  width: 98vw;  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
  font-size: 22px;

  width: 95vw;
  max-width: 1300px;
  justify-content: space-between;
  margin: 0px auto;

  @media only screen and (min-width: 1200px) {
  }

  @media only screen and (max-width: 780px) {
    z-index: 100;
    position: relative;
  }
`;

const LogoText = styled.div`
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (min-width: 800px) {
    font-size: 17px;
  }
`;

const SingleLoginComponent = styled.div`
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  transform: translateY(-20%);

  @media only screen and (max-width: 780px) {
    transform: translateY(10%);
  }
`;

const MobileSingleLoginComponent = styled(SingleLoginComponent)`
  @media only screen and (min-width: 780px) {
    display: none;
  }
`;

const DesktopSingleLoginComponent = styled(SingleLoginComponent)`
  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const BottomPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  width: 100%;
  max-width: 1300px;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const SingleBottomDivWrapper = styled.div`
  position: relative; /* Required for the absolute positioning of the dropdown */
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const SingleBottomDiv = styled.div`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 0px 10px;
  padding-bottom: 5px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%; /* Start from the center */
    width: 0; /* Initially no width */
    height: 3px; /* Thickness of the underline */
    background-color: #ff7d0e; /* Match the underline color */
    transform: translateX(-50%); /* Center the line at the start */
    transition: width 0.3s ease; /* Smooth animation for the width */
  }

  &:hover::after {
    width: 100%; /* Full width on hover */
    left: 50%;
    transform: translateX(-50%);
  }
`;

const DropdownMenu = styled.div`
  position: fixed; /* Fixed position for absolute alignment */
  top: ${props=>props.calcHeight};
  left: 50%; /* Horizontally center relative to the viewport */
  transform: translateX(-50%); /* Adjust for perfect centering */
  width: 100vw; /* Fixed width */
  background-color: white;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
  padding: 20px;
  opacity: 0; /* Initially hidden */
  visibility: hidden; /* Initially hidden */
  transition: all 0.3s ease;
  z-index: 100;

  ${SingleBottomDivWrapper}:hover & {
    opacity: 1;
    visibility: visible;
    visibility: ${props=>props.closedForNavigation ? "hidden" : "visible"};
  }
`;

const DropdownMenuInside = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
`;

const SingleColumn = styled.div`
    text-align: left;
`;

const ColTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;

const ExtendedSingleBottomDivWrapper = styled(SingleBottomDivWrapper)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10%;
    width: 1.5px; 
    height: 80%; 
    background-color: #cfcaca;

    @media only screen and (max-width: 1200px) {
      left: -5%;
    }

    @media only screen and (max-width: 800px) {
      left: -2%;
    }
  }
`;

const CustomDropdownImg = styled.img`
    height: 350px;
    width: auto;
    margin-left: ${props=> props.marginLeft ? props.marginLeft : "10%"};

  @media only screen and (max-width: 1200px) {
    height: 250px;
    margin-left: ${props=> props.marginLeft ? props.marginLeft : "3%"};
  }
`;

const MobileBurgerMenuContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: fit-content;
    transform: ${props=>"translateX(" + props.move + ");"};
    transition: all 0.2s ease-in-out;
    background-color: white;
    position: relative;
    z-index: ${props=> !props.toggle ? "99": "-1"};
  
  @media only screen and (min-width: 780px) {
    display: none;
  }
`;

const MobileBurgerMenuColumn = styled.div`
    width: 100vw !important;
    height: 100%;
`;

const MobileBurgerMenuLeftColumn = styled(MobileBurgerMenuColumn)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const MobileBurgerMenuRightColumn = styled(MobileBurgerMenuColumn)``;

const WrapperForCategories = styled.div``;

const WrapperForFooter = styled.div`
    background-color: rgb(229 231 235);
    padding-bottom: 3vh;
    padding-top: 1vh;
    border-radius: 14px 14px 0px 0px;
`;

const MadeInGermanyLogo = styled.div`
  margin-left: 2vw;
  margin-right: -1.5vw;
  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const LeftColumnComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
  padding: 12px 20px;

  .left-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .text-title {
    font-size: 22px;
  }
`;

const LeftColumnSingleOption = ({ icon, imageUrl, text, key, options, setterFunc, moverFunc , optionalOnclickHandler}) => {
  const handleOnclick = () => {
      if (optionalOnclickHandler) {
          optionalOnclickHandler();
          return;
      }

      setterFunc(options);
      moverFunc();
  };

  return (
      <LeftColumnComponent onClick={handleOnclick}>
        <div className="left-wrapper">
          {imageUrl && <img src={imageUrl} height="30px" width="auto" alt={`icon for ${key} category`}/>}
          {icon!==null && icon}
          <div className="text-title">{text}</div>
        </div>
        <div>
          <ArrowForwardIosIcon/>
        </div>
      </LeftColumnComponent>
  );
};

const optionsForLeftColumn = [
  {
    key: "Plissee",
    imageUrl: PlisseeImgMobile,
    text: "Plissee",
    options: [
      {
        title: "Plissee nach Maß",
        data: [
          {
            key: "Plissees",
            value: "/geschaft/plissees"
          },
          {
            key: "Premium Plissee",
            value: "/geschaft/plissees/premium-plissee-optionen"
          },
          {
            key: "Basic Plissee",
            value: "/geschaft/plissees/basic-plissee-optionen"
          },
          {
            key: "Wabenplissee",
            value: "/geschaft/plissees/waben-plissee-optionen"
          },
          {
            key: "Wintergarten Plissee",
            value: "/geschaft/plissees/wintergarten-plissee-optionen"
          },
          {
            key: "Dachfenster Plissee",
            value: "/geschaft/plissees/dachfenster-plissee-optionen"
          },
          {
            key: "Sonderformen Plissee",
            value: "/geschaft/plissees/sonderformen-plissee-optionen"
          },
          {
            key: "Akku Plissee",
            value: "/geschaft/plissees/akku-plissee-optionen"
          },
          {
            key: "Freihaengend Plissee",
            value: "/geschaft/plissees/freihaengend-plissee-optionen"
          }
        ]
      },
      {
        title: "Plissee-Ratgeber",
        data : [
          {
            key: "Gratis Muster",
            value: "/geschaft/plissees"
          },
          {
            key: "Richtige Messung",
            value: "/messanleitung/plissee"
          },
          {
            key: "Richtige Installation",
            value: "/montageanleitung/plissee"
          }
        ]
      }
    ]
  },
  {
    key: "Jalousien",
    imageUrl: JalousienImgMobile,
    text: "Jalousien",
    options: [
      {
        title: "Jalousie nach Maß",
        data: [
          {
            key: "Jalousien",
            value: "/geschaft/jalousien"
          },
          {
            key: "Premium Jalousie",
            value: "/geschaft/jalousie/premium-jalousie-optionen"
          },
          {
            key: "Basic Jalousie",
            value: "/geschaft/jalousie/basic-jalousie-optionen"
          },
          {
            key: "Holzjalousie",
            value: "/geschaft/jalousie/holzjalousie-optionen"
          },
          {
            key: "Smart Akku Jalousie",
            value: "/geschaft/jalousie/premium-jalousie-optionen"
          }
        ]
      },
      {
        title: "Jalousien-Ratgeber",
        data : [
          {
            key: "Gratis Muster",
            value: "/geschaft/jalousien"
          },
          {
            key: "Richtige Messung",
            value: "/messanleitung/jalousie"
          },
          {
            key: "Richtige Installation",
            value: "/montageanleitung/jalousie"
          }
        ]
      }
    ]
  },
  {
    key: "Rollos",
    imageUrl: RolloImgMobile,
    text: "Rollos",
    options: [
      {
        title: "Rollo nach Maß",
        data: [
          {
            key: "Rollos",
            value: "/geschaft/rollos"
          },
          {
            key: "Premium Rollo",
            value: "/geschaft/rollo/premium-rollo-optionen"
          },
          {
            key: "Basic Rollo",
            value: "/geschaft/rollo/basic-rollo-optionen"
          },
          {
            key: "Doppelrollo",
            value: "/geschaft/rollo/doppel-rollo-optionen"
          },
          {
            key: "Smart Aku Rollo",
            value: "/geschaft/rollo/akku-rollo-optionen"
          }
        ]
      },
      {
        title: "Rollo-Ratgeber",
        data : [
          {
            key: "Gratis Muster",
            value: "/geschaft/rollos"
          },
          {
            key: "Richtige Messung",
            value: "/messanleitung/rollo"
          },
          {
            key: "Richtige Installation",
            value: "/montageanleitung/rollo"
          }
        ]
      }
    ]
  },
  {
    key: "Lamellenvorhang",
    imageUrl: LamellenImgMobile,
    text: "Lamellenvorhang",
    options: [
      {
        title: "Lamellenvorhang nach Maß",
        data: [
          {
            key: "Lamellenvorhang",
            value: "/geschaft/lamellenvorhang"
          },
          {
            key: "Premium Lamellenvorhang",
            value: "/geschaft/lamellenvorhang/premium-lamellenvorhang-optionen"
          },
          {
            key: "Basic Lamellenvorhang",
            value: "/geschaft/lamellenvorhang/basic-lamellenvorhang-optionen"
          },
          {
            key: "Lamellenvorhang schräg",
            value: "/geschaft/lamellenvorhang/schrag-lamellenvorhang-optionen"
          },
        ]
      },
      {
        title: "Lamellenvorhang-Ratgeber",
        data : [
          {
            key: "Gratis Muster",
            value: "/geschaft/lamellenvorhang"
          },
          {
            key: "Richtige Messung",
            value: "/messanleitung/lamellenvorhang"
          },
          {
            key: "Richtige Installation",
            value: "/montageanleitung/lamellenvorhang"
          }
        ]
      }
    ]
  },
  {
    key: "Insektenschutz",
    imageUrl: InsekmgMobile,
    text: "Insektenschutz",
    options: [
      {
        title: "Insektenschutz nach Maß",
        data: [
          {
            key: "Insektenschutz",
            value: "/geschaft/insektenschutz"
          },
          {
            key: "Insektenschutz für Fenster - Spannrahmen",
            value: "/produkts/InsektenschutzFensterSpannrahmen/1"
          },
          {
            key: "Insektenschutz - Plisseetür",
            value: "/produkts/InsektenschutzPlisseetür/1"
          },
          {
            key: "Insektenschutz - Pendeltür",
            value: "/produkts/InsektenschutzPendeltür/1"
          },
        ]
      },
      {
        title: "Erfahren Sie mehr über unsere Produkte",
        data: [
          {
            key: "Für Türen",
            value: "/turen"
          },
          {
            key: "Für Fenster",
            value: "/fenster"
          },
          {
            key: "Für Dachfenster",
            value: "/dachfenster"
          },
          {
            key: "Für Lichtschächte",
            value: "/lich"
          },
        ]
      },
    ]
  },
  {
    key: "Bestellung Suchen",
    imageUrl: QuestionImg,
    text: "Bestellung Suchen",
    options: [],
  },
];

const optionsForFooter = [
  {
    key: "Mein Konto",
    icon: <AccountCircleIcon/>,
    text: "Mein Konto",
    options: [],
  },
  {
    key: "Kontakt",
    icon: <PhoneIcon/>,
    text: "Kontakt",
    options: [],
  },
  {
    key: "Rechtliches",
    icon: <PolicyIcon/>,
    text: "Rechtliches",
    options: [
      {
        title: "Rechtliches",
        data: [
          {
            key: "AGB",
            value: "/agb",
          },
          {
            key: "Impressum",
            value: "/impressum",
          },
          {
            key: "Widerrufsbelehrung",
            value: "/widerrufsbelehrung",
          },
          {
            key: "Datenschutz",
            value: "/datenschutz",
          }
        ]
      }
    ],
  }
]


function Navbar(){
  const [toggle, setToggle] = useState(false);
  const [navbarName,setNavbarName] = useState(null);
  const [calcHeight, setCalcHeight] = useState("0px");
  const [calcHeightWrapper, setCalcHeightWrapper] = useState("0px");
  const [closedForNavigation, setClosedForNavigation] = useState(false);
  const [move, setMove] = useState("75%");
  const [rightColumnContent, setRightColumnContent] = useState(optionsForLeftColumn[0].options);
  const navigate = useNavigate();
  const {userInfo} = useSelector(state=>state.login);
  const cart = useSelector(state=>state.cart);
  const numberOfItems = cart.numberOfItems;

  function toggleFunction(nav){
    setClosedForNavigation(true);
    if (nav!==null)
      navigate(nav);
    setToggle(false);
  }

  function triggerNavbarDesktopReset() {
    setClosedForNavigation(true);
    setToggle(false);
  }

  function handleAccountClick(){
    setMove("75%");
    if (!userInfo) {
      const button = document.getElementById("loginPopup");
        if (button)
      button.click();
        setToggle(false);
    } else {
      // redirect to account page!!!
      toggleFunction("/profile");
    }
  }

  const onclickMap = {
    "Bestellung Suchen": () => {
      toggleFunction("/bestellung");
      setMove("75%");
    },
    "Mein Konto": () => {
      handleAccountClick();
      setToggle(false);
    },
    "Kontakt": () => {
      toggleFunction("/kontakt");
      setMove("75%");
    }
  }

  useEffect(()=>{
    if (!userInfo){
      setNavbarName(null);
    } else {
      setNavbarName(userInfo.firstName + " " + userInfo.lastName);
    }
  },[userInfo])

  useEffect(() => {
    const calculateHeight = () => {
      const container = document.getElementById("navbar-container-container-component");
      if (container) {
        const calculationOfHeight = container.getBoundingClientRect().height - 9 + "px";
        setCalcHeight(calculationOfHeight);
      }

      const wrapper = document.getElementById("navbar-wrapper-component");
      if (wrapper) {
        const calculationOfHeightWrapper = wrapper.getBoundingClientRect().height  + "px";
        setCalcHeightWrapper(calculationOfHeightWrapper);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);


  return (
    <NavbarContainer toggle={toggle} id={"navbar-container-container-component"} overflowHeight={calcHeightWrapper}>
      <Legal>
          <NavbarLegalTextStyledLink to="/agb" >AGB</NavbarLegalTextStyledLink>
          <NavbarLegalTextStyledLink to="/impressum" >Impressum</NavbarLegalTextStyledLink>
          <NavbarLegalTextStyledLink to="/widerrufsbelehrung">Widerrufsbelehrung</NavbarLegalTextStyledLink>
          <NavbarLegalTextStyledLink to="/datenschutz">Datenschutz</NavbarLegalTextStyledLink>
      </Legal>

      <NavbarWrapper id={"navbar-wrapper-component"} toggle={toggle}>
        <LogoContainer>
          <LogoImg onClick={ () => {toggleFunction("/"); setMove("75%");}} src={Logo}/>
          <LoginContainer>

            {
              <MobileSingleLoginComponent className="mx-1" onClick={() => handleAccountClick()}>
                <AccountCircleIcon fontSize='large'/>
              </MobileSingleLoginComponent>
            }
            {
                navbarName &&
                <DesktopSingleLoginComponent className="mx-1" onClick={() => handleAccountClick()}>
                  <LogoText>{navbarName}</LogoText>
                </DesktopSingleLoginComponent>
            }
            {
                !navbarName &&
                <>
                  <DesktopSingleLoginComponent onClick={() => handleAccountClick()}>
                    <LogoText>{navbarName || "Einloggen"}</LogoText>
                  </DesktopSingleLoginComponent>
                  <DesktopSingleLoginComponent>
                    <LogoText>/</LogoText>
                  </DesktopSingleLoginComponent>
                  <DesktopSingleLoginComponent style={{marginRight: "10px"}} onClick={() => handleAccountClick()}>
                    <LogoText>{navbarName || "Register"}</LogoText>
                  </DesktopSingleLoginComponent>
                </>
            }
            <SingleLoginComponent className="mx-2" onClick={() => {
              toggleFunction("/warenkorb");
              setMove("75%");
            }
            }>
              <Badge badgeContent={numberOfItems} color="warning">
                <ShoppingBasketIcon fontSize='large'/>
              </Badge>
            </SingleLoginComponent>
            <NavbarButtonWrapper onClick={() => setMove(toggle ? "75%" : "25%")}>
              <BurgerIcon toggle={toggle} setToggle={setToggle}/>
            </NavbarButtonWrapper>
            <MadeInGermanyLogo>
              <a target={"_blank"} href={"https://www.trustedshops.de/bewertung/info_X10E4EB6089F717631CFF670A061115E4.html"}>
                <img height="55px" src={TrustedShopsLogo}></img>
              </a>
            </MadeInGermanyLogo>
            <MadeInGermanyLogo>
              <img height={"55px"} src={"https://hell-insekten-sonnenschutz-cdn.s3.eu-central-1.amazonaws.com/madein.png"}></img>
            </MadeInGermanyLogo>
          </LoginContainer>
        </LogoContainer>
        <BottomPart>
          <SingleBottomDivWrapper>
            <NavbarDesktopListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees" onMouseEnter={() => setClosedForNavigation(false)}>Plissees</NavbarDesktopListStyledLink>
            <DropdownMenu closedForNavigation={closedForNavigation} calcHeight={calcHeight}>
              <DropdownMenuInside>
                <SingleColumn>
                  <ColTitle>Plissee nach Maß</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees">Plissees</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees/premium-plissee-optionen">Premium Plissee</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees/basic-plissee-optionen">Basic Plissee</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees/waben-plissee-optionen">Wabenplissee</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <ColTitle>Plissee nach Maß</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees/wintergarten-plissee-optionen">Wintergarten Plissee</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees/dachfenster-plissee-optionen">Dachfenster Plissee</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees/sonderformen-plissee-optionen">Sonderformen Plissee</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees/akku-plissee-optionen">Akku Plissee</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees/freihaengend-plissee-optionen">Freihaengend Plissee</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <ColTitle>Plissee-Ratgeber</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/plissees">Gratis Muster</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/messanleitung/plissee">Richtige Messung</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/montageanleitung/plissee">Richtige Installation</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <CustomDropdownImg src={PlisseeImg} alt="image of plissee representing whole category"/>
                </SingleColumn>

              </DropdownMenuInside>
            </DropdownMenu>
          </SingleBottomDivWrapper>

          <SingleBottomDivWrapper>
            <NavbarDesktopListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/jalousien" onMouseEnter={()=>setClosedForNavigation(false)}>Jalousien</NavbarDesktopListStyledLink>
            <DropdownMenu closedForNavigation={closedForNavigation} calcHeight={calcHeight}>
              <DropdownMenuInside>
                <SingleColumn>
                  <ColTitle>Jalousie nach Maß</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/jalousien">Jalousien</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/jalousie/premium-jalousie-optionen">Premium Jalousie</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/jalousie/basic-jalousie-optionen">Basic Jalousie</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/jalousie/holzjalousie-optionen">Holzjalousie</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/jalousie/premium-jalousie-optionen">Smart Akku Jalousie</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <ColTitle>Jalousien-Ratgeber</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/jalousien">Gratis Muster</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/messanleitung/jalousie">Richtige Messung</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/montageanleitung/jalousie">Richtige Installation</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <CustomDropdownImg src={JalousienImg} alt="image of plissee representing whole category"/>
                </SingleColumn>
                <SingleColumn>
                  <CustomDropdownImg marginLeft={"-5%"} src={HolzJalousienImg} alt="image of plissee representing whole category"/>
                </SingleColumn>
              </DropdownMenuInside>
            </DropdownMenu>
          </SingleBottomDivWrapper>

          <SingleBottomDivWrapper>
            <NavbarDesktopListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/rollos" onMouseEnter={()=>setClosedForNavigation(false)}>Rollos</NavbarDesktopListStyledLink>
            <DropdownMenu closedForNavigation={closedForNavigation} calcHeight={calcHeight}>
              <DropdownMenuInside>
                <SingleColumn>
                  <ColTitle>Rollo nach Maß</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/rollos">Rollos</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/rollo/premium-rollo-optionen"> Premium Rollo</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/rollo/basic-rollo-optionen"> Basic Rollo</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/rollo/doppel-rollo-optionen"> Doppelrollo</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/rollo/akku-rollo-optionen"> Smart Aku Rollo</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <ColTitle>Rollo-Ratgeber</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/rollos">Gratis Muster</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/messanleitung/rollo">Richtige Messung</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/montageanleitung/rollo">Richtige Installation</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <CustomDropdownImg src={RolloImg} alt="image of plissee representing whole category"/>
                </SingleColumn>
                <SingleColumn>
                  <CustomDropdownImg marginLeft={"-5%"} src={DopelRolloImg} alt="image of plissee representing whole category"/>
                </SingleColumn>
              </DropdownMenuInside>
            </DropdownMenu>
          </SingleBottomDivWrapper>

          <SingleBottomDivWrapper>
            <NavbarDesktopListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/lamellenvorhang" onMouseEnter={()=>setClosedForNavigation(false)}>Lamellenvorhang</NavbarDesktopListStyledLink>
            <DropdownMenu closedForNavigation={closedForNavigation} calcHeight={calcHeight}>
              <DropdownMenuInside>
                <SingleColumn>
                  <ColTitle>Lamellenvorhang nach Maß</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/lamellenvorhang">Lamellenvorhang</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/lamellenvorhang/premium-lamellenvorhang-optionen"> Premium Lamellenvorhang</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/lamellenvorhang/basic-lamellenvorhang-optionen"> Basic Lamellenvorhang</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/lamellenvorhang/schrag-lamellenvorhang-optionen"> Lamellenvorhang schräg</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <ColTitle>Lamellenvorhang-Ratgeber</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/lamellenvorhang">Gratis Muster</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/messanleitung/lamellenvorhang">Richtige Messung</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/montageanleitung/lamellenvorhang">Richtige Installation</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <CustomDropdownImg src={LamellenImg} alt="image of primary Lamellenvorhang representing whole category"/>
                </SingleColumn>
              </DropdownMenuInside>
            </DropdownMenu>
          </SingleBottomDivWrapper>

          <SingleBottomDivWrapper>
            <NavbarDesktopListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/insektenschutz" onMouseEnter={()=>setClosedForNavigation(false)}>Insektenschutz</NavbarDesktopListStyledLink>
            <DropdownMenu closedForNavigation={closedForNavigation} calcHeight={calcHeight}>
              <DropdownMenuInside>
                <SingleColumn>
                  <ColTitle>Insektenschutz nach Maß</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/geschaft/insektenschutz">Insektenschutz</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/produkts/InsektenschutzFensterSpannrahmen/1">Insektenschutz für Fenster - Spannrahmen</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/produkts/InsektenschutzPlisseetür/1">Insektenschutz - Plisseetür</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/produkts/InsektenschutzPendeltür/1">Insektenschutz - Pendeltür</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <ColTitle>Erfahren Sie mehr über unsere Produkte</ColTitle>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/turen">Für Türen</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/fenster">Für Fenster</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/dachfenster">Für Dachfenster</NavbarDesktopSubListStyledLink>
                  <NavbarDesktopSubListStyledLink onClick={triggerNavbarDesktopReset} to="/lich">Für Lichtschächte</NavbarDesktopSubListStyledLink>
                </SingleColumn>
                <SingleColumn>
                  <CustomDropdownImg src={InsekImg} alt="image of plissee representing whole category"/>
                </SingleColumn>

              </DropdownMenuInside>
            </DropdownMenu>
          </SingleBottomDivWrapper>

          <ExtendedSingleBottomDivWrapper>
            <NavbarDesktopListStyledLink onClick={triggerNavbarDesktopReset} to="/bestellung" onMouseEnter={()=>setClosedForNavigation(false)}>Bestellung Suchen</NavbarDesktopListStyledLink>
          </ExtendedSingleBottomDivWrapper>
        </BottomPart>
      </NavbarWrapper>

      <MobileBurgerMenuContainer move={move} toggle={toggle}>
        <MobileBurgerMenuLeftColumn toggle={toggle}>
          <WrapperForCategories>
            {
              optionsForLeftColumn.map((item)=> {
                return (
                    <LeftColumnSingleOption
                        key={item.key}
                        imageUrl={item.imageUrl}
                        text={item.text}
                        options={item.options}
                        setterFunc={(arg)=>setRightColumnContent(arg)}
                        moverFunc={()=>setMove("-25%")}
                        optionalOnclickHandler={onclickMap[item.key]}
                    />
                )
              })
            }
          </WrapperForCategories>
          <WrapperForFooter toggle={toggle}>
            {
              optionsForFooter.map((item)=> {
                return (
                    <LeftColumnSingleOption
                        key={item.key}
                        imageUrl={item.imageUrl}
                        text={item.text}
                        options={item.options}
                        setterFunc={(arg)=>setRightColumnContent(arg)}
                        moverFunc={()=>setMove("-25%")}
                        optionalOnclickHandler={onclickMap[item.key]}
                        icon={item.icon}
                    />
                )
              })
            }
          </WrapperForFooter>
        </MobileBurgerMenuLeftColumn>
        <MobileBurgerMenuRightColumn style={{maxHeight: `calc(100vh - ${calcHeightWrapper})`, overflowY: "scroll"}} toggle={toggle}>
          <div onClick={() => setMove("25%")}
            style={{ width: "25%", marginTop: "10px"}}
          >
            <ArrowBackIosIcon color="warning" fontSize="large"/>
          </div>
          <div>
            {
              rightColumnContent!==null && rightColumnContent.map(item => {
                  return (
                      <div key={item.title}>
                        <div style={{textAlign: "left", paddingLeft: "7.5%", marginTop: "14px", fontSize: "20px", fontWeight: "bold"}}>
                          {item.title}</div>
                        <div>
                          {
                            item?.data.map(singleData => {
                                return (
                                  <NavbarMobileListStyledLink
                                    to={singleData.value}
                                    onClick={()=>{
                                      triggerNavbarDesktopReset();
                                      setMove("75%");
                                    }}
                                  >
                                      <div style={{textAlign: "left"}}>{singleData.key}</div>
                                      <ArrowForwardIosIcon/>
                                  </NavbarMobileListStyledLink>
                                );
                            })
                          }
                        </div>
                      </div>
                  );
                })
            }
          </div>

        </MobileBurgerMenuRightColumn>
      </MobileBurgerMenuContainer>
    </NavbarContainer>
  )
}

export default Navbar;
