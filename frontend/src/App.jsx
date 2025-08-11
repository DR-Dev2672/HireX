import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={
          <>
            <Navbar />
            <HeroSection />
            <Footer />
          </>
        }/>
        <Route path="/login" element={
          <>
            <Navbar />
            <Login/>
            <Footer/>
          </>
          }
          />
      </Routes>
    </Router>
  )
}

export default App
