import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import LanguagesSwitcher from "../../Switchers/Languages.jsx";
import { Lucide } from "../../../utils/index.js";
import image from "../../../assets/Image/init-imagen.png";
import foto from "../../../assets/Image/init-foto.png";
import AnimatedCursor from "react-animated-cursor";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const InProgress = () => {
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
    setIsOpen(false);
  };

  return (
    <React.Fragment>
     {isOpen && (
  <div
    className="fixed inset-0 z-[99999] flex items-center justify-center"
    id="InProgress"
  >
    {/* Modal centrado con tamaño reducido */}
    <div className="relative bg-purple-900/80 w-2/3 h-1/2 rounded-xl shadow-lg flex flex-col justify-center items-center p-8 text-white">
      
      {/* Cursor animado solo si hay pantalla grande */}
      {isLargeScreen && (
        <AnimatedCursor
          innerSize={20}
          outerSize={15}
          color="255, 195, 0"
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      )}

      {/* Texto centrado */}
      <h3 className="text-2xl font-bold text-center">
        {language === "en"
          ? "THIS SECTION IS IN PROGRESS"
          : "ESTA SECCIÓN ESTÁ EN PROGRESO"}
      </h3>
      <p className="mt-5 text-lg text-center">
        {language === "en"
          ? "BUT YOU CAN STILL BROWSE IT."
          : "pero aún así, puedes navegarla."}
      </p>
      <button
        className=" bg-orange-600 hover:bg-orange-700 p-2 mt-10 m-5 w-64"
        onClick={handleOnClose}
      >
      
        {language === "en"
          ? "CLOSE"
          : "CERRAR"}
      </button>
    </div>
  </div>
)}


    </React.Fragment>
  );
};

export default InProgress;
