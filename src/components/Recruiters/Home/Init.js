import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import LanguagesSwitcher from "../../Switchers/Languages.jsx";
import { Lucide } from "../../../utils/index.js";
import image from "../../../assets/Image/init-imagen.png";
import foto from "../../../assets/Image/init-foto.png";
import AnimatedCursor from "react-animated-cursor";

const Init = () => {
  const language = useSelector((state) => state.language);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const handleOnClose = () => {
    setIsOpen(false)
  }
  
  const handleAgencies = () => {
    handleOnClose();
    navigate("/diseno_y_desarrollo_web_para_agencias_de_marketing");
  };

  const handleRecruiters = () => {
    handleOnClose();
    
  };

  const handleFreelance = () => {
    handleOnClose();
    
    navigate("/paginas_y_sitios_web_para_empresas_y_profesionales");
  };

  return (
    <React.Fragment>
      {isOpen &&
      
        <div 
        className="fixed overflow-scroll inset-0 bg-purple-950/90 z-[99999]"
        id="Wellcome"
        >
          {isLargeScreen && (
          <AnimatedCursor
      innerSize={20}
      outerSize={15}
      color='255, 33, 242'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
          )}
          <div className="flex items-center justify-center min-h-screen px-2">
            <div className="sm:w-full lg:w-[90%] m-auto p-5 relative">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Begin First Column */}
                <div className="w-full md:w-1/2 flex items-stretch">
                  <div className="w-full flex items-center px-3 lg:px-20 bg-black pb-5">
                    <div className="text-start mb-1 z-50">
                      <h6 className="mt-5 text-white font-bold text-xl lg:text-2xl">
                        {language === "en"
                          ? "👋 Hi!, My name is "
                          : "👋 Hola!, Mi nombre es "}
                        <span className="text-purple-500 font-bold text-2xl">
                          Julia
                        </span>
                      </h6>
                      <div className="flex items-center mt-2">
                        <h2 className="font-semibold text-white text-[25px] md:text-4xl lg:text-5xl leading-[1] mb-6 md:mb-9 sm:ml-5 lg:ml-0">
                          {language === "en" ? "I'm a " : "Soy "}
                        </h2>
                        <h1 className="font-semibold text-white text-[25px] md:text-4xl lg:text-5xl leading-[1] mb-6 md:mb-9 ml-2">
                          <TypeAnimation
                            key={language}
                            className="text-fuchsia-500"
                            sequence={
                              language === "en"
                                ? [" Web Developer", 3000, " UX Designer", 3000]
                                : [
                                    " Programadora Web",
                                    3000,
                                    " Diseñadora Integral",
                                    3000,
                                  ]
                            }
                            speed={5}
                            repeat={Infinity}
                          />
                        </h1>
                      </div>

                      <div className="flex items-start">
                        <Lucide
                          icon="Pencil"
                          className="text-purple-500 w-10 h-10 font-bold mr-2"
                        />

                        <p className="text-base text-slate-100 md:text-lg mt-2">
                          <span className="font-semibold md:text-xl ">
                            {language === "en"
                              ? "Strategic web design: "
                              : "Diseño web estratégico: "}
                          </span>

                          {language === "en"
                            ? "Creating attractive, intuitive and conversion-optimized interfaces. UX/UI design focused on user experience."
                            : "Creación de interfaces atractivas, intuitivas y optimizadas. Diseño UX/UI centrado en la experiencia del usuario."}
                        </p>
                      </div>
                      <div className="flex items-start mt-3">
                        <Lucide
                          icon="Globe"
                          className="text-purple-500 w-14 h-14 font-bold mr-2 -mt-2"
                        />
                        <p className="text-base text-slate-100 md:text-lg mt-2">
                          <span className="font-semibold md:text-xl ">
                            {language === "en"
                              ? "Professional web development: "
                              : "Desarrollo web profesional: "}
                          </span>

                          {language === "en"
                            ? "Dynamic, scalable and responsive websites, optimized for SEO and high performance. Implementation of modern technologies to ensure accessibility and compatibility on all devices."
                            : "Páginas web dinámicas, escalables y responsivas, optimizadas para SEO y alto rendimiento. Implementación de tecnologías modernas para garantizar accesibilidad y compatibilidad en todos los dispositivos."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End First Column */}

                {/* Begin Second Column */}
                <div className="w-full md:w-1/2 flex items-center justify-center min-h-full bg-white">
                  <div className="w-full px-0 pt-0 pb-10">
                    {/* Switch de idiomas alineado a la derecha */}
                    <div className="flex justify-end my-5 mr-5">
                      <LanguagesSwitcher />
                    </div>

                    {/* Contenedor de dos columnas internas */}
                    <div className="grid grid-cols-2 gap-4 items-center border-b-2 border-t-2">
                      {/* Primera Columna - Imagen con efecto hover en background */}
                      <div
                        className="w-full h-full bg-cover bg-left transition-all duration-300"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundImage = `url(${foto})`)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundImage = `url(${image})`)
                        }
                      ></div>

                      {/* Segunda Columna - Botones */}
                      <div className="flex flex-col items-begin space-y-3 my-20 lg:-ml-5 pr-5">
                        <p className="font-semibold text-purple-900 md:text-lg lg:mb-5">
                          {language === "en"
                            ? "Choose the best solution for your needs:"
                            : "Elige la mejor solución según tus necesidades:"}
                        </p>
                        {/* Botón Agencias Marketing" */}
                        <div className="flex justify-center">
                          <button
                            className="animate-pulse-delay-3s p-2 uppercase tracking-wider  text-white text-sm lg:text-lg lg:w-2/3 rounded-[10px] lg:rounded-[30px] bg-fuchsia-900 hover:bg-black hover:text-fuchsia-500 shadow-lg shadow-black font-bold"
                            onClick={handleAgencies}
                          >
                            <div className="flex items-center justify-center">
                              <Lucide
                                icon="Chrome"
                                className="hidden md:block text-white/50 w-10 h-10 lg:min-w-20 lg:min-h-20 lg:max-w-30 lg:max-h-30 font-bold"
                              />
                              {language === "en"
                                ? "MARKETING AGENCIES"
                                : "AGENCIAS de MARKETING"}
                            </div>
                          </button>
                        </div>
                        <p className="text-slate-900 md:text-sm text-center lg:px-12">
                          {language === "en"
                            ? "Custom web solutions for digital marketing, SEO, paid advertising, and content strategy."
                            : "Soluciones web personalizadas para marketing digital, SEO, publicidad paga y estrategia de contenido."}
                        </p>
                        {/* Botón PARTICULARES" */}
                        <div className="flex justify-center mt-4">
                          <button
                            className="animate-pulse-delay-3s p-2 uppercase tracking-wider  text-white text-sm lg:text-lg w-auto lg:w-2/3 rounded-[10px] lg:rounded-[30px] bg-fuchsia-900 hover:bg-black hover:text-fuchsia-500 shadow-lg shadow-black font-bold"
                            onClick={handleFreelance}
                          >
                            <div className="flex items-center justify-center">
                              <Lucide
                                icon="User"
                                className="hidden md:block text-white/50 w-10 h-10 lg:min-w-20 lg:min-h-20 lg:max-w-30 lg:max-h-30 font-bold"
                              />
                              {language === "en"
                                ? "BUSINESSES & PROFESSIONALS"
                                : "EMPRESAS & PROFESIONALES"}
                            </div>
                          </button>
                        </div>
                        <p className="text-slate-900 md:text-sm text-center lg:px-12">
                          {language === "en"
                            ? "Web design, updates, and custom features for your business or personal brand."
                            : "Diseño web, actualizaciones y funcionalidades personalizadas para tu negocio o marca personal."}
                        </p>
                        <div className="flex justify-center mt-4">
                          <button
                            className="animate-pulse-delay-3s p-2 uppercase tracking-wider  text-white text-sm lg:text-lg lg:w-2/3 rounded-[10px] lg:rounded-[30px] bg-fuchsia-900 hover:bg-black hover:text-fuchsia-500 shadow-lg shadow-black font-bold"
                            onClick={handleRecruiters}
                          >
                            <div className="flex items-center justify-center">
                              <Lucide
                                icon="Search"
                                className="hidden md:block text-white/50 w-10 h-10 lg:min-w-20 lg:min-h-20 lg:max-w-30 lg:max-h-30 font-bold"
                              />
                              {language === "en"
                                ? "IT RECRUITERS"
                                : "RECLUTADORES IT"}
                            </div>
                          </button>
                        </div>{" "}
                        {/* Botón RECRUITERS" */}
                        <p className="text-slate-900 md:text-sm text-center lg:px-12">
                          {language === "en"
                            ? "Frontend Developer & Web Designer ready to join your team."
                            : "Desarrollador Frontend & Diseñador Web disponible para tu equipo."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Second Column */}
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default Init;
