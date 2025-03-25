import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Recruiters/Navbar/Navbar";
import NavbarFree from "./components/Freelance/NavbarFree/Navbar";
import NavbarAgc from "./components/Agencies/NavbarAgc/Navbar";
import Home from "./components/Recruiters/Home/Home";
import HomeFree from "./components/Freelance/HomeFree/Home";
import HomeAgc from "./components/Agencies/HomeAgc/Home";
import About from "./components/Recruiters/About/About";
import AboutFree from "./components/Freelance/AboutFree/About";
import AboutAgc from "./components/Agencies/AboutAgc/About";
//import Services from "./components/Recruiters/Services/Services";
import ServicesFree from "./components/Freelance/ServicesFree/Services";
import ServicesAgc from "./components/Agencies/ServicesAgc/Services";
import Skills from "./components/Recruiters/Skills/Skills";
import SkillsFree from "./components/Freelance/SkillsFree/Skills";
import SkillsAgc from "./components/Agencies/SkillsAgc/Skills";
import Portfolio from "./components/Recruiters/Portfolio/Portfolio";
import PortfolioFree from "./components/Freelance/PortfolioFree/Portfolio";
import PortfolioAgc from "./components/Agencies/PortfolioAgc/Portfolio";
import Contact from "./components/Recruiters/Contact/Contact";
import ContactFree from "./components/Freelance/ContactFree/Contact";
import ContactAgc from "./components/Agencies/ContactAgc/Contact";
import Footer from "./components/Recruiters/Footer/Footer";
import FooterFree from "./components/Freelance/FooterFree/Footer";
import FooterAgc from "./components/Agencies/FooterAgc/Footer";
//import LogoSlider from "./components/Recruiters/LogoSlider/LogoSlider";
import LogoSliderFree from "./components/Freelance/LogoSliderFree/LogoSlider";
import LogoSliderAgc from "./components/Agencies/LogoSliderAgc/LogoSlider";
import Curriculum from "./components/Recruiters/Curriculum/Curriculum";
import CurriculumFree from "./components/Freelance/CurriculumFree/Curriculum";
import CurriculumAgc from "./components/Agencies/CurriculumAgc/Curriculum";
import Calculadora from "./components/Calculadora/Calculadora";
import GithubComponent from "./components/Recruiters/GithubApp/GithubComponent";
import PoquetClock from "./components/PoquetClock/PoquetClock";

//import Cta from './components/Cta/Cta';
//import ContactList from './components/Contact/ContactList';

const App = () => {
  return (
    <Routes>
      
      <Route
      //RECRUITERS
        path="/"
        element={
          <React.Fragment>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Curriculum />
            <GithubComponent />
            <Contact />
            <PoquetClock />
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
      //EMPRESAS Y PROFESIONALES
      path="/paginas_y_sitios_web_para_empresas_y_profesionales"
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
        <Route
        //AGENCIAS DE MARKETING
      path="/diseno_y_desarrollo_web_para_agencias_de_marketing"
      element={
        <React.Fragment>
          <NavbarAgc />
          <HomeAgc />
          <LogoSliderAgc />
          <AboutAgc />
          <ServicesAgc />
          <SkillsAgc />
          <PortfolioAgc />
          <CurriculumAgc />
          <ContactAgc />
          <FooterAgc />
        </React.Fragment>
      }
      />
    </Routes>
  );
};

export default App;
