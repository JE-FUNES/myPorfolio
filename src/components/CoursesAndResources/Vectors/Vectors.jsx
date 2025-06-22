import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Vectors = () => {
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
    { key: "combos", es: "COMBOS", en: "COMBOS" },
    { key: "photos", es: "FOTOGRAFÍAS", en: "PHOTOGRAPHS" },
  ];

  return (
    <React.Fragment>
      {/*----- Start Home -----*/}

      <section className="pt-0" id="Vectors">
        <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-white pt-60">
          <div className="mt-48">
            <h3 className="text-purple-800 flex justify-center ">
              {language === "en" ? "VECTORS" : "VECTORES"}
            </h3>
          </div>

          {/* Grilla de items */}
          <div className="relative z-10 grid grid-cols-4 grid-rows-3 gap-12 p-6 max-w-5xl lg:pt-10 lg:mt-10">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex flex-col items-center text-purple-800"
              >
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
      </section>
      {/*----- End Home -----*/}
    </React.Fragment>
  );
};

export default Vectors;
