import React from 'react'
// STYLED COMPONENTS
import styled from 'styled-components';
// COMPONENTS
import LandingPagePhoto from '../LandingPageComponents/LandingPagePhoto'
import Services from '../LandingPageComponents/Services'
import Reviews from '../LandingPageComponents/Reviews'
import Products from '../LandingPageComponents/Products'
import Map from '../LandingPageComponents/Map'


const Wrapper = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    border: 10px solid purple;
`

function HomePage() {
  return (
    <Wrapper>
      <LandingPagePhoto/>
      <Services/>
      <Reviews/>
      <Products/>
      <Map/>
    </Wrapper>
  )
}

export default HomePage