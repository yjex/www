"use client"
import projects_banner from '@/images/icons/projects_banner.png'
import Image from 'next/image'
import ProjectCards from '@/components/ProjectCard'

export default function Projects() {
    return(
        <div className="flex flex-col items-center justify-center pb-7">
            <Image src={projects_banner} width={500} alt={"certifications banner"} />
            <ProjectCards />
        </div>
    )
}