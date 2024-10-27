import Image from 'next/image'
import React from 'react'
import fazshop from "../../assets/fazshop.png"
import fazedu from "../../assets/fazedu.png"
import restaurant from "../../assets/resturent.png"
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Projects = () => {
    return (
        <section className='pt-28' id='projects'>
            <div className="container">
                <h1 className={`text-3xl md:text-5xl text-center header-text font-semibold tracking-wider`}>
                    Projects
                </h1>
                <p className="text-2xl header-text text-center mt-5 mb-0 max-w-[1000px] mx-auto">
                    I have completed many projects in the marketplace and out of marketplace. Here are a few past design projects I&apos;ve worked on. Want to see more? <a href="mailto: roknujjamanripon@gmail.com" className='text-[#19f5d7] underline'>Email me</a>.
                </p>
                <div className="projects-inner pt-20 pb-10">
                    <div className="lg:flex justify-center gap-16 items-center lg:pb-40 pb-20">
                        <div className='project-image max-lg:pb-10 max-lg:flex justify-center'>
                            <Image src={fazshop} alt='fazshop' />
                        </div>
                        <div>
                            <h3 className={`text-xl md:text-2xl header-text font-semibold tracking-wider max-lg:text-center`}>
                                Ecommerce (REACT JS)
                            </h3>
                            <p className='text-base md:text-lg mt-5 max-w-[400px] m-auto max-lg:text-center'>
                                Fazshop is a sleek, responsive e-commerce site with a clean product grid, simple navigation, and smooth animations that enhance the user experience.
                            </p>
                            <div className="link-section pt-10 flex justify-between items-center max-lg:max-w-[300px] max-lg:m-auto">
                                <button>
                                    <Link href="https://fazshop.vercel.app/" target='_blank' className='flex items-center gap-2 text-[#19f5d7]'>
                                        <span><FaExternalLinkAlt /></span>
                                        <span>Live Link</span>
                                    </Link>
                                </button>
                                <button>
                                    <Link href="https://github.com/Rokon744/fazshop" target='_blank' className='flex items-center gap-2 text-[#19f5d7]'>
                                        <span><FaGithub className='text-[20px]' /></span>
                                        <span>Source Code</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex justify-center gap-16 items-center lg:pb-40 pb-20">
                        <div className='project-image max-lg:pb-10 max-lg:flex justify-center'>
                            <Image src={fazedu} alt='fazedu' />
                        </div>
                        <div>
                            <h3 className={`text-xl md:text-2xl header-text font-semibold tracking-wider max-lg:text-center`}>
                                Educational (REACT JS)
                            </h3>
                            <p className='text-base md:text-lg mt-5 max-w-[400px] m-auto max-lg:text-center'>
                                FazEdu is a clean and modern educational platform featuring a streamlined design, offering various resources and courses with a simple, user-friendly layout focused on learning accessibility.
                            </p>
                            <div className="link-section pt-10 flex justify-between items-center max-lg:max-w-[300px] max-lg:m-auto">
                                <button>
                                    <Link href="https://fazedu.vercel.app/" target='_blank' className='flex items-center gap-2 text-[#19f5d7]'>
                                        <span><FaExternalLinkAlt /></span>
                                        <span>Live Link</span>
                                    </Link>
                                </button>
                                <button>
                                    <Link href="https://github.com/Rokon744/fazedu" target='_blank' className='flex items-center gap-2 text-[#19f5d7]'>
                                        <span><FaGithub className='text-[20px]' /></span>
                                        <span>Source Code</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex justify-center gap-16 items-center">
                        <div className='project-image max-lg:pb-10 max-lg:flex justify-center'>
                            <Image src={restaurant} alt='fazshop' />
                        </div>
                        <div>
                            <h3 className={`text-xl md:text-2xl header-text font-semibold tracking-wider max-lg:text-center`}>
                                Restaurant (NEXT JS)
                            </h3>
                            <p className='text-base md:text-lg mt-5 max-w-[400px] m-auto max-lg:text-center'>
                                This is the client project, so I can&apos;t show you the source code. I&apos;m really sorry for that.
                            </p>
                            <div className="link-section pt-10 flex justify-between items-center max-lg:max-w-[300px] max-lg:m-auto">
                                <button>
                                    <Link href="https://gourmet-ten.vercel.app/" target='_blank' className='flex items-center gap-2 text-[#19f5d7]'>
                                        <span><FaExternalLinkAlt /></span>
                                        <span>Live Link</span>
                                    </Link>
                                </button>
                                <button>
                                    <Link href="https://github.com/Rokon744/fazshop" target='_blank' className='flex items-center gap-2 text-[#6a7070] pointer-events-none'>
                                        <span><FaGithub className='text-[20px]' /></span>
                                        <span>Source Code</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects