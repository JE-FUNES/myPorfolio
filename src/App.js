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
import PortfolioAgc from "./components/Agencies/PortfolioAgc/Portfolio";
import ContactAgc from "./components/Agencies/ContactAgc/Contact";
import CurriculumAgc from "./components/Agencies/CurriculumAgc/Curriculum";


//FREELANCE
import NavbarFree from "./components/Freelance/NavbarFree/Navbar";
import HomeFree from "./components/Freelance/HomeFree/Home";
import ProblemFree from "./components/Freelance/ProblemFree/Problem";
import SolutionsFree from "./components/Freelance/SolutionsFree/Services";
import PortfolioFree from "./components/Freelance/PortfolioFree/Portfolio";
import Testimonial from "./components/Freelance/Testimonial/Testimonial";
import Faq from "./components/Freelance/Faq/Faq";
import ContactFree from "./components/Freelance/ContactFree/Contact";

//GRAPHIC PORTFOLIO
import HomeGph from "./components/GraphicPortfolio/Home/HomeGph";
import NavbarGph from "./components/GraphicPortfolio/NavbarGph/Navbar";
import ContactGph from "./components/GraphicPortfolio/ContactGph/Contact";
import Illustrations from "./components/GraphicPortfolio/Illustrations/Illustrations";
import Vectors from "./components/GraphicPortfolio/Vectors/Vectors";
import Patterns from "./components/GraphicPortfolio/Patterns/Patterns";
import Backgrounds from "./components/GraphicPortfolio/Backgrounds/Backgrounds";
import Photos from "./components/GraphicPortfolio/Photos/Photos";
import Combos from "./components/GraphicPortfolio/Combos/Combos";
import FreeDownload from "./components/GraphicPortfolio/FreeDownload/FreeDownload";

import Calculadora from "./components/Calculadora/Calculadora";


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
          <HomeFree />
          <ProblemFree />
          <SolutionsFree />
          <PortfolioFree />
          <Testimonial />
          <Faq />
          <ContactFree />
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
      <Route
      //PORTFOLIO GRAFICO
      path="/portfolio_grafico"
      element={
        <React.Fragment>
          <NavbarGph />
          <HomeGph />
          <Illustrations />
          <Vectors />
          <Patterns />
          <Backgrounds />
          <Photos />
          <Combos />
          <FreeDownload />
          <ContactGph />
        </React.Fragment>
      }
      />
    </Routes>
  );
};

export default App;
