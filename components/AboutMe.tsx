"use client"
import Image from 'next/image'
import about_me_banner from '@/images/icons/about_me_banner.png'
import about_me_poster from '@/images/logos/intro_poster.png'
import FootstepDivider from './FootstepDivider'
import { Typewriter } from 'nextjs-simple-typewriter'
import { Badge } from '@/components/ui/badge'

export default function AboutMe() {
    return(
        <div className='flex flex-col items-center'>
                <Image src={about_me_banner} width={500} alt={"certifications banner"} />
                <div className='flex flex-col w-full lg:flex-row justify-center items-center text-xl'>
                    <Image src={about_me_poster} width={500} alt={"about me poster"} />
                    <div className='flex flex-col w-full lg:w-2/5 gap-4 px-8'>
                        <div className='font-bold text-[#60212E]' style={{fontFamily: "Courier, monospace"}}>
                            <Typewriter words={["Hi! I'm Alexis, welcome to my site!"]} typeSpeed={70} deleteSpeed={50} cursor={true} cursorBlinking={true} loop={0}/>
                        </div>
                        <p className='font-serif text-lg text-justify'>
                            I am a <b>curious, driven, and quick learner,</b> pursuing a career in the tech space. As an <b>aspiring data analyst</b> majoring in Strategy and Technology for Business, I am constantly acquiring new skills and keeping my mind sharp, striving to provide <b>in-depth, data-driven solutions</b> to complex business problems. With my proclivity for <b>creativity and bravery</b> in facing new challenges, I am <b>flexible, proactive, and ready to innovate</b>.
                        </p>
                        <p className='font-serif text-lg text-justify'>
                        Feel free to <a href='#footer' className="underline text-[#60212E] hover:font-bold">reach out</a> to me if you have any questions, musings, or comments on any of my projects, or if any of our interests align (actually, you can connect with me even if our interests aren&apos;t similar - I am a very friendly person)!

                        </p>
                        <div className='font-serif text-lg text-justify'>
                            <span className='font-bold'>Current Side Quest: </span><Badge className="font-sans text-base bg-[#60212E] hover:bg-[#60212E]">Web Development</Badge>
                        </div>
                    </div>
                </div>
            <FootstepDivider />
        </div>
    
    )
}