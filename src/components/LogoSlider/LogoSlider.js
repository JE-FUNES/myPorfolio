import React from 'react'
import { LogoSliderData } from './LogoSliderData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 14,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 4
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <div className="bg-purple-950 pt-4 pb-2">
                <div className="container">
                    <div>
                        <Slider {...settings}>
                            {
                                LogoSliderData.map((e, key) => {
                                    return (
                                        <div className="p-0 !flex justify-center w-full" key={e.key} >
                                            <img src={e.img} alt="" className='h-10 w-auto'  />
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
