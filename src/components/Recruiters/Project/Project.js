import React from 'react'
//import { ProjectData, ProjectImg } from './ProjectData'
import { RiCloseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import AnimatedCursor from "react-animated-cursor";


const Project = ({ project, onClose }) => {
    const language = useSelector((state) => state.language);

    return (
        <React.Fragment>
            <div className="fixed overflow-scroll inset-0 bg-black/80 z-[99999]">
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
                <div className="flex items-center justify-center min-h-screen px-2">
                    <div className="sm:w-full lg:w-[80%] m-auto p-7 bg-white relative">
                        <button type="button" onClick={onClose} className="absolute right-1.5 top-2.5 md:right-5 md:top-5 text-2xl" >
                            <RiCloseFill />
                        </button>
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
                                <div className="grid grid-cols-2 gap-2">
                                        {project.videoUrl ? (
                                    <div className="col-span-1 my-1 w-full sm:ml-5 md:ml-20">
                                           <iframe
                                           width="700"
                                           height="450"
                                           src={project.videoUrl}
                                           title="YouTube video player"
                                           frameborder="0"
                                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                           referrerpolicy="strict-origin-when-cross-origin"
                                           allowFullScreen
                                       ></iframe></div>
                                   ) : ( 
                                    <div className="col-span-2 my-1">
                                       <img className="border w-[100%]" src={project.imgDetail} alt="" />
                                    </div>
                                        )}
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-5 mb-10 md:mb-0 md:pl-10 lg:pl-14">
                                <h4 className="font-semibold text-[25px] mb-4 pb-4 border-b">{project.Heding}</h4>
                                <p className="mb-3 text-slate-700/90 text-sm">{project.Detail2}</p>
                                <ul className="pt-2 list-none">
                                    <li className="flex py-1">
                                        <span className="w-[20%] font-semibold mr-2">
                                            {language === "en" ?
                                            "Type:" : "Tipo:"
                                            }
                                            </span>
                                        <span className="w-[80%]text-slate-700/90 ml-1">{project.Type}</span>
                                    </li>
                                    <li className="flex py-1">
                                        <span className="w-[20%] font-semibold mr-2">
                                            {language === "en" ?
                                            "Tools:" : "Tecnolog.:"
                                            }
                                            </span>
                                        <span className="w-[80%] text-slate-700/90 ml-1">{project.Languages}</span>
                                    </li>

                                    <li className="flex py-1">
                                        <span className="w-[20%] font-semibold mr-2">
                                            {language === "en" ?
                                            "Country:" : "País:"
                                            }
                                            </span>
                                        <span className="w-[80%] text-slate-700/90 ml-1">{project.Country}</span>
                                    </li>
                                    <li className="flex py-1">
                                        <span className="w-[20%] font-semibold mr-2">
                                            {language === "en" ?
                                            "Period:" : "Fecha:"
                                            }
                                            </span>
                                        <span className="w-[80%] text-slate-700/90 ml-1">{project.Period}</span>
                                    </li>
                                    <li className="flex py-1">
                                        <span className="w-[20%] font-semibold mr-2">
                                            {language === "en" ?
                                            "Status:" : "Estado:"
                                            }
                                            </span>
                                        <span className="w-[80%] text-slate-700/90 ml-1">{project.Finished}</span>
                                    </li>
                                    <li className="flex py-3 border-t mt-1">
                                        <span className="w-[20%] font-semibold mr-2">URL:</span>
                                        <span className="w-[80%] text-slate-700/90 ml-1">
                                        <a href={project.URL} target='blank'>
                                        {project.URL}

                                        </a>
                                        </span>
                                    </li>
                                    <li className="flex py-3 border-t border-b mt-1">
                                        <div className="w-[20%] font-semibold mr-2">
                                            <FaGithub /> </div>
                                        <span className="w-[80%] text-slate-700/90 ml-1">
                                        <a href={project.GitHub} target='blank'>
                                        {project.GitHub}

                                        </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project
