import React from "react";
import { TypeAnimation } from "react-type-animation";
//import home_banner from "../../../assets/AnimatedGifs/animated-about.gif";
import imageColor from "../../../assets/Image/arte-about.png";
import imageByN from "../../../assets/Image/arte-about2.png";
import { NumberData, EspNumberData, BtnData, EspBtnData } from "./AboutData";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";

const About = () => {
  const language = useSelector((state) => state.language);

  return (
    <React.Fragment>
      {/*----- Start About -----*/}
      <section
        className=" bg-white bg-bg-effect-3 bg-cover bg-no-repeat pt-20"
        id="About"
      >
        <div className="container py-20 min-h-screen">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
          <div
  className="lg:col-span-6  w-full h-full text-center mb-12 lg:mb-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
  style={{ backgroundImage: `url(${imageColor})`, height: "100%" }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${imageByN})`)}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${imageColor})`)}
>
</div>

            <div className="lg:col-span-6 lg:pl-12 my-3">
              <h3 className="font-semibold text-[26px] md:text-[40px] leading-[1.2] mb-4 normal-case">
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
                    ? ["I don't just develop websites,", 100, 
                      "I create digital experiences!", 5000]
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
                ? "🎨 My passion for " : "🎨 Con una sólida formación en "}
                <span className="bg-fuchsia-100">
                  {language === "en" ? "creating" : "diseño gráfico"}
                </span>{" "}
                {language === "en"
                  ? "led me to train in graphic arts, and for more than 20 years I have dedicated myself to it with great pleasure."
                  : ", me especializo en la creación y desarrollo de "}
                <span className="bg-fuchsia-100">
                {language === "en" ? "📚My " : "sitios web."}
                </span>
                
                <br />
                <br />
                {language === "en" ? "🗣My " : "⭐ A lo largo de mi carrera, he integrado mis conocimientos en diseño gráfico con habilidades en desarrollo web, lo que me permite ofrecer "}
                <span className="bg-fuchsia-100">
                  {language === "en"
                    ? "outgoing personality "
                    : "soluciones visualmente atractivas y funcionales."}
                </span>
                <br />
                <br />
                {language === "en"
                  ? "and my vocation for customer service allowed me to turn my company into one of the most popular in the country in its field, and my leadership capacity was key to building the work team that accompanied that transformation."
                  : "💼 Mi portafolio incluye proyectos que abarcan desde la conceptualización visual hasta la implementación de sitios web responsivos y dinámicos."}
                <br />
                <br />
                {language === "en"
                  ? "🚀In one of these restarts that life imposed on me, I discovered that I am also "
                  : "🚀 Aunque mi experiencia en diseño gráfico es muy amplia, mi enfoque actual está en el "}
                <span className="bg-fuchsia-100">
                  {language === "en" ? "curious" : " desarrollo web,"}
                </span>
                <br />
                {language === "en"
                  ? ", and this led me to decide to train in web programming, face that challenge and have the joy of finding a "
                  : "utilizando tecnologías como JavaScript, React JS, HTML, CSS, Redux, GraphQl y más."}
                
                <br />
                <br />
                {language === "en"
                  ? "And here I am, re-writing the code of my present and future 💜"
                  : "✨ Me caracterizo por ser adaptable y "}
                  <span className="bg-fuchsia-100">
                  {language === "en" ? "curious" : "comprometida con la excelencia"}
                </span>
                {language === "en"
                  ? "And here I am, re-writing the code of my present and future 💜"
                  : ", siempre dispuesta a asumir nuevos desafíos y contribuir al éxito de los proyectos en los que participo."}
              </p>
              <div className="grid grid-cols-16 pt-5">
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
