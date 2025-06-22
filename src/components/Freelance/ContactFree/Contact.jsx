import React, { useState, useEffect } from "react";
import { ContactData, EspContactData } from "./ContactData.js";
import { useSelector } from "react-redux";
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

    fetch("https://formspree.io/f/mldnbwzb", {
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
      .catch((error) => {
        console.error("Error de red o servidor", error);
        alert("Hubo un problema al conectar con el servidor.");
      });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCalendar = () => {
    // tamaño y otras opciones del pop-up
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
        className={`sm:pt-20 lg:pt-36 lg:pb-10 bg-slate-900 lg:h-full w-screen bg-no-repeat bg-cover lg:bg-bottom ${
          isLargeScreen ? "bg-bg-effect-2" : ""
        }`}
        id="Contact"
      >
        <h3 className="text-slate-100 flex justify-center">
          {language === "en" ? "CONTACT ME" : "CONTACTO"}
        </h3>

        {/* Inicio Formulario*/}

        <div className="container mt-5 p-5 mx-auto border-b-2 border-gray-500 w-2/3 text-white font-semibold text-sm">
          {success ? (
            <p className="text-cyan-200 font-semibold text-lg text-center">
              {language === "en"
                ? "Thanks for your message! I'll get back to you soon."
                : "¡Gracias por tu mensaje! Te responderé pronto."}
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <h4 className="text-cyan-200 flex justify-center text-xl italic mb-2 text-center">
                {language === "en"
                  ? "What is the project you have in mind about?"
                  : "¿de qué trata el proyecto que tienes en mente?"}
              </h4>
              <h5 className="text-gray-300 flex justify-center mb-6 text-center">
                {language === "en"
                  ? "THE MORE COMPLETE YOU SEND ME THE FORM, THE MORE PRECISION I CAN HAVE IN THE PROPOSAL."
                  : "MIENTRAS MÁS COMPLETO ME ENVÍES EL FORMULARIO, MÁS PRECISIÓN PODRÉ TENER EN LA PROPUESTA."}
              </h5>

              {/* Grid principal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Columna 1: DATOS DE CONTACTO */}
                <div className="flex flex-col gap-4">
                  <h6 className="text-cyan-400 text-base mb-1 uppercase tracking-widest">
                    DATOS DE CONTACTO
                  </h6>

                  <label className="flex flex-col">
                    <p>
                      <span className="text-cyan-500 mr-2">*</span>
                      {language === "en" ? "Name:" : "Nombre:"}
                    </p>
                    <input
                      type="text"
                      name="nombre"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                      required
                    />
                  </label>

                  <label className="flex flex-col">
                    <p>
                      <span className="text-cyan-500 mr-2">*</span>Email:
                    </p>
                    <input
                      type="email"
                      name="email"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                      required
                    />
                  </label>

                  <label className="flex flex-col">
                    <p>
                      <span className="text-cyan-500 mr-2">*</span>
                      {language === "en" ? "Phone:" : "Teléfono:"}
                    </p>
                    <input
                      type="text"
                      name="phone"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                      required
                    />
                  </label>

                  <label className="flex flex-col">
                    <p>{language === "en" ? "Country:" : "País:"}</p>
                    <input
                      type="text"
                      name="pais"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                    />
                  </label>
                </div>

                {/* Columna 2: DATOS DE LA EMPRESA */}
                <div className="flex flex-col gap-4">
                  <h6 className="text-cyan-400 text-base mb-1 uppercase tracking-widest">
                    DATOS DE LA EMPRESA
                  </h6>

                  <label className="flex flex-col">
                    <p>
                      <span className="text-cyan-500 mr-2">*</span>
                      {language === "en" ? "Company:" : "Empresa:"}
                    </p>
                    <input
                      type="text"
                      name="empresa"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                      required
                    />
                  </label>

                  <label className="flex flex-col">
                    <p>
                      <span className="text-cyan-500 mr-2">*</span>
                      {language === "en"
                        ? "Company Size:"
                        : "Tamaño de la empresa:"}
                    </p>
                    <select
                      name="tamañoEmpresa"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                      required
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="freelance">Freelance / Individual</option>
                      <option value="pequeña">Pequeña (1 a 10 personas)</option>
                      <option value="mediana">
                        Mediana (10 a 50 personas)
                      </option>
                      <option value="grande">
                        Grande (más de 50 personas)
                      </option>
                    </select>
                  </label>

                  <label className="flex flex-col">
                    <p>
                      <span className="text-cyan-500 mr-2">*</span>
                      {language === "en" ? "Sector:" : "Rubro:"}
                    </p>
                    <select
                      name="sector"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                      required
                    >
                      <option value="">Seleccioná un rubro</option>
                      <option value="servicios">Servicios</option>
                      <option value="tecnologia">Tecnología</option>
                      <option value="salud">Salud</option>
                      <option value="educacion">Educación</option>
                      <option value="arte">Arte y Cultura</option>
                      <option value="otro">Otro</option>
                    </select>
                  </label>

                  <label className="flex flex-col">
                    <p>
                      {language === "en" ? "Website URL:" : "URL de tu web:"}
                    </p>
                    <input
                      type="text"
                      name="url"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                    />
                  </label>

                  <label className="flex flex-col">
                    <p>
                      {language === "en"
                        ? "Do you have branding?"
                        : "¿Tenés identidad visual definida?"}
                    </p>
                    <select
                      name="TieneBrand"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="si">Sí, ya tenemos branding</option>
                      <option value="en-proceso">
                        Estamos trabajando en eso
                      </option>
                      <option value="no">No, aún no tenemos</option>
                    </select>
                  </label>
                </div>

                {/* Columna 3: DATOS PARA EL PROYECTO */}
                <div className="flex flex-col gap-4">
                  <h6 className="text-cyan-400 text-base mb-1 uppercase tracking-widest">
                    DATOS PARA EL PROYECTO
                  </h6>

                  <label className="flex flex-col">
                    <p>
                      {language === "en"
                        ? "Main goal:"
                        : "Objetivo principal del proyecto:"}
                    </p>
                    <select
                      name="objetivo"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                    >
                      <option value="">Seleccioná un objetivo</option>
                      <option value="web">
                        Tener un sitio web institucional
                      </option>
                      <option value="vender">
                        Vender productos o servicios online
                      </option>
                      <option value="marca">Mejorar imagen de marca</option>
                      <option value="automatizar">Automatizar procesos</option>
                      <option value="otro">Otro</option>
                    </select>
                  </label>

                  <label className="flex flex-col">
                    <p>
                      {language === "en"
                        ? "Estimated timeline:"
                        : "Tiempo estimado para el proyecto:"}
                    </p>
                    <select
                      name="tiempoTrabajo"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="urgente">Lo antes posible</option>
                      <option value="1mes">Dentro de 1 mes</option>
                      <option value="3meses">Entre 1 y 3 meses</option>
                      <option value="mas3meses">Más de 3 meses</option>
                    </select>
                  </label>

                  <label className="flex flex-col">
                    <p>
                      {language === "en"
                        ? "Estimated budget:"
                        : "Rango de inversión estimado:"}
                    </p>
                    <select
                      name="price"
                      className="border border-gray-500 bg-transparent p-1 mt-1"
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="menos1000">Menos de USD 1000</option>
                      <option value="1000-3000">USD 1000 a 3000</option>
                      <option value="3000-5000">USD 3000 a 5000</option>
                      <option value="5000+">Más de USD 5000</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Mensaje y Enviar */}
              <div className="mt-8 flex flex-col">
                <label className="flex flex-col">
                  <p>
                    <span className="text-cyan-500 mr-2">*</span>
                    {language === "en" ? "Message:" : "Mensaje:"}
                  </p>
                  <textarea
                    name="message"
                    className="border border-gray-500 bg-transparent p-2 mt-1 h-28 resize-none"
                    placeholder={
                      language === "en"
                        ? "Tell me more about your idea so I can guide you better."
                        : "Contame más sobre tu idea para poder guiarte mejor."
                    }
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="bg-white text-black font-bold py-2 px-4 mt-4 mx-auto"
                >
                  {language === "en" ? "Send" : "Enviar"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Fin Formulario*/}

        <div className="container lg:pt-6 lg:pb-1  mt-0 justify-center ">
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
      </section>
      {/*----- End Contact -----*/}
    </React.Fragment>
  );
};

export default Contact;
