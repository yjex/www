import Image from 'next/image'
import footsteps from '@/images/layout/footsteps.png'


export default function FootstepDivider() {
    
const repeatCount = 4;

    return (
        <div className="w-screen flex justify-center pt-7 overflow-hidden">            
            {[...Array(repeatCount)].map((_, index) => (
                <Image 
                    key={index} 
                    src={footsteps} 
                    width={350}  // Set the width for each image
                    height={350} // Set the height for each image
                    alt="footsteps divider"
                />
            ))}
        </div>
    )
}