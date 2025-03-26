import React, { useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import AnimatedCursor from "react-animated-cursor";
import whatsapp from "../../../assets/AnimatedGifs/whatsapp.gif";

const ServicesModal = ({ service, onClose }) => {
  const language = useSelector((state) => state.language);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);


  const goToProjects = () => {
    onClose();
  }

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <div className="fixed overflow-scroll inset-0 bg-black/80 z-[99999]">
        {isLargeScreen && (
          <AnimatedCursor
            innerSize={20}
            outerSize={15}
            color="255, 0, 0"
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        )}
        <div className="flex items-center justify-center min-h-screen px-2">
          <div className="sm:w-full lg:w-[80%] m-auto p-7 bg-slate-50 relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-1.5 top-2.5 md:right-5 md:top-5 text-2xl"
            >
              <RiCloseFill />
            </button>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
                
                  
                    <div className="col-span-2 my-1">
                      <img
                        className="border w-[100%]"
                        src={service.imgDetail}
                        alt=""
                      />
                    </div>
                
                
              </div>
              <div className="col-span-12 md:col-span-5 mb-10 md:mb-0 md:pl-10 lg:pl-14">
                <h4 className="font-semibold text-[25px] mb-4 pb-4 border-b text-red-700">
                  {service.Heding}
                </h4>
                <p className="mb-3 text-slate-700/90 text-md font-semibold">
                  {service.Detail3}
                </p>
                
                <p className="mb-3 text-slate-700/90 text-md">
                  {service.Detail2}
                </p>
                <a
                                          href={"https://wa.me/+5493512737199"}
                                          target="blank"
                                          
                                          title="Whatsapp"
                                          >
                <div className="flex flex-nowrap items-center mt-10 hover:text-green-600 cursor-pointer">

                                          
              <img src={whatsapp} className="mr-0"/>
              {language === "en"
                      ? "Contact me right now!"
                      : "Contactame ahora mismo!"}
                      </div>
                                        </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesModal;
