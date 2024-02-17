import React from "react";
import { TypeAnimation } from "react-type-animation";
import home_banner from "../../assets/AnimatedGifs/animated-about.gif";
//import home_banner2 from "../../assets/Image/home-banner-hover.png";
import { NumberData, BtnData } from "./AboutData";

const About = () => {
  return (
    <React.Fragment>
      {/*----- Start About -----*/}
      <section className="py-20" id="About">
        <div className="container my-20 py-10">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-6 text-center mb-12 lg:mb-0">
              <img
                src={home_banner}
                alt="This is me"
                title="Animated gif"
                className="bg-no-repeat bg-cover"
              />
            </div>

            <div className="lg:col-span-6 lg:pl-12">
              <h3 className="font-semibold text-[26px] md:text-[40px] leading-[1.2] mb-4 normal-case">
                I'm a Front-end Developer
                <span className="text-purple-900"> & </span>
                <br /> a Graphic Designer.
              </h3>
              <p className="text-base md:text-lg">
                I´m a
              <TypeAnimation
                className="text-purple-900"
                sequence={[" SENIOR Graphic Designer...🦾", 3000, " JUNIOR Front-end Developer...👣", 3000]}
                speed={10}
                repeat={Infinity}
                />
                </p>
              {/*<p className="text-base md:text-lg">
                I'm a SENIOR{" "}
                <span className="text-purple-600"> Graphic Designer </span>& a
                JUNIOR
                <span className="text-fuchsia-600"> Front-end Developer </span>.
  </p>*/}
              <br />
              <p className="text-base md:text-md">
                {" "}
                🎨 My passion for{" "}
                <span className="bg-fuchsia-100"> creating</span>
                {" "}led me to train in graphic arts, and for more than 20 years I
                have dedicated myself to it with great pleasure.
                <br />
                📚My {" "}
                <span className="bg-fuchsia-100">
                    ability to adapt 
                </span>
                {" "} led me to train in new technological and
                digital marketing areas to stay up to date and take my brand to
                an excellent position on platforms such as Google, Facebook and
                Instagram.
                <br />
                🗣My {" "}
                <span className="bg-fuchsia-100">
                outgoing personality 
                </span>
                {" "}and my customer service allowed me to
                turn my company into one of the most popular in the country in
                its field, and my leadership capacity was key to putting
                together the work team that accompanied that transformation.
                <br />
                🚀In one of these restarts that life imposed on me, I discovered
                that I am also{" "} 
                <span className="bg-fuchsia-100">
                curious
                </span>
                , and this led me to decide to train in
                web programming, face that challenge and have the joy of finding
                a {" "}
                <span className="bg-fuchsia-100">
                new passion
                </span>
                .
                <br />
                And here I am, re-writing the code of my present and future 💜
              </p>
              <div className="grid grid-cols-16 pt-3">
                {NumberData.map((e, key) => {
                  return (
                    <div className="col-span-6 sm:col-span-4" key={key}>
                      <h5 className="text-[26px] text-fuchsia-600 font-semibold" title={e.Title}>
                        {e.Number}
                      </h5>
                      <span className="text-slate-700/90">{" "} {e.Detail}</span>
                    </div>
                  );
                })}
              </div>
              {BtnData.map((e, key) => {
                return (
                  <div className="pt-4" key={key}>
                    <a href="#Contact" className="btn btn-theme2 mr-4">
                      {e.btn1}
                    </a>
                    <a href="#Portfolio" className="btn btn-dark">
                      {e.btn2}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/*----- End About -----*/}
    </React.Fragment>
  );
};

export default About;
