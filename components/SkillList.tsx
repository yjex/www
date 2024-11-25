"use client"

import { Badge } from "@/components/ui/badge"

export default function SkillList ({listOfSkills}:{listOfSkills: string[]}) {
    return (
        <div className="flex flex-row items-left space-x-1">
            {listOfSkills.map((skill) => (
                <Badge key={skill} className="px-2 py-1 text-xs font-semibold rounded-lg bg-[#60212E] hover:bg-[#60212E]">
                    {skill}</Badge>
            ))}
        </div>
    )
}