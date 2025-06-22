import React, { useState, useEffect } from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import monitor from "../../../assets/videos/monitor.gif";

const Problem = () => {
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
      <React.Fragment>
        {/*----- Start Home -----*/}

        <section
          className="relative overflow-hidden h-screen bg-white"
          id="Problem"
        >
          <div className="absolute inset-0 flex justify-center items-center sm:-mt-36 smd:-mt-60 lg:mt-0">
            {/* Imagen GIF centrada */}
            <img
              src={monitor}
              alt="pantallaModerna"
              className="w-full sm:max-w-[360px] smd:max-w-[430px] smdd:max-w-[480px] lg:max-w-[1200px] h-auto object-contain sm:mt-2 lg:mt-3 z-1"
            />

            {/* Texto animado encima del gif */}
            <motion.div
              className="absolute text-white text-left px-4 flex flex-col items-center justify-start sm:-ml-16 smd:-ml-20 lg:left-60 lg:ml-60  sm:mt-28 smd:-mt-1 lg:top-24 z-10"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="sm:mt-2 smd:mt-0 lg:mt-2">
                <h2 className="fontCaveat font-semibold italic text-white sm:text-2xl lg:text-5xl leading-[1] sm:mb-2 lg:mb-6">
                  {language === "en" ? "" : "¿"}
                  <span className="text-red-500 animate-pulse sm:text-3xl lg:text-6xl">
                    {language === "en" ? "Does this sound" : "Te suena"}
                  </span>
                  {language === "en" ? " familiar?" : " familiar?"}
                </h2>
              </div>
            </motion.div>

            <div className="absolute px-4 flex flex-col justify-start lg:left-60 lg:ml-60 lg:top-36  z-10">
              <div className="sm:mt-2 smd:mt-0 lg:mt-8">
                <ul className="text-white text-left mt-8 text-lg lg:text-2xl max-w-3xl mx-auto list-none space-y-2">
                  <li className="mt-2">
                    <motion.div
                      className="flex flex-nowrap mt-6"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                    >
                      <Lucide icon="EyeOff" className="mr-2" />
                      <span>Tengo un sitio pero nadie lo visita.</span>
                    </motion.div>
                  </li>
                  <li className="mt-2">
                    <motion.div
                      className="flex flex-nowrap mt-6"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 3, duration: 2, ease: "easeOut" }}
                    >
                      <Lucide icon="Meh" className="mr-2" />
                      <span>¿sitio? No, no tengo aún.</span>
                    </motion.div>
                  </li>
                  <li className="mt-2">
                    <motion.div
                      className="flex flex-nowrap mt-6"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 5, duration: 2, ease: "easeOut" }}
                    >
                      <Lucide icon="PhoneOff" className="mr-2" />
                      <span>Mi sitio se ve mal en celulares.</span>
                    </motion.div>
                  </li>
                  <li className="mt-2">
                    <motion.div
                      className="flex flex-nowrap mt-6"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 7, duration: 2, ease: "easeOut" }}
                    >
                      <Lucide icon="Settings" className="mr-2" />
                      <span>Lo hice yo y ahora no sé cómo arreglarlo.</span>
                    </motion.div>
                  </li>
                  <li className="mt-2">
                    <motion.div
                      className="flex flex-nowrap mt-6"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 9, duration: 2, ease: "easeOut" }}
                    >
                      <Lucide icon="Globe" className="mr-2" />
                      <span>Tengo sitio y visitas pero no vendo!</span>
                    </motion.div>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              className="absolute text-white text-end px-4 flex flex-col justify-end  lg:bottom-64 z-10"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 11, duration: 2, ease: "easeOut" }}
            >
              <div className="">
                <a href="#Services">
                  <h2 className="fontCaveat font-semibold italic text-white sm:text-2xl lg:text-4xl leading-[1] sm:mb-2 lg:mb-4">
                    {language === "en"
                      ? "If any of these problems sound familiar, you're not alone."
                      : "Si alguno de estos problemas te suena familiar, no estás solo."}
                  </h2>
                  <h2 className="font-semibold italic text-white sm:text-2xl lg:text-3xl leading-[1] sm:mb-2 lg:mb-6">
                    {language === "en"
                      ? "The good news: "
                      : "La buena noticia: "}
                    <span className="text-red-500">
                      {language === "en"
                        ? "You are in the right place to solve them."
                        : "estás en el lugar indicado para resolverlos."}
                    </span>
                  </h2>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Opciones debajo al pie */}
          {/* 
          <div className="absolute sm:bottom-12 smd:bottom-60 smdd:bottom-72 lg:bottom-10 left-1/2 -translate-x-1/2 w-[80%] flex flex-col lg:flex-row justify-between items-center text-white fontCaveat text-2xl sm:text-2xl md:text-4xl font-semibold text-center gap-5">
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
*/}
        </section>
        {/*----- End Home -----*/}
      </React.Fragment>
    </>
  );
};

export default Problem;
