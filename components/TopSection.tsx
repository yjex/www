"use client"
import Image from 'next/image'
import React from 'react'
import map_logo from '@/images/logos/map_logo.png'
import welcome_banner from '@/images/icons/welcome_banner.png'
import FootstepDivider from '@/components/FootstepDivider'
import Floater from '@/components/Floater'

export default function TopSection() {

    return (
        <div>
            <div className="flex justify-center items-center z-20 relative">
               <div className="flex font-serif items-center justify-center pl-5 pt-7 font-bold text-xl text-[#60212E] italic" style={{fontFamily: '"palatino", serif'}}>
                    <Floater img={welcome_banner} width={300} height={120}/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-4">
                <Image src={map_logo} width={300} height={300} alt="map logo" />
            </div>
            <FootstepDivider />
        </div>
    )
}
