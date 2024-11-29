import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import LanguagesSwitcher from "../../Switchers/Languages";
import { Lucide } from "../../../utils/index.js";

const Init = () => {
  const language = useSelector((state) => state.language);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleFreelance = () => {
    navigate("/diseño_tu_pagina_web");
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      {isOpen && (
        <div className="fixed overflow-scroll inset-0 bg-purple-950/90 z-[99999]">
          <div className="flex items-center justify-center min-h-screen px-2">
            <div className="sm:w-full lg:w-[90%] m-auto p-5 relative">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Begin First Column */}
                <div className="w-full md:w-1/2 flex items-stretch">
                  <div className="w-full flex items-center px-3 lg:px-20 bg-black">
                    <div className="text-start mb-1 z-50">
                      <h6 className="mt-5 text-white font-bold text-2xl">
                        {language === "en"
                          ? "👋 Hi!, My name is "
                          : "👋 Hola!, Mi nombre es "}
                        <span className="text-purple-500 font-bold text-2xl">
                          Julia
                        </span>
                      </h6>
                      <div className="flex item-center mt-2">
                        <h2 className="font-semibold text-white text-[25px] md:text-5xl lg:text-6xl leading-[1] mb-6 md:mb-9 sm:ml-5 lg:ml-0">
                          {language === "en" ? "I'm a " : "Soy "}
                        </h2>
                        <h1 className="font-semibold text-white text-[25px] md:text-5xl lg:text-6xl leading-[1] mb-6 md:mb-9 ml-2">
                          {language === "en" ? (
                            <TypeAnimation
                              className="text-fuchsia-500"
                              sequence={[" Developer", 3000, " Designer", 3000]}
                              speed={5}
                              repeat={Infinity}
                            />
                          ) : (
                            <TypeAnimation
                              className="text-fuchsia-500"
                              sequence={[
                                " Programadora",
                                3000,
                                " Diseñadora",
                                3000,
                              ]}
                              speed={5}
                              repeat={Infinity}
                            />
                          )}
                        </h1>
                      </div>

                      <p className="text-base text-slate-100 md:text-lg lg:text-xl mb-2 md:mb-4">
                        {language === "en"
                          ? "...from Córdoba, Argentina, to the "
                          : "desde Córdoba, Argentina, para el "}
                        <span className="font-semibold md:text-xl ">
                          {language === "en" ? "whole" : "mundo "}
                        </span>
                        <span title="WORLD">🌎</span>
                        <span className="font-bold md:text-xll "> !</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/*End First Column */}

                {/*Begin Second Column */}
                <div className="w-full md:w-1/2 flex items-center justify-center min-h-full bg-purple-50">
                  <div className="w-full p-5 pb-10 ">
                    <div className="flex justify-end">
                      <LanguagesSwitcher />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex-col-2 mt-10">
                        <div className="flex flex-nowrap items-center">
                          <Lucide
                            icon="ChevronsRight"
                            className="text-purple-500 w-6 h-6 font-bold mr-1"
                          />
                          <h2 className="font-semibold text-black text-[20px] md:text-xl lg:text-2xl leading-[1] mb-1 ">
                            {language === "en"
                              ? "Are you looking for the next Frontend developer for your team?"
                              : "¿Estás buscando un Desarrollador Frontend para tu equipo?"}
                          </h2>
                        </div>
                        <div className="flex justify-center mt-2">
                          <button
                            className="inline-block py-1 px-5 uppercase tracking-wider text-sm rounded-[30px] bg-purple-400 hover:bg-black hover:animate-pulse shadow-lg shadow-purple-900 font-bold text-white"
                            onClick={handleClose}
                          >
                            {language === "en"
                              ? "I´m Open to Work"
                              : "estoy disponible"}
                          </button>
                        </div>
                      <div className="flex-col-1 mt-10">
                        <div className="flex flex-nowrap items-center">
                          <Lucide
                            icon="ChevronsRight"
                            className="text-red-500 w-6 h-6 font-bold mr-1"
                          />
                          <h2 className="font-semibold text-black text-[20px] md:text-xl lg:text-2xl leading-[1] mb-1 ">
                            {language === "en"
                              ? "Do you need help creating, or taking your website to the next level?"
                              : "¿Necesitas crear, o llevar tu página web a un próximo nivel?"}
                          </h2>
                        </div>
                        <div className="flex justify-center mt-2">
                          <button
                            className="inline-block  animate-pulse py-3 px-5 uppercase tracking-wider text-md rounded-[30px] bg-red-500 hover:bg-black hover:text-red-500 shadow-lg shadow-black font-bold"
                            onClick={handleFreelance}
                          >
                            {language === "en" ? "click here" : "clic aquí"}
                          </button>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Init;
