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

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //const [errors, setErrors] = useState({});
  //const dispatch = useDispatch();

  //const navigate = useNavigate();

  /*const [formData, setFormData] = useState({
    name: "",
    email: "",
    likedPage: 4, // Valor por defecto de 4 estrellas
    reason: "",
  }); */

  /* const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "likedPage") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      if (name === "name" && value.length > 30) {
        return;
      }
      if (name === "reason" && value.length > 200) {
        return;
      }
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Validación de errores
    const newErrors = { ...errors };
    if (name === "name" && value.trim() === "") {
      newErrors[name] = "Name is required";
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  }; 

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      likedPage: rating,
    });
  };

  const handleFormSubmit = () => {
    dispatch(submitContactForm(formData));
    alert("Form Send!");
    navigate("/home");
  }; */

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
      <section id="Contact">
        <div
          className="sm:pt-20 lg:pb-20 lg:pt-32 w-screen bg-bg-effect-2red bg-no-repeat bg-cover lg:bg-bottom relative"
        >
          {/* 🔹 Capa oscura semitransparente */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* 🔹 Contenido (encima del fondo y la capa oscura) */}
          <div className="container relative z-10 lg:pt-24 lg:pb-24 mt-1 justify-center">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="lg:max-w-[410px] w-full lg:ml-5 pt-[50px] lg:pt-0">
                <div id="seccionTitulo" className="w-full z-40 mb-10">
                  <h3 className="text-slate-100 flex justify-center">
                    {language === "en" ? "CONTACT ME" : "CONTACTAME"}
                  </h3>
                  <h4 className="text-slate-100 flex justify-center text-lg italic lg:mt-10 sm:mt-5 sm:ml-4 lg:ml-0">
                    {language === "en"
                      ? "I'm ready to take on new challenges and contribute my skills."
                      : "Lista para sumarme a nuevos desafíos y contribuir con mis habilidades."}
                  </h4>
                  <h4 className="text-slate-100 flex justify-center font-bold text-lg sm:mt-4 lg:mt-1">
                    {language === "en"
                      ? "Shall we schedule an interview?"
                      : "¿Agendamos una entrevista?"}
                  </h4>
                </div>

                {/* 🔹 Lista de contactos */}
                <ul>
                  {(language === "en" ? ContactData : EspContactData).map((e) => (
                    <li className="relative flex mb-6 border" key={e.key}>
                      <div className={`inline-flex items-center justify-center text-2xl h-14 w-14 ${e.Bg_color}`}>
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
                  ))}
                </ul>

                {/* 🔹 Botón de entrevista */}
                <div className="border px-5 py-11 justify-items-center align-center">
                  <h6
                    className="text-[28px] font-semibold text-purple-50 text-center hover:text-yellow-500 cursor-pointer animate-pulse"
                    onClick={handleCalendar}
                  >
                    {language === "en" ? "SCHEDULE AN INTERVIEW" : "AGENDA UNA ENTREVISTA"}
                  </h6>
                </div>
              </div>
            </motion.div>

            {/* 🔹 Botón de volver arriba */}
            <div className="relative flex justify-end space-x-2 bottom-0">
              <a href="#Curriculum">
                <div className="btn-white rounded-full font-bold flex justify-center items-center cursor-pointer ml-2">
                  <Lucide icon="ArrowUp" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
