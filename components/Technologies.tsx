"use client"
import List from '@/components/List';
import frontendArray from '@/data/frontend';
import backendArray from '@/data/backend';
import designArray from '@/data/design';
import FootstepDivider from "@/components/FootstepDivider";
import technologies_banner from '@/images/icons/technologies_banner.png'
import Image from 'next/image'

export default function Technologies() {
    return(
        <div className='flex flex-col items-center'>
            <Image src={technologies_banner} width={500} alt="technology banner"/>
            <div className="flex flex-row w-full max-w-4xl justify-between">
                <List title = {"Front-End"} skillList={frontendArray} />
                <List title = {"Back-end"} skillList={backendArray} />
                <List title = {"Design"} skillList={designArray} />
            </div>
            <FootstepDivider />
        </div>
    )
}