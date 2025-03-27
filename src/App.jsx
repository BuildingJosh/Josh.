import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TravelLog from './pages/TravelLog'
import Contact from './pages/Contact'
import MyMind from './pages/MyMind'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import Ripple from './components/Ripple'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Ripple />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<TravelLog />} />
          <Route path="/mind" element={<MyMind />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
