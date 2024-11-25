import experienceArray from "@/data/experience";
import Image, { StaticImageData } from "next/image";
import OpenDialog from "@/components/ExperienceDialog"
  

const ExperienceCard = ({
  img,
  title,
  cardDescription,
  description,
  notableProjects,
  duration,
  skills,
//   link,
}: {
  img: StaticImageData;
  title: string;
  cardDescription: string;
  description: string;
  notableProjects: string;
  duration: string;
  skills: string[];
//   link: string;
}) => {
    return (
        <figure
            className="relative flex flex-col justify-center p-4 items-center w-7/8 h-[270px] overflow-hidden border-2 m-3 border-[#60212E] bg-[#FFFBF4] hover:bg-[#C49895]">
            <div className="flex flex-col justify-center text-center items-center space-y-3">
                <Image src={img} alt="company logos" height={80} />                
                <span className="font-bold text-lg" style={{fontFamily: "Courier, monospace"}}>{title}</span>
                <span className="" style={{fontFamily: "Garamond, serif"}}>{cardDescription}</span>
            </div>
            <div className="mt-auto">
                <OpenDialog key={title} title={title} img={img} description={description} duration={duration} skills={skills} notableProjects={notableProjects}/>
            </div>
        </figure>
    )
}

export default function ExperienceCards() {
    return (
        <div 
        className="flex justify-center items-center">
            <div 
                className="grid lg:grid-cols-3 md:grid-cols-2"
                style={{ width: "1300px" }}
            >
                {experienceArray.map((experience) => (
                    <ExperienceCard key={experience.title} {...experience} />
                ))}
            </div>
        </div>
    )
}