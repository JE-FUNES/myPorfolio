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
  const [isInView, setIsInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const closeComponent = () => {
    setSelectedService(null);
  };

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Consider desktop if width >= 1024px
    };

    checkScreenSize(); // Check on initial render
    window.addEventListener("resize", checkScreenSize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <React.Fragment>
      {/*----- Start Services -----*/}
      <section
        className="sm:py-10 lg:py-8 mt-2  bg-bg-free bg-center bg-no-repeat bg-fixed bg-cover bg-blend-darken bg-slate-700/80 min-h-screen"
        id="Services"
      >
        <div className="container">
          <div className="lg:pb-20 lg:pt-5 md:pb-10 pb-8">
            <motion.div
              className="flex flex-col items-center justify-center p-3 bg-black/50 lg:grid lg:grid-cols-10 lg:gap-1"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {/* Sección izquierda */}
              <div className="flex justify-center lg:justify-end lg:col-span-1 mb-2 lg:mb-0">
                <Lucide
                  icon="UserX"
                  className="sm:w-8 sm:h-8 lg:w-12 lg:h-12 border-2 p-1 border-white rounded-full text-white animate-spin360"
                />
              </div>

              {/* Sección central fija */}
              <div className="flex flex-col items-center lg:items-end lg:col-span-4 text-center lg:text-right mb-4 lg:mb-0">
                <h3 className="text-fuchsia-500 sm:text-xl lg:text-6xl">
                  {language === "en" ? "T" : "C"}
                  <span className="text-fuchsia-500 sm:text-lg lg:text-4xl">
                    {language === "en" ? "ired " : "ansado "}
                  </span>
                  <span className="text-white sm:text-lg lg:text-2xl underline mr-2">
                    {language === "en" ? "of" : "de"}
                  </span>
                  <span className="text-fuchsia-500 sm:text-xl lg:text-6xl">
                    C
                  </span>
                  <span className="text-fuchsia-500 sm:text-lg lg:text-4xl">
                    {language === "en" ? "hanging " : "ambiar de "}
                  </span>
                </h3>
              </div>

              {/* Sección TypingEffect */}
              <div className="flex justify-center lg:justify-start lg:col-span-3 mb-4 lg:mb-0">
                <TypingEffect
                  text={text}
                  speed={100}
                  eraseDelay={5000}
                  typingDelay={300}
                  className="text-white sm:text-2xl sm:font-semibold lg:font-normal lg:text-5xl sm:-mt-4 lg:mt-0 lg:pt-3 lg:ml-4"
                />
              </div>

              {/* Sección derecha - Texto estático */}
              <div className="flex justify-center lg:justify-start lg:col-span-2">
                <h3 className="text-white sm:text-lg lg:text-2xl text-center sm:-mt-5 lg:mt-0 lg:text-left">
                  {language === "en" ? "for every " : "en cada "}
                  <span className="text-white sm:text-lg lg:text-2xl underline">
                    {language === "en" ? "project" : "proyecto"}
                  </span>
                  <span className="text-fuchsia-500 sm:text-2xl sm:ml-2 lg:text-3xl">
                    ?
                  </span>
                </h3>
              </div>
            </motion.div>

            {/* Elementos que aparecen progresivamente */}
            <div className="w-full mt-4 lg:mt-6 lg:pl-10 flex flex-col items-start text-white">
              <motion.div
                id="segundo4"
                className="flex items-start"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: isDesktop ? 3 : 1,
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <Lucide
                  icon="Target"
                  className="sm:w-4 sm:h-4 lg:w-6 lg:h-6 mr-2 text-fuchsia-500"
                />
                <h2 className="sm:text-lg lg:text-3xl -mt-2">
                  {language === "en" ? "Let's build a " : "Construyamos una "}
                  <span className="font-semibold sm:text-xl lg:text-4xl italic">
                    {language === "en"
                      ? "trustworthy partnership."
                      : "alianza confiable."}
                  </span>
                </h2>
              </motion.div>

              <motion.div
                id="segundo6"
                className="flex items-start lg:mt-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: isDesktop ? 4 : 2,
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <Lucide
                  icon="Target"
                  className="sm:w-4 sm:h-4 lg:w-6 lg:h-6 lg:mt-1 mr-2 text-fuchsia-500"
                />
                <h2 className="sm:text-lg lg:text-3xl sm:text-white sm:-mt-1 lg:-mt-1">
                  {language === "en"
                    ? "Let code be a "
                    : "Que el código sea una "}
                  <span className="font-semibold sm:text-xl lg:text-4xl italic">
                    {language === "en" ? "solution" : "solución"}
                  </span>
                  <span>
                    {language === "en"
                      ? ", not an obstacle."
                      : ", no un obstáculo."}
                  </span>
                </h2>
              </motion.div>

              <motion.div
                id="segundo8"
                className="w-full sm:mt-8 lg:mt-16 flex flex-col items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: isDesktop ? 6 : 3,
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <h1 className="text-white/70 sm:text-2xl lg:text-5xl font-semibold">
                  {language === "en"
                    ? "I OFFER YOU MY SERVICES"
                    : "TE OFREZCO MIS SERVICIOS"}
                </h1>
              </motion.div>
            </div>

            {/* Servicios que aparecen en el segundo 10 */}

            <div
              id="segundo10"
              className="grid lg:grid-cols-3 md:grid-cols-3 gap-2 w-full sm:mt-2 lg:mt-6"
            >
              {(language === "en" ? ServicesData : EspServicesData).map(
                (service, index) => (
                  <motion.div
                    key={index}
                    className="hover:shadow-black transition-all lg:duration-300 lg:ease-in"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: isDesktop ? service.delay : service.delayM,
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >
                    <div
                      className={`flex border-2 border-white/70 p-3 bg-cover bg-center bg-no-repeat cursor-pointer text-white hover:text-fuchsia-700`}
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backgroundBlendMode: "overlay",
                      }}
                      onClick={() => setSelectedService(service)}
                    >
                      <div
                        className="flex justify-center items-center cursor-pointer h-[70px] w-[70px] border-2 text-[32px] border-white/70  text-fuchsia-200"
                        key={service.key}
                      >
                        {service.Logo}
                      </div>
                      <div className="flex-1 pl-5">
                        <h5 className="mb-3 font-semibold lg:text-2xl md:text-xl text-lg text-fuchsia-200">
                          {service.Heding}
                        </h5>
                        <p className="text-white/70 text-lg sm:leading-none lg:leading-1">
                          {service.Detail}
                        </p>
                      </div>
                      <Lucide
                        icon="MoreHorizontal"
                        title={language === "en" ? "see more" : "ver más"}
                        className="top-0 right-0 p-1 border-2 border-white/70 ronded-full text-white/70 m-1 w-6 h-6"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
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
