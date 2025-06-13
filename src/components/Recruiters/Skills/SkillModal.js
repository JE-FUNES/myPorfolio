import React, { useState, useEffect } from "react";
//import { ProjectData, ProjectImg } from './ProjectData'
import { RiCloseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AnimatedCursor from "react-animated-cursor";

const SkillModal = ({ skill, onClose }) => {
  const language = useSelector((state) => state.language);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);
  const navigate = useNavigate();

  const goToProjects = () => {
    onClose();
  }

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <div className="fixed overflow-scroll inset-0 bg-black/80 z-[99999]">
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
        <div className="flex items-center justify-center min-h-screen px-2">
          <div className="sm:w-full lg:w-[80%] m-auto p-7 bg-white relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-1.5 top-1.5 md:right-2 md:top-2 text-2xl"
            >
              <RiCloseFill />
            </button>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
                
                  {skill.videoUrl ? (
                    <div className="col-span-1 my-1 w-full sm:ml-1 lg:ml-10">
                    <iframe
                      className="w-[95%] h-auto aspect-video"
                      src={skill.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  
                  ) : (
                    <div className="col-span-2 my-1">
                      <img
                        className="border w-[100%]"
                        src={skill.imgDetail}
                        alt=""
                      />
                    </div>
                  )}
                
              </div>
              <div className="col-span-12 md:col-span-5 mb-10 md:mb-0 md:pl-10 lg:pl-14">
                <h4 className="font-semibold text-[25px] mb-4 pb-4 border-b">
                  {skill.Heding}
                </h4>
                <p className="mb-3 text-slate-700/90 text-md font-semibold">
                  {skill.Detail1}
                </p>
                
                <p className="mb-3 text-slate-700/90 text-md">
                  {skill.Detail2}
                </p>
              <a href= "#Portfolio">
              <button
              onClick={goToProjects}
              className="btn btn-theme2 mt-10"
              >
                             {language === "en"
                        ? "MY PROJECTS"
                        : "MIS PROYECTOS"}
                          </button>
                        </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillModal;
