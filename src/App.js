import React from "react";
import { Routes, Route } from "react-router-dom";
import Init from "../src/components/Recruiters/Home/Init"
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


//COMPANIES
import NavbarFree from "./components/Freelance/NavbarFree/Navbar";
import HomeFree from "./components/Freelance/HomeFree/Home";
import ProblemFree from "./components/Freelance/ProblemFree/Problem";
import SolutionsFree from "./components/Freelance/SolutionsFree/Services";
import PortfolioFree from "./components/Freelance/PortfolioFree/Portfolio";
import Testimonial from "./components/Freelance/Testimonial/Testimonial";
import Faq from "./components/Freelance/Faq/Faq";
import ContactFree from "./components/Freelance/ContactFree/Contact";

//COURSES AND RESOURCES
import HomeGph from "./components/CoursesAndResources/Home/HomeGph";
import NavbarGph from "./components/CoursesAndResources/NavbarGph/Navbar";
import ContactGph from "./components/CoursesAndResources/ContactGph/Contact";
import Graphic from "./components/CoursesAndResources/GraphicResources/Graphic";
import Ebooks from "./components/CoursesAndResources/Ebooks/Ebooks";
import Courses from "./components/CoursesAndResources/Courses/Courses";
import Tools from "./components/CoursesAndResources/Tools/Tools";
import Patterns from "./components/CoursesAndResources/Patterns/Patterns";
import Backgrounds from "./components/CoursesAndResources/Backgrounds/Backgrounds";
import Photos from "./components/CoursesAndResources/Photos/Photos";
import Combos from "./components/CoursesAndResources/Combos/Combos";
import FreeDownload from "./components/CoursesAndResources/FreeDownload/FreeDownload";

import Calculadora from "./components/Calculadora/Calculadora";


const App = () => {
  return (
    <Routes>
      <Route
      //General Init
        path="/"
        element={
            <Init />
        }
      />
      
      <Route
      //RECRUITERS
        path="/portfolio-frontend-developer"
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
      //CURSOS Y RECURSOS
      path="/cursos_y_recursos"
      element={
        <React.Fragment>
          <NavbarGph />
          <HomeGph />
          <Graphic />
          <Ebooks />
          <Courses />
          <Tools />
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
