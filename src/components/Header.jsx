"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Changa } from 'next/font/google'
import { AwesomeButton } from 'react-awesome-button'
// import 'react-awesome-button/dist/styles.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const changa = Changa({ subsets: ['latin'] })

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className={`bg-[#383632] h-[70px] fixed w-full z-50`}>
            <nav className='flex justify-between items-center !py-3 container'>
                <Link href={"/"} className="logo">
                    <h2 className={`text-4xl text-[#19f5d7] ${changa.className}`}>Rokon</h2>
                </Link>
                <ul className="nav-itens flex items-center gap-10 max-lg:hidden">
                    <li>
                        <Link href={"/"} className='nav-item'>Home</Link>
                    </li>
                    <li>
                        <Link href={"#about"} className='nav-item'>About</Link>
                    </li>
                    <li>
                        <Link href={"#services"} className='nav-item'>Services</Link>
                    </li>
                    <li>
                        <Link href={"#projects"} className='nav-item'>Projects</Link>
                    </li>
                    <li>
                        <Link href={"#testimonial"} className='nav-item'>Testimonial</Link>
                    </li>
                    <AwesomeButton
                        type="primary"
                        className='px-10 py-2'
                    >
                        <Link href={"#contact"} className='nav-item px-10 py-2 text-black'>Say Hi</Link>
                    </AwesomeButton>
                </ul>
                {!openMenu &&
                    <button className='text-3xl lg:hidden' onClick={() => setOpenMenu(true)}>
                        <RxHamburgerMenu />
                    </button>
                }
                {openMenu &&
                    <button className='text-3xl lg:hidden' onClick={() => setOpenMenu(false)}>
                        <RxCross1 />
                    </button>
                }
            </nav>
            <div className={`${openMenu ? 'w-full' : 'w-0'} overflow-hidden transition-all duration-300 h-[93vh] bg-[#383632]`}>
                <ul className="nav-itens flex flex-col items-center justify-center gap-10 mt-[-30px] lg:hidden h-full">
                    <li>
                        <Link href={"/"} className='nav-item'>Home</Link>
                    </li>
                    <li>
                        <Link href={"#about"} className='nav-item'>About</Link>
                    </li>
                    <li>
                        <Link href={"#services"} className='nav-item'>Services</Link>
                    </li>
                    <li>
                        <Link href={"#projects"} className='nav-item'>Projects</Link>
                    </li>
                    <li>
                        <Link href={"#testimonial"} className='nav-item'>Testimonial</Link>
                    </li>
                    <AwesomeButton
                        size='large'
                        type="primary"
                        className='px-10 py-2'
                    >
                        <Link href={"#contact"} className='nav-item px-10 py-2'>Say Hi</Link>
                    </AwesomeButton>
                </ul>
            </div>
        </header>
    )
}

export default Header