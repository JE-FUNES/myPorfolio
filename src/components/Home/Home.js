import React from "react";
import Clock from "../Clock/Clock";
import { Lucide } from "../../utils/index.js";
import { useSelector } from "react-redux";
import Init from "./Init.js";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
  const language = useSelector((state) => state.language);


  return (
    <>
    <Init />
    <React.Fragment>
      {/*----- Start Home -----*/}
      <AnimatedCursor
      innerSize={20}
      outerSize={15}
      color='255, 33, 242'
      outerAlpha={0.8}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
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
                    ? "👋 Hi again!"
                    : "👋 ¡Hola nuevamente!"}
                  
                </h6>
                <div className="flex item-center mt-2">
                  <h2 className="font-semibold text-white text-[40px] md:text-4xl lg:text-5xl leading-[1] mb-6 md:mb-9 ml-5">
                    {language === "en" ? "I'm a Senior Graphic Designer, and a Junior Forintend Developer." : "Soy Diseñadora Gráfica Senior, y Desarrolladora Frontend Junior. "}
                  </h2>
                  
                </div>

                <p className="text-base text-slate-100 md:text-xl mb-2 md:mb-4 ml-5 italic">
                  {language === "en"
                    ? "I am seeking a Frontend Developer position where my skills and experience can be applied, appreciated, and valued."
                    : "Estoy en busca de una oportunidad laboral como Desarrolladora Frontend, donde pueda aplicar mis conocimientos y habilidades, y donde estas sean apreciadas y valoradas.  "}
                  
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
                    {language === "en" ? "Go on" : "Sigamos"}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- End Home -----*/}
    </React.Fragment>
                    </>
  );
};

export default Home;
