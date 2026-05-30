import { useState } from 'react'
import './styles/App.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'



function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
