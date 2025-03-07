import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarFree from "./components/Freelance/Navbar/Navbar";
import Home from "./components/Home/Home";
import HomeFree from "./components/Freelance/Home/Home";
import About from "./components/About/About";
import AboutFree from "./components/Freelance/About/About";
import Services from "./components/Services/Services";
import ServicesFree from "./components/Freelance/Services/Services";
import Skills from "./components/Skills/Skills";
import SkillsFree from "./components/Freelance/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioFree from "./components/Freelance/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import ContactFree from "./components/Freelance/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FooterFree from "./components/Freelance/Footer/Footer";
import LogoSlider from "./components/LogoSlider/LogoSlider";
import LogoSliderFree from "./components/Freelance/LogoSlider/LogoSlider";
import Curriculum from "./components/Curriculum/Curriculum";
import CurriculumFree from "./components/Freelance/Curriculum/Curriculum";
import Calculadora from "./components/Calculadora/Calculadora";
//import Cta from './components/Cta/Cta';
//import ContactList from './components/Contact/ContactList';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Fragment>
            <Navbar />
            <Home />
            <LogoSlider />
            <About />
            <Services />
            <Skills />
            <Portfolio />
            <Curriculum />
            <Contact />
            <Footer />
          </React.Fragment>
        }
      />
      <Route
      path="/calculadora-de-metros-cuadrados"
      element={<Calculadora />
      }
      />
      <Route
      path="/diseño_tu_pagina_web"
      element={
        <React.Fragment>
          <NavbarFree />
          <HomeFree />
          <LogoSliderFree />
          <AboutFree />
          <ServicesFree />
          <SkillsFree />
          <PortfolioFree />
          <CurriculumFree />
          <ContactFree />
          <FooterFree />
        </React.Fragment>
      }
      />
    </Routes>
  );
};

export default App;
