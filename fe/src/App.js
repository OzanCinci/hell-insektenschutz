// STYLE
import './App.css';
// ROUTER
import {Route,Routes,BrowserRouter} from 'react-router-dom'
// PAGES
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './LandingPageComponents/Navbar';
import Footer from './LandingPageComponents/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Türen from './Pages/detailPages/Türen';
import Fenster from './Pages/detailPages/Fenster';
import Dachfenster from './Pages/detailPages/Dachfenster';
import Lichtschachte from './Pages/detailPages/Lichtschachte';
import Sonderformen from './Pages/detailPages/Sonderformen';
import Zusatsprodukte from './Pages/detailPages/Zusatsprodukte';
import Gewebearten from './Pages/detailPages/Gewebearten';
import Impressum from './LegalPages/Impressum';
import Widerrufsbelehrung from './LegalPages/Widerrufsbelehrung';
import Datenschutz from './LegalPages/Datenschutz';
import Kontakt from './LegalPages/Kontakt';
import RaumPforzheim from './SeoPages/RaumPforzheim';
import RaumKarlsruhe from './SeoPages/RaumKarlsruhe';
import RaumBaden from './SeoPages/RaumBaden';
import Detail from './DetailPages/Detail';
import LoginPopUp from './CustomComponents/LoginPopUp';
import AdminPanel from './Pages/admin/AdminPanel';
import Profile from './Pages/profilePage/Profile';
import ActiveOrderTable from './Pages/admin/adminPanelComponents/ActiveOrderTable';
import CompletedOrders from './Pages/admin/adminPanelComponents/CompletedOrders';
import PendingReviews from './Pages/admin/adminPanelComponents/PendingReviews';
import ApprovedReviews from './Pages/admin/adminPanelComponents/ApprovedReviews';
import AllUsers from './Pages/admin/adminPanelComponents/AllUsers';
import ChangeRole from './Pages/admin/adminPanelComponents/ChangeRole';
import CreateOrder from './Pages/order/CreateOrder';
import OrderSuccess from './Pages/order/OrderSuccess';
import Warenkorb from './Pages/order/Warenkorb';
import ScrollToTop from './LandingPageComponents/ScrollToTop';
import ReviewModal from './CustomComponents/ReviewModal';
import SingleProduct from './Pages/SingleProductPage/SingleProduct';
import ShopLanding from './Pages/shop/ShopLanding';
import Insek from './Pages/shop/pages/Insek';
import ShopDetail from './Pages/shop/ShopDetail';
import OptionsPage from './Pages/listing/OptionsPage';
import Measurement from './Pages/howToMeasure/Measurement';
import RegularCatalog from './Pages/shop/pages/RegularCatalog';
import Wrapper from './Pages/products/Wrapper';
import HowToInstall from './Pages/howToInstall/HowToInstall';
import SearchOrder from './Pages/order/SearchOrder';
import OrderSearch from './Pages/admin/adminPanelComponents/OrderSearch';
import PayPalTest from './Pages/paypalTest/PayPalTest';
import AllTransactions from './Pages/admin/adminPanelComponents/AllTransactions';

function App() {
  useEffect(()=>{
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 135, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  },[])

  // OVERFLOW CLIP YAPTIN HABERIN OLSUN SİLMEYİ UNUTMA
  return (
    <div className="App" style={{ overflowX:"clip", minHeight:"1200px"}}>
      {/*<Navbar/>*/}
      
      <LoginPopUp/>
      <ReviewModal/>

      <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <div style={{minHeight:"100vh"}}>
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/turen' element={<Türen/>}/>
            <Route exact path='/fenster' element={<Fenster/>}/>
            <Route exact path='/dachfenster' element={<Dachfenster/>}/>
            <Route exact path='/lich' element={<Lichtschachte/>}/>
            <Route exact path='/sonderformen' element={<Sonderformen/>}/>
            <Route exact path='/zusatzprodukte' element={<Zusatsprodukte/>}/>
            <Route exact path='/gewebearten' element={<Gewebearten/>}/>
            <Route exact path='/impressum' element={<Impressum/>}/>
            <Route exact path='/widerrufsbelehrung' element={<Widerrufsbelehrung/>}/>
            <Route exact path='/datenschutz' element={<Datenschutz/>}/>
            <Route exact path='/kontakt' element={<Kontakt/>}/>


            <Route exact path='/pforzheim' element={<RaumPforzheim/>}/>
            <Route exact path='/karlsruhe' element={<RaumKarlsruhe/>}/>
            <Route exact path='/baden-baden' element={<RaumBaden/>}/>


            
            <Route exact path='/einzelheiten/:category/:detailName' element={<Detail/>}/>


            <Route exact path='/profile' element={<Profile/>}/>
            <Route exact path='/test' element={<PayPalTest/>}/>
            
            <Route  path='admin-panel' element={<AdminPanel/>}>
              <Route path='pending-reviews' element={<PendingReviews/>}/>
              <Route path='approved-reviews' element={<ApprovedReviews/>}/>
              <Route path='orders/:status' element={<ActiveOrderTable/>}/>
              <Route path='bestellnummber' element={<OrderSearch/>}/>
              <Route path='change-role' element={<ChangeRole/>}/>
              <Route path='transactions' element={<AllTransactions/>}/>

              {/*<Route path='completed-orders' element={<CompletedOrders/>}/>*/}
              <Route path='all-users' element={<AllUsers/>}/>
            </Route>


            <Route path='/test-produkt/:productID' element={<SingleProduct/>}>
            </Route>


            <Route path='order-create' element={<CreateOrder/>}/>
            <Route path='order-success' element={<OrderSuccess/>} />
            <Route path='bestellung' element={<SearchOrder/>} />
            <Route path='warenkorb' element={<Warenkorb/>} />


            <Route path='geschaft' element={<ShopLanding/>}/>

            {/* CATALOG KISMI */}
            <Route  path='geschaft' element={<ShopDetail/>}>
              <Route path='plissees' element={<RegularCatalog/>}/>
              <Route path='jalousien' element={<RegularCatalog/>}/>
              <Route path='rollos' element={<RegularCatalog/>}/> 
              <Route path='lamellenvorhang' element={<RegularCatalog/>}/>

              <Route path='insektenschutz' element={<Insek/>}/>
            </Route>
            {/* CATALOG KISMI */}

            <Route path='/geschaft/:category/:model' element={<OptionsPage/>}/>

            <Route path='/produkts/:produkt/:id' element={<Wrapper/>}/>


            <Route path='/messanleitung/:category' element={<Measurement/>}/>
            <Route path='/montageanleitung/:category' element={<HowToInstall/>}/>

            <Route default path='/*' element={<PageNotFound/>}/>

            
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
