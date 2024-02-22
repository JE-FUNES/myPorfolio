import React from 'react'
import skills from '../../assets/Image/skills2.png'
import { SkillsData } from './SkillsData'

const Skills = () => {
    return (
        <React.Fragment>
            <section className="mt-5 py-24 !pb-0 bg-black" id="Skills" >
                <div className="container bg-black">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-end bg-black">
                        <div className="lg:col-span-6 lg:pl-9 bg-black">
                            <div className="lg:pb-16 md:pb-10 pb-8 text-right text-white bg-black">
                                <h3>My Skills</h3>
                            </div>
                            <div className='bg-black pb-20'>
                                <div className="grid gap-4 grid-cols-12 bg-black ">
                                    {
                                        SkillsData.map((e, index) => {
                                            return (
                                                <div className="col-span-6 hover:shadow-black transition-all duration-300 ease-in bg-black">
                                                    <div className={`flex items-center border-2 border-slate-900 p-4 ${e.Bg_color}`} key={e.key} >
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
                        <div className="lg:col-span-6 text-center pt-[30px] mb-0 md:pt-0 bg-black">
                            <img className="mx-[auto]" src={skills} title="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Skills
