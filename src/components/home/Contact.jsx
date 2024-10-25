'use client'
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaCheck } from "react-icons/fa";
import { AwesomeButton } from 'react-awesome-button';

const Contact = () => {
    const [sended, setSended] = useState(null);
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        emailjs
            .sendForm('service_ftci20m', 'template_n9l9044', form.current, {
                publicKey: 'b-f3jDXDlBa5qxgz0',
            })
            .then(
                () => {
                    setSended(true);
                    setLoading(false); // Stop loading
                    form.current.reset();

                    setInterval(() => {
                        setSended(false)
                    }, 7000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setLoading(false); // Stop loading in case of error
                },
            );
    };

    return (
        <section className='pb-20'>
            <div className="container">
                <h1 className='text-3xl md:text-5xl text-center header-text font-semibold tracking-wider'>
                    Get In Touch
                </h1>
                <div className='flex justify-center items-center gap-3 social-media pt-5'>
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
                </div>
                <form ref={form} onSubmit={sendEmail} action="#" className='flex flex-col gap-5 py-20 max-w-[600px] m-auto'>
                    <input type="text" name='name' placeholder='Name' className='outline-none p-3 italic bg-transparent border-b' required />
                    <input type="email" name='email' placeholder='Email' className='outline-none p-3 italic bg-transparent border-b' required />
                    <textarea name="message" cols={5} rows={6} placeholder='Type Your Message' className='outline-none p-3 italic bg-transparent border' required ></textarea>
                    <AwesomeButton
                        type="primary"
                        className='px-10 py-2 w-[100px] !m-auto'
                    >
                        <input type='submit' value={"Send"} className='hover:text-white px-10 py-2 text-black transition-all ease-in-out duration-300'></input>
                    </AwesomeButton>
                    {loading && (
                        <p className='text-[#1a8d1a] flex items-center gap-2'>
                            Sending...
                        </p>
                    )}
                    {sended && (
                        <p className='text-[#1a8d1a] flex items-center gap-2'>
                            <span>Send Successful</span>
                            <span><FaCheck /></span>
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
