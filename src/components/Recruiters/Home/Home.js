import React, { useState, useEffect } from "react";
import Clock from "../../Clock/Clock.jsx";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";
import Init from "./Init.js";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
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
      <div id="Wellcome">
        <Init />
      </div>

      <React.Fragment>
        {/*----- Start Home -----*/}
        {isLargeScreen && (
        <AnimatedCursor
          innerSize={20}
          outerSize={15}
          color="255, 33, 242"
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
        <section
          className="py-30 lg:pt-[30px] lg:pb-[10px] bg-black relative overflow-hidden"
          id="Home"
        >
          <div className="container relative z-[1]">
            <div className="grid lg:grid-cols-12 grid-cols-1 items-center mt-5">
              {/* LEFT */}
              <div className="lg:col-span-6 z-50">
                <div className="text-center lg:text-start mb-14 lg:mb-0 z-50 xl:ml-10 ">
                  <div className="flex item-center  justify-center mt-10 mb-5">
                    <h1 className="font-semibold text-purple-500/20 animate-[ping_5s_linear_infinite] text-[70px] md:text-5xl lg:text-8xl leading-[1] mb-6 md:mb-9 ml-5 -mt-20">
                      {language === "en"
                        ? "FRONTEND DEVELOPER & WEB DESIGNER"
                        : "DESARROLLO FRONTEND & DISEÑO WEB"}
                    </h1>
                  </div>

                  <div className="flex item-center mt-2 ml-0">
                    <Lucide
                      icon="Pencil"
                      className="mr-2 text-white/80 w-10 h-10"
                    />
                    <h2 className="font-semibold text-white/80 text-[27px] md:text-xl lg:text-2xl leading-[1] mb-4 ml-5">
                      {language === "en"
                        ? "I create visually striking and technically optimized digital experiences."
                        : "Creo experiencias digitales visualmente impactantes y técnicamente optimizadas. "}
                    </h2>
                  </div>
                  <div className="flex item-center mt-2 ml-0">
                    <Lucide
                      icon="Search"
                      className="mr-2 text-purple-100/60 w-8 h-8"
                    />
                    <p className="text-base text-purple-100/60 md:text-xl mb-2 md:mb-4 ml-5 italic">
                      {language === "en"
                        ? "If you're looking for someone who blends creativity and code, I’m the right person for the job."
                        : "Si buscas a alguien que combine creatividad y código, soy la persona indicada. "}
                    </p>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="lg:col-span-6 mt-1 lg:pt-16 mb-0 pb-10">
                <div className="text-center">
                  <Clock />
                </div>
                <div className="flex justify-end items-center mt-0 lg:mt-7 pt-3 sm:mr-5 lg:mr-0 sm:border-t-2 xl:border-t-0 sm:border-purple-500">
                  <a href="#About">
                    <div className="btn btn-yellow font-bold rounded-full flex justify-center items-center animate-pulse cursor-pointer mb-0">
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

export default Home;
