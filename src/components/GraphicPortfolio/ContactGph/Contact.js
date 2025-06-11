import React, { useState, useEffect } from "react";
import { ContactData, EspContactData } from "./ContactData";
//import { submitContactForm } from "../../../redux/actions";
import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";
import contact_bg from "../../../assets/Image/contact-bg.png";
import { motion } from "motion/react";
import { Lucide } from "../../../utils/index.js";

const Contact = () => {
  const language = useSelector((state) => state.language);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);
  const [success, setSuccess] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const form = e.target;
      const data = new FormData(form);
  
      console.log("Enviando datos del formulario...");
  
      fetch("https://formspree.io/f/xanjonjb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          console.log("Respuesta recibida: ", response);
          if (response.ok) {
            console.log("Form enviado exitosamente");
            setSuccess(true);
            form.reset();
          } else {
            alert("Error al enviar el formulario.");
          }
        })
        .catch((error) => 
          {
  console.error("Error de red o servidor", error);
            alert("Hubo un problema al conectar con el servidor.")
          }
        );
    };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const handleCalendar = () => {
    // Especifica el tamaño y otras opciones del pop-up
    const width = 800;
    const height = 500;
    const left = (window.innerWidth - width) / 2;
    const top = 180;

    const options = `width=${width},height=${height},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=${left},top=${top}`;

    // Abre el pop-up
    window.open(
      "https://calendar.app.google/VjrtmJCxjv8H4Rfo6",
      "_blank",
      options
    );
  };

  return (
    <React.Fragment>
      {/*----- Start Contact -----*/}
      <section
        className="pt-0 "
        id="Contact"
      >
        <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center">

         {/* Video de fondo */}
         <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/video_graficos.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70">
        <h3 className="text-slate-100 flex justify-center mt-40">
          {language === "en" ? "CONTACT ME" : "CONTACTAME"}
        </h3>
        <h4 className="text-slate-100 flex justify-center text-lg italic sm:mt-5 sm:ml-4 lg:ml-0 lg:mb-16">
          {language === "en"
            ? "and I will gladly answer your questions."
            : "y con gusto resuelvo tus dudas."}
        </h4>

         {/* Formulario de contacto */}

         <div className="container mt-10 p-5 mx-auto border-2 border-gray-500 w-1/2 text-white font-semibold text-sm">
          {success ? (
            <p className="text-cyan-200 font-semibold text-lg text-center">
              {language === "en"
                ? "Thanks for your message! I'll get back to you soon."
                : "¡Gracias por tu mensaje! Te responderé pronto."}
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 gap-4">
                {/* Columna izquierda */}
                <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                  <label className="flex flex-col">
                    {language === "en" ? "Name:" : "Nombre:"}
                    <input
                      type="text"
                      name="name"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      required
                    />
                  </label>

                  <label className="flex flex-col">
                    Email:
                    <input
                      type="email"
                      name="email"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      required
                    />
                  </label>
                </div>

                {/* Columna derecha */}
                <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                  <label className="flex flex-col h-full">
                    {language === "en" ? "Message:" : "Mensaje:"}
                    <textarea
                      name="message"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1 h-28 resize-none"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="bg-white text-black font-bold py-2 px-4 mt-2 self-start"
                  >
                    {language === "en" ? "Send" : "Enviar"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Fin formulario */}
        
        <div className="container lg:pt-6 lg:pb-1  mt-0 justify-center">
          <div className="grid grid-cols-12">
            {/* start Image  */}

            <div className="col-span-12 lg:col-span-6 ">
              <div className="lg:max-w-[410px] w-full lg:ml-auto pt-0">
                <div className="lg:pb-10 sm:-mb-5 lg:mb-0">
                  <img
                    className="w-full border"
                    src={contact_bg}
                    title="This is me..."
                    alt="Me"
                    />
                </div>
              </div>
            </div>
            {/* End Image */}
            {/* Start Contact */}
            <motion.div
              className="col-span-12 lg:col-span-6 flex"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="lg:max-w-[410px] w-full lg:ml-5 pt-[50px] lg:pt-0">
                <ul>
                  {language === "en"
                    ? ContactData.map((e, key) => {
                      return (
                        <li className="relative flex mb-6 border" key={e.key}>
                            <div
                              className={`inline-flex items-center justify-center text-2xl h-14 w-14 ${e.Bg_color}`}
                              >
                              {e.icon}
                            </div>
                            <div className="flex-1 pl-4">
                              <h5
                                className="mx-2 my-3 sm:text-xs md:text-sm font-normal uppercase tracking-wider text-slate-300 cursor-pointer"
                                title={e.hoverTitle}
                                onClick={e.link}
                              >
                                {e.name}
                              </h5>
                              <p
                                className="mx-2 my-3 font-medium sm:text-sm md:text-xl text-white max-w-[250px] cursor-pointer"
                                title={e.hoverTitle}
                                onClick={e.link}
                                >
                                {e.contact}
                              </p>
                            </div>
                          </li>
                        );
                      })
                      : EspContactData.map((e, key) => {
                        return (
                          <li className="relative flex mb-6 border" key={e.key}>
                            <div
                              className={`inline-flex items-center justify-center text-2xl h-14 w-14 ${e.Bg_color}`}
                            >
                              {e.icon}
                            </div>
                            <div className="flex-1 pl-4">
                              <h5
                                className="mx-2 my-3 sm:text-xs md:text-sm font-normal uppercase tracking-wider text-slate-300 cursor-pointer"
                                title={e.hoverTitle}
                                onClick={e.link}
                                >
                                {e.name}
                              </h5>
                              <p
                                className="mx-2 my-3 font-medium md:text-xl sm:text-sm text-white max-w-[250px] cursor-pointer"
                                title={e.hoverTitle}
                                onClick={e.link}
                                >
                                {e.contact}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                </ul>
                <div className="border px-5 py-11 justify-items-center align-center">
                  <h6
                    className="text-[28px] font-semibold text-purple-50 text-center hover:text-yellow-500 cursor-pointer animate-pulse"
                    onClick={handleCalendar}
                    >
                    {language === "en"
                      ? "SCHEDULE AN INTERVIEW"
                      : "AGENDA UNA ENTREVISTA"}
                  </h6>
                </div>
              </div>
            </motion.div>
            {/* End Contact */}
                      </div>
          </div>
          {/* Botones debajo alineados a la derecha */}
                        <div className="relative flex justify-end space-x-2 bottom-0">
                          
                          <a href="#Github">
                            <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                              <Lucide icon="ArrowUp" />
                            </div>
                          </a>
                        </div>
        </div>
                      </div>
      </section>
      {/*----- End Contact -----*/}
    </React.Fragment>
  );
};

export default Contact;
