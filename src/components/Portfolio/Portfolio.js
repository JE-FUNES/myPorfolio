import React, { useState } from 'react'
import { PortfolioData, EspPortfolioData } from './PortfolioData'
import Project from '../Project/Project';
import { Lucide } from "../../utils/index.js";
import { useSelector } from "react-redux";

const Portfolio = () => {
    const language = useSelector((state) => state.language);
    
    const [selectedProject, setSelectedProject] = useState(null);

    const closeComponent = () => {
        setSelectedProject(null);
    };
    return (
        <React.Fragment>
            {/*----- Start Projects -----*/}
            <section className="pt-28 pb-5 mt-10 mb-5 bg-purple-50" id="Portfolio">
                <div className="container">
                    <div className="grid lg:pb-16 md:pb-10 pb-8">
                        <div className="lg:col-span-6 text-center">
                            <h3>
                                {language === "en" ?
                                "LATEST PROJECTS" : "ÚLTIMOS PROYECTOS"
                                }
                                </h3>
                        </div>
                    </div>
                    <div>
                        {language === "en" ?
                            PortfolioData.map((project, index) => {
                                return (
                                    <div key={index} className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16">
                                        <div className={`lg:px-10 md:px-5 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                                            <div className="border-2 border-slate-900 hover:shadow-shadowFuchsia transition-all duration-300 ease-in"  key={project.key}>
                                                <img src={project.img} alt="" className='bg-no-repeat bg-cover' />
                                            </div>
                                        </div>
                                        <div className={`flex flex-col justify-center lg:px-10 md:px-5 ${index % 2 === 0 ? '' : 'order-1'}`}>
                                            <h6 className="mb-[18px]">
                                                <span className="inline-block px-5 py-2 uppercase tracking-wider text-xs rounded-[30px] bg-fuchsia-200 font-bold">{project.list}</span>
                                            </h6>
                                            <h4 className="mb-4 text-2xl font-semibold md:mb-6 md:text-[32px]">{project.Heding}</h4>
                                            <p className='mb-6 text-slate-700/90'>{project.Detail}</p>
                                            <div>
                                                <button onClick={() => setSelectedProject(project)} className="btn btn-theme2">{project.btn}</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            EspPortfolioData.map((project, index) => {
                                return (
                                    <div key={index} className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16">
                                        <div className={`lg:px-10 md:px-5 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                                            <div className="border-2 border-slate-900 hover:shadow-shadowFuchsia transition-all duration-300 ease-in"  key={project.key}>
                                                <img src={project.img} alt="" className='bg-no-repeat bg-cover' />
                                            </div>
                                        </div>
                                        <div className={`flex flex-col justify-center lg:px-10 md:px-5 ${index % 2 === 0 ? '' : 'order-1'}`}>
                                            <h6 className="mb-[18px]">
                                                <span className="inline-block px-5 py-2 uppercase tracking-wider text-xs rounded-[30px] bg-fuchsia-200 font-bold">{project.list}</span>
                                            </h6>
                                            <h4 className="mb-4 text-2xl font-semibold md:mb-6 md:text-[32px]">{project.Heding}</h4>
                                            <p className='mb-6 text-slate-700/90'>{project.Detail}</p>
                                            <div>
                                                <button onClick={() => setSelectedProject(project)} className="btn btn-theme2">{project.btn}</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-end items-center mt-2">
                <a href="#Curriculum">
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
            {/*----- End Projects -----*/}
            {selectedProject && <Project project={selectedProject} onClose={closeComponent} />}
        </React.Fragment>
    )
}

export default Portfolio
