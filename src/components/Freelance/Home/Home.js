import React from "react";
import Clock from "../../Clock/Clock";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";


const HomeFree = () => {
  const language = useSelector((state) => state.language);
  
  return (
    <>
    
    <React.Fragment>
      {/*----- Start Home -----*/}
      <section
        className="py-30 lg:pt-[30px] lg:pb-[10px] bg-black relative overflow-hidden"
        id="Home"
      >
        <div className="container relative z-[1]">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center mt-10">
            {/* LEFT */}
            <div className="lg:col-span-6 z-50">
              <div className="text-center lg:text-start mb-14 lg:mb-0 z-50 xl:ml-20 ">
                <h6 className="mt-12 text-white font-bold text-xl">
                  {language === "en"
                    ? "👋 Hi again!"
                    : "👋 ¡Hola nuevamente!"}
                  
                </h6>
                <div className="flex item-center mt-2">
                  <h2 className="font-semibold text-white text-[40px] md:text-4xl lg:text-5xl leading-[1] mb-6 md:mb-9 ml-5">
                    {language === "en" ? "Your website: fast, efficient, and at the best price!" : "Tu sitio web: rápido, eficiente, y al mejor precio! "}
                  </h2>
                  
                </div>

                <p className="text-base text-slate-100 md:text-xl mb-2 md:mb-4 ml-5 italic">
                  {language === "en"
                    ? "Design and Development of both Institutional and Commercial Websites. Contact me for more information."
                    : "Diseño y Desarrollo de Sitios Web tanto Institucionales como Comerciales. Contactame para más Información."}
                  
                </p>
                <div className="flex justify-center mt-2">
                          <Link to="Contact">
                          <button
                            className="inline-block py-1 px-5 uppercase tracking-wider text-sm rounded-[30px] bg-purple-400 hover:bg-black hover:animate-pulse shadow-lg shadow-purple-900 font-bold text-white"
                            
                            >
                            {language === "en"
                              ? "Contact me"
                              : "Contactame"}
                          </button>
                              </Link>
                          
                        </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="lg:col-span-6 mt-1 lg:pt-16 mb-0 pb-10">
              <div className="text-center">
                <Clock />
              </div>
              <div className="flex justify-end items-center sm:mt-10 pt-3 sm:mr-5 sm:border-t-2 xl:border-t-0 sm:border-purple-500">
                <a href="#About">
                  <div className="btn btn-yellow font-bold rounded-full flex justify-center items-center animate-pulse cursor-pointer sm:mt-3 md:mt-5">
                    <Lucide icon="ArrowDown" className="mr-2" />
                    {language === "en" ? "Go on" : "Sigamos"}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- End Home -----*/}
    </React.Fragment>
                    </>
  );
};

export default HomeFree;
