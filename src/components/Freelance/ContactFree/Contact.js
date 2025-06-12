import React, { useState, useEffect } from "react";
import { ContactData, EspContactData } from "./ContactData";
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
        <h4 className="text-slate-100 flex justify-center text-lg italic mt-5 sm:ml-4 lg:ml-0">
          {language === "en"
            ? "Tell me, what is the project you have in mind about?"
            : "Contame, ¿de qué trata el proyecto que tienes en mente?"}
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
                  {/* Nombre */}
                  <label className="flex flex-col">
                    {language === "en" ? "Name:" : "Nombre:"}
                    <input
                      type="text"
                      name="nombre"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      placeholder={
                        language === "en" ? "your name" : "tu nombre"
                      }
                      required
                    />
                  </label>

                  {/* Empresa */}
                  <label className="flex flex-col">
                    {language === "en" ? "Company:" : "Empresa:"}
                    <input
                      type="text"
                      name="empresa"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      placeholder={
                        language === "en"
                          ? "name of the company, business or brand"
                          : "nombre de la empresa, comercio o marca"
                      }
                      required
                    />
                  </label>

                  {/* Email */}
                  <label className="flex flex-col">
                    Email:
                    <input
                      type="email"
                      name="email"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      placeholder={
                        language === "en"
                          ? "mail where to contact you"
                          : "mail donde contactarte"
                      }
                      required
                    />
                  </label>

                  {/* Teléfono */}
                  <label className="flex flex-col">
                    {language === "en" ? "Phone:" : "Teléfono:"}
                    <input
                      type="text"
                      name="phone"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      placeholder={
                        language === "en"
                          ? "country code + characteristic + number"
                          : "codigo país + característica + número"
                      }
                      required
                    />
                  </label>

                  {/* Tamaño empresa */}
                  <label className="flex flex-col">
                    {language === "en" ? "Name:" : "Tamaño de la Empresa:"}
                    <select
                      name="tamañoEmpresa"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      required
                    >
                      <option value="1-3" className="bg-black">
                        {language === "en" ? "1 - 3 people" : "1 - 3 personas"}
                      </option>
                      <option value="4-10" className="bg-black">
                        {language === "en"
                          ? "4 - 10 people"
                          : "4 - 10 personas"}
                      </option>
                      <option value="+10" className="bg-black">
                        {language === "en" ? "+ 10 people" : "+ 10 personas"}
                      </option>
                    </select>
                  </label>

                  {/* Rubro */}
                  <label className="flex flex-col">
                    {language === "en" ? "Sector or Area:" : "Rubro o Área:"}
                    <select
                      name="sector"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      required
                    >
                      <option value="comercio" className="bg-black">
                        {language === "en"
                          ? "Retail / Store"
                          : "Comercio / Tienda"}
                      </option>
                      <option value="gastronomia" className="bg-black">
                        {language === "en" ? "Food & Beverage" : "Gastronomía"}
                      </option>
                      <option value="moda" className="bg-black">
                        {language === "en"
                          ? "Fashion & Accessories"
                          : "Moda y accesorios"}
                      </option>
                      <option value="salud" className="bg-black">
                        {language === "en" ? "Healthcare / Wellness" : "Salud"}
                      </option>
                      <option value="educacion" className="bg-black">
                        {language === "en"
                          ? "Education / Courses"
                          : "Educación / Cursos"}
                      </option>
                      <option value="tecnologia" className="bg-black">
                        {language === "en"
                          ? "Technology / Startups"
                          : "Tecnología / Startups"}
                      </option>
                      <option value="servicios" className="bg-black">
                        {language === "en"
                          ? "Professional Services"
                          : "Servicios profesionales"}
                      </option>
                      <option value="belleza" className="bg-black">
                        {language === "en"
                          ? "Beauty / Aesthetics"
                          : "Estética / Belleza"}
                      </option>
                      <option value="construccion" className="bg-black">
                        {language === "en"
                          ? "Construction / Real Estate"
                          : "Construcción / Inmobiliaria"}
                      </option>
                      <option value="arte" className="bg-black">
                        {language === "en"
                          ? "Art / Photography / Music"
                          : "Arte / Fotografía / Música"}
                      </option>
                      <option value="turismo" className="bg-black">
                        {language === "en"
                          ? "Tourism / Hospitality"
                          : "Turismo / Hotelería"}
                      </option>
                      <option value="eventos" className="bg-black">
                        {language === "en"
                          ? "Events / Rentals / Planning"
                          : "Eventos / Organización / Alquileres"}
                      </option>
                      <option value="ONG" className="bg-black">
                        {language === "en"
                          ? "Non-profit / NGO"
                          : "Organización sin fines de lucro"}
                      </option>
                      <option value="otro" className="bg-black">
                        {language === "en" ? "Other" : "Otro"}
                      </option>
                    </select>
                  </label>

                  {/* País */}
                  <label className="flex flex-col">
                    {language === "en" ? "Country:" : "País:"}
                    <input
                      type="text"
                      name="pais"
                      placeholder={
                        language === "en"
                          ? "for example: Miami, U.S.A."
                          : "Por ejemplo: Argentina"
                      }
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                    />
                  </label>
                </div>

                {/* Columna derecha */}
                <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                  {/* web */}
                  <label className="flex flex-col">
                    {language === "en"
                      ? "Already have a website? Share its URL:"
                      : "¿Ya tienes una página web? Comparte su URL:"}
                    <input
                      type="text"
                      name="url"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                      placeholder={
                        language === "en"
                          ? "https://example.com"
                          : "https://ejemplo.com"
                      }
                    />
                  </label>

                  {/* Objetivo */}
                  <label className="flex flex-col">
                    {language === "en"
                      ? "What is the main objective of the site or project you need?"
                      : "¿Cuál es el objetivo principal del sitio o proyecto que necesitas?"}
                    <select
                      name="objetivo"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                    >
                      <option value="informarProd-Serv" className="bg-black">
                        {language === "en"
                          ? "Inform / Show products or services"
                          : "Informar / Mostrar productos o servicios"}
                      </option>
                      <option value="Vender" className="bg-black">
                        {language === "en" ? "Sell online" : "Vender online"}
                      </option>
                      <option value="GenerarContactos" className="bg-black">
                        {language === "en"
                          ? "Generate contacts or queries"
                          : "Generar contactos o consultas"}
                      </option>
                      <option value="portfolio" className="bg-black">
                        {language === "en"
                          ? "Show portfolio / Personal brand"
                          : "Mostrar portfolio / Marca personal"}
                      </option>
                      <option value="other" className="bg-black">
                        {language === "en"
                          ? "Other purpose"
                          : "Otro propoósito"}
                      </option>
                    </select>
                  </label>

                  {/* branding */}
                  <label className="flex flex-col">
                    {language === "en"
                      ? "Do you have a defined branding or visual identity?"
                      : "¿Cuentas con Branding o Identidad visual definida?"}
                    <select
                      name="TieneBrand"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                    >
                      <option value="si" className="bg-black">
                        {language === "en"
                          ? "Yes, I have everything defined"
                          : "Sí, tengo todo definido"}
                      </option>
                      <option value="soloLogo" className="bg-black">
                        {language === "en"
                          ? "I have a logo but not a complete visual identity"
                          : "Tengo logo pero no identidad visual completa"}
                      </option>
                      <option value="no" className="bg-black">
                        {language === "en"
                          ? "No, I need help with that."
                          : "No, necesito ayuda con eso"}
                      </option>
                    </select>
                  </label>

                  {/* tiempos */}
                  <label className="flex flex-col">
                    {language === "en"
                      ? "When do you need to have the site, store or project ready?"
                      : "¿Para cuándo necesitas tener listo el sitio, tienda o proyecto?"}
                    <select
                      name="tiermpoTrabajo"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                    >
                      <option value="soon" className="bg-black">
                        {language === "en"
                          ? "As soon as possible"
                          : "Lo antes posible"}
                      </option>
                      <option value="1month" className="bg-black">
                        {language === "en" ? "1 month" : "1 mes"}
                      </option>
                      <option value="2-3months" className="bg-black">
                        {language === "en" ? "2-3 months" : "2-3 meses"}
                      </option>
                      <option value="sinApuro" className="bg-black">
                        {language === "en"
                          ? "No rush / Under evaluation"
                          : "Sin apuro / En evaluación"}
                      </option>
                    </select>
                  </label>

                  {/* precio */}
                  <label className="flex flex-col">
                    {language === "en"
                      ? "What investment range do you have in mind?"
                      : "¿Cuál es el rango de inversión que tienes en mente?"}
                    <select
                      name="price"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1"
                    >
                      <option value="USD300" className="bg-black">
                        {" "}
                        USD 300
                      </option>
                      <option value="USD300-1000" className="bg-black">
                        USD 300 / 1000
                      </option>
                      <option value="+USD1000" className="bg-black">
                        + USD 1000
                      </option>
                      <option value="NoSabe" className="bg-black">
                        {language === "en"
                          ? "I'm not sure, I'm hoping for a recommendation."
                          : "No estoy seguro, espero recomendación"}
                      </option>
                    </select>
                  </label>

                  {/*Mensaje */}
                  <label className="flex flex-col h-full">
                    {language === "en" ? "Message:" : "Mensaje:"}
                    <textarea
                      name="message"
                      className="border-2 border-gray-500 bg-transparent p-1 mt-1 h-28 resize-none"
                      placeholder={
                        language === "en"
                          ? "Please expand here with any information that will help me interpret your idea, so I can advise you as you deserve."
                          : "Amplía aquí con cualquier información que me ayude a interpretar tu idea, y poder asesorarte como te mereces."
                      }
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
