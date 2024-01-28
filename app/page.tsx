"use client";

import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const Home = () => {
    return (
        <div>
            <div className=' text-center'>
                <h2 className='font-burtons text-5xl py-2 text-teal-800 dark:text-teal-400 font-medium md:text-6xl '>
                    Dr. Yuvaraj Velusamy
                </h2>
                <div className=" font-VT323 text-3xl py-2 md:text-3xl text-black dark:text-white">
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString("I'm a ")
                            .typeString( "Programmer")
                            .pauseFor(2000)
                            .deleteChars(10)
                            .typeString("Developer")
                            .pauseFor(2000)
                            .deleteChars(9)
                            .typeString("Designer")
                            .pauseFor(2000)
                            .deleteChars(8)
                            .start()
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                        }} 
                    />
                </div>
                <p className='text-xl py-3 leading-8 text-gray-800 md:text-4xl max-w-lg mx-auto dark:text-white' >
                    Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!
                </p>
            </div>
            <div>
                <p className='text-3xl flex justify-center font-burtons gap-8 text-teal-800 dark:text-teal-400 py-3'>Connect with me</p>
                <div className='text-3xl flex justify-center gap-4 text-gray-600 py-2 lg:gap-8 lg:text-4xl'>   
                    <Link href={"https://www.instagram.com/dr.yuvi_yuva"} ><Instagram scale={2} /></Link>
                    <Link href={"https://www.facebook.com/yuvaraj.velusamy?mibextid=ZbWKwL"} ><Facebook scale={2} /></Link>
                    <Link href={"https://www.linkedin.com/in/dr-yuvaraj-velusamy-b31ab8a/"} ><Linkedin scale={2} /></Link>
                    <Link href={"https://wa.me/919942255044"}> <SiWhatsapp size={24} /> </Link>
                    <Link href={"mailto:dr.yuvarajvelusamy@gmail.com"}> <Mail scale={2} /> </Link>
                </div>
            </div>
            <div className='relative mx-auto rounded-full w-60 h-60 mt-5 overflow-hidden lg:w-100 lg:h-100'>
                
            </div>
        </div>
    )
}

export default Home;