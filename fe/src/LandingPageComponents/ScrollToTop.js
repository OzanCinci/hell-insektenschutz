import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();
    const currentPath = location.pathname;

    useLayoutEffect(()=>{
      return () => {
        //window.scrollTo({top: 0});
        window.scrollTo({
          top: 0,
          behavior: 'instant'
        });
        console.log("RENDERED!");
      }
    },[currentPath])
    

  return (
    <></>
  )
}

export default ScrollToTop