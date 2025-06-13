import React, { useState, useEffect } from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import AnimatedCursor from "react-animated-cursor";
import { motion } from "motion/react";
import fondo from "../../../assets/Image/fondo-services-freelance.png";
import tv from "../../../assets/Image/tv-antiguo.png";
import gif from "../../../assets/AnimatedGifs/home-free.gif";
import InProgress from "../../GraphicPortfolio/Home/InProgress.js";

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
      <div id="InProgress">
        <InProgress />
      </div>
      <React.Fragment>
        {/*----- Start Home -----*/}
        {isLargeScreen && (
          <AnimatedCursor
            innerSize={20}
            outerSize={15}
            color="0, 255, 255"
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
          className="relative overflow-hidden h-screen bg-cyan-900 bg-cover bg-center bg-no-repeat"
          id="Home"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute mt-10 w-full lg:max-w-[900px] h-auto object-cover"
            >
              <source src="/videos/interferencia.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
            {/* Imagen GIF centrada */}
            <img
              src={tv}
              alt="Animación central"
              className="w-full lg:max-w-[1200px] h-auto object-contain mt-10 z-10"
            />

            {/* Texto animado encima del gif */}
            <motion.div
  className="absolute text-white text-center px-4 flex flex-col items-center justify-center -ml-48 -mt-10"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 2, ease: "easeOut" }}
>
  <div className="mt-2">
    <h2 className="fontCaveat font-semibold italic text-white text-[27px] sm:text-lg md:text-xl lg:text-5xl leading-[1] mb-6">
      {language === "en"
        ? "It's time to renew."
        : "Es tiempo de renovar."}
    </h2>
  </div>

  <div className="mt-2">
    <h2 className="font-semibold text-cyan-500 text-[20px] sm:text-lg md:text-xl lg:text-4xl">
      {language === "en"
        ? "Your "
        : "¡Tu "}
        <span className="text-cyan-300 font-bold text-[24px] sm:text-xl md:text-2xl lg:text-5xl">
        {language === "en"
        ? "business"
        : "empresa"}
        </span>
        {language === "en"
        ? " deserves"
        : " merece"}
    </h2>
  </div>
  <div className="mt-1">
    <h2 className="font-semibold text-cyan-500 text-[20px] sm:text-lg md:text-xl lg:text-4xl mb-6">
         <span className="text-cyan-300 font-bold text-[24px] sm:text-xl md:text-2xl lg:text-5xl">
        {language === "en"
        ? "more"
        : "más"}
        </span>
        {language === "en"
          ? " than a "
          : " que una "}
          <span className="text-cyan-300 font-bold text-[24px] sm:text-xl md:text-2xl lg:text-5xl">
        {language === "en"
        ? "website"
        : "web"}
        </span>
        !
    </h2>
  </div>

  <div className="mt-6">
    <p className="uppercase font-extrabold text-white md:text-xl lg:text-4xl animate-bounce">
      {language === "en" ? "presence," : "presencia,"}
      <span className="block">
        {language === "en"
          ? " impact, and results."
          : " impacto y resultados."}
      </span>
    </p>
  </div>
</motion.div>

          </div>
          {/* Opciones debajo al pie */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] flex flex-col lg:flex-row justify-between items-center text-white fontCaveat text-2xl sm:text-3xl md:text-4xl font-semibold text-center gap-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 3 }}
            >
              {language === "en"
                ? "Convert visitors into customers ✔"
                : "Convierte visitas en clientes ✔"}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 5 }}
            >
              {language === "en" ? "Boost your brand ✔" : "Potencia tu marca ✔"}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 7 }}
            >
              {language === "en"
                ? "Connect with your audience ✔"
                : "Conecta con tu audiencia ✔"}
            </motion.div>
          </div>
        </section>
        {/*----- End Home -----*/}
      </React.Fragment>
    </>
  );
};

export default Home;
