import React, { useLayoutEffect } from 'react'
// COMPONENTS
import LandingPagePhoto from '../LandingPageComponents/LandingPagePhoto'
import Services from '../LandingPageComponents/Services'
import Reviews from '../LandingPageComponents/Reviews'
import Products from '../LandingPageComponents/Products'
import Map from '../LandingPageComponents/Map'
import ImageGalery from '../LandingPageComponents/ImageGalery'
import ProduktCatalog from '../LandingPageComponents/ProduktCatalog'

function HomePage() {

  useLayoutEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])


  return (
    <div>
      {/*<LandingPagePhoto/> */}
      <ImageGalery/>
      <ProduktCatalog/>
      <Services/>
      <Reviews/>
      <Products/>
      <Map/>
    </div>
  )
}

export default HomePage;
