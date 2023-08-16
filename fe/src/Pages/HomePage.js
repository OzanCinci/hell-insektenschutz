import React from 'react'
// STYLED COMPONENTS
import styled from 'styled-components';
// COMPONENTS
import LandingPagePhoto from '../LandingPageComponents/LandingPagePhoto'
import Services from '../LandingPageComponents/Services'
import Reviews from '../LandingPageComponents/Reviews'
import Products from '../LandingPageComponents/Products'

function HomePage() {
  return (
    <div>
      <LandingPagePhoto/>
      <Services/>
      <Reviews/>
      <Products/>
      {/* 
        <Map/>
      */}
    </div>
  )
}

export default HomePage