import React from "react";
import { useSelector } from "react-redux";
import { Testimonials } from "./TestimonialData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const language = useSelector((state) => state.language);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      {/*----- Start Testimonial -----*/}
      <section className="bg-white" id="Clients">
        <div className="container bg-bg-clientes bg-cover bg-no-repeat min-h-screen pt-24">
          <div className="grid lg:pb-16 md:pb-10 pb-8 pt-24 mt-24">
            <div className="lg:col-span-6 text-center">
              <h3>{language === "en" ? "TESTIMONIAL" : "TESTIMONIOS"}</h3>
              <h4 className="italic mt-5 text-lg font-medium">
                {language === "en"
                  ? "What do clients and teammates think of my work?"
                  : "¿Qué opinan los clientes y compañeros de equipo de mi labor?"}
              </h4>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {Testimonials.map((e, key) => {
                return (
                  <div
                    key={key}
                    className="!flex border-2 border-slate-900 md:p-9 p-5 hover:shadow-black transition-all duration-300 ease-in bg-black/50 text-white"
                  >
                    <div className="max-w-[100px] h-full mx-auto ">
                      <img src={e.Image} alt="" />
                    </div>
                    <div className="relative flex-1 pl-5 ">
                      <p className="mb-3 text-[17px] text-slate-100">
                        {e.icon1}
                        <span>{e.Detail}</span>
                        {e.icon2}
                      </p>
                      <h6 className="font-semibold">
                        {e.icon3 && (
                          <div className="flex space-x-1 text-yellow-400 mb-1">
                            {e.icon3}
                            {e.icon3}
                            {e.icon3}
                            {e.icon3}
                            {e.icon3}
                          </div>
                        )}
                        <p className="text-lg">{e.name}</p>
                      </h6>

                      <span className="text-sm text-slate-100">
                        {e.position}
                      </span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      {/*----- End Testimonial -----*/}
    </React.Fragment>
  );
};

export default Testimonial;
