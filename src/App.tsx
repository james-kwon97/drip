import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      {/* Add other components or content below */}
    </div>
  )
}

export default App
