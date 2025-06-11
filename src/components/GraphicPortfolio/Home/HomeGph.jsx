import React, { useState, useEffect } from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import AnimatedCursor from "react-animated-cursor";
import { motion } from "motion/react";
import InProgress from "./InProgress.js";

const HomeGph = () => {
  const language = useSelector((state) => state.language);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { key: "illustrations", es: "ILUSTRACIONES", en: "ILLUSTRATIONS", link: "#Illustrations" },
    { key: "patterns", es: "PATRONES", en: "PATTERNS", link: "#Patterns" },
    { key: "vectors", es: "VECTORES", en: "VECTORS", link: "#Vectors" },
    { key: "backgrounds", es: "FONDOS", en: "BACKGROUNDS", link: "#Backgrounds" },
    { key: "combos", es: "COMBOS", en: "COMBOS", link: "#Combos" },
    { key: "photos", es: "FOTOGRAFÍAS", en: "PHOTOGRAPHS", link: "#Photos" },
  ];

  return (
    <>
      <div id="InProgress">
        <InProgress />
      </div>
    <React.Fragment>
      {/*----- Start Home -----*/}
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
      <section className="pt-0" id="Home">
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
          <div className="absolute top-0 left-0 w-full h-full bg-amber-900/20"></div>

          {/* Grilla de categorías sobre el video */}
          <div className="relative z-10 grid grid-cols-3 grid-rows-2 gap-6 p-6 max-w-5xl lg:pt-16">
            {categories.map((cat) => (
                <a href={`${cat.link}`}>
              <div key={cat.key} className="flex flex-col items-center text-white">
                <div className="w-72 h-72 bg-transparent rounded-md mb-2 flex items-center justify-center border-white border-spacing-2 border-2 shadow-sm shadow-amber-700 p-2">
                  {/* Imagen temporal de reemplazo */}
                  <img
                    src={`/images/categories/${cat.key}.png`}
                    alt={language === "es" ? cat.es : cat.en}
                    className="object-cover w-full h-full rounded-md hover:invert"
                  />
                </div>
                <span className="text-md font-bold tracking-wide text-center">
                  {language === "es" ? cat.es : cat.en}
                </span>
              </div>
                </a>
            ))}
          </div>
        </div>
      </section>
      {/*----- End Home -----*/}
    </React.Fragment>
    </>
  );
};

export default HomeGph;
