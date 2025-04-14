import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import background from "../../../../assets/Image/reloj2.webp";
import backgroundNoche from "../../../../assets/Image/reloj2-noche2.webp";
import botonRojo from "../../../../assets/Image/boton-rojo.png";
import botonAzul from "../../../../assets/Image/boton-azul.png";
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
    // Precargar imagen
    const img = new Image();
    img.src = backgroundNoche;
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
        className="w-full min-h-screen lg:h-[720px] justify-center items-center mt-0 py-0 sm:-mb-5  bg-black"
        id="Home"
      >
        <div
          className="relative flex items-center justify-center lg:h-[857px] lg:w-full bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${isLit ? backgroundNoche : background})`,
          }}
        >
          {/* Contenedor del título*/}

          <motion.div
            className="absolute sm:top-10 lg:top-0 sm:mt-10 lg:mt-10 sm:left-0 lg:left-16 sm:ml-2 lg:ml-16 bg-black/80 sm:p-1 lg:p-5 rounded-lg sm:w-full lg:w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h2 className="font-semibold text-white text-[18px] md:text-4xl lg:text-4xl leading-[1] mb-6 md:mb-9 sm:ml-2 lg:ml-0">
              {language === "en"
                ? "Let's transform ideas into "
                : "Transformemos ideas en "}
            </h2>
            <h1 className="font-semibold text-white text-[25px] sm:text-lg md:text-4xl lg:text-4xl leading-[1] ml-2 uppercase -mt-4">
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
          {/* Contenedor del reloj */}
          <div
            className="absolute lg:mt-36 aspect-square w-[70vw] lg:max-w-[32vw] transition-all duration-300 rounded-full"
            style={{
              boxShadow: isLit
                ? isLargeScreen
                  ? "0 0 120px 30px rgba(0, 255, 255, 0.8)"
                  : "0 0 50px 12px rgba(0, 255, 255, 0.8)"
                : "0 0 10px 10px rgba(0, 255, 255, 0.5)",
            }}
          >
            {/* Marco */}
            <div className="absolute w-full h-full rounded-full lg:border-[5px] border-gray-300/50"></div>

            {/* Esfera */}
            <div className="absolute flex items-center justify-center w-full h-full lg:-mt-2 lg:ml-2">
              {/* Manecillas */}
              <div className="absolute bottom-1/2 left-1/2 sm:w-[6px] lg:w-[12px] h-[20%] bg-black transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md hora"></div>
              <div className="absolute bottom-1/2 left-1/2 sm:w-[6px] lg:w-[12px] h-[30%] bg-black transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md minuto"></div>
              <div className="absolute bottom-1/2 left-1/2 sm:w-[2px] lg:w-[4px] h-[35%] bg-red-500 transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md segundo"></div>

              {/* Centro */}
              <div className="absolute sm:w-3 lg:w-6 sm:h-3 lg:h-6 bg-cyan-100 rounded-full border border-cyan-400 ml-3"></div>
            </div>
            {/* botón */}
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <button
                className="relative items-center flex justify-center text-center w-14 h-14 sm:w-16 sm:h-16 bg-no-repeat bg-center bg-contain rounded-full border-2 border-black hover:border-white shadow-xl hover:shadow-white transition-all duration-200 animate-bounce"
                style={
                  isLit
                    ? { backgroundImage: `url(${botonAzul})` }
                    : { backgroundImage: `url(${botonRojo})` }
                }
                onClick={() => setIsLit(!isLit)}
              >
                {isLit ? (
                  <Lucide icon="Sun" className="w-6 h-6 text-white" />
                ) : (
                  <Lucide icon="Moon" className="w-6 h-6 text-white" />
                )}
              </button>
              <p className="mt-[10px] text-white text-center text-sm">
                {language === "en" ? "Press Button" : "Presiona el Botón"}
              </p>
            </div>
          </div>
        </div>
        {/* Contenedor de los enlaces en la esquina superior derecha */}
        {isLargeScreen && (
          <div className="relative sm:-top-20 sm:mt-0 lg:-top-8 lg:-mt-20 sm:w-screen lg:w-[90%] flex justify-end sm:right-2 lg:right-20 lg:mr-10 space-x-2 z-1">
            <a href="#Services">
              <div className="btn btn-red rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ? "Go on" : "Sigamos"}
              </div>
            </a>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};

export default PoquetClock;
