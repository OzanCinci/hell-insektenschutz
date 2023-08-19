import React from 'react'
// COMPONENTS
import LandingPagePhoto from '../LandingPageComponents/LandingPagePhoto'
import Services from '../LandingPageComponents/Services'
import Reviews from '../LandingPageComponents/Reviews'
import Products from '../LandingPageComponents/Products'
import Map from '../LandingPageComponents/Map'

function HomePage() {
  return (
    <div>
      <LandingPagePhoto/>
      <Services/>
      <Reviews/>
      <Products/>
      <Map/>
    </div>
  )
}

export default HomePage