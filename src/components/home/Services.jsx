'use client'
import Link from 'next/link';
import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css';


const Services = () => {
    return (
        <section className='services'>
            <div className="container">
                <h1 className={`text-3xl md:text-5xl text-center header-text font-semibold tracking-wider`}>
                    Services
                </h1>
                <p className="text-2xl header-text text-center mt-5 mb-0">
                    What services do I provide you
                </p>
                <div className="services-inner py-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-xl:space-y-5">
                    <div class="overflow-hidden border py-10 px-5 md:px-10 bg-white text-black text-center">
                        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                        <div class="px-6 py-4">
                            <div class="flex justify-between">
                                <h3 className="text-2xl tracking-wider header-text font-semibold">
                                    Figma to React JS
                                </h3>
                                <p className='font-semibold text-xl'>$30</p>
                            </div>
                            <p class="text-base font-semibold pb-5 pt-10">
                                I will convert figma/psd/ai/xd to React landing page
                            </p>
                            <div className='space-y-2 my-10'>
                                <h4 className='text-base font-semibold text-[#2226eb]'>Package</h4>
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
                                <Link href={"#contact"} className='nav-item px-10 py-2 text-black'>Hire Me</Link>
                            </AwesomeButton>
                        </div>
                    </div>
                    <div class="overflow-hidden border py-10 px-5 md:px-10 bg-white text-black text-center">
                        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                        <div class="px-6 py-4">
                            <div class="flex justify-between">
                                <h3 className="text-2xl tracking-wider header-text font-semibold">
                                    Frontend developer
                                </h3>
                                <p className='font-semibold text-xl'>Custom</p>
                            </div>
                            <p class="text-base font-semibold pb-5 pt-10">
                                I will convert figma/psd/ai/xd/png/jpg to HTML/React/Next Js
                            </p>
                            <h4 className='text-base font-semibold text-[#2226eb] mt-10'>Technologies</h4>
                            <div className='text-[#ff8826] font-semibold mt-3'>
                                <p>HTML5, CSS3, Javacript, React/ Next js, Bootstrap, Tailwind CSS, Framer Motion, Ant Design, Material UI, Mongoose etc</p>
                            </div>
                            <div className='space-y-2 mb-10 mt-5'>
                                <h4 className='text-base font-semibold text-[#2226eb]'>Package</h4>
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
                                <Link href={"#contact"} className='nav-item px-10 py-2 text-black'>Hire Me</Link>
                            </AwesomeButton>
                        </div>
                    </div>
                    <div class="overflow-hidden border py-10 px-5 md:px-10 bg-white text-black text-center">
                        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                        <div class="px-6 py-4">
                            <div class="flex justify-between">
                                <h3 className="text-2xl tracking-wider header-text font-semibold">
                                    Figma to Next Js
                                </h3>
                                <p className='font-semibold text-xl'>$80</p>
                            </div>
                            <p class="text-base font-semibold pb-5 pt-10">
                                I will convert figma/psd/ai/xd to Next js 3 pages
                            </p>
                            <div className='space-y-2 my-10'>
                                <h4 className='text-base font-semibold text-[#2226eb]'>Package</h4>
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
                                <Link href={"#contact"} className='nav-item px-10 py-2 text-black'>Hire Me</Link>
                            </AwesomeButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services