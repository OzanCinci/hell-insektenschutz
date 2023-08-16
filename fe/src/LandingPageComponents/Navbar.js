import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../images/landingPage/logo.png';
import { useNavigate } from 'react-router-dom'
import BurgerIcon from './BurgerIcon';


const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  z-index: 99;
  background-color: white;

  -webkit-box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);
  box-shadow: 0px 8px 24px -19px rgba(0,0,0,0.75);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 40px;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

`;

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
    padding: 40px 10px 80px 60px;
    gap: 45px;
    height: fit-content;
    background-color: white;
    z-index: 95;
    transform: ${props => props.toggle ? "scaleY(1)": "scaleY(0.1)"};
    opacity: ${props => props.toggle ? "1": "0"};
    transition: transform 350ms ease-in, opacity 150ms ease-in 200ms;
    transform-origin: top;
    margin-top: 18px;
    border-top: ${props => props.toggle ? "2px solid #f59f4c" : "none"};
    -webkit-box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);
    box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);
  }

`;



const LogoImg = styled.img`
  height: 60px;

  @media only screen and (max-width: 1200px) {
    height: 45px;
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

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  function toggleFunction(nav){
    navigate(nav);
    setToggle(false);
  }


  return (
    <NavbarContainer toggle={toggle}>
      <div>
        <LogoImg onClick={ () => toggleFunction("/")} src={Logo}/>
        <NavbarButtonWrapper>
          <BurgerIcon toggle={toggle} setToggle={setToggle}/>
        </NavbarButtonWrapper>
      </div>
        <LinkContainer toggle={toggle} >
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
    </NavbarContainer>
  )
}

export default Navbar