import React from 'react'
import styled from 'styled-components'

const StickUp = styled.div`
    height: 4px;
    width: 30px;
    border-radius: 5px;
    background-color: #f59f4c;
    transform: ${props => props.toggle ? "rotate(36deg)": ""};
    transition: transform 350ms ease-in;
    transform-origin:left;
`

const StickDown = styled.div`
    height: 4px;
    width: 30px;
    border-radius: 5px;
    background-color: #f59f4c;
    transform: ${props => props.toggle ? "rotate(-36deg)": ""};
    transition: transform 350ms ease-in;
    transform-origin:left;
`

const StickMiddle = styled.div`
    height: 4px;
    width: 40px;
    margin: 5px 0px;
    border-radius: 5px;
    background-color: #f59f4c;
    opacity: ${props => props.toggle ? "0": "1"};
    transition: opacity 350ms ease-in;
`

const StickWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &: hover {
        cursor: pointer;
    }
`


function BurgerIcon({toggle, setToggle}) {
  return (
    <StickWrapper onClick={()=>setToggle(!toggle)}>
        <StickUp toggle={toggle}/>
        <StickMiddle toggle={toggle}/>
        <StickDown toggle={toggle}/>
    </StickWrapper>
  )
}

export default BurgerIcon
