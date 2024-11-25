"use client"
import IconComponent from '@/components/IconComponent'
import about_me_close from '@/images/icons/about_me_close.png'
import about_me_open from '@/images/icons/about_me_open.png'
import experience_close from '@/images//icons/experience_close.png'
import experience_open from '@/images/icons/experience_open.png'
import projects_close from '@/images/icons/projects_close.png'
import projects_open from '@/images/icons/projects_open.png'
import explore_banner from '@/images/icons/explore_banner.png'
import certifications_open from '@/images/icons/certifications_open.png'
import certifications_close from '@/images/icons/certifications_close.png'
import Image from 'next/image'
import FootstepDivider from './FootstepDivider'

export default function BottomSection() {

    return (
        <div>
            <div className="flex flex-col items-center">    
                <Image src={explore_banner} width={500} alt={"explore icon"}/>                
                <div className="flex flex-row w-9/10 justify-between">
                    <div className="w-fit">
                        <a href="#about-me">
                            <IconComponent
                                originalSrc={about_me_close}
                                hoverSrc={about_me_open}
                                alt={"about me icons"}
                                width={250}
                                height={200}
                                />
                        </a>
                    </div>
                    <div className="w-fit">
                        <a href="#experience">
                            <IconComponent
                                originalSrc={experience_close}
                                hoverSrc={experience_open}
                                alt={"experience icons"}
                                width={250}
                                height={200}
                                />
                        </a>
                    </div>
                    <div className='w-fit'>
                        <a href="#projects">
                            <IconComponent
                                originalSrc={projects_close}
                                hoverSrc={projects_open}
                                alt={"projects icons"}
                                width={250}
                                height={200}
                                />
                        </a>
                    </div>
                    <div className='w-fit'>
                        <a href="#certifications">
                            <IconComponent
                                originalSrc={certifications_close}
                                hoverSrc={certifications_open}
                                alt={"projects icons"}
                                width={250}
                                height={200}
                                />
                        </a>
                    </div>
                </div>
            </div>
            <FootstepDivider />
        </div>
        )
}