import React from "react";
import skills1 from "../../../assets/Image/yo-skills-1.png";
import skills2 from "../../../assets/Image/yo-skills-2.png";
import { SkillsData, EspSkillsData } from "./SkillsData";
import { Lucide } from "../../../utils/index";
import { useSelector } from "react-redux";
import LogoSlider from "../LogoSlider/LogoSlider";

const Skills = () => {
  const language = useSelector((state) => state.language);
  return (
    <React.Fragment>
      <section className="mt-10 pt-28 pb-10 bg-slate-900" id="Skills">
        <div className="container bg-slate-900">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-end bg-slate-900">
            <div className="lg:col-span-6 lg:pl-9 bg-slate-900">
              <div className="lg:pb-16 mt-10 md:pb-10 pb-8 text-right text-white bg-slate-900">
                <h3>
                {language === "en" ?
                  "IT Skills" : "Habilidades IT"
                }
                  </h3>
              </div>
              <div className="bg-slate-900 pb-10">
                <div className="grid gap-4 grid-cols-12 bg-slate-900 ">
                  { language === "en" ?
                  SkillsData.map((e, index) => {
                    return (
                      <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in bg-black" key={index} >
                        <div
                          className={`flex items-center hover:bg-fuchsia-600 border-2 border-slate-900 p-4 ${e.Bg_color}`}
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
                :
                EspSkillsData.map((e, index) => {
                  return (
                    <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in bg-black" key={index} >
                      <div
                        className={`flex items-center hover:bg-fuchsia-600 border-2 border-slate-900 p-4 ${e.Bg_color}`}
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
            <div
  className="lg:col-span-6  w-full h-full text-center mb-12 lg:mb-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
  style={{ backgroundImage: `url(${skills1})`, height: "100%" }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${skills2})`)}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${skills1})`)}
>
</div>
          </div>
              <div className="flex justify-end items-center lg:-mt-10 lg:mb-5">
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
        <LogoSlider />
      </section>
    </React.Fragment>
  );
};

export default Skills;
