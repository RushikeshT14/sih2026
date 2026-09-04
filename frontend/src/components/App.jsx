import React from 'react'
import background from "../assets/untitled.png";
import "./app.css"; 
import Navbar from './Navbar';
const App = () => {
  return (
    <div className="hero_background">
      <img src={background} alt="Background" />
      <Navbar/>
    </div>
  )
}

export default App
