import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import LanguagesSwitcher from "../../Switchers/Languages.jsx";
import { Lucide } from "../../../utils/index.js";
import image from "../../../assets/Image/init-imagen.png";
import foto from "../../../assets/Image/init-foto.png";
import AnimatedCursor from "react-animated-cursor";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Init = () => {
  const language = useSelector((state) => state.language);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);
  const colors = ["deeppink", "red", "darkcyan"];
  
  const getRandomColor = (currentColor) => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor); // Evita repetir el mismo color consecutivamente
    return newColor;
  };
  const [textColor, setTextColor] = useState("deeppink");
  
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
                        <h1 className="font-semibold text-[25px] md:text-4xl lg:text-5xl leading-[1] mb-6 md:mb-9 ml-2"
                        style={{color: textColor}}
                        >
                          <TypeAnimation
                            key={language}
                                                      
                            sequence={
                              language === "en"
                                ? [() => setTextColor("deeppink"), " Frontend Developer", 2000, , () => setTextColor(getRandomColor(textColor)), " UX Designer", 2000, () => setTextColor(getRandomColor(textColor)), " Web Designer", 2000,]
                                : [() => setTextColor("deeppink"), " Diseñadora Web", 2000, () => setTextColor(getRandomColor(textColor)), " Programadora Web", 2000, () => setTextColor(getRandomColor(textColor)), " Creativa UX", 2000,]
                            }
                            speed={20}
                            deletionSpeed={100}
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
                    
                    
                    
                    {/* Botón whatsapp y Switch de idiomas alineado a la derecha */}
                    <div className="flex justify-end my-5 mr-3">
                      <LanguagesSwitcher />
                    <a
                          href={"https://wa.me/+5493512737199"}
                          target="blank"
                          className="btn btn-whapp  shadow-md shadow-black ml-4"
                          title="Whatsapp"
                        >
                      <FaWhatsapp className="inline-block w-6 h-6 px-0 my-1" />
                      </a>
                      <a
                          href={"https://www.instagram.com/jefa.web"}
                          target="blank"
                          className="text-purple-900 ml-2 mt-2"
                          title="Instagram"
                        >
                      <FaInstagram className="inline-block w-5 h-5" />
                      </a>
                      <a
                          href={"https://www.linkedin.com/in/je-funes/"}
                          target="blank"
                          className="text-purple-900 ml-1 mt-2"
                          title="Linkedin"
                        >
                      <FaLinkedin className="inline-block w-5 h-5" />
                      </a>
                      <a
                          href={"https://www.github.com/JE-FUNES"}
                          target="blank"
                          className="text-purple-900 ml-1 mt-2"
                          title="Github"
                        >
                      <FaGithub className="inline-block w-5 h-5" />
                      </a>
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
                        <p className="font-semibold text-slate-900 md:text-lg lg:mb-5">
                          {language === "en"
                            ? "Choose the best solution for your needs:"
                            : "Elige la mejor solución según tus necesidades:"}
                        </p>
                        {/* Botón Agencias Marketing" */}
                        <div className="flex justify-center">
                          <button
                            className="animate-pulse-delay-3s p-2 uppercase tracking-wider  text-white text-sm lg:text-lg lg:w-2/3 rounded-[10px] lg:rounded-[30px] bg-red-900 hover:bg-black hover:text-red-500 shadow-lg shadow-black font-bold"
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
                            : "Soluciones web y de diseño pensadas para responder a los requerimientos de tu cliente."}
                        </p>
                        {/* Botón PARTICULARES" */}
                        <div className="flex justify-center mt-4">
                          <button
                            className="animate-pulse-delay-3s p-2 uppercase tracking-wider  text-white text-sm lg:text-lg w-auto lg:w-2/3 rounded-[10px] lg:rounded-[30px] bg-cyan-900 hover:bg-black hover:text-cyan-500 shadow-lg shadow-black font-bold"
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
                            : "Diseño web, actualizaciones y funcionalidades personalizadas para tu negocio o marca."}
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
                        <p className="text-slate-900 md:text-sm text-center lg:px-16">
                          {language === "en"
                            ? "Front-end Developer & Web Designer ready to join your team."
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
