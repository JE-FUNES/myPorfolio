import React from 'react'
import { ServicesData } from './ServicesData'
import {Lucide} from "../../utils/index.js"

const Services = () => {

    return (
        <React.Fragment>
            {/*----- Start Services -----*/}
            <section className="py-20 bg-bg-effect-1 bg-cover bg-no-repeat" id="Services">
                <div className="container">
                    <div className="grid lg:pb-16 md:pb-10 pb-8">
                        <div className="lg:col-span-6 text-center pt-16">
                            <h3>My Services</h3>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center -mt-5">
                        {
                            ServicesData.map((e, index) => {
                                return (
                                    <div key={index} className="lg:col-span-6 hover:shadow-black transition-all duration-300 ease-in">
                                        <div className={`flex border-2 border-slate-900 p-5 ${e.Bg_color}`} >
                                            <div className="flex justify-center items-center h-[70px] w-[70px] border-2 text-[32px] bg-white border-slate-900" key={e.key}>
                                                {e.Logo}
                                            </div>
                                            <div className="flex-1 pl-5">
                                                <h5 className="mb-3 font-semibold lg:text-2xl md:text-xl text-lg">{e.Heding}</h5>
                                                <p className="text-black text-lg">{e.Detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pt-16 flex justify-end items-center">
          <a href="#Skills">

          <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer ">
                  
                    <Lucide icon="ArrowDown" className="mr-2" />
                    Go on 
                  </div>
          </a>
                </div>
                </div>
            </section>
            {/*----- End Services -----*/}
        </React.Fragment>
    )
}

export default Services
