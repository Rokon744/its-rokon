'use client'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { AwesomeButton } from 'react-awesome-button'
import "../../styles/services-box.css"


const Services = () => {

    const cardRef = useRef(null)


    useEffect(() => {
        const cards = cardRef.current.querySelectorAll(".services-card");

        cards.forEach((card) => {
            const handleMouseMove = (e) => {
                let x = e.pageX - card.offsetLeft;
                let y = e.pageY - card.offsetTop;

                card.style.setProperty("--x", x + "px");
                card.style.setProperty("--y", y + "px");
            };

            card.addEventListener("mousemove", handleMouseMove);

            // Cleanup function to remove the event listener when component unmounts
            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
            };
        });
    }, []);

    return (
        <section className='services pt-28' id='services'>
            <div className="container">
                <h1 className={`text-3xl md:text-5xl text-center header-text font-semibold tracking-wider`}>
                    Services
                </h1>
                <p className="text-2xl header-text text-center mt-5 mb-0">
                    What services do I provide you
                </p>
                <div ref={cardRef} className="services-inner pt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-xl:space-y-5 xl:gap-5">
                    <div style={{"--clr":"#0f0"}} className="services-card overflow-hidden border border-gray-800 rounded-xl py-10 px-5 md:px-10 bg-black text-white text-center">
                        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                        <div className="px-6 py-4 services-card-body">
                            <div className="flex justify-between">
                                <h3 className="text-2xl tracking-wider header-text font-semibold">
                                    Figma to React JS
                                </h3>
                                <p className='font-semibold text-xl'>$30</p>
                            </div>
                            <p className="text-base font-semibold pb-5 pt-10">
                                I will convert figma/psd/ai/xd to React landing page
                            </p>
                            <div className='space-y-2 my-10'>
                                <h4 className='text-base font-semibold text-[#8c27ff]'>Package</h4>
                                <p> 1 page</p>
                                <p> Design customization</p>
                                <p> Content upload</p>
                                <p> Responsive design</p>
                                <p> Source code</p>
                                <p> Detailed code comments</p>
                            </div>
                            <AwesomeButton
                                type="primary"
                                className='px-10 py-2'
                            >
                                <Link href={"#contact"} className='hover:text-white px-10 py-2 text-black transition-all ease-in-out duration-300'>Hire Me</Link>
                            </AwesomeButton>
                        </div>
                    </div>
                    <div style={{"--clr":"#ff0"}} className="services-card overflow-hidden border border-gray-800 rounded-xl py-10 px-5 md:px-10 bg-black text-white text-center">
                        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                        <div className="px-6 py-4 services-card-body">
                            <div className="flex justify-between">
                                <h3 className="text-2xl tracking-wider header-text font-semibold">
                                    Frontend developer
                                </h3>
                                <p className='font-semibold text-xl'>Custom</p>
                            </div>
                            <p className="text-base font-semibold pb-5 pt-10">
                                I will convert figma/psd/ai/xd/png/jpg to HTML/React/Next Js
                            </p>
                            <h4 className='text-base font-semibold text-[#8c27ff] mt-10'>Technologies</h4>
                            <div className='text-[#ff8826] font-semibold mt-3'>
                                <p>HTML5, CSS3, Javacript, React/ Next js, Bootstrap, Tailwind CSS, Framer Motion, Ant Design, Material UI, Mongoose etc</p>
                            </div>
                            <div className='space-y-2 mb-10 mt-5'>
                                <h4 className='text-base font-semibold text-[#8c27ff]'>Package</h4>
                                <p> Custom pages</p>
                                <p> Design customization</p>
                                <p> Content upload</p>
                                <p> Responsive design</p>
                                <p> Source code</p>
                                <p> Detailed code comments</p>
                                <p> API integration</p>
                            </div>
                            <AwesomeButton
                                type="primary"
                                className='px-10 py-2'
                            >
                                <Link href={"#contact"} className='hover:text-white px-10 py-2 text-black transition-all ease-in-out duration-300'>Hire Me</Link>
                            </AwesomeButton>
                        </div>
                    </div>
                    <div style={{"--clr":"red"}} className="services-card overflow-hidden border border-gray-800 rounded-xl py-10 px-5 md:px-10 bg-black text-white text-center">
                        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                        <div className="px-6 py-4 services-card-body">
                            <div className="flex justify-between">
                                <h3 className="text-2xl tracking-wider header-text font-semibold">
                                    Figma to Next Js
                                </h3>
                                <p className='font-semibold text-xl'>$80</p>
                            </div>
                            <p className="text-base font-semibold pb-5 pt-10">
                                I will convert figma/psd/ai/xd to Next js 3 pages
                            </p>
                            <div className='space-y-2 my-10'>
                                <h4 className='text-base font-semibold text-[#8c27ff]'>Package</h4>
                                <p> 3 pages</p>
                                <p> Design customization</p>
                                <p> Content upload</p>
                                <p> Responsive design</p>
                                <p> Source code</p>
                                <p> Detailed code comments</p>
                            </div>
                            <AwesomeButton
                                type="primary"
                                className='px-10 py-2'
                            >
                                <Link href={"#contact"} className='hover:text-white transition-all ease-in-out duration-300 px-10 py-2 text-black'>Hire Me</Link>
                            </AwesomeButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services