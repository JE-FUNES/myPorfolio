import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import LogoSlider from './components/LogoSlider/LogoSlider'
import Cta from './components/Cta/Cta'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <LogoSlider />
      <About />
      <Services />
      <Skills />
      <Cta />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default App
