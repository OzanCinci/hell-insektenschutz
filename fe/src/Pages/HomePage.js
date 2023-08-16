import React from 'react'
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
    </div>
  )
}

export default HomePage