import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from 'next/image'
import SkillList from "@/components/SkillList";

export default function ProjectDialog({
    img,
    title,
    // cardDescription,
    description,
    skills,
    // link,
}: {
        img: StaticImageData;
        title: string;
        // cardDescription: string;
        description: string;
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
                        <span className="pt-2 text-center pb-4">{title}</span>
                        <div className="flex justify-center">
                            <Image src={img} alt="company logos" height={170} className="border-2 border-[#60212E]"/>
                        </div>
                    </DialogTitle>
                    <div className="text-black">
                        <div className="text-justify pb-2" style={{fontFamily: "Garamond, serif"}}>
                            {description}
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