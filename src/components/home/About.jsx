import React from 'react'
import { Heebo } from 'next/font/google'
import Skills from './Skills';

const heebo = Heebo({ subsets: ['latin'] })

const About = () => {
    return (
        <section className='about min-h-[800px] pt-20'>
            <div className="container">
                <div className="about-left">
                    <h1 className={`text-3xl md:text-5xl text-center header-text font-semibold tracking-wide pb-5`}>
                        Hi I'm Rokon. Welcome to my website
                    </h1>
                    <p className='text-center text-base md:text-lg mt-5 max-w-[1000px] m-auto'>
                        I'm a professional frontend web developer and I have 2+ years of experience. I love creating awesome websites that help clients to grow their businesses effectively. I can help you with HTML, CSS, Javascript, React, Tailwind CSS, Bootstrap, sass and Responsive design. My goal is to provide my clients with 100% satisfaction and to deliver high-quality work within a fast. That's why You can Hire me.
                    </p>
                </div>
                <div className="about-right mt-10">
                    <Skills />
                </div>
            </div>
        </section>
    )
}

export default About