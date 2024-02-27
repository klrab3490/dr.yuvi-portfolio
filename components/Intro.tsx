"use client";

import Image from 'next/image'
import React from 'react'
import Portrait from '@/public/Yuvaraj.jpeg'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsFacebook, BsInstagram, BsLinkedin, BsTwitch, BsTwitterX } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
    return (
        <section className='mb-28  text-center'>
            {/* Image & Icon */}
            <div className="flex items-center justify-center">
                <div className='relative'>
                    <motion.div initial={{ opacity: 0 , scale: 0 }} animate={{ opacity: 1 , scale: 1 }} transition={{ type: "tween", duration: 0.2, }}>
                        <Image src={Portrait} alt='Yuvaraj Portrait' width='192' height='192' quality='95' priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                    </motion.div>
                    <motion.span initial={{ opacity: 0 , scale: 0 }} animate={{ opacity: 1 , scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }} className='text-4xl absolute bottom-0 right-0'>👋</motion.span>
                </div>
            </div>
            {/* Passage */}
            <motion.p initial={{ opacity: 0 , y: 100 }} animate={{ opacity: 1 , y: 0 }} className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
                <span className='font-bold'>Hello, I&apos;m Yuvaraj</span> I&apos;m a{" "}
                <span className='font-bold'>Ph.D holder in Biomedical Engineering</span> specializing in the field of{" "}
                <span className='font-bold'>Nanomedicine, which I received from VIT University</span> with{" "}
                <span className='font-bold'>15+ years of experience</span> in{" "} <span className='font-bold'>Teaching</span>
            </motion.p>
            {/* Button For CV, Social Handles */}
            <motion.div initial={{ opacity: 0 , y: 100 }} animate={{ opacity: 1 , y: 0 }} transition={{ delay: 0.1, }} className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
                {/* <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact Me Here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> </Link> */}
                <Link href='tel:+919942255044' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact Me Here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> </Link>
                <Link href='/CV.pdf' download className='group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'>Downlaod CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition' /></Link>
                <div className='flex gap-2 text-lg font-medium'>
                    <Link href={'https://www.linkedin.com/in/dr-yuvaraj-velusamy-b31ab8a'} className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10' > <BsLinkedin /> </Link>
                    <Link href={'https://www.facebook.com/yuvaraj.velusamy'} className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10' > <BsFacebook /> </Link>
                    <Link href={'https://www.instagram.com/dr.yuvi_yuva'} className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10' > <BsInstagram /> </Link>
                    <Link href={'https://twitter.com/Prof_Dr_Yuvaraj'} className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10' > <BsTwitterX /> </Link>
                </div>
            </motion.div>
        </section> 
    )
}
