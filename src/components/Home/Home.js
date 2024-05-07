import React, { useState } from "react";
//import home_banner from '../../assets/Image/home-banner.png'
import { TypeAnimation } from "react-type-animation";
import Clock from "../Clock/Clock";

const Home = () => {

  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <React.Fragment>
      {/*----- Start Home -----*/}
      <section
        className="py-30 lg:pt-[30px] lg:pb-[10px] bg-black relative overflow-hidden"
        id="Home"
      >
        <div className="container relative z-[1]">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center mt-10">
            {/* LEFT */}
            <div className="lg:col-span-6">
              <div className={`${!showDetails ? "top-0 -mt-20 mb-20" : ""}`}>

              <h4 className=" text-white text-lg uppercase md:text-base tracking-[2px] font-bold mb-1 md:mb-1">
                website in development
              </h4>
              <h6 className="text-sm md:text-base tracking-[2px] text-verdeFluo-500 mb-3 md:mb-1">
                (last update 07/05/2024)
              </h6>
              {/* Al hacer click en see details se mostrará el próximo div*/}
              {!showDetails && (
              <h5 className="text-orange-500 text-sm cursor-pointer" onClick={toggleDetails}>
                👁‍🗨 see the details of what will be implemented next
              </h5>
              )}
              {/* Este div se mostrará al hacer click en see details*/}
              <div className={`grid lg:grid-cols-3 gap-4 mb-20 ${showDetails ? 'block' : 'hidden'}`}>
                <div>
                  <h5 className="text-white underline text-lg font-bold mb-2 mt-5">
                    Steps{" "}
                    <span className="text-sm font-normal">(in progress):</span>
                  </h5>
                  <ol className="text-white text-sm">
                    
                    <li>Form configuration ▫▫▫</li>
                    <li>Data base configuraton ▫▫▫ </li>
                  </ol>
                </div>
                <div className="mt-5">
                  <h5 className="text-fuchsia-300 underline text-lg font-bold mb-2">
                    {" "}
                    Next Steps:
                  </h5>
                  <ol className="text-fuchsia-300 text-sm">
                    <li>◻ Responsive design,</li>
                    <li>◻ Multi-language options,</li>
                    <li>◻ Dark mode option,</li>
                    <li>◻ Font size option,</li>
                    <li>◻ Mobile version,</li>
                    <li>◻ Background JS Animation,</li>
                    <li>◻ Coursor animation,</li>
                    <li>◻ SEO,</li>
                  </ol>
                </div>
                <div>
                  <ol className="text-fuchsia-300 text-sm mt-14">
                    <li>◻ Google Analytics,</li>
                    <li>◻ Search bar,</li>
                    <li>◻ Filters,</li>
                    <li>◻ Chat bot,</li>
                    <li>◻ CSS list of effects,</li>
                    <li>◻ Simple Login</li>
                    <li>◻ Favorites CRUD</li>
                    <li>◻ more content...</li>
                  </ol>
                </div>
              </div>
              
                {/* Este close permitirá volver invisible nuevamente el div */}
                {showDetails && (
                  <>
                <h5 className="text-orange-500 cursor-pointer -mt-20 mb-1" onClick={toggleDetails}>
                ❌close details
              </h5>
              <hr className="text-white mb-7" />
                </>
                )}

                </div>
              <div className="text-center lg:text-start mb-14 lg:mb-0">
              className={`${!showDetails ? "top-0 -mt-20 mb-20" : ""}`}
                <h6 className={`${!showDetails ? "mt-10" : ""} "uppercase text-sm md:text-base tracking-[2px] font-semibold text-white mb-5 md:mb-8"`}>
                  👋 Hi!, My name is{" "}
                  <span className="text-purple-500 font-bold text-xl">
                    Julia
                  </span>
                </h6>
                <h1 className="font-semibold text-white text-[40px] md:text-7xl leading-[1] mb-6 md:mb-9">
                  I'm a
                  <TypeAnimation
                    className="text-fuchsia-500"
                    sequence={[" Developer", 3000, " Designer", 3000]}
                    speed={5}
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-base text-slate-100 md:text-xl mb-2 md:mb-4">
                  ...from Córdoba, Argentina, to the
                  <span className="text-purple-500 font-bold md:text-xl ">
                    {" "}
                    whole{" "}
                  </span>
                  <span title="WORLD">🌎</span>
                  <span className="text-purple-500 font-bold md:text-xll ">
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
            <div className="lg:col-span-6 mt-1 pt-20 mb-0 pb-0">
              <div className="text-center">
                <Clock />
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
