import React from "react";
import { Routes, Route } from "react-router-dom";
//RECRUITERS
import Navbar from "./components/Recruiters/Navbar/Navbar";
import Home from "./components/Recruiters/Home/Home";
import About from "./components/Recruiters/About/About";
import Skills from "./components/Recruiters/Skills/Skills";
import Portfolio from "./components/Recruiters/Portfolio/Portfolio";
import Contact from "./components/Recruiters/Contact/Contact";
import Footer from "./components/Recruiters/Footer/Footer";
import GithubComponent from "./components/Recruiters/GithubApp/GithubComponent";
import Curriculum from "./components/Recruiters/Curriculum/Curriculum";

//AGENCIES
import NavbarAgc from "./components/Agencies/NavbarAgc/Navbar";
import PoquetClock from "./components/Agencies/HomeAgc/PoquetClock/PoquetClock";
import AboutAgc from "./components/Agencies/AboutAgc/About";
import ServicesAgc from "./components/Agencies/ServicesAgc/Services";
import SkillsAgc from "./components/Agencies/SkillsAgc/Skills";
import PortfolioAgc from "./components/Agencies/PortfolioAgc/Portfolio";
import ContactAgc from "./components/Agencies/ContactAgc/Contact";
import FooterAgc from "./components/Agencies/FooterAgc/Footer";
import CurriculumAgc from "./components/Agencies/CurriculumAgc/Curriculum";


//FREELANCE
import NavbarFree from "./components/Freelance/NavbarFree/Navbar";
import HomeFree from "./components/Freelance/HomeFree/Home";
import AboutFree from "./components/Freelance/AboutFree/About";
import ServicesFree from "./components/Freelance/ServicesFree/Services";
import SkillsFree from "./components/Freelance/SkillsFree/Skills";
import PortfolioFree from "./components/Freelance/PortfolioFree/Portfolio";
import ContactFree from "./components/Freelance/ContactFree/Contact";
import FooterFree from "./components/Freelance/FooterFree/Footer";
import CurriculumFree from "./components/Freelance/CurriculumFree/Curriculum";

import Calculadora from "./components/Calculadora/Calculadora";

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
          <PoquetClock />
          <ServicesAgc />
          <PortfolioAgc />
          <AboutAgc />
          <CurriculumAgc />
          <ContactAgc />
          
          <NavbarAgc />
        </React.Fragment>
      }
      />
    </Routes>
  );
};

export default App;
