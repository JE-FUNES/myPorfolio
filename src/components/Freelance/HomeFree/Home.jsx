import React, { useState, useEffect } from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import AnimatedCursor from "react-animated-cursor";
import { motion } from "motion/react";
import fondo from "../../../assets/Image/fondo-home-freelance.png";
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
          className="relative overflow-hidden min-h-screen bg-black bg-cover bg-center bg-no-repeat"
          id="Home"
          style={{ backgroundImage: `url(${fondo})` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Imagen GIF centrada */}
            <img
              src={gif}
              alt="Animación central"
              className="w-full lg:max-w-[960px] h-auto object-contain"
            />
            <div
              className="fontCaveat absolute text-4xl text-start right-20 text-white font-semibold"
            >
              <ul>
                <li className="">
                  <motion.div
                    className=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut", delay: 3 }}
                  >
                    {language === "en"
                      ? "Your business deserves more than a website:"
                      : "▫ Convierte visitas en clientes,"}
                  </motion.div>
                </li>
                <li className="mt-12">
                  <motion.div
                    className=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut", delay: 5 }}
                  >
                    {language === "en"
                      ? "Your business deserves more than a website:"
                      : "▫ Potencia tu marca,"}
                  </motion.div>
                </li>
                <li className="mt-12">
                  <motion.div
                    className=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut", delay: 7 }}
                  >
                    {language === "en"
                      ? "Your business deserves more than a website:"
                      : "▫ Conecta con tu audiencia."}
                  </motion.div>
                </li>
              </ul>
            </div>

            {/* Texto animado encima del gif */}
            <motion.div
              className="absolute text-white text-center px-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="flex item-center mt-2 ml-5">
                <h2 className="fontCaveat font-semibold italic text-black text-[27px] sm:text-lg md:text-xl lg:text-5xl leading-[1] mb-20 ml-5 ">
                  {language === "en"
                    ? "Your business deserves more than a website:"
                    : "Tu negocio merece más que una web: "}
                </h2>
              </div>

              <div className="flex item-center mt-2 ml-5">
                <p className="uppercase font-extrabold text-black md:text-xl lg:text-5xl ml-5 animate-bounce">
                  {language === "en" ? "presence," : "presencia, "}
                  <p>
                    {language === "en"
                      ? " impact, and results."
                      : " impacto y resultados."}
                  </p>
                </p>
              </div>
            </motion.div>
      
          </div>
        </section>
        {/*----- End Home -----*/}
      </React.Fragment>
    </>
  );
};

export default Home;
