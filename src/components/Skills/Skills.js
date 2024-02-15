import React from 'react'
import skills from '../../assets/Image/skills.png'
import { SkillsData } from './SkillsData'

const Skills = () => {
    return (
        <React.Fragment>
            <section className="py-24 !pb-0" id="Skills">
                <div className="container">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1">
                        <div className="lg:col-span-6 lg:pl-9">
                            <div className="lg:pb-16 md:pb-10 pb-8">
                                <h3>My Skills</h3>
                            </div>
                            <div>
                                <div className="grid gap-4 grid-cols-12">
                                    {
                                        SkillsData.map((e, index) => {
                                            return (
                                                <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in">
                                                    <div className={`flex items-center border-2 border-slate-900 p-4 ${e.Bg_color}`}>
                                                        <div className="flex justify-center items-center h-[50px] w-[50px] border-2 text-3xl border-slate-900">
                                                            {e.Logo}
                                                        </div>
                                                        <h6 className="pl-4 text-base font-semibold">{e.Heding}</h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 text-center pt-[40px] md:pt-0">
                            <img className="mx-[auto]" src={skills} title="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Skills
