import React, { useState } from 'react'
import { PortfolioData } from './PortfolioData'
import Project from '../Project/Project';

const Portfolio = () => {
    //const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const closeComponent = () => {
        setSelectedProject(null);
    };
    return (
        <React.Fragment>
            {/*----- Start Projects -----*/}
            <section className="py-24 bg-purple-50" id="Portfolio">
                <div className="container">
                    <div className="grid lg:pb-16 md:pb-10 pb-8">
                        <div className="lg:col-span-6 text-center">
                            <h3>LATEST PROJECTS</h3>
                        </div>
                    </div>
                    <div>
                        {
                            PortfolioData.map((project, index) => {
                                return (
                                    <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16">
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
                </div>
            </section>
            {/*----- End Projects -----*/}
            {selectedProject && <Project project={selectedProject} onClose={closeComponent} />}
        </React.Fragment>
    )
}

export default Portfolio
