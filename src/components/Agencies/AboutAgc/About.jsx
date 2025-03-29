import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
//import home_banner from "../../../assets/AnimatedGifs/animated-about.gif";
import imageColor from "../../../assets/Image/arte-about3.png";
import imageByN from "../../../assets/Image/arte-about2.png";
import { NumberData, EspNumberData, BtnData, EspBtnData } from "./AboutData";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const About = () => {
  const language = useSelector((state) => state.language);

  return (
    <React.Fragment>
      {/*----- Start About -----*/}
      <section
        className="w-screen bg-slate-500 bg-bg-about bg-no-repeat bg-cover bg-blend-multiply sm:pt-2 lg:pt-10"
        id="About"
      >
        <div className="container sm:py-8 lg:py-20 min-h-screen">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center bg-slate-200 sm:p-4 lg:p-5 sm:mt-28 lg:-mt-10">
            <div
              className="lg:col-span-6  w-full h-full text-center mb-12 lg:mb-0 bg-white bg-no-repeat bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: `url(${imageColor})`, height: "100%" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${imageByN})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${imageColor})`)
              }
            ></div>

            <motion.div
              className="lg:col-span-6 lg:pl-12 my-2"
              initial={{ opacity: 0, y: 100 }} // Empieza invisible y desplazado 50px hacia abajo
              whileInView={{ opacity: 1, y: 0 }} // Cuando entra en vista, aparece con opacidad 1 y sube a su posición normal
              viewport={{ once: false }} // La animación ocurre solo una vez
              transition={{ duration: 3, ease: "easeOut" }} // La animación dura 1s con una salida suave
            >
              <h4 className="lg:text-4xl font-bold mb-1 normal-case">
                {language === "en" ? "About me? " : "¿Quién soy? "}
                <span className="font-base font-normal italic lg:text-lg">
                  <br />
                  {language === "en"
                    ? "... I´m a self-taught person passionate about art, pets and my family. Oh! and a"
                    : "... Una autodidacta apasionada del arte, de las mascotas y de mi familia. Ah! y una "}
                </span>
              </h4>
              <h3 className="font-semibold text-[26px]  leading-[1.2] pb-4 mb-2 normal-case border-b-2 border-slate-300 text-center">
                {language === "en"
                  ? "Frontend Web Developer"
                  : "Desarrolladora Web Frontend"}
              </h3>
              

              <br />
              <p className="text-base md:text-md">
                {language === "en"
                  ? "🖐 Hi! My name is "
                  : "🖐 Hola! Mi nombre es "}
                <span className="font-semibold text-lg">Julia</span>
                <span>
                  {language === "en"
                    ? ", and it's a pleasure to welcome you to my "
                    : ", y es un placer recibirte en mi "}
                </span>
                <span className="font-semibold">
                  {language === "en" ? "web portfolio!" : "Portfolio web ! "}
                </span>
                <br />
                <br />
                <span>
                {language === "en" 
                ? "🚀 I specialize in creating " 
                : "🚀 Soy especialista en crear "}
                </span>
                <span className="font-semibold">
                {language === "en" 
                ? "engaging, innovative, and highly functional digital experiences." 
                : "experiencias digitales atractivas, innovadoras y altamente funcionales."}
                </span>
                <br />
                <br />
                <span>
                {language === "en" 
                ? "🎨 From " 
                : "🎨 Desde el "}
                </span>
                <span className="font-semibold">
                {language === "en" 
                ? "brand manual design" 
                : "diseño del manual de marca"}
                </span>
                <span>
                {language === "en" 
                ? " to " 
                : " hasta el "}
                </span>
                <span className="font-semibold">
                {language === "en" 
                ? " developing highly converting landing pages and complex websites" 
                : "desarrollo de landing pages que convierten y sitios web complejos"}
                </span>
                <span>
                {language === "en" 
                ? ", I integrate " 
                : ", integro "}
                </span>
                <span className="font-semibold">
                {language === "en" 
                ? "creativity and strategy" 
                : "creatividad y estrategia"}
                </span>
                <span>
                {language === "en" 
                ? " to elevate each project." 
                : " para potenciar cada proyecto."}
                </span>
                <br />
                <br />
                <span>
                {language === "en" 
                ? "🥇 With a solid understanding of " 
                : "🥇 Con sólidos conocimientos en "}
                </span>
                <span className="font-semibold">
                {language === "en" 
                ? "UX/UI, SEO, and digital marketing" 
                : "UX/UI, SEO y marketing digital"}
                </span>
                <span>
                {language === "en" 
                ? ", I can add value at every stage, ensuring impactful results aligned with your clients' goals." 
                : ", puedo aportar valor en cada etapa, asegurando resultados impactantes y alineados con los objetivos de tus clientes."}
                </span>
                
                <br />
                <br />
                {language === "en"
                  ? "💼 My portfolio includes projects ranging from visual conceptualization to implementation of"
                  : "💼 Mi portafolio incluye proyectos que abarcan desde la conceptualización visual hasta la implementación de "}
                <span className="font-semibold">
                  {language === "en"
                    ? "responsive and dynamic websites."
                    : "sitios web responsivos y dinámicos."}
                </span>
                <br />
                <br />
                <p className="text-base md:text-2xl text-center">
                <TypeAnimation
                  key={language}
                  className="text-red-800"
                  sequence={
                    language === "en"
                      ? [
                          "I don't just develop websites,",
                          1000,
                          "I create digital experiences!",
                          5000,
                        ]
                      : [
                          "No solo desarrollo sitios web, ",
                          1000,
                          "¡Creo experiencias digitales!",
                          5000,
                        ]
                  }
                  speed={10}
                  repeat={Infinity}
                />
              </p>
              
                {language === "en"
                  ? "As of today..."
                  : "Al día de hoy, llevo..."}
              </p>
              <div className="grid grid-cols-2 bg-slate-600">
                {language === "en"
                  ? NumberData.map((e, key) => {
                      return (
                        <div className="col-span-1 sm:col-span-1 border-2 border-white p-2" key={key}>
                          <h5
                            className="text-[26px] text-red-600 font-semibold ml-2"
                            title={e.Title}
                          >
                           {e.Number}
                          </h5>
                          <span className="text-white"> {e.Detail}</span>
                        </div>
                      );
                    })
                  : EspNumberData.map((e, key) => {
                      return (
                        <div className="col-span-1 sm:col-span-1 border-2 border-white p-2" key={key}>
                          <h5
                            className="text-[26px] text-red-600 font-semibold ml-2"
                            title={e.Title}
                          >
                            {e.Number}
                          </h5>
                          <span className="text-white"> {e.Detail}</span>
                        </div>
                      );
                    })}
              </div>
            </motion.div>
          </div>
          <div className="pt-5 flex justify-end items-center">
            <a href="#Curriculum">
              <div className="btn btn-red rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ? "Go on" : "Sigamos"}
              </div>
            </a>
            <a href="#Portfolio">
              <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                <Lucide icon="ArrowUp" />
              </div>
            </a>
          </div>
        </div>
      </section>
      {/*----- End About -----*/}
    </React.Fragment>
  );
};

export default About;
