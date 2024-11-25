import { StaticImageData } from 'next/image';
import React from 'react'
import Image from 'next/image'

export default function Floater({
    img,
    width,
    height,
}:{
    img: StaticImageData;
    width: number;
    height: number; }
) {
    return (
        <div className='react-floater-animated'><Image src={img} alt="banner image" width={width} height={height}/></div>
    )
}