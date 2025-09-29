import Image from 'next/image'
import React from 'react'
import me from "../../assets/me1.png"
import { Changa } from 'next/font/google'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const changa = Changa({ subsets: ['latin'] })

const Hero = () => {
    return (
        <section className='pt-24 md:pt-40 flex justify-center items-center'>
            <div className="container">
                <h1 data-aos="fade-up" className={`text-3xl md:text-6xl text-center header-text font-semibold`}>
                    Frontend Web Developer
                </h1>
                <h1 data-aos="fade-up" className={`text-3xl md:text-6xl text-center ${changa.className}`}>
                    <span className='text-[#19f5d7]'>{"</>"} </span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className='text-center text-base md:text-lg mt-5'>I design and code beautifully simple things, and I love what I do.</p>
                <Image data-aos="fade-up" data-aos-delay="500" src={me} width={500} height={500} className='rounded-b-full m-auto' alt='me' />
                {/* <div className='flex justify-center items-center gap-3 social-media pt-10'>
                    <Link className='btn-social' href="https://github.com/Rokon744" target='_blank'>
                        <FaGithub />
                    </Link>
                    <Link className='btn-social' href="https://www.linkedin.com/in/md-rokon-8b8b8029a/" target='_blank'>
                        <FaLinkedinIn />
                    </Link>
                    <Link className='btn-social' href="https://www.facebook.com/DevRokon/" target='_blank'>
                        <FaFacebookF />
                    </Link>
                    <Link className='btn-social' href="https://www.instagram.com/devrokon" target='_blank'>
                        <FaInstagram />
                    </Link>
                    <Link className='btn-social' href="https://x.com/rokon_dev" target='_blank'>
                        <FaTwitter />
                    </Link>
                </div> */}
            </div>
        </section>
    )
}

export default Hero