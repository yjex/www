"use client"
import { Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import logo from "@/images/logos/new_logo_white.png"

export default function Footer() {
    return (
        <footer className="relative" id="footer">
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/3 hidden lg:block z-5">
                <Image src={logo} width={150} height={100} alt={"my logo in white"}/>
            </div>
            <div className="flex justify-between bg-[#60212E] text-[white] p-10 font-serif">
                <div className="flex flex-col">
                    <div className="flex flex-row space-x-2 pb-2">
                        <Mail /><span>alexistnlx91@gmail.com</span>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <Linkedin />
                        <a 
                            href="https://www.linkedin.com/in/neolexi-alexis" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-white-500 hover:underline"
                        >
                            www.linkedin.com/in/neolexi-alexis
                        </a>
                    </div>

                </div>
                <div className="flex items-center items-bottom text-right text-xs object-right-bottom">
                    © 2024 by Alexis Neo
                    <br/>
                    All rights reserved.
                </div>
            </div>
        </footer>
    )
}