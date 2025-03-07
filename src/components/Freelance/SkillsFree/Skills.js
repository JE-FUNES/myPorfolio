import React from "react";
import skills from "../../../assets/Image/skills2.webp";
import { SkillsData, EspSkillsData } from "./SkillsData";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";

const SkillsFree = () => {
  const language = useSelector((state) => state.language);
  return (
    <React.Fragment>
      <section className="mt-28 pt-28 pb-10 bg-slate-900" id="Skills">
        <div className="container bg-slate-900">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-end bg-slate-900">
            <div className="lg:col-span-6 lg:pl-9 bg-slate-900">
              <div className="lg:pb-16 md:pb-10 pb-8 text-right text-white bg-slate-900">
                <h3>
                {language === "en" ?
                  "My Skills" : "Habilidades"
                }
                  </h3>
              </div>
              <div className="bg-slate-900 pb-20">
                <div className="grid gap-4 grid-cols-12 bg-slate-900 ">
                  { language === "en" ?
                  SkillsData.map((e, index) => {
                    return (
                      <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in bg-black" key={index} >
                        <div
                          className={`flex items-center border-2 border-slate-900 sm:p-2 lg:p-4 ${e.Bg_color}`}
                          key={e.key}
                        >
                          <div className="flex justify-center items-center sm:h-[50px] sm:w-auto lg:h-[50px] l:w-[50px] border-2 text-3xl border-slate-900">
                            {e.Logo}
                          </div>
                          <h6 className="sm:pl-2 lg:pl-4 text-base font-semibold">
                            {e.Heding}
                          </h6>
                        </div>
                      </div>
                    );
                  })
                :
                EspSkillsData.map((e, index) => {
                  return (
                    <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in bg-black" key={index} >
                      <div
                        className={`flex items-center border-2 border-slate-900 p-4 ${e.Bg_color}`}
                        key={e.key}
                      >
                        <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
                          {e.Logo}
                        </div>
                        <h6 className="pl-4 text-base font-semibold">
                          {e.Heding}
                        </h6>
                      </div>
                    </div>
                  );
                })
                }
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 text-center sm:pt-0 sm:-mt-4 lg:mt-0 lg:pt-[30px] mb-0 md:pt-0 bg-slate-900">
              <img
                className="mx-[auto]"
                src={skills}
                title=""
                alt="Julia Funes, web development"
              />
            </div>
          </div>
              <div className="flex justify-end items-center lg:-mt-10">
                <a href="#Portfolio">
                  <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
                    <Lucide icon="ArrowDown" className="mr-2" />
                    {language === "en" ?
                    "Go on" : "Sigamos"
                    }
                  </div>
                </a>
              </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SkillsFree;
