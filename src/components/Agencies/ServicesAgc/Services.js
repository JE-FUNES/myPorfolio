import React, { useState, useEffect } from "react";
import { ServicesData, EspServicesData } from "./ServicesData";
import ServicesModal from "./ServicesModal.js";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; 
import TypingEffect from "react-typing-effect";

const Services = () => {
  const language = useSelector((state) => state.language);
  const text = language === "en" ? "D E V E L O P E R " : "DESARROLLADOR ";
  const [selectedService, setSelectedService] = useState(null);


  const closeComponent = () => {
    setSelectedService(null);
  };

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById("Services");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% de la sección está visible
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <React.Fragment>
      {/*----- Start Services -----*/}
      <section
        className="sm:py-10 lg:py-10 bg-bg-mkn bg-center bg-no-repeat bg-cover bg-slate-700/80 min-h-screen"
        id="Services"
      >
        <div className="container">
          <div className="lg:pb-20 lg:pt-5 md:pb-10 pb-8">
            <motion.div
              className="lg:grid lg:grid-cols-10 lg:gap-1 lg:col-span-10 flex flex-nowrap items-center justify-center p-3 bg-black/50"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              {/* Columna izquierda*/}
              <div className="lg:col-span-1 flex flex-col justify-end items-end">
                <Lucide
                  icon="UserX"
                  className="lg:w-12 lg:h-12 border-2 lg:p-1 border-white rounded-full mx-2 text-white animate-spin360"
                />
              </div>
              {/* Columna central fija*/}
              <div className="lg:col-span-4 flex flex-col justify-end items-end mr-5">
                <h3 className="text-red-500 text-6xl">
                  {language === "en" ? "T" : "C"}
                  <span className="text-red-500 text-4xl">
                    {language === "en" ? "ired " : "ansado "}
                  </span>
                  <span className="text-white text-2xl underline mr-2">
                    {language === "en" ? "of" : "de"}
                  </span>
                  <span className="text-red-500 text-6xl ">C</span>
                  <span className="text-red-500 text-4xl">
                    {language === "en" ? "hanging " : "ambiar de "}
                  </span>
                </h3>
              </div>
              {/* Columna media maquina escribir */}
              <div className="lg:col-span-3 flex flex-col justify-start items-start mt-4">
                <TypingEffect
                  text={text}
                  speed={200}
                  eraseDelay={5000}
                  typingDelay={300}
                  className="text-white text-5xl"
                />
              </div>
              {/* Columna derecha - Texto estático */}
              <div className="lg:col-span-2 flex flex-col justify-start items-start mt-4">
                <h3 className="text-white text-2xl">
                  {language === "en" ? "for every " : "en cada "}

                  <span className="text-white text-2xl underline">
                    {language === "en" ? "project" : "proyecto"}
                  </span>
                  <span className="text-red-500 text-3xl">
                    {language === "en" ? "?" : "?"}
                  </span>
                </h3>
              </div>
            </motion.div>

            {/* Elementos que aparecen progresivamente */}
            <div className="w-full mt-4 pl-10 flex flex-col items-start text-white">
              <motion.div
                id="segundo4"
                className="flex items-start"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 4, duration: 1, ease: "easeOut" }}
              >
                <Lucide icon="Target" className="w-4 h-4 mr-2 text-red-500" />
                <h2 className="text-lg -mt-1">
                  {language === "en" ? "Let's build a " : "Construyamos una "}
                  <span className="font-semibold">
                    {language === "en"
                      ? "trustworthy partnership."
                      : "alianza confiable."}
                  </span>
                </h2>
              </motion.div>

              <motion.div
                id="segundo6"
                className="flex items-start"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 6, duration: 1, ease: "easeOut" }}
              >
                <Lucide icon="Target" className="w-4 h-4 mr-2 text-red-500" />
                <h2 className="text-lg bg-red-500/50 mt-1">
                  {language === "en"
                    ? "Let code be a solution, not an obstacle."
                    : "Que el código sea una solución, no un obstáculo."}
                </h2>
              </motion.div>

              <motion.div
                id="segundo8"
                className="w-full mt-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 8, duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-white text-5xl font-semibold">
                  {language === "en"
                    ? "I OFFER YOU MY SERVICES"
                    : "TE OFREZCO MIS SERVICIOS"}
                </h1>
              </motion.div>
            </div>

            {/* Servicios que aparecen en el segundo 10 */}

            <div
              id="segundo10"
              className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 w-full mt-6"
            
            >
              {(language === "en" ? ServicesData : EspServicesData).map(
                (service, index) => (
                  <motion.div
                    key={index}
                    className="hover:shadow-black transition-all duration-300 ease-in"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: service.delay, duration: 3, ease: "easeOut" }}
                  >
                    <div
                      className={`flex border-2 border-slate-900 p-5 bg-cover bg-center bg-no-repeat cursor-pointer hover:text-red-700`}
                      style={{
                        backgroundImage: `url(${service.imgDetail})`,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        backgroundBlendMode: "overlay",
                      }}
                      onClick={() => setSelectedService(service)}
                    >
                      <div
                        className="flex justify-center items-center cursor-pointer h-[70px] w-[70px] border-2 text-[32px] border-slate-900"
                        key={service.key}
                      >
                        {service.Logo}
                      </div>
                      <div className="flex-1 pl-5">
                        <h5 className="mb-3 font-semibold lg:text-2xl md:text-xl text-lg">
                          {service.Heding}
                        </h5>
                        <p className="text-black text-lg">{service.Detail}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
          {/* Contenedor de los enlaces */}

          <motion.div
            id="segundo12"
            className="sm:-top-8 lg:-top-0 lg:-mt-16 flex justify-end space-x-2 z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 12, duration: 1, ease: "easeOut" }}
          >
            <a href="#Portfolio">
              <div className="btn btn-red rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer px-4 py-2">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ? "Go on" : "Sigamos"}
              </div>
            </a>
            <a href="#Home">
              <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                <Lucide icon="ArrowUp" />
              </div>
            </a>
          </motion.div>
        </div>
      </section>
      {/*----- End Services -----*/}
      {selectedService && (
        <ServicesModal service={selectedService} onClose={closeComponent} />
      )}
    </React.Fragment>
  );
};

export default Services;
