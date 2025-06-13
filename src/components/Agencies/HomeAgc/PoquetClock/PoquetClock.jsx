import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import esHora from "../../../../assets/Image/esHora.png";
import isTime from "../../../../assets/Image/isTime.png";

import { Lucide } from "../../../../utils/index.js";
import AnimatedCursor from "react-animated-cursor";

const PoquetClock = () => {
  const [isLit, setIsLit] = useState(true); // Estado para iluminación
  const language = useSelector((state) => state.language);

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const actualizarReloj = () => {
      const ahora = new Date();
      const horas = ahora.getHours() % 12;
      const minutos = ahora.getMinutes();
      const segundos = ahora.getSeconds();

      const gradoHora = horas * 30 + minutos / 2;
      const gradoMinuto = minutos * 6;
      const gradoSegundo = segundos * 6;

      document.querySelector(
        ".hora"
      ).style.transform = `rotate(${gradoHora}deg)`;
      document.querySelector(
        ".minuto"
      ).style.transform = `rotate(${gradoMinuto}deg)`;
      document.querySelector(
        ".segundo"
      ).style.transform = `rotate(${gradoSegundo}deg)`;
    };

    actualizarReloj();
    const intervalo = setInterval(actualizarReloj, 1000);

    return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <React.Fragment>
      {/*----- Start Home -----*/}
      {isLargeScreen && (
        <AnimatedCursor
          innerSize={20}
          outerSize={15}
          color="255, 0, 0"
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
        className="w-full h-screen  justify-center items-center mt-0 pb-10 py-0 sm:-mb-5  bg-black"
        id="Home"
      >
        {/* Contenedor del reloj CENTRADO en pantalla */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square sm:w-[40vw] md:w-[30vw] lg:w-[20vw] transition-all duration-300 rounded-full glow-loop z-10">
          {/* Marco */}
          <div className="absolute w-full h-full rounded-full lg:border-[5px] border-gray-300/50"></div>

          {/* Esfera */}
          <div className="absolute flex items-center justify-center w-full h-full">
            {/* Manecillas */}
            <div className="absolute bottom-1/2 left-1/2 sm:w-[6px] lg:w-[10px] h-[24%] lg:-ml-2 bg-white/80 transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md hora"></div>
            <div className="absolute bottom-1/2 left-1/2 sm:w-[6px] lg:w-[10px] h-[34%] lg:-ml-2 bg-white/80 transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md minuto"></div>
            <div className="absolute bottom-1/2 left-1/2 sm:w-[2px] lg:w-[4px] h-[39%] lg:-ml-2 bg-red-500 transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md segundo"></div>

            {/* Centro */}
            <div className="absolute sm:w-3 lg:w-6 sm:h-3 lg:h-6 bg-cyan-100 rounded-full border border-cyan-400 sm:ml-3 lg:-ml-3"></div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center text-center px-4">
          <motion.div
            className="relative mt-48 sm:p-1 lg:p-5 max-w-[90%] lg:max-w-[70%]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img
              src={language === "en" ? isTime : esHora}
              className="w-1/3 ml-36"
            />
            <h2 className="font-semibold text-white text-[18px] md:text-4xl lg:text-4xl leading-[1] mb-6 md:mb-9">
              {language === "en"
                ? "to transform ideas into "
                : "de transformar ideas en "}
            </h2>
            <h1 className="font-semibold text-white text-[25px] sm:text-lg md:text-4xl lg:text-4xl leading-[1] uppercase -mt-4">
              <TypeAnimation
                key={language}
                className="text-red-500"
                sequence={
                  language === "en"
                    ? [
                        " limitless digital experiences",
                        3000,
                        " functional and attractive sites",
                        3000,
                      ]
                    : [
                        " experiencias digitales sin límites",
                        3000,
                        " sitios funcionales y atractivos",
                        3000,
                      ]
                }
                speed={90}
                repeat={Infinity}
              />
            </h1>
          </motion.div>
        </div>

        {/* Contenedor de los enlaces en la esquina inferior derecha */}

        <div className="absolute  sm:bottom-20 md:bottom-16 lg:bottom-24 sm:w-screen lg:w-[90%] flex justify-end sm:right-2 lg:right-20 lg:mr-10 space-x-2 z-1">
          <a href="#Services">
            <div className="btn btn-red rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
              <Lucide icon="ArrowDown" className="mr-2" />
              {language === "en" ? "Go on" : "Sigamos"}
            </div>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PoquetClock;
