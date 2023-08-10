import React from 'react'
// COMPONENTS
import Navbar from '../LandingPageComponents/Navbar'
import LandingPagePhoto from '../LandingPageComponents/LandingPagePhoto'
import Services from '../LandingPageComponents/Services'
import Reviews from '../LandingPageComponents/Reviews'
import Products from '../LandingPageComponents/Products'
import Map from '../LandingPageComponents/Map'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <LandingPagePhoto/>
      <Services/>
      <Reviews/>
      <Products/>
      <Map/>
    </div>
  )
}

export default HomePage