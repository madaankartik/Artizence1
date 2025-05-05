import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Lower from './components/LowerNavbar/Lower'
import Main from "./components/Main/Main"
import Plan from './components/Plan/Plan'
import Ai from "./components/AiAssistant/Ai"
import Footer from './components/Footer/Footer'
import Stories from './components/Stories/Stories'
import Penguin from './components/Penguin/Penguin'
import FactSection from "./components/FactSection/FactSection"

const App = () => {
  return (
    <div>
      <Navbar />
      <Lower />
      <Main />
      <Stories />
      <FactSection />
      <Plan />
      <Ai />
      <Footer />
      <Penguin />
    </div>
  )
}

export default App
