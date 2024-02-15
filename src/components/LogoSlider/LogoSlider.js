import React from 'react'
import { LogoSliderData } from './LogoSliderData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <div className="bg-slate-900 py-8">
                <div className="container">
                    <div>
                        <Slider {...settings}>
                            {
                                LogoSliderData.map((e, key) => {
                                    return (
                                        <div className="p-3 !flex justify-center w-full">
                                            <img src={e.img} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LogoSlider
