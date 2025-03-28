import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import background from "../../assets/Image/reloj2.webp";
import backgroundNoche from "../../assets/Image/reloj2-noche.png";
import botonRojo from "../../assets/Image/boton-rojo.png";
import botonAzul from "../../assets/Image/boton-azul.png";
import { Lucide } from "../../utils/index.js";

const PoquetClock = () => {
  const [isLit, setIsLit] = useState(false); // Estado para iluminación
  const language = useSelector((state) => state.language);

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
                    className="absolute sm:top-5 lg:top-10 sm:mt-5 lg:mt-10 sm:left-0 lg:left-28 sm:ml-2 lg:ml-28 bg-black/50 sm:p-1 lg:p-5 rounded-lg sm:w-full lg:w-[50%]"
                    initial={{ opacity: 0, y: 100 }} // Empieza invisible y desplazado 50px hacia abajo
                    whileInView={{ opacity: 1, y: 0 }} // Cuando entra en vista, aparece con opacidad 1 y sube a su posición normal
                    viewport={{ once: false }} // La animación ocurre solo una vez
                    transition={{ duration: 3, ease: "easeOut" }} // La animación dura 1s con una salida suave
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
            speed={5}
            repeat={Infinity}
          />
        </h1>
      </motion.div>
      {/* Contenedor del reloj */}
      <div
        className={`absolute w-[50%] max-w-[480px] sm:mt-11 lg:mt-28 lg:ml-5 aspect-square rounded-full  shadow-lg transition-all duration-300 
                    ${
                      isLit
                        ? "shadow-[0_0_120px_30px_rgba(255,0,255,0.8)]"
                        : "shadow-cyan-500/50"
                    }`}
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
      </div>

      {/* Indicación botón */}
      <div className="absolute w-50 h-10 flex items-center text-xl font-bold px-2 rounded-lg bottom-40 ">
        <h2 className="text-white animate-bounce">
          {language === "en" ? "Press Button" : "Presiona el Botón"}
        </h2>
      </div>
      {/* Botón para iluminar */}
      <button
        className="absolute sm:bottom-56 lg:bottom-52 sm:ml-2 lg:ml-4 rounded-full sm:p-1 lg:px-2 lg:py-2 font-bold shadow-xl shadow-red-500 hover:shadow-white border-black hover:border-white border-2 transition-all duration-200 animate-bounce-slow bg-no-repeat bg-center bg-contain"
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
          <Lucide icon="Moon" className="lg:w-10 lg:h-10 sm:w-4 sm:h-4 text-white" />
        )}
      </button>
    </div>
  );
};

export default PoquetClock;
