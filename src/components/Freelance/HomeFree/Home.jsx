import React, { useState, useEffect } from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import tv from "../../../assets/videos/tv-old-static.gif";
import InProgress from "../../CoursesAndResources/Home/InProgress.js";

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

        <section
          className="relative overflow-hidden h-screen bg-black"
          id="Home"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="absolute inset-0 flex justify-center items-center sm:-mt-36 smd:-mt-60 lg:mt-0">
            {/* Imagen GIF centrada */}
            <img
              src={tv}
              alt="tvAntiguo"
              className="w-full sm:max-w-[360px] smd:max-w-[430px] smdd:max-w-[480px] lg:max-w-[1200px] h-auto object-contain sm:mt-2 lg:mt-3 z-1"
            />

            {/* Texto animado encima del gif */}
            <motion.div
              className="absolute text-white text-center px-4 flex flex-col items-center justify-center sm:-ml-16 smd:-ml-20 lg:-ml-48 sm:mt-28 smd:-mt-1 lg:-mt-10 z-10"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="sm:mt-2 smd:mt-0 lg:mt-2">
                <h2 className="fontCaveat font-semibold italic text-white sm:text-2xl lg:text-5xl leading-[1] sm:mb-2 lg:mb-6">
                  {language === "en" ? "Is your " : "¿Tu "}
                  <span className="text-red-500 animate-pulse sm:text-3xl lg:text-6xl">
                    {language === "en" ? "website" : "web"}
                  </span>
                  {language === "en"
                    ? " becoming a thing of the past?"
                    : " está quedando en el pasado?"}
                </h2>
              </div>

              <div className="sm:mt-2 smd:mt-0 lg:mt-8">
                <h2 className="font-semibold text-black text-[20px] sm:text-lg md:text-xl lg:text-4xl">
                  {language === "en" ? "Update it." : "Actualízala."}
                </h2>
              </div>
              <div className="lg:mt-1">
                <h2 className="text-black font-bold text-[24px] sm:text-xl md:text-2xl lg:text-5xl">
                  {language === "en" ? " Modernize it." : " Modernízala."}
                </h2>
              </div>

              <div className="sm:mt-20 smd:mt-4 lg:mt-20 sm:ml-14 smd:ml-0 lg:ml-0">
                <p className="font-extrabold text-white sm:text-lg md:text-xl smd:text-sm lg:text-4xl animate-bounce">
                  {language === "en"
                    ? "Let it start to produce "
                    : "¡Que empiece a dar "}
                  <span className="block uppercase">
                    {language === "en" ? "real results!" : "resultados reales!"}
                  </span>
                </p>
              </div>
            </motion.div>
            <motion.div
              className="absolute text-white text-center px-4 flex flex-col justify-center sm:-ml-16 smd:-ml-20 lg:-ml-48 sm:mt-28 smd:-mt-1 lg:bottom-52 z-10"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 5, duration: 2, ease: "easeOut" }}
            >
              <div className="sm:mt-20 smd:mt-4 lg:mt-20 sm:ml-14 smd:ml-0 lg:ml-0">
                <a href="#Problem">
                  <Lucide
                    icon="ArrowDown"
                    className="text-white w-10 h-10"
                    title={language === "en" ? "let's continue" : "continuemos"}
                  />
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

export default Home;
