"use client"
import Image from 'next/image'
import experience_banner from '@/images/icons/experience_banner.png'
import ExperienceCards from '@/components/ExperienceCard'

export default function Experience() {
    return(
        <div className="flex flex-col items-center justify-center pb-7">
                <Image src={experience_banner} width={500} alt={"certifications banner"} />
                <ExperienceCards />
        </div>
    
    )
}