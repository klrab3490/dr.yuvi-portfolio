import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './darkmode/mode-toggle'

const Navbar = () => {
    return (
        <nav className='py-5 mb-6 flex justify-between items-center px-8 2xl:px-16'>
            <h1 className='text-xl font-VT323 lg:text-3xl text-black dark:text-white'>
                <Link href={"/"}>Home</Link>
            </h1>
            <ul className='flex items-center'>
                <li className='ml-5'>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className='ml-5'>
                    <Link href={"/about"}>About</Link>
                </li>
                <li className='ml-5'>
                    <Link href={"/projects"}>Projects</Link>
                </li>
                <li className='ml-5'>
                    <ModeToggle />
                </li>
                <li className='ml-5'>
                    <a href="#" className=' bg-gradient-to-r from-cyan-400 dark:from-cyan-800 to-teal-800 dark:to-teal-400 text-white px-2 py-1 rounded-md lg:px-4 lg:py-2'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;