"use client"
import React, {useState} from 'react';
import { Menu, X } from 'lucide-react';
import new_logo_white from '@/images/logos/new_logo_white.png'
import Image from 'next/image';

export default function NavBar() {
    const [isClick, setIsClick] = useState(false);

    const toggleNavBar = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setIsClick(!isClick);
        event.currentTarget.blur(); // Removes focus after clicking
    }

    return (
        <div className="relative font-serif">
            <div className="bg-[#60212E] font-serif">
                <div className="flex items-center justify-between h-16">
                    {/* Hamburger Menu Toggle Button */}
                    <div className="flex items-center pl-2">
                        <button 
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:ring-white hover:ring-inset hover:outline-none hover:ring-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                            onClick={toggleNavBar}
                        >
                            {isClick ? <X /> : <Menu />}
                        </button>
                    </div>

                    <div className='flex items-center pr-3'>
                        <Image src={new_logo_white} width={70} height={70} alt={"page logo"} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`bg-[#C49895] fixed top-0 bottom-0 w-1/4 h-screen left-0 z-30 transform transition-transform duration-300 ease-in-out ${
                    isClick ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex top-0 right-0 p-4">
                    {/* Close Menu Button */}
                    <button 
                        className="text-[#60212E] rounded-md p-2 hover:text-[#60212E] hover:ring-[#60212E] hover:ring-inset hover:outline-none hover:ring-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#60212E]"
                        onClick={toggleNavBar}
                    >
                        <X />
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[#60212E]">  ───────── ໑᱖ ─────────</p>
                    <a href="#about-me" className="block px-6 py-2 font-bold text-[#60212E] hover:underline">
                        About Me
                    </a>
                    <a href="#experience" className="block px-6 py-2 font-bold text-[#60212E] hover:underline">
                        Experience
                    </a>
                    <a href="#projects" className="block px-6 py-2 font-bold text-[#60212E] hover:underline">
                        Projects
                    </a>
                    <a href="#footer" className="block px-6 py-2 font-bold text-[#60212E] hover:underline">
                        Reach Out
                    </a>
                </div>
            </div>
        </div>
    )
}