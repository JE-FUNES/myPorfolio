import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InProgress from "./InProgress.js";
import { categories } from "./CategoriesData.js";

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

  return (
    <>
      <div id="InProgress">
        <InProgress />
      </div>
      <React.Fragment>
        {/*----- Start Home -----*/}

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
              <source src="/videos/tools.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-amber-900/40"></div>

            <div className="flex justify-center mt-24 z-10">
              <h3 className="text-white lg:pt-6 uppercase">
                Cursos y Recursos Digitales
              </h3>
            </div>

            {/* Grilla de categorías sobre el video */}
            <div className="relative z-10 grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 p-6 max-w-full lg:pt-20">
              {categories.map((cat) => (
                <a href={`${cat.link}`}>
                  <div
                    key={cat.key}
                    className="flex flex-col items-center text-white"
                  >
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
