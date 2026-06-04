import { useEffect } from 'react'
import './styles/App.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductsList from './pages/Productslist'
import Productdetail from './pages/Productdetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import About from './pages/About'
import Becomevendor from './pages/Becomevendor'
import Newarrivals from './pages/Newarrivals'
import Dealsoftheday from './pages/Dealsoftheday'
import Bestsellers from './pages/Bestsellers'
import Blogs from './pages/Blogs'
import Careers from './pages/Careers'
import { ToastProvider } from './context/ToastContext'
import Returns from './pages/Returns'
import Shippingpolicy from './pages/Shippingpolicy'
import Privacypolicy from './pages/Privacypolicy'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'


function App() {

  // Dismiss the full-page loader once React has rendered
  useEffect(() => {
    const loader = document.getElementById('app-loader');
    if (!loader) return;
    const timer = setTimeout(() => {
      loader.classList.add('hide');
      // Remove from DOM after fade-out transition completes
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<Productdetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/become-vendor" element={<Becomevendor />} />
            <Route path="/new-arrivals" element={<Newarrivals />} />
            <Route path="/dealsoftheday" element={<Dealsoftheday />} />
            <Route path="/bestsellers" element={<Bestsellers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/shipping-policy" element={<Shippingpolicy />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ToastProvider>
  )
}

export default App
