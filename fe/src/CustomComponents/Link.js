import { Link } from "react-router-dom";
import styled from "styled-components";

export const BaseLink = styled(Link)`
  display: block;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export const FooterStyledLink = styled(BaseLink)`
  color: white;
  font-weight: 400;
  transition: color 0.3s ease-in-out;
    
  &:hover {
    color: black;
    font-weight: 600;
  }

  &:active {
    color: gray;
  }
`;

export const NavbarLegalTextStyledLink = styled(BaseLink)`
    color: #333;
    
    &:active {
        color: gray;
    }
    
    &:hover {
        cursor: pointer;
        color: #f59f4c;
    }
`;

export const NavbarDesktopSubListStyledLink = styled(BaseLink)`
    color: black;
    margin-bottom: 5px;
    font-size: 17px;

    &:hover {
        text-decoration: underline;
    }

    @media only screen and (max-width: 1200px) {
        font-size: 15px;
    }
`;

export const NavbarDesktopListStyledLink = styled(BaseLink)`
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    padding: 0px 10px;
    padding-bottom: 5px;
    position: relative;
    text-decoration: none; /* Remove default underline */
    color: inherit; /* Inherit text color */

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

export const NavbarMobileListStyledLink = styled(BaseLink)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 10px auto;
    font-size: 18px;
    text-decoration: none; /* Remove default underline */
    color: inherit; /* Inherit text color */
    transition: color 0.3s ease-in-out;

    &:hover {
        color: black; /* Change color on hover */
    }
`;

export const StyledButtonLink = styled(BaseLink)`
    color: inherit;
    &:hover {
        color: inherit; /* Change color on hover */
    }
`;

export const RegularProductCatalogProductLink = styled(BaseLink)`
    display: inline;
    color: #f59f4c;
    cursor: pointer;
    width: fit-content;
    font-size: 20px;
    margin-left: 5px;
    position: relative;

    &:hover {
        text-decoration: underline;
        color: #f59f4c;
    }
`;

export const RegularProductCatalogProductLinkWithoutHover = styled(RegularProductCatalogProductLink)`
    &:hover {
        text-decoration: none;
    }
`;

export const ProductCartLink = styled(BaseLink)`
    display: block; /* Ensures it behaves like a div */
    max-width: 330px;
    width: 22vw;
    padding: 20px 5px;
    cursor: pointer;
    text-decoration: none; /* Removes default underline */
    min-height: ${(props) =>
            props.maxHeight !== 0 && props.maxHeight !== null
                    ? `${props.maxHeight}px`
                    : "0px"};

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1200px) {
        width: 30vw;
    }

    @media (max-width: 700px) {
        padding: 20px 2px;
        width: 45vw;
    }
`;
