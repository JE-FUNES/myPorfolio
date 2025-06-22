import React, { useState, useEffect } from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import AnimatedCursor from "react-animated-cursor";
import { motion } from "motion/react";

const Graphic = () => {
  const language = useSelector((state) => state.language);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { key: "illustrations", es: "ILUSTRACIONES", en: "ILLUSTRATIONS" },
    { key: "patterns", es: "PATRONES", en: "PATTERNS" },
    { key: "vectors", es: "VECTORES", en: "VECTORS" },
    { key: "backgrounds", es: "FONDOS", en: "BACKGROUNDS" },
    { key: "combos", es: "COMBOS", en: "COMBOS" },
    { key: "photos", es: "FOTOGRAFÍAS", en: "PHOTOGRAPHS" },
  ];

  return (
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
      <section className="pt-0" id="Graphic">
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
        <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center pt-60">
          <div className="mt-48">

            
        <h3 className="text-purple-800 flex justify-center ">
          {language === "en" ? "GRAPHIC RESOURCES" : "RECURSOS GRÁFICOS"}
        </h3>
          </div>

          {/* Grilla de items */}
          <div className="relative z-10 grid grid-cols-4 grid-rows-3 gap-12 p-6 max-w-5xl lg:pt-10 lg:mt-10">
            {items.map((item) => (
              <div key={item.key} className="flex flex-col items-center text-purple-800">
                <div className="w-60 h-60 bg-transparent rounded-md mb-2 flex items-center justify-center border-purple-800 border-spacing-2 border-2  p-2">
                  {/* Imagen temporal de reemplazo */}
                  <img
                    src={`/images/items/${item.key}.png`}
                    alt={language === "es" ? item.es : item.en}
                    className="object-cover w-full h-full rounded-md hover:invert"
                  />
                </div>
                <span className="text-md font-bold tracking-wide text-center">
                  {language === "es" ? item.es : item.en}
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
      {/*----- End Home -----*/}
    </React.Fragment>
  );
};

export default Graphic;
