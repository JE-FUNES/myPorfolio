import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import background from "../../../../assets/Image/reloj2.webp";
import backgroundNoche from "../../../../assets/Image/reloj2-noche.png";
import botonRojo from "../../../../assets/Image/boton-rojo.png";
import botonAzul from "../../../../assets/Image/boton-azul.png";
import { Lucide } from "../../../../utils/index.js";
import AnimatedCursor from "react-animated-cursor";

const PoquetClock = () => {
  const [isLit, setIsLit] = useState(false); // Estado para iluminación
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
      <section className="sm:py-0 lg:py-10 mb-12" id="Home">
        <div
          className="relative flex items-center justify-center h-screen w-full bg-no-repeat bg-center bg-contain"
          style={
            isLit
              ? { backgroundImage: `url(${backgroundNoche})` }
              : { backgroundImage: `url(${background})` }
          }
        >
          {/* Contenedor del título*/}

          <motion.div
            className="absolute sm:top-10 lg:top-0 sm:mt-10 lg:mt-14 sm:left-0 lg:left-28 sm:ml-2 lg:ml-28 bg-black/60 sm:p-1 lg:p-5 rounded-lg sm:w-full lg:w-[50%]"
            initial={{ opacity: 0, y: 100 }} // Empieza invisible y desplazado 50px hacia abajo
            whileInView={{ opacity: 1, y: 0 }} // Cuando entra en vista, aparece con opacidad 1 y sube a su posición normal
            viewport={{ once: false }} // La animación ocurre solo una vez
            transition={{ duration: 2, ease: "easeOut" }} // La animación dura 1s con una salida suave
          >
            <h2 className="font-semibold text-white text-[18px] md:text-4xl lg:text-5xl leading-[1] mb-6 md:mb-9 sm:ml-2 lg:ml-0">
              {language === "en"
                ? "Let's transform ideas into "
                : "Transformemos ideas en "}
            </h2>
            <h1 className="font-semibold text-white text-[25px] sm:text-lg md:text-4xl lg:text-5xl leading-[1] ml-2 uppercase -mt-4">
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
            className="absolute w-[50%] max-w-[480px] sm:mt-11 lg:mt-28 lg:ml-5 aspect-square rounded-full  shadow-lg transition-all duration-300"
            style={{
              boxShadow: isLit
                ? "0 0 120px 30px rgba(0, 255, 255, 0.8)" // Sombra intensa cuando se activa
                : "0 0 10px 10px rgba(0, 255, 255, 0.5)", // Sombra más tenue cuando está apagado
            }}
          >
            {/* Marco */}
            <div className="absolute w-full h-full rounded-full border-[5px] border-gray-300/50"></div>

            {/* Esfera */}
            <div className="absolute flex items-center justify-center w-full h-full">
              {/* Manecillas */}
              <div className="absolute bottom-1/2 left-1/2 sm:w-[10px] lg:w-[12px] h-[20%] bg-black transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md hora"></div>
              <div className="absolute bottom-1/2 left-1/2 sm:w-[10px] lg:w-[12px] h-[30%] bg-black transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md minuto"></div>
              <div className="absolute bottom-1/2 left-1/2 lg:w-[4px] h-[35%] bg-red-500 transform -translate-x-1/2 -translate-y-[10%] origin-bottom rounded-md segundo"></div>

              {/* Centro */}
              <div className="absolute sm:w-3 lg:w-5 sm:h-3 sm:ml-2 lg:ml-0 lg:h-5 bg-gray-200 rounded-full border border-gray-700"></div>
            </div>
            {/* Indicación botón */}
            <div className="absolute w-50 h-10 flex items-center text-xl font-bold px-2 rounded-lg bottom-0 sm:mb-0 lg:-mb-48 sm:left-0 lg:left-44 ">
              {/* Botón para iluminar */}
              <button
                className="relative sm:bottom-0 lg:bottom-56 sm:left-3 sm:ml-16 lg:ml-4 rounded-full sm:p-1 lg:px-2 lg:py-2 font-bold shadow-xl shadow-red-500 hover:shadow-white border-black hover:border-white border-2 transition-all duration-200 animate-bounce-slow bg-no-repeat bg-center bg-contain"
                style={
                  isLit
                    ? { backgroundImage: `url(${botonAzul})` }
                    : { backgroundImage: `url(${botonRojo})` }
                }
                onClick={() => setIsLit(!isLit)}
              >
                {isLit ? (
                  <Lucide
                    icon="Sun"
                    className="lg:w-10 lg:h-10 sm:w-4 sm:h-4 text-white hover:text-black"
                  />
                ) : (
                  <Lucide
                    icon="Moon"
                    className="lg:w-10 lg:h-10 sm:w-4 sm:h-4 text-white"
                  />
                )}
              </button>
              <h2 className="text-white animate-bounce sm:mt-28 lg:-mt-10 lg:mb-72 sm:-ml-20 lg:-ml-24 text-center ">
                {language === "en" ? "Press Button" : "Presiona el Botón"}
              </h2>
            </div>
          </div>
        </div>
        {/* Contenedor de los enlaces en la esquina superior derecha */}
        <div className="relative sm:-top-28 lg:-top-24 lg:-mt-24 sm:w-screen lg:w-[90%] flex justify-end sm:right-2 lg:right-20 lg:mr-10 space-x-2 z-10">
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
