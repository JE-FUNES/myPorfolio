import React, { useState, useEffect } from "react";
import { ServicesData, EspServicesData } from "./ServicesData";
import ServicesModal from "./ServicesModal.js";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

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
        className="sm:py-10 lg:py-8  bg-gradient-to-b from-slate-700 to-slate-900 min-h-screen"
        id="Services"
      >
        <div className="container">
          <div className="lg:pb-20 lg:pt-10 md:pb-10 pb-8">
            <h2 className="text-center text-red-500 fontCaveat font-semibold italic sm:text-2xl lg:text-5xl leading-[1] ">
              {language === "en" ? "Real solutions " : "Soluciones reales "}
              <span className="text-white">
                {language === "en"
                  ? " for real needs"
                  : " para necesidades reales"}
              </span>
            </h2>

            {/* Elementos que aparecen progresivamente */}
            <div className="w-full mt-4 lg:mt-12 flex flex-col items-center text-white">
              <motion.div
                id="segundo4"
                className="flex items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: isDesktop ? 3 : 1,
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <p className="text-center text-xl max-w-4xl mx-auto mb-10">
                  Ya sea que necesites crear tu web desde cero o
                  <br />
                  transformar una que no está dando resultados,
                  <br />
                  <strong className="text-red-500">
                    {" "}
                    mi enfoque se adapta a tu negocio{" "}
                  </strong>
                  .
                  <br />
                  Diseño y desarrollo páginas que no solo se ven bien,
                  <br />
                  sino que también funcionan y generan resultados concretos.
                </p>
              </motion.div>
            </div>

            {/* Servicios que aparecen en el segundo 10 */}

            <div
              id="segundo10"
              className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 w-full sm:mt-2 lg:mt-6 px-20 cursor-pointer"
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
                      className={`flex border-2 border-white/70 p-3 bg-cover bg-center bg-no-repeat text-white hover:border-red-500 cursor-pointer`}
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backgroundBlendMode: "overlay",
                      }}
                    >
                      <div
                        className="flex justify-center items-center cursor-pointer h-[70px] w-[70px] border-2 text-[32px] border-white/70  text-white hover:text-red-500"
                        key={service.key}
                      >
                        {service.Logo}
                      </div>
                      <div className="flex-1 pl-5">
                        <h5 className="mb-3 font-semibold lg:text-2xl md:text-xl text-lg text-white hover:text-red-500">
                          {service.Heding}
                        </h5>
                        <p className="text-white/70 text-lg sm:leading-none lg:leading-1">
                          {service.Detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a href="#Contact">
              <button className="btn-red px-4 text-white hover:text-black text-lg">
                {language === "en" ? "Let´s do it together! Contact me" : "¡Hagámoslo juntos! Contactame"}
                
              </button>
            </a>
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
