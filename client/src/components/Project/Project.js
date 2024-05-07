import React from 'react'
//import { ProjectData, ProjectImg } from './ProjectData'
import { RiCloseFill } from "react-icons/ri";


const Project = ({ project, onClose }) => {
    return (
        <React.Fragment>
            <div className="fixed md:overflow-hidden overflow-scroll inset-0 bg-black/40 z-[99999]">
                <div className="flex items-center justify-center min-h-screen px-2">
                    <div className="max-w-[1200px] m-auto p-7 bg-white relative">
                        <button type="button" onClick={onClose} className="absolute right-1.5 top-2.5 md:right-5 md:top-5 text-2xl" >
                            <RiCloseFill />
                        </button>
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
                                <div className="grid grid-cols-2 gap-2">
                                        {project.videoUrl ? (
                                    <div className="col-span-1 my-5">
                                           <iframe
                                           width="700"
                                           height="398"
                                           src={project.videoUrl}
                                           title="YouTube video player"
                                           frameborder="0"
                                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                           referrerpolicy="strict-origin-when-cross-origin"
                                           allowfullscreen
                                       ></iframe></div>
                                   ) : ( 
                                    <div className="col-span-2 my-3">
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
                                        <span className="w-[100px] font-semibold mr-1">Type:</span>
                                        <span className="text-slate-700/90 ml-1">{project.Type}</span>
                                    </li>
                                    <li className="flex py-1">
                                        <span className="w-[100px] font-semibold mr-1">Languages & Technologies:</span>
                                        <span className="text-slate-700/90 ml-1">{project.Languages}</span>
                                    </li>

                                    <li className="flex py-1">
                                        <span className="w-[100px] font-semibold mr-1">Country:</span>
                                        <span className="text-slate-700/90 ml-1">{project.Country}</span>
                                    </li>
                                    <li className="flex py-1">
                                        <span className="w-[100px] font-semibold mr-1">Status:</span>
                                        <span className="text-slate-700/90 ml-1">{project.Finished}</span>
                                    </li>
                                    <li className="flex py-3 border-t mt-1">
                                        <span className="w-[100px] font-semibold mr-1">URL:</span>
                                        <span className="text-slate-700/90 ml-1">{project.URL}</span>
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
