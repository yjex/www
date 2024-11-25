"use client"
import certifications_banner from '@/images/icons/certifications_banner.png'
import Image from 'next/image'
import CertsMarquee from './CertsMarquee'

export default function Certs() {
    return(
        <div className='pb-7'>
            <div className="flex justify-center">
                <Image src={certifications_banner} width={500} alt={"certifications banner"} />
            </div>
            <div>
                <CertsMarquee />
            </div>
        </div>
    
    )
}