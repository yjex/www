import projectsArray from "@/data/projects"
import Image, {StaticImageData} from 'next/image'
import ProjectDialog from "@/components/ProjectDialog";

const ProjectCard = ({
    title,
    description,
    cardDescription,
    img,
    // link,
    skills,
}:{
    title: string,
    cardDescription: string;
    description: string;
    img: StaticImageData;
    // link: string;
    skills: string[];
}) => {
    return (
        <figure
            className="relative flex flex-col justify-center p-4 items-center w-7/8 h-[270px] overflow-hidden border-2 m-3 border-[#60212E] bg-[#FFFBF4] hover:bg-[#C49895]">
            <div className="flex flex-col justify-center text-center items-center space-y-3">
                <span className="font-bold text-lg" style={{fontFamily: "Courier, monospace"}}>{title}</span>
                <Image src={img} alt="company logos" height={130} className="border-2 border-[#60212E]"/>                
                <span className="" style={{fontFamily: "Garamond, serif"}}>{cardDescription}</span>
            </div>
            <div className="mt-auto">
                <ProjectDialog key={title} title={title} img={img} description={description} skills={skills} />
            </div>
        </figure>
    )
}

export default function ProjectCards() {
    return (
        <div 
        className="flex justify-center items-center w-full">
            <div 
                className="grid lg:grid-cols-3 md:grid-cols-2"
                style={{ width: "1300px" }}
            >
                {projectsArray.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    )
}