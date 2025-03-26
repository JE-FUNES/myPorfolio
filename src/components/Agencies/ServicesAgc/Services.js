import React, { useState, useEffect } from "react";
import { ServicesData, EspServicesData } from "./ServicesData";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import TypingEffect from "react-typing-effect";

const Services = () => {
  const language = useSelector((state) => state.language);
  const text = language === "en" ? "D E V E L O P E R " : "DESARROLLADOR ";

  return (
    <React.Fragment>
      {/*----- Start Services -----*/}
      <section
        className="sm:py-10 lg:py-20 bg-bg-mkn bg-center bg-no-repeat bg-contain  bg-slate-700/80"
        id="Services"
      >
        <div className="container">
          <div className="grid lg:pb-20 lg:pt-5 md:pb-10 pb-8">
            <motion.div
              className="lg:grid lg:grid-cols-10 lg:gap-1 lg:col-span-10 flex flex-nowrap items-center justify-center p-3 bg-black/50"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }} // Cuando entra en vista, aparece con opacidad 1 y sube a su posición normal
              viewport={{ once: false }} // La animación ocurre solo una vez
              transition={{ duration: 3, ease: "easeOut" }} // La animación dura 1s con una salida suave
            >
              {/* Columna izquierda*/}
              <div className="lg:col-span-1 flex flex-col justify-end items-end">
                <Lucide
                  icon="UserX"
                  className="lg:w-12 lg:h-12 border-2 lg:p-1 border-white rounded-full mx-2 text-white animate-spin360"
                />
              </div>
              {/* Columna central*/}
              <div className="lg:col-span-4 flex flex-col justify-end items-end mr-5">
                <h3 className="text-red-500 text-6xl">
                  {language === "en" ? "T" : "C"}
                  <span className="text-red-500 text-4xl">
                    {language === "en" ? "ired " : "ansado "}
                  </span>
                  <span className="text-white text-2xl underline mr-2">
                    {language === "en" ? "of" : "de"}
                  </span>
                  <span className="text-red-500 text-6xl ">C</span>
                  <span className="text-red-500 text-4xl">
                    {language === "en" ? "hanging " : "ambiar de "}
                  </span>
                </h3>
              </div>
              {/* Columna derecha - Texto estático */}
              <div className="lg:col-span-3 flex flex-col justify-start items-start mt-4">
                <TypingEffect
                  text={text} // El texto a escribir
                  speed={200} // Velocidad del efecto de escritura
                  eraseDelay={5000} // Tiempo de espera para borrar el texto (si deseas efecto de borrado)
                  typingDelay={300} // Tiempo de espera antes de comenzar a escribir
                  className="text-white text-5xl"
                />
              </div>
              {/* Columna derecha - Texto estático */}
              <div className="lg:col-span-2 flex flex-col justify-start items-start mt-4">
                <h3 className="text-white text-2xl">
                  {language === "en" ? "for every " : "en cada "}

                  <span className="text-white text-2xl underline">
                    {language === "en" ? "project" : "proyecto"}
                  </span>
                  <span className="text-red-500 text-3xl">
                    {language === "en" ? "?" : "?"}
                  </span>
                </h3>
              </div>
            </motion.div>
            <div className="w-full mt-4 pl-10 flex flex-col items-start justify-start text-white">
              <div className="flex items-start mt-6 mb-3">
                <Lucide
                  icon="Target"
                  className="w-4 h-4 mr-2 mt-1 text-red-500"
                />
                <h2 className="text-white text-xl">
                  {language === "en" ? "Let's build a " : "Construyamos una "}
                  <span className="font-semibold">
                    {language === "en"
                      ? "trustworthy partnership."
                      : "alianza confiable."}
                  </span>
                  <span>
                    {language === "en"
                      ? " Solid development in "
                      : " Desarrollo sólido en "}
                  </span>
                  <span className="font-semibold">
                    {language === "en"
                      ? "WordPress, Wix and JavaScript"
                      : "WordPress, Wix y JavaScript"}
                  </span>
                  <span>{language === "en" ? ", boundless " : ", "}</span>
                  <span className="font-semibold">
                    {language === "en" ? "creativity" : "creatividad"}
                  </span>
                  <span>
                    {language === "en"
                      ? ", and a commitment to "
                      : " sin límites y "}
                  </span>
                  <span className="font-semibold">
                    {language === "en"
                      ? "on-time delivery."
                      : "compromiso con los tiempos de entrega."}
                  </span>
                </h2>
              </div>
              <div className="flex items-start">
                <Lucide
                  icon="Target"
                  className="w-4 h-4 mr-2 mt-1 text-red-500"
                />
                <h2 className="text-white text-xl font-semibold bg-red-500/50">
                  {language === "en"
                    ? "Let code be a solution, not an obstacle."
                    : "Que el código sea una solución, no un obstáculo."}
                </h2>
              </div>
              <div className="w-full mt-10 flex flex-col items-center justify-center">
                <div className="flex items-start mt-12 mb-3">
                  <h1 className="text-white text-5xl font-semibold">
                    {language === "en"
                      ? "I OFFER YOU MY SERVICES"
                      : "TE OFREZCO MIS SERVICIOS"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center -mt-5">
            {language === "en"
              ? ServicesData.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className="lg:col-span-6 hover:shadow-black transition-all duration-300 ease-in"
                    >
                      <div
                        className={`flex border-2 border-slate-900 p-5 ${e.Bg_color} animate-fadeIn`}
                      >
                        <div
                          className="flex justify-center items-center h-[70px] w-[70px] border-2 text-[32px]  border-slate-900"
                          key={e.key}
                        >
                          {e.Logo}
                        </div>
                        <div className="flex-1 pl-5">
                          <h5 className="mb-3 font-semibold lg:text-2xl md:text-xl text-lg ">
                            {e.Heding}
                          </h5>
                          <p className="text-black  text-lg">{e.Detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : EspServicesData.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className="lg:col-span-6 hover:shadow-black transition-all duration-300 ease-in"
                    >
                      <div
                        className={`flex border-2 border-slate-900 p-5 ${e.Bg_color} animate-fadeIn`}
                      >
                        <div
                          className="flex justify-center items-center h-[70px] w-[70px] border-2 text-[32px] border-slate-900"
                          key={e.key}
                        >
                          {e.Logo}
                        </div>
                        <div className="flex-1 pl-5">
                          <h5 className="mb-3 font-semibold lg:text-2xl md:text-xl text-lg ">
                            {e.Heding}
                          </h5>
                          <p className="text-black text-lg">{e.Detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          {/* Contenedor de los enlaces en la esquina superior derecha */}
          <div className="sm:-top-8 lg:top-6 lg:mt-10 flex justify-end space-x-2 z-10">
            <a href="#Portfolio">
              <div className="btn btn-red rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer px-4 py-2">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ? "Go on" : "Sigamos"}
              </div>
            </a>
            <a href="#Home">
              <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                <Lucide icon="ArrowUp" />
              </div>
            </a>
          </div>
        </div>
      </section>
      {/*----- End Services -----*/}
    </React.Fragment>
  );
};

export default Services;
