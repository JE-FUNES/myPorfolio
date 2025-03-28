import React, { useState, useEffect } from "react";
import { PortfolioData, EspPortfolioData } from "./PortfolioData";
import Project from "../ProjectAgc/Project.jsx";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import projectBanner from "../../../assets/Image/project-banner-1.png";
import projectBanner2 from "../../../assets/Image/project-banner-2.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const language = useSelector((state) => state.language);
  const [isDesktop, setIsDesktop] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const closeComponent = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
      const checkScreenSize = () => {
        setIsDesktop(window.innerWidth >= 1024); // Consider desktop if width >= 1024px
      };
  
      checkScreenSize(); // Check on initial render
      window.addEventListener("resize", checkScreenSize); // Listen for resize events
  
      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }, []);

  return (
    <React.Fragment>
      {/*----- Start Projects -----*/}
      <section
        className="sm:pt-2 lg:pt-8 pb-5 mt-10 mb-5 bg-slate-500 bg-bg-projects bg-repeat-y bg-contain bg-blend-multiply"
        id="Portfolio"
      >
        <div className="flex justify-center items-center mt-10">
          <motion.div
            id="segundo4"
            className="flex flex-col items-center justify-center bg-black/70 sm:p-5 lg:p-8 text-white rounded-xl shadow-lg shadow-black"
            initial={{ opacity: 1, y: 400 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 5, ease: "easeOut" }}
          >
            <div>

            <h2 className="text-3xl">
              {language === "en" ? "Your " : "Tu "}
              <span className="font-semibold text-4xl">
                {language === "en" ? "Agency " : "Agencia "}
              </span>
              <span className="font-semibold text-5xl text-white/50">+</span>
              <span className="text-3xl">
                {language === "en" ? " My " : " Mi "}
              </span>
              <span className="font-semibold text-5xl animate-pulse">
                {language === "en" ? "Creativity " : "Creatividad "}
              </span>
              <span className="font-semibold text-5xl text-white/50">=</span>
                </h2>
            </div>
            <div className="mt-4">

              <span className="font-semibold text-5xl italic text-red-500">
                {language === "en"
                  ? " Amazing and Strategic Websites"
                  : " Webs Sorprendentes y Estratégicas"}
              </span>
                  </div>
          </motion.div>
        </div>
        <div className="container">
          <div className="grid lg:pb-16 md:pb-10 pb-8 mt-20">
            <motion.div 
            className="lg:col-span-6 text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 4, duration: 1, ease: "easeOut" }}
            >
              <h3 className="text-64xl text-white">
                {language === "en"
                  ? "MY LATEST PROJECTS"
                  : "MIS ÚLTIMOS PROYECTOS"}
              </h3>
            </motion.div>
          </div>
          <div>
            {language === "en"
              ? PortfolioData.map((project, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16 bg-slate-100 shadow-lg shadow-black"
                      initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: isDesktop ? project.delay : project.delayM, duration: 1, ease: "easeOut" }}
                    >
                      <div
                        className={`lg:px-10 md:px-5 ${
                          index % 2 === 0 ? "" : "lg:order-2"
                        }`}
                      >
                        <div
                          className="border-2 border-slate-900 hover:shadow-shadowFuchsia transition-all duration-300 ease-in sm:mb-5 lg:mb-0"
                          key={project.key}
                        >
                          <img
                            src={project.img}
                            alt=""
                            className="bg-no-repeat bg-cover"
                          />
                        </div>
                      </div>
                     
                      <div
                        className={`flex flex-col justify-center lg:px-10 md:px-5  ${
                          index % 2 === 0 ? "" : "order-1"
                        }`}
                        
                      >
                        <h6 className="mb-[18px] ">
                          <span className="inline-block sm:mt-5 lg:mt-0 px-5 py-2 uppercase tracking-wider text-xs rounded-[30px] bg-red-200 font-bold">
                            {project.list}
                          </span>
                        </h6>
                        <h4 className="mb-4 text-2xl font-semibold md:mb-6 md:text-[32px]">
                          {project.Heding}
                        </h4>
                        <p className="mb-6 text-slate-700/90">
                          {project.Detail}
                        </p>
                        <div>
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="btn btn-theme2r"
                          >
                            {project.btn}
                          </button>
                        </div>
                      </div>
                      {/* */}
                    </motion.div>
                  );
                })
              : EspPortfolioData.map((project, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16 bg-slate-100 py-5 shadow-lg shadow-black"
                      initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: isDesktop ? project.delay : project.delayM, duration: 1, ease: "easeOut" }}
                    >
                      <div
                        className={`lg:px-10 md:px-5 ${
                          index % 2 === 0 ? "" : "lg:order-2"
                        }`}
                      >
                        <div
                          className="border-2 border-slate-900 hover:shadow-shadowFuchsia transition-all duration-300 ease-in"
                          key={project.key}
                        >
                          <img
                            src={project.img}
                            alt=""
                            className="bg-no-repeat bg-cover"
                          />
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center lg:px-10 md:px-5 ${
                          index % 2 === 0 ? "" : "order-1"
                        }`}
                      >
                        <h6 className="mb-[18px]">
                          <span className="inline-block px-5 py-2 uppercase tracking-wider text-xs rounded-[30px] bg-red-200 font-bold">
                            {project.list}
                          </span>
                        </h6>
                        <h4 className="mb-4 text-2xl font-semibold md:mb-6 md:text-[32px]">
                          {project.Heding}
                        </h4>
                        <p className="mb-6 text-slate-700/90">
                          {project.Detail}
                        </p>
                        <div>
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="btn btn-theme2r"
                          >
                            {project.btn}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
          </div>
          <div className="relative w-full h-auto sm:mt-0 lg:my-8 lg:pb-8">
           

            {/* Contenedor de los enlaces en la esquina superior derecha */}
            <div className="absolute sm:-top-8 lg:top-3 right-3 flex space-x-2 z-10">
              <a href="#About">
                <div className="btn btn-red rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
                  <Lucide icon="ArrowDown" className="mr-2" />
                  {language === "en" ? "Go on" : "Sigamos"}
                </div>
              </a>
              <a href="#Services">
                <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                  <Lucide icon="ArrowUp" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*----- End Projects -----*/}
      {selectedProject && (
        <Project project={selectedProject} onClose={closeComponent} />
      )}
    </React.Fragment>
  );
};

export default Portfolio;
