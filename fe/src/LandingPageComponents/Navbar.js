import React from 'react'
import styled from 'styled-components'
import Logo from '../images/landingPage/logo.png';
import { useNavigate } from 'react-router-dom'


const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  //border: 3px solid black;
  z-index: 99;
  background-color: white;

  -webkit-box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);
box-shadow: 0px 13px 32px -19px rgba(0,0,0,0.75);


  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 40px;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 60px;
`;

const Link = styled.div`
  border: 2px solid #f59f4c;
  
  -webkit-border-top-left-radius: 10px;
  -webkit-border-bottom-right-radius: 20px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-bottomright: 20px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 20px;


  margin: 0px 10px;
  padding: 3px 6px;
  color: #f59f4c;
  color: rgb(82, 82, 102);;
  font-size: 25px;
  position: relative;

  &:hover {
    cursor: pointer;

    &::after {
      transform: scaleX(1);
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
    transform-origin: left;
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


function Navbar() {
  const navigate = useNavigate();


  return (
    <NavbarContainer >
      <div>
        <LogoImg src={Logo}/>
      </div>
      <LinkContainer>
        <Link onClick={() => navigate("/")}>
          HomePage
        </Link>
        <Link onClick={() => navigate("/test1")}>
            Link1
        </Link>
        <Link onClick={() => navigate("/test2")}>
            Link2
        </Link>
        <Link onClick={() => navigate("/test3")}>
            Link3
        </Link>
      </LinkContainer>
    </NavbarContainer>
  )
}

export default Navbar