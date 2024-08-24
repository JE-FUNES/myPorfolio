import React, { useState } from "react";
//import home_banner from '../../assets/Image/home-banner.png'
import { TypeAnimation } from "react-type-animation";
import Clock from "../Clock/Clock";
import { Lucide } from "../../utils/index.js";
import { useSelector } from "react-redux";

const Home = () => {
  const language = useSelector((state) => state.language);

  return (
    <React.Fragment>
      {/*----- Start Home -----*/}
      <section
        className="py-30 lg:pt-[30px] lg:pb-[10px] bg-black relative overflow-hidden"
        id="Home"
      >
        <div className="container relative z-[1]">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center mt-10">
            {/* LEFT */}
            <div className="lg:col-span-6 z-50">
              <div className="text-center lg:text-start mb-14 lg:mb-0 z-50 xl:ml-20 ">
                <h6 className="mt-12 text-white font-bold text-xl">
                  {language === "en"
                    ? "👋 Hi!, My name is "
                    : "👋 Hola!, Mi nombre es "}
                  <span className="text-purple-500 font-bold text-xl">
                    Julia
                  </span>
                </h6>
                <div className="flex item-center mt-2">
                  <h2 className="font-semibold text-white text-[40px] md:text-7xl leading-[1] mb-6 md:mb-9 sm:ml-5">
                    {language === "en" ? "I'm a " : "Soy "}
                  </h2>
                  <h1 className="font-semibold text-white text-[40px] md:text-7xl leading-[1] mb-6 md:mb-9 ml-2">
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
                        sequence={[" Programadora", 3000, " Diseñadora", 3000]}
                        speed={5}
                        repeat={Infinity}
                      />
                    )}
                  </h1>
                </div>

                <p className="text-base text-slate-100 md:text-xl mb-2 md:mb-4">
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
            {/* RIGHT */}
            <div className="lg:col-span-6 mt-1 lg:pt-16 mb-0 pb-10">
              <div className="text-center">
                <Clock />
              </div>
              <div className="flex justify-end items-center sm:mt-10 pt-3 sm:mr-5 sm:border-t-2 xl:border-t-0 sm:border-purple-500">
                <a href="#About">
                  <div className="btn btn-yellow font-bold rounded-full flex justify-center items-center animate-pulse cursor-pointer sm:mt-3 md:mt-5">
                    <Lucide icon="ArrowDown" className="mr-2" />
                    {language === "en" ? "Let's Start" : "Comencemos"}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- End Home -----*/}
    </React.Fragment>
  );
};

export default Home;
