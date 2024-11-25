"use client"
import React, {useState} from 'react'
import Image, {StaticImageData} from 'next/image'



export default function IconComponent(
    {originalSrc, hoverSrc, alt, width, height}:
    {originalSrc: StaticImageData;
        hoverSrc: StaticImageData;
        alt: string;
        width: number;
        height: number;
    }) {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="w-fit"
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)}
        >
            {isHover ? 
                <Image 
                    src={hoverSrc}
                    alt={alt}
                    width={width}
                    height={height}
                />:
                <Image
                    src={originalSrc}
                    alt={alt}
                    width={width}
                    height={height}
                />
            }
        </div>
    );
}