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
import { ToastProvider } from './context/ToastContext'


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
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<Productdetail />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ToastProvider>
  )
}

export default App
