import React, { useState, useEffect } from "react";
import Clock from "../../Clock/Clock.jsx";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import Init from "./Init.js";
import AnimatedCursor from "react-animated-cursor";
import { motion } from "motion/react";

const Home = () => {
  const language = useSelector((state) => state.language);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div id="Wellcome">
        <Init />
      </div>

      <React.Fragment>
        {/*----- Start Home -----*/}
        {isLargeScreen && (
          <AnimatedCursor
            innerSize={20}
            outerSize={15}
            color="255, 33, 242"
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        )}
        <section
          className="py-20 lg:pt-0 sm:pb-[10px] bg-black relative overflow-hidden xl:min-h-screen"
          id="Home"
        >
          <div className="container relative z-[1]">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 items-center mt-5">
              {/* LEFT */}
              <div className="lg:col-span-6 z-50">
                <div className="text-center lg:text-start mb-14 lg:mb-0 z-50 xl:ml-10 ">
                  {isLargeScreen &&
                  <div className="flex item-center  justify-center mt-10 mb-5">
                    <h1 className="font-semibold text-purple-500/30 animate-[ping_5s_linear_infinite] sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl leading-[1] mb-0 md:mb-9 ml-5 lg:ml-28 sm:-mt-10 md:-mt-20 lg:-mt-20">
                      {language === "en"
                        ? "FRONTEND DEVELOPER & WEB DESIGNER"
                        : "DESARROLLO FRONTEND & DISEÑO WEB"}
                    </h1>
                  </div>
                      }

<motion.div
  className="sm:-mt-3 md:mt-0"
  initial={{ opacity: 0, y: 100 }} // Empieza invisible y desplazado 50px hacia abajo
  whileInView={{ opacity: 1, y: 0 }} // Cuando entra en vista, aparece con opacidad 1 y sube a su posición normal
  viewport={{ once: false }} // La animación ocurre solo una vez
  transition={{ duration: 2, ease: "easeOut" }} // La animación dura 1s con una salida suave
>

                  <div className="flex items-start justify-start md:mt-2 ml-0">
                    <Lucide
                      icon="Pencil"
                      className="mr-2 text-white/80 w-10 h-10"
                      />
                    <h2 className="font-semibold text-white/80 text-[27px] sm:text-lg md:text-xl lg:text-2xl leading-[1] mb-4 md:ml-5">
                      {language === "en"
                        ? "I create visually striking and technically optimized digital experiences."
                        : "Creo experiencias digitales visualmente impactantes y técnicamente optimizadas. "}
                    </h2>
                  </div>
                  <div className="flex item-center md:mt-2 ml-0">
                    <Lucide
                      icon="Search"
                      className="mr-2 text-purple-100/60 w-8 h-8"
                      />
                    <h2 className="italic text-white/80 text-[27px] sm:text-lg md:text-xl lg:text-2xl leading-[1] mb-4 md:ml-5">
                      {language === "en"
                        ? "If you're looking for someone who blends creativity and code, I’m the right person for the job."
                        : "Si buscas a alguien que combine creatividad y código, soy la persona indicada. "}
                    </h2>
                  </div>
                        </motion.div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="lg:col-span-6 mt-1 sm:pt-4 lg:pt-8 xl:pt-24 mb-0 pb-10">
                <div className="text-center mt-0">
                  <Clock />
                </div>
              </div>
            </div>
          </div>
                {/* Contenedor de los enlaces en la esquina inferior derecha */}
              {isLargeScreen && 
                <div className="absolute  sm:bottom-20 lg:bottom-6  sm:w-screen lg:w-[90%] flex justify-end sm:right-2 lg:right-20 lg:mr-10 space-x-2 z-1">
                  <a href="#About">
                    <div className="btn btn-yellow font-bold rounded-full flex justify-center items-center animate-pulse cursor-pointer mb-0">
                      <Lucide icon="ArrowDown" className="mr-2" />
                      {language === "en" ? "Go on" : "Sigamos"}
                    </div>
                  </a>
                </div>
              }
        </section>
        {/*----- End Home -----*/}
      </React.Fragment>
    </>
  );
};

export default Home;
