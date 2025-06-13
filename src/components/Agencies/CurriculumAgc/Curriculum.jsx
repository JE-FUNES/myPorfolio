import React from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";

const Curriculum = () => {
  const language = useSelector((state) => state.language);

  return (
    <React.Fragment>
      {/*----- Start Curriculum -----*/}
      <section className="pt-0 bg-slate-500 bg-bg-cv bg-no-repeat bg-cover bg-bottom bg-blend-multiply" id="Curriculum">
        <div className="relative w-screen h-screen top-0 overflow-hidden flex flex-col justify-center items-center">
         

          {/* Contenedor principal */}
          <div className="container sm:my-0 lg:my-20 pt-0 pb-10 relative z-10">
            {/* Título */}
            <div className="lg:pb-16 sm:mt-0 lg:-mt-2 md:pb-10 pb-8 text-center">
              <h3 className="font-semibold text-white animate-fadeIn">Currículum Vitae</h3>
            </div>

            {/* Contenedor del PDF */}
            <div className="relative w-full mx-auto sm:pl-5 lg:pl-0">
              <iframe
                title="CurriculumVitae"
                src={
                  language === "en"
                    ? "/CV_JULIA_FUNES_FrontendDeveloper-EN-2025.pdf"
                    : "/CV_JULIA_FUNES-Desarrollo_Frontend-spanish-2025.pdf"
                }
                className="sm:w-auto lg:w-full sm:h-[55vh] lg:h-[65vh]"
                frameBorder="0"
              />
              {/* Botones debajo alineados a la derecha */}
              <div className="relative  bottom-0 sm:py-6 md:py-10 lg:py-16 sm:w-screen lg:w-[99%] flex justify-end sm:right-2 lg:right-20 lg:mr-10 space-x-2 z-1">
                <a href="#Contact">
                  <div className="btn btn-red rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
                    
                    <Lucide icon="ArrowDown" />
                    {language === "en" ? "Go on" : "Sigamos"}
                  </div>
                </a>
                <a href="#About">
                  <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                    <Lucide icon="ArrowUp" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- End Curriculum -----*/}
    </React.Fragment>
  );
};

export default Curriculum;
