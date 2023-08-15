// STYLE
import './App.css';
// ROUTER
import {Route,Routes,BrowserRouter} from 'react-router-dom'
// PAGES
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './LandingPageComponents/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 170, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  },[])

  return (
    <div className="App" style={{width:"100vw", overflowX:"hidden"}}>
      {/*<Navbar/>*/}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route default path='/*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
