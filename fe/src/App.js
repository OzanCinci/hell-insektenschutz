// STYLE
import './App.css';
// ROUTER
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// PAGES
import { useEffect, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './LandingPageComponents/Navbar';
import Footer from './LandingPageComponents/Footer';
import LoginPopUp from './CustomComponents/LoginPopUp';
import ReviewModal from './CustomComponents/ReviewModal';
import ScrollToTop from './LandingPageComponents/ScrollToTop';
import CircularProgress from '@mui/material/CircularProgress';

// Lazy load the components
const HomePage = lazy(() => import('./Pages/HomePage'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound'));
const Türen = lazy(() => import('./Pages/detailPages/Türen'));
const Fenster = lazy(() => import('./Pages/detailPages/Fenster'));
const Dachfenster = lazy(() => import('./Pages/detailPages/Dachfenster'));
const Lichtschachte = lazy(() => import('./Pages/detailPages/Lichtschachte'));
const Sonderformen = lazy(() => import('./Pages/detailPages/Sonderformen'));
const Zusatsprodukte = lazy(() => import('./Pages/detailPages/Zusatsprodukte'));
const Gewebearten = lazy(() => import('./Pages/detailPages/Gewebearten'));
const Impressum = lazy(() => import('./LegalPages/Impressum'));
const Widerrufsbelehrung = lazy(() => import('./LegalPages/Widerrufsbelehrung'));
const Datenschutz = lazy(() => import('./LegalPages/Datenschutz'));
const Kontakt = lazy(() => import('./LegalPages/Kontakt'));
const RaumPforzheim = lazy(() => import('./SeoPages/RaumPforzheim'));
const RaumKarlsruhe = lazy(() => import('./SeoPages/RaumKarlsruhe'));
const RaumBaden = lazy(() => import('./SeoPages/RaumBaden'));
const Detail = lazy(() => import('./DetailPages/Detail'));
const AdminPanel = lazy(() => import('./Pages/admin/AdminPanel'));
const Profile = lazy(() => import('./Pages/profilePage/Profile'));
const ActiveOrderTable = lazy(() => import('./Pages/admin/adminPanelComponents/ActiveOrderTable'));
const CompletedOrders = lazy(() => import('./Pages/admin/adminPanelComponents/CompletedOrders'));
const PendingReviews = lazy(() => import('./Pages/admin/adminPanelComponents/PendingReviews'));
const ApprovedReviews = lazy(() => import('./Pages/admin/adminPanelComponents/ApprovedReviews'));
const AllUsers = lazy(() => import('./Pages/admin/adminPanelComponents/AllUsers'));
const ChangeRole = lazy(() => import('./Pages/admin/adminPanelComponents/ChangeRole'));
const CreateOrder = lazy(() => import('./Pages/order/CreateOrder'));
const OrderSuccess = lazy(() => import('./Pages/order/OrderSuccess'));
const Warenkorb = lazy(() => import('./Pages/order/Warenkorb'));
const SingleProduct = lazy(() => import('./Pages/SingleProductPage/SingleProduct'));
const ShopLanding = lazy(() => import('./Pages/shop/ShopLanding'));
const Insek = lazy(() => import('./Pages/shop/pages/Insek'));
const ShopDetail = lazy(() => import('./Pages/shop/ShopDetail'));
const OptionsPage = lazy(() => import('./Pages/listing/OptionsPage'));
const Measurement = lazy(() => import('./Pages/howToMeasure/Measurement'));
const RegularCatalog = lazy(() => import('./Pages/shop/pages/RegularCatalog'));
const Wrapper = lazy(() => import('./Pages/products/Wrapper'));
const HowToInstall = lazy(() => import('./Pages/howToInstall/HowToInstall'));
const SearchOrder = lazy(() => import('./Pages/order/SearchOrder'));
const OrderSearch = lazy(() => import('./Pages/admin/adminPanelComponents/OrderSearch'));
const PayPalTest = lazy(() => import('./Pages/paypalTest/PayPalTest'));
const AllTransactions = lazy(() => import('./Pages/admin/adminPanelComponents/AllTransactions'));
const NumberOfVisitors = lazy(() => import('./Pages/admin/adminPanelComponents/analytic/NumberOfVisitors'));

function App() {
  useEffect(() => {
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
  }, [])

  // OVERFLOW CLIP YAPTIN HABERIN OLSUN SİLMEYİ UNUTMA
  return (
    <div className="App" style={{ overflowX: "clip", minHeight: "1200px" }}>
      
      <ReviewModal />
      <BrowserRouter>
        <LoginPopUp />
        <Navbar />
        <ScrollToTop />
        <div style={{ minHeight: "100vh" }}>
          <Suspense fallback={<div><CircularProgress color='warning'/></div>}>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              
              <Route exact path='/turen' element={<Türen />} />
              <Route exact path='/fenster' element={<Fenster />} />
              <Route exact path='/dachfenster' element={<Dachfenster />} />
              <Route exact path='/lich' element={<Lichtschachte />} />
              <Route exact path='/sonderformen' element={<Sonderformen />} />
              <Route exact path='/zusatzprodukte' element={<Zusatsprodukte />} />
              <Route exact path='/gewebearten' element={<Gewebearten />} />
              
              <Route exact path='/impressum' element={<Impressum />} />
              <Route exact path='/widerrufsbelehrung' element={<Widerrufsbelehrung />} />
              <Route exact path='/datenschutz' element={<Datenschutz />} />
              <Route exact path='/kontakt' element={<Kontakt />} />
              
              <Route exact path='/pforzheim' element={<RaumPforzheim />} />
              <Route exact path='/karlsruhe' element={<RaumKarlsruhe />} />
              <Route exact path='/baden-baden' element={<RaumBaden />} />
              
              <Route exact path='/einzelheiten/:category/:detailName' element={<Detail />} />
              
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/test' element={<PayPalTest />} />

              <Route path='admin-panel' element={<AdminPanel />}>
                <Route path='pending-reviews' element={<PendingReviews />} />
                <Route path='approved-reviews' element={<ApprovedReviews />} />
                <Route path='orders/:status' element={<ActiveOrderTable />} />
                <Route path='bestellnummber' element={<OrderSearch />} />
                <Route path='change-role' element={<ChangeRole />} />
                <Route path='transactions' element={<AllTransactions />} />
                <Route path='number-of-visits' element={<NumberOfVisitors />} />
                
                <Route path='all-users' element={<AllUsers />} />
              </Route>

              <Route path='/test-produkt/:productID' element={<SingleProduct />} />
              
              <Route path='order-create' element={<CreateOrder />} />
              <Route path='order-success' element={<OrderSuccess />} />
              
              <Route path='bestellung' element={<SearchOrder />} />
              
              <Route path='warenkorb' element={<Warenkorb />} />
              
              <Route path='geschaft' element={<ShopLanding />} />
              
              <Route path='geschaft' element={<ShopDetail />}>
                <Route path='plissees' element={<RegularCatalog />} />
                <Route path='jalousien' element={<RegularCatalog />} />
                <Route path='rollos' element={<RegularCatalog />} />
                <Route path='lamellenvorhang' element={<RegularCatalog />} />
                <Route path='insektenschutz' element={<Insek />} />
              </Route>

              <Route path='/geschaft/:category/:model' element={<OptionsPage />} />
              <Route path='/produkts/:produkt/:id' element={<Wrapper />} />
              <Route path='/messanleitung/:category' element={<Measurement />} />
              <Route path='/montageanleitung/:category' element={<HowToInstall />} />
              <Route default path='/*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
