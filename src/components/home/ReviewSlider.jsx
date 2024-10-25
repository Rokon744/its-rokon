"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nicky from "../../assets/nicky.jpg"
import lakhlaifi from "../../assets/lakhlaifi.png"
import omen from "../../assets/omen.png"
import Image from "next/image";
import { FaStar } from "react-icons/fa";


const data = [
    // {
    //     id: 1,
    //     name: "Nicky",
    //     review: "Great Developer. Once again I am happy with the quality and speed of development!",
    //     image: nicky
    // },
    {
        id: 4,
        name: "Nicky (Bulgaria)",
        review: "One again - amazing work. I will surely continue working with the developer.",
        image: nicky
    },
    {
        id: 2,
        name: "Lakhlaifi (UK)",
        review: "Great job, very happy with the work. Was creative and did everything perfectly.",
        image: lakhlaifi
    },
    {
        id: 3,
        name: "Omen (UK)",
        review: "Very good work, positive results. Will be working with again, exceeded all expectations.",
        image: omen
    }
]

function ReviewSlider() {
    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((item) => {
                    return <div key={item.id}>
                        <div className="slider-image">
                            <Image className="rounded-full h-[92px] w-[92px] object-cover m-auto" src={item.image} alt={item.name} width={92} height={92} />
                            <h4 className="text-xl header-text tracking-wider font-semibold text-center mt-2">{item.name}</h4>
                        </div>
                        <div className="slider-body">
                            <p className='text-center italic tracking-widest mt-5'>
                                {item.review}
                            </p>
                            <div className="flex justify-center items-center gap-1 mt-2">
                                <FaStar className="text-[#ffb33e] text-[16px]" />
                                <FaStar className="text-[#ffb33e] text-[16px]" />
                                <FaStar className="text-[#ffb33e] text-[16px]" />
                                <FaStar className="text-[#ffb33e] text-[16px]" />
                                <FaStar className="text-[#ffb33e] text-[16px]" />
                            </div>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default ReviewSlider;
