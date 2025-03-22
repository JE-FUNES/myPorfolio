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

            <div className="lg:col-span-6 lg:pl-12 my-2">
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
                ? "🎨 With a solid background in " : "🎨 Con una sólida formación en "}
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
                {language === "en" ? "⭐ Throughout my career, I've learned new and different skills, allowing me to offer " 
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
JavaScript, React JS, HTML, CSS, Tailwind CSS, MUI material, Wordpress, Redux, GraphQl, REST API, Node.js, Express, Morgan, Docker, AWS, Webpack / Vite, Figma, Git, Scrum
                </span>
                {language === "en"
                  ? ", among others."
                  : ", entre otras."}
                
                <br />
                <br />
                {language === "en"
                  ? "✨ I am characterized by being very organized, adaptable and "
                  : "✨ Me caracterizo por ser muy organizada, adaptable y "}
                  <span className="bg-fuchsia-100 font-semibold">
                  {language === "en" ? "committed to excellence" : "comprometida con la excelencia"}
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
              {/* 
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
                  */}
            </div>
          </div>
          <div className="pt-5 flex justify-end items-center">
            <a href="#Skills">
              <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
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
