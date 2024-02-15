import React from "react";
//import home_banner from '../../assets/Image/home-banner.png'
import { TypeAnimation } from "react-type-animation";
import Clock from "../Clock/Clock";

const Home = () => {
  return (
    <React.Fragment>
      {/*----- Start Home -----*/}
      <section
        className="pt-[100px] pb-[50px] lg:pt-[40px] lg:pb-[20px] bg-purple-50 relative overflow-hidden"
        id="Home"
      >
        <div className="container relative z-[1]">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center ">
            {/* LEFT */}
            <div className="lg:col-span-6">
              <div className="text-center lg:text-start mb-14 lg:mb-0">
                <h6 className="uppercase text-sm md:text-base tracking-[2px] font-semibold mb-5 md:mb-8">
                  👋 Hi!, My name is{" "}
                  <span className="text-orange-700 font-bold text-xl">
                    Julia
                  </span>
                </h6>
                <h1 className="font-semibold text-[40px] md:text-7xl leading-[1] mb-6 md:mb-9">
                  I'm a
                  <TypeAnimation
                    className="text-purple-900"
                    sequence={[" Developer", 3000, " Designer", 3000]}
                    speed={5}
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-base text-slate-700/80 md:text-xl mb-2 md:mb-4">
                  ...from Córdoba, Argentina, to the
                  <span className="text-purple-900 font-bold md:text-xl ">
                    {" "}
                    whole
                  </span>
                  <span title="WORLD"> 🌎</span>
                  <span className="text-orange-700 font-bold md:text-xll ">
                    {" "}
                    !
                  </span>
                </p>
                <div className="pt-3">
                  <a href="#About" className="btn btn-theme">
                    Let's Start
                  </a>
                </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="lg:col-span-6 mt-1 pt-10 mb-0 pb-10">
              <div className="text-center" title="Turn on the clock and watch!">
                <Clock />
                {/*<img src={home_banner} title="" alt="" />*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- End Home -----*/}
    </React.Fragment>
  );
};

export default Home;
