"use client"
import { FunctionComponent } from "react";

interface Skill {
    skill: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: FunctionComponent<any>;
}

export default function List({skillList, title}:{skillList: Skill[], title: string}){
    return (
        <div className="text-[#60212E] font-bold px-8" style={{fontFamily: "Courier, monospace"}}>
            <h1 className="text-3xl">{title}</h1>
            {skillList.map(({skill, icon: Icon}) => (
                <div key={skill} className="flex items-center gap-2 font-serif font-normal text-xl">{skill} <Icon/></div>
            ))}
        </div>
    )
}