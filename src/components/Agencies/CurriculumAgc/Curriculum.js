import React from "react";
import { Lucide } from "../../../utils/index.js";
import { useSelector } from "react-redux";

const CurriculumAgc = () => {
  const language = useSelector((state) => state.language);
  return (
    <React.Fragment>
      {/*----- Start Curriculum -----*/}
      <section className="pt-10 pb-2 bg-white" id="Curriculum">
        <div className="container my-20 py-10">
          <iframe src=
          {language === "en" ?
            "/CV_JULIA_FUNES-Frontend_Developer-english.pdf" :
            "/CV_JULIA_FUNES-Desarrollo_Frontend-spanish.pdf"
          }
           

                  style={{ width: '100%', height: '70vh' }}
                  frameBorder="0"
                />

          <div className="pt-5 flex justify-end items-center">
            <a href="#Contact">
              <div className="btn btn-yellow rounded-full font-bold flex justify-center items-center animate-pulse cursor-pointer ">
                <Lucide icon="ArrowDown" className="mr-2" />
                {language === "en" ?
                    "Go on" : "Sigamos" 
                    }
              </div>
            </a>
          </div>
        </div>
      </section>
      {/*----- End Curriculum -----*/}
    </React.Fragment>
  );
};

export default CurriculumAgc;
