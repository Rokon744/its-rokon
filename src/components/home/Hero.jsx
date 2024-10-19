import Image from 'next/image'
import React from 'react'
import me from "../../assets/me.jpg"
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
        <section className='min-h-screen flex justify-center items-center'>
            <div className="container">
                <h1 className={`text-6xl text-center ${changa.className}`}>
                    <span className='text-[#6bff26]'>{"</>"} </span>
                    Frontend Web Developer
                    <span className='text-[#6bff26]'> {"</>"}</span></h1>
                <p className='text-center text-xl mt-5'>I design and code beautifully simple things, and I love what I do.</p>
                <Image src={me} width={300} height={300} className='rounded-full m-auto pt-14' alt='me' />
                <div className='flex justify-center items-center gap-5 social-media pt-10'>
                    <Link className='btn-social' href="https://www.facebook.com/DevRokon/" target='_blank'>
                        <FaFacebookF />
                    </Link>
                    <Link className='btn-social' href="https://www.instagram.com/devrokon" target='_blank'>
                        <FaInstagram />
                    </Link>
                    <Link className='btn-social' href="https://x.com/rokon_dev" target='_blank'>
                        <FaTwitter />
                    </Link>
                    <Link className='btn-social' href="https://www.linkedin.com/in/md-rokon-8b8b8029a/" target='_blank'>
                        <FaLinkedinIn />
                    </Link>
                    <Link className='btn-social' href="https://github.com/Rokon744" target='_blank'>
                        <FaGithub />
                    </Link>
                </div>
                <div className='flex justify-center items-center gap-5 social-media pt-5'>
                </div>
            </div>
        </section>
    )
}

export default Hero