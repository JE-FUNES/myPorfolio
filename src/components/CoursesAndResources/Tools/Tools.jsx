import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToolsData } from "./ToolsData.js";

const Tools = () => {
  const language = useSelector((state) => state.language);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      {/*----- Start Home -----*/}

      <section className="pt-0" id="Tools">
        <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
          {/* Video de fondo */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/tools.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-amber-200/30"></div>
          <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center pt-20">
            <div className="mt-20">
              <h3 className="text-purple-800 flex justify-center ">
                {language === "en" ? "USEFUL TOOLS" : "HERRAMIENTAS ÚTILES"}
              </h3>
            </div>

            {/* Grilla de items */}
            <div className="relative z-10 grid sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 p-6 max-w-5xl lg:pt-10">
              {ToolsData.map((item) => (
                <div
                  key={item.key}
                  className="flex flex-col items-center text-purple-800"
                >
                  <div className="w-60 h-60 bg-transparent rounded-md mb-2 flex items-center justify-center border-purple-800 border-spacing-2 border-2  p-2">
                    {/* Imagen temporal de reemplazo */}
                    <img
                      src={`/images/categories/${item.key}.png`}
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

export default Tools;
