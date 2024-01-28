"use client";

import React from 'react'
import Link from 'next/link'
import { Copyright, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
    return (
        <footer className='w-full bg-white dark:bg-black px-8 2xl:px-16'>
            {/* <div className="flex gap-2 items-center justify-center p-5">
                Contact Me Via Social Media : 
                <Link href={"https://www.instagram.com/dr.yuvi_yuva"} ><Instagram scale={2} /></Link>
                <Link href={"https://www.facebook.com/yuvaraj.velusamy?mibextid=ZbWKwL"} ><Facebook scale={2} /></Link>
                <Link href={"https://www.linkedin.com/in/dr-yuvaraj-velusamy-b31ab8a/"} ><Linkedin scale={2} /></Link>
                <Link href={"https://wa.me/919942255044"}> <SiWhatsapp size={24} /> </Link>
                <Link href={"mailto:dr.yuvarajvelusamy@gmail.com"}> <Mail scale={2} /> </Link>
            </div> */}
            <hr className='' />
            <div className='flex sm:flex-row flex-col justify-between items-center py-5'>
                <div className='flex flex-col '>
                    <p className='flex'>Copyright  <Copyright className='mx-1' /> </p>
                    <p> Dr.Yuvaraj, All Rights Reserved</p>
                </div>
                <div className='sm:mt-0 mt-5'>
                    Designed By : 
                    <Link href='https://rahulab.vercel.app'>
                        <span className='text-gray-500 hover:text-blue-500'> Rahul A B</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer