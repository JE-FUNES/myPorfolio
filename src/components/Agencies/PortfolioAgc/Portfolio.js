import React, { useState } from "react";
import { PortfolioData, EspPortfolioData } from "./PortfolioData";
import Project from "../ProjectAgc/Project.js";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import projectBanner from "../../../assets/Image/project-banner-1.png";
import projectBanner2 from "../../../assets/Image/project-banner-2.png";

const Portfolio = () => {
  const language = useSelector((state) => state.language);

  const [selectedProject, setSelectedProject] = useState(null);

  const closeComponent = () => {
    setSelectedProject(null);
  };
  return (
    <React.Fragment>
      {/*----- Start Projects -----*/}
      <section
        className="sm:pt-24 lg:pt-28 pb-5 mt-10 mb-5 bg-purple-50"
        id="Portfolio"
      >
        <div className="container">
          <div className="grid lg:pb-16 md:pb-10 pb-8 mt-10">
            <div className="lg:col-span-6 text-center">
              <h3>
                {language === "en" ? "LATEST PROJECTS" : "ÚLTIMOS PROYECTOS"}
              </h3>
            </div>
          </div>
          <div>
            {language === "en"
              ? PortfolioData.map((project, index) => {
                  return (
                    <div
                      key={index}
                      className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16"
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
                        className={`flex flex-col justify-center lg:px-10 md:px-5 ${
                          index % 2 === 0 ? "" : "order-1"
                        }`}
                      >
                        <h6 className="mb-[18px] ">
                          <span className="inline-block sm:mt-5 lg:mt-0 px-5 py-2 uppercase tracking-wider text-xs rounded-[30px] bg-fuchsia-200 font-bold">
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
                            className="btn btn-theme2"
                          >
                            {project.btn}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : EspPortfolioData.map((project, index) => {
                  return (
                    <div
                      key={index}
                      className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16"
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
                          <span className="inline-block px-5 py-2 uppercase tracking-wider text-xs rounded-[30px] bg-fuchsia-200 font-bold">
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
                            className="btn btn-theme2"
                          >
                            {project.btn}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <div className="relative w-full h-auto sm:mt-0 lg:-mt-8">
  {/* Imagen */}
  <img
    src={language === "en" ? projectBanner2 : projectBanner}
    alt="bottomBanner"
    className="w-full h-auto"
  />

  {/* Contenedor de los enlaces en la esquina superior derecha */}
  <div className="absolute sm:-top-8 lg:top-3 right-3 flex space-x-2 z-10">
    <a href="#Curriculum">
      <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer px-4 py-2">
        <Lucide icon="ArrowDown" className="mr-2" />
        {language === "en" ? "Go on" : "Sigamos"}
      </div>
    </a>
    <a href="#Skills">
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
