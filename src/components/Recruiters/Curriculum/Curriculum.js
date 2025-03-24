import React from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";

const Curriculum = () => {
  const language = useSelector((state) => state.language);

  return (
    <React.Fragment>
      {/*----- Start Curriculum -----*/}
      <section className="pt-0" id="Curriculum">
        <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
          {/* Video de fondo */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/videoCode2.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-white/50"></div>

          {/* Contenedor principal */}
          <div className="container sm:my-5 lg:my-20 py-10 relative z-10">
            {/* Título */}
            <div className="lg:pb-16 sm:mt-5 lg:mt-0 md:pb-10 pb-8 text-center">
              <h3 className="font-semibold text-black">Currículum Vitae</h3>
            </div>

            {/* Contenedor del PDF */}
            <div className="relative w-full mx-auto">
              <iframe
                title="CurriculumVitae"
                src={
                  language === "en"
                    ? "/CV_JULIA_FUNES-Frontend_Developer-english.pdf"
                    : "/CV_JULIA_FUNES-Desarrollo_Frontend-spanish.pdf"
                }
                className="w-full h-[65vh]"
                frameBorder="0"
              />
              {/* Botones debajo alineados a la derecha */}
              <div className="flex justify-end space-x-2 mt-4">
                <a href="#Contact">
                  <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer px-4 py-2">
                    <Lucide icon="ArrowDown" />
                    {language === "en" ? "Go on" : "Sigamos"}
                  </div>
                </a>
                <a href="#Portfolio">
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
