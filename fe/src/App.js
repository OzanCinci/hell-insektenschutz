// STYLE
import './App.css';
// ROUTER
import {Route,Routes,BrowserRouter} from 'react-router-dom'
// PAGES
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './LandingPageComponents/Navbar'

function App() {
  return (
    <div className="App">
      {/*<Navbar/>*/}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route default path='/*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
