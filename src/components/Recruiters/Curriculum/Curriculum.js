import React from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import videoCode from "../../../assets/videos/videoCode.mp4";

const Curriculum = () => {
  const language = useSelector((state) => state.language);


  return (
    <React.Fragment>
      {/*----- Start Curriculum -----*/}
      <section className="pt-0" id="Curriculum">
        <div className="relative w-screen h-screen overflow-hidden justify-center items-center">
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
        <div className="container sm:my-5 lg:my-20 py-10">
          <div className="lg:pb-16 sm:mt-5 lg:mt-0 md:pb-10 pb-8 text-center relative z-10">
            <h3 className="font-semibold text-black ">Currículum Vitae</h3>
          </div>
          <iframe
            title="CurriculumVitae"
            src={
              language === "en"
                ? "/CV_JULIA_FUNES-Frontend_Developer-english.pdf"
                : "/CV_JULIA_FUNES-Desarrollo_Frontend-spanish.pdf"
            }
            style={{ width: "100%", height: "65vh" }}
            frameBorder="0"
          />

          <div className="pt-5 mb-15 flex justify-end items-center">
            <a href="#Contact">
              <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer ">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ? "Go on" : "Sigamos"}
              </div>
            </a>
          </div>
        </div>
        </div>
      </section>
      {/*----- End Curriculum -----*/}
    </React.Fragment>
  );
};

export default Curriculum;
