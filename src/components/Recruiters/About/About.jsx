import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
//import home_banner from "../../../assets/AnimatedGifs/animated-about.gif";
import imageColor from "../../../assets/Image/arte-about.png";
import imageByN from "../../../assets/Image/arte-about2.png";
import { NumberData, EspNumberData, BtnData, EspBtnData } from "./AboutData";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const About = () => {
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
    <React.Fragment>
      {/*----- Start About -----*/}
      <section
        className=" bg-white bg-bg-effect-3 bg-cover bg-no-repeat sm:py-16 lg:pt-20 min-h-screen"
        id="About"
      >
        <div className="container w-screen  h-full lg:mt-20 lg:mb-0">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <div
              className="lg:col-span-6  w-full h-full text-center mb-12 lg:mb-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
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
              <h3 className="font-semibold text-[24px] md:text-[40px] leading-[1.2] mb-4 normal-case">
                {language === "en"
                  ? "Frontend Web Developer"
                  : "Desarrolladora Web Frontend"}
              </h3>
              <p className="text-base md:text-xl">
                <TypeAnimation
                  key={language}
                  className="text-purple-900"
                  sequence={
                    language === "en"
                      ? [
                          "I don't just develop websites,",
                          100,
                          "I create digital experiences!",
                          5000,
                        ]
                      : [
                          "No solo desarrollo sitios web, ",
                          100,
                          "¡Creo experiencias digitales!",
                          5000,
                        ]
                  }
                  speed={10}
                  repeat={1}
                />
              </p>

              <br />
              <p className="text-base md:text-md">
                {" "}
                {language === "en"
                  ? "🎨 With a solid background in "
                  : "🎨 Con una sólida formación en "}
                <span className="bg-fuchsia-100 font-semibold">
                  {language === "en" ? "graphic design" : "diseño gráfico"}
                </span>{" "}
                {language === "en"
                  ? ", I specialize in the creation and development of "
                  : ", me especializo en la creación y desarrollo de "}
                <span className="bg-fuchsia-100 font-semibold">
                  {language === "en" ? "web sites." : "sitios web."}
                </span>
                <br />
                <br />
                {language === "en"
                  ? "⭐ Throughout my career, I've learned new and different skills, allowing me to offer "
                  : "⭐ A lo largo de mi carrera, he aprendido nuevas y diferentes habilidades, lo que me permite ofrecer "}
                <span className="bg-fuchsia-100 font-semibold">
                  {language === "en"
                    ? "visually attractive and functional solutions."
                    : "soluciones visualmente atractivas y funcionales."}
                </span>
                <br />
                <br />
                {language === "en"
                  ? "💼 My portfolio includes projects ranging from visual conceptualization to implementation of"
                  : "💼 Mi portafolio incluye proyectos que abarcan desde la conceptualización visual hasta la implementación de "}
                <span className="bg-fuchsia-100 font-semibold">
                  {language === "en"
                    ? "responsive and dynamic websites."
                    : "sitios web responsivos y dinámicos."}
                </span>
                <br />
                <br />
                {language === "en"
                  ? "🚀 Although my experience in graphic design is very broad, my current focus is on the "
                  : "🚀 Aunque mi experiencia en diseño gráfico es muy amplia, mi enfoque actual está en el "}
                <span className="bg-fuchsia-100 font-semibold">
                  {language === "en" ? "web development" : "desarrollo web"}
                </span>
                {language === "en"
                  ? ", for which I use technologies such as "
                  : ", para el cual utilizo tecnologías como "}
                <span className="bg-fuchsia-100">
                  JavaScript, React JS, HTML, CSS, Tailwind CSS, MUI material,
                  Wordpress, Redux, GraphQl, REST API, Node.js, Express, Morgan,
                  Docker, AWS, Webpack / Vite, Figma, Git, Scrum
                </span>
                {language === "en" ? ", among others." : ", entre otras."}
                <br />
                <br />
                {language === "en"
                  ? "✨ I am characterized by being very organized, adaptable and "
                  : "✨ Me caracterizo por ser muy organizada, adaptable y "}
                <span className="bg-fuchsia-100 font-semibold">
                  {language === "en"
                    ? "committed to excellence"
                    : "comprometida con la excelencia"}
                </span>
                {language === "en"
                  ? ", always willing to take on new challenges, continue learning and contribute to the success of the projects in which I participate."
                  : ", siempre dispuesta a asumir nuevos desafíos, continuar aprendiendo y contribuir al éxito de los proyectos en los que participo. "}
                <br />
                <br />
                {language === "en"
                  ? "As of today..."
                  : "Al día de hoy, llevo..."}
              </p>
              <div className="grid grid-cols-16">
                {language === "en"
                  ? NumberData.map((e, key) => {
                      return (
                        <div className="col-span-6 sm:col-span-4" key={key}>
                          <h5
                            className="text-[26px] text-fuchsia-600 font-semibold"
                            title={e.Title}
                          >
                            {e.Number}
                          </h5>
                          <span className="text-slate-700/90"> {e.Detail}</span>
                        </div>
                      );
                    })
                  : EspNumberData.map((e, key) => {
                      return (
                        <div className="col-span-6 sm:col-span-4" key={key}>
                          <h5
                            className="text-[26px] text-fuchsia-600 font-semibold"
                            title={e.Title}
                          >
                            {e.Number}
                          </h5>
                          <span className="text-slate-700/90"> {e.Detail}</span>
                        </div>
                      );
                    })}
              </div>
            </motion.div>
          </div>
        </div>
        {isLargeScreen && (
          <div className="relative  bottom-0 w-screen  flex justify-end sm:right-2 lg:right-20 lg:mr-10 space-x-2 z-1">
            <a href="#Skills">
              <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ? "Go on" : "Sigamos"}
              </div>
            </a>
            <a href="#Wellcome">
              <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                <Lucide icon="ArrowUp" />
              </div>
            </a>
          </div>
        )}
      </section>
      {/*----- End About -----*/}
    </React.Fragment>
  );
};

export default About;
