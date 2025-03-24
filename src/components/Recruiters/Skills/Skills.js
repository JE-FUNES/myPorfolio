import React, { useState, useEffect } from "react";
import skills1 from "../../../assets/Image/yo-skills-1.png";
import skills2 from "../../../assets/Image/yo-skills-2.png";
import { SkillsData, EspSkillsData } from "./SkillsData";
import SkillModal from "./SkillModal.js";
import { Lucide } from "../../../utils/index";
import { useSelector } from "react-redux";
import LogoSlider from "../LogoSlider/LogoSlider";
import { motion } from "motion/react";

const Skills = () => {
  const language = useSelector((state) => state.language);

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
    const closeComponent = () => {
      setSelectedSkill(null);
    };

  return (
    <React.Fragment>
      <section className="mt-10 pt-28 pb-10 bg-slate-900" id="Skills">
        <div className="container bg-slate-900">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-end bg-slate-900">
            <motion.div 
            className="lg:col-span-6 lg:pl-9 bg-slate-900"
              initial={{ opacity: 0, y: 100 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: false }} 
  transition={{ duration: 3, ease: "easeOut" }} 
  >
              <div className="lg:pb-16 sm:mt-5 lg:mt-10 md:pb-10 pb-8 sm:text-center lg:text-right text-white bg-slate-900">
                <h3>{language === "en" ? "IT Skills" : "Habilidades IT"}</h3>
              </div>
              <div className="bg-slate-900 pb-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-4 bg-slate-900 auto-rows-fr lg:auto-rows-auto">
                  {language === "en"
                    ? SkillsData.map((skill, index) => (
                        <div
                          className="hover:shadow-black transition-all duration-300 ease-in flex flex-col h-full lg:h-auto lg:col-span-6"
                          key={index}
                        >
                         
                          <div
                            className={`flex items-center hover:bg-fuchsia-600 border-2 border-slate-900 p-4 h-full lg:h-auto ${skill.Bg_color}`}
                            key={skill.key}
                            onClick={() => setSelectedSkill(skill)}
                          >
                            <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
                              {skill.Logo}
                            </div>
                            <h6 className="pl-4 text-base font-semibold">
                              {skill.Heding}
                            </h6>
                          </div>
                        </div>
                      ))
                    : EspSkillsData.map((skill, index) => (
                        <div
                          className="hover:shadow-black transition-all duration-300 ease-in flex flex-col h-full lg:h-auto lg:col-span-6"
                          key={index}
                        >
                          <div
                            className={`flex items-center hover:bg-fuchsia-600 border-2 border-slate-900 p-4 h-full lg:h-auto ${skill.Bg_color}`}
                            key={skill.key}
                            onClick={() => setSelectedSkill(skill)}
                          >
                            <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
                              {skill.Logo}
                            </div>
                            <h6 className="pl-4 text-base font-semibold">
                              {skill.Heding}
                            </h6>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </motion.div>
            {isLargeScreen && (
            <div
              className="sm:col-span-4 lg:col-span-6  w-full h-full text-center mb-12 lg:mb-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: `url(${skills1})`, height: "100%" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${skills2})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${skills1})`)
              }
            ></div>
            )}
          </div>
          <div className="flex justify-end items-center lg:-mt-10 mb-5">
            <a href="#Portfolio">
              <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ? "Go on" : "Sigamos"}
              </div>
            </a>
          </div>
        </div>
        <LogoSlider />
      </section>
       {/*----- End Skills -----*/}
       {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={closeComponent} />
      )}
    </React.Fragment>
  );
};

export default Skills;
