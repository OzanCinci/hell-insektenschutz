import React, { useLayoutEffect } from 'react'
// COMPONENTS
import LandingPagePhoto from '../LandingPageComponents/LandingPagePhoto'
import Services from '../LandingPageComponents/Services'
import Reviews from '../LandingPageComponents/Reviews'
import Products from '../LandingPageComponents/Products'
import Map from '../LandingPageComponents/Map'

function HomePage() {

  useLayoutEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])


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

export default HomePage;
