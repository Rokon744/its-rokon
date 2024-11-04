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
        <section className='py-28' id='contact'>
            <div className="container">
                <h1 data-aos="fade-up" className='text-3xl md:text-5xl text-center header-text font-semibold tracking-wider'>
                    Get In Touch
                </h1>
                <div data-aos="fade-up" data-aos-delay="300" className='flex justify-center items-center gap-3 social-media pt-5'>
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
                <form data-aos="fade-up" data-aos-delay="800" ref={form} onSubmit={sendEmail} action="#" className='flex flex-col gap-5 py-20 max-w-[600px] m-auto'>
                    <input type="text" name='name' placeholder='Name' className='outline-none p-3 italic bg-transparent border-b' required />
                    <input type="email" name='email' placeholder='Email' className='outline-none p-3 italic bg-transparent border-b' required />
                    <textarea name="message" cols={5} rows={6} placeholder='Type Your Message' className='outline-none p-3 italic bg-transparent border' required ></textarea>
                    <AwesomeButton
                        type="primary"
                        className='px-10 py-2 w-[100px] !m-auto'
                    >
                        <input type='submit' value={"Send"} className='hover:text-white px-10 py-2 text-black transition-all ease-in-out duration-300'></input>
                    </AwesomeButton>
                    <ul>
                        {sended && (
                            <li class="flex items-center">
                                <svg class="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Send Successful
                            </li>
                        )}
                        {loading && (
                            <li class="flex items-center">
                                <div role="status">
                                    <svg aria-hidden="true" class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                                Sending...
                            </li>
                        )}
                    </ul>
                </form>
            </div>
        </section>
    );
};

export default Contact;
