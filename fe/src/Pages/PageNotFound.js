import React, { useEffect } from 'react'

function PageNotFound() {

  useEffect(() => {
    document.addEventListener('scroll', () => {
      console.log("test1:", document.documentElement.scrollHeight)
      console.log("test2:", window.innerHeight)
      console.log("test3:", window.scrollY)
  })



  console.log("test1:", document.documentElement.scrollHeight)
  console.log("test2:", window.innerHeight)
  console.log("test3:", window.scrollY)

    return () => {
      console.log("OUT!")
      //window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);


  return (
    <div style={{height:"1500px"}}>PageNotFound</div>
  )
}

export default PageNotFound