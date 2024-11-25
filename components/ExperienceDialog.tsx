import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from 'next/image'
import SkillList from "@/components/SkillList";

export default function ExperienceDialog({
    img,
    title,
    // cardDescription,
    description,
    notableProjects,
    duration,
    skills,
    // link,
}: {
        img: StaticImageData;
        title: string;
        // cardDescription: string;
        description: string;
        notableProjects: string | null;
        duration: string | null;
        skills: string[];
        // link: string;
      }
) {
    return(
        <div>

            <Dialog>
                <DialogTrigger>
                    <Badge className="flex items-center bg-[#60212E] hover:bg-[#60212E] hover:underline">Read More</Badge>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle className="flex flex-col text-xl" style={{fontFamily: "Courier, monospace"}}>
                        <div className="flex justify-center">
                            <Image src={img} alt="company logos" height={100}/>
                        </div>
                        <span className="pt-2">{title}</span>
                    </DialogTitle>
                    <div className="text-black">
                        {duration && (
                            <div className="pb-2 font-bold" style={{fontFamily: "Courier, monospace"}}>
                                {duration}
                            </div>
                        )}
                        <div className="text-justify pb-2" style={{fontFamily: "Garamond, serif"}}>
                            {description}

                            {notableProjects && (
                                <div className="pt-2">
                                    <span className="font-bold">Notable Projects: </span>{notableProjects}
                                </div>
                            )}
                            <div className="pt-2">
                                <SkillList listOfSkills={skills} />
                            </div>
                        </div>                            
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}