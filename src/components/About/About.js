import React from "react";
import { TypeAnimation } from "react-type-animation";
import home_banner from "../../assets/AnimatedGifs/animated-about.gif";
import { NumberData, EspNumberData, BtnData, EspBtnData } from "./AboutData";
import { Lucide } from "../../utils/index.js";
import { useSelector } from "react-redux";

const About = () => {
  const language = useSelector((state) => state.language);

  return (
    <React.Fragment>
      {/*----- Start About -----*/}
      <section
        className="lg:py-20 bg-white bg-bg-effect-3 bg-cover bg-no-repeat"
        id="About"
      >
        <div className="container my-20 py-10">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-6 text-center mb-12 lg:mb-0">
              <img
                src={home_banner}
                alt="This is me"
                title="Animated gif"
                className="bg-no-repeat bg-cover"
              />
            </div>

            <div className="lg:col-span-6 lg:pl-12 mt-1">
              <h3 className="font-semibold text-[26px] md:text-[40px] leading-[1.2] mb-4 normal-case">
                {language === "en"
                  ? "I'm a Front-end Developer"
                  : "Soy Desarrolladora de Front-end"}
                <span className="text-purple-900"> & </span>
                <br />
                {language === "en"
                  ? "a Graphic Designer."
                  : "Diseñadora Gráfica."}
              </h3>
              <p className="text-base md:text-lg">
                {language === "en" ? "I´m a" : "Soy"}
                <TypeAnimation
                  className="text-purple-900"
                  sequence={[
                    " SENIOR Graphic Designer...🦾",
                    3000,
                    " JUNIOR Front-end Developer...👣",
                    3000,
                  ]}
                  speed={10}
                  repeat={Infinity}
                />
              </p>
              {/*<p className="text-base md:text-lg">
                I'm a SENIOR{" "}
                <span className="text-purple-600"> Graphic Designer </span>& a
                JUNIOR
                <span className="text-fuchsia-600"> Front-end Developer </span>.
  </p>*/}
              <br />
              <p className="text-base md:text-md">
                {" "}
                {language === "en" ? "🎨 My passion for " : "🎨 Mi pasión por "}
                <span className="bg-fuchsia-100">
                  {language === "en" ? "creating" : "crear"}
                </span>{" "}
                {language === "en"
                  ? "led me to train in graphic arts, and for more than 20 years I have dedicated myself to it with great pleasure."
                  : "me llevó a formarme en artes gráficas, y desde hace más de 20 años me dedico a ello con mucho placer."}
                <br />
                {language === "en" ? "📚My " : "📚Mi "}
                <span className="bg-fuchsia-100">
                  {language === "en"
                    ? "ability to adapt "
                    : "habilidad para adaptarme "}
                </span>
                {language === "en"
                  ? "led me to train in new technological and digital marketing areas to stay up to date and take my brand to an excellent position on platforms such as Google, Facebook and Instagram."
                  : "me llevó a capacitarme en nuevas áreas tecnológicas y de marketing digital para mantenerme actualizada y llevar mi marca a una excelente posición en plataformas como Google, Facebook e Instagram."}
                <br />
                {language === "en" ? "🗣My " : "🗣Mi "}
                <span className="bg-fuchsia-100">
                  {language === "en"
                    ? "outgoing personality "
                    : "personalidad extrovertida "}
                </span>
                {language === "en"
                  ? "and my vocation for customer service allowed me to turn my company into one of the most popular in the country in its field, and my leadership capacity was key to building the work team that accompanied that transformation."
                  : "y mi vocación por la atención al cliente me permitió convertir mi empresa en una de las más populares del país en su ramo, y mi capacidad de liderazgo fue clave para armar el equipo de trabajo que acompañó esa transformación."}
                <br />
                {language === "en"
                  ? "🚀In one of these restarts that life imposed on me, I discovered that I am also "
                  : "En uno de esos reinicios que me impuso la vida, descubrí que también soy "}
                <span className="bg-fuchsia-100">
                  {language === "en" ? "curious" : "curiosa "}
                </span>
                {language === "en"
                  ? ", and this led me to decide to train in web programming, face that challenge and have the joy of finding a "
                  : "y esto me llevó a decidir formarme en programación web, enfrentar ese desafío y tener la alegría de encontrar una "}
                <span className="bg-fuchsia-100">
                  {language === "en" ? "new passion" : "nueva pasión"}
                </span>
                .
                <br />
                {language === "en"
                  ? "And here I am, re-writing the code of my present and future 💜"
                  : "Y aquí estoy, re escribiendo el código de mi presente y futuro 💜"}
              </p>
              <div className="grid grid-cols-16 pt-3">
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
              {language === "en"
                ? BtnData.map((e, key) => {
                    return (
                      <div className="pt-4" key={key}>
                        <a href="#Contact" className="btn btn-theme2 mr-4">
                          {e.btn1}
                        </a>
                        <a href="#Portfolio" className="btn btn-dark">
                          {e.btn2}
                        </a>
                      </div>
                    );
                  })
                : EspBtnData.map((e, key) => {
                    return (
                      <div className="pt-4" key={key}>
                        <a href="#Contact" className="btn btn-theme2 mr-4">
                          {e.btn1}
                        </a>
                        <a href="#Portfolio" className="btn btn-dark">
                          {e.btn2}
                        </a>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="pt-10 flex justify-end items-center">
            <a href="#Services">
              <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer ">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ? "Go on" : "Sigamos"}
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
