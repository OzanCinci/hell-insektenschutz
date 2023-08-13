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
    AOS.init();
  },[])

  return (
    <div className="App">
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
