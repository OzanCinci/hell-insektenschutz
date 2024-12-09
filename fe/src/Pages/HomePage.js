import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
// COMPONENTS
import Services from '../LandingPageComponents/Services';
import Reviews from '../LandingPageComponents/Reviews';
import Products from '../LandingPageComponents/Products';
import Map from '../LandingPageComponents/Map';
import ImageGalery from '../LandingPageComponents/ImageGalery';
import ProduktCatalog from '../LandingPageComponents/ProduktCatalog';
import MainPageBanner from '../LandingPageComponents/MainPageBanner';
import LandingImage from "../LandingPageComponents/LandingImage";

const DesktopOnly = styled.div`
  @media only screen and (max-width: 900px) {
      display: none;
  }
`;

const MobileOnly = styled.div`
  @media only screen and (min-width: 900px) {
      display: none;
  }
`;

function HomePage() {

  useLayoutEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])


  return (
    <div>
        {
            /*
                <DesktopOnly>
                <MainPageBanner/>
              </DesktopOnly>

              <MobileOnly>
                  <ImageGalery/>
              </MobileOnly>
            */
        }
      <LandingImage/>
      <ProduktCatalog/>
      <Services/>
      <Reviews/>
      <Products/>
      <Map/>
    </div>
  )
}

export default HomePage;
