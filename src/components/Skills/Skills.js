import React from "react";
import skills from "../../assets/Image/skills2.webp";
import { SkillsData } from "./SkillsData";
import { Lucide } from "../../utils/index.js";

const Skills = () => {
  return (
    <React.Fragment>
      <section className="mt-28 pt-28 pb-10 bg-slate-900" id="Skills">
        <div className="container bg-slate-900">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-end bg-slate-900">
            <div className="lg:col-span-6 lg:pl-9 bg-slate-900">
              <div className="lg:pb-16 md:pb-10 pb-8 text-right text-white bg-slate-900">
                <h3>My Skills</h3>
              </div>
              <div className="bg-slate-900 pb-20">
                <div className="grid gap-4 grid-cols-12 bg-slate-900 ">
                  {SkillsData.map((e, index) => {
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
                  })}
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 text-center pt-[30px] mb-0 md:pt-0 bg-slate-900">
              <img
                className="mx-[auto]"
                src={skills}
                title=""
                alt="Julia Funes, web development"
              />
            </div>
          </div>
              <div className="flex justify-end items-center -mt-10">
                <a href="#Portfolio">
                  <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer">
                    <Lucide icon="ArrowDown" className="mr-2" />
                    Go on
                  </div>
                </a>
              </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skills;
