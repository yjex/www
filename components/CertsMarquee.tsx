"use client"

import fdccCert from "@/images/certificates/codeinstitute_fdcc.png";
import codedexHtml from "@/images/certificates/codedex_html_cert.png";
import codedexCss from "@/images/certificates/codedex_css_cert.png";
import codedexJs from "@/images/certificates/codedex_javascript_cert.png";
import codedexPython from "@/images/certificates/codedex_python_cert.png";
import datacampPandas from "@/images/certificates/datacamp_pandas_cert.png";
import udemySql from "@/images/certificates/sql_completion_udemy.png";
import googleDA from '@/images/certificates/google_dataanalytics.png'
import Image, {StaticImageData} from 'next/image'
import Marquee from "@/components/ui/marquee";
import SkillList from '@/components/SkillList'

const certs = [
    {
        name: "Code Institute - 5 Day Coding Challenge",
        img: fdccCert,
        body: "Learning the basics of HTML, CSS, and Javascript",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Codedex - The Origins I: HTML",
        img: codedexHtml,
        body: "Stepping into the world of web development with the creation of HTML websites",
        skills: ["HTML"]
    },
    {
        name: "Codedex - The Origins II: CSS",
        img: codedexCss,
        body: "Learning to style HTML pages with CSS",
        skills: ["HTML", "CSS"]
    }, 
    {
        name: "Codedex - The Origins III: JavaScript",
        img: codedexJs,
        body: "Picking up the fundamentals of JavaScript for programming",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Codedex - The Legend of Python",
        img: codedexPython,
        body: "Figuring out programming fundamentals with Python",
        skills: ["Python"]
    },
    {
        name: "DataCamp - Data Manipulation with Pandas",
        img: datacampPandas,
        body: "Mastering the basics of pandas, building foundations for data analysis",
        skills: ["Python", "Pandas"]
    },
    {
        name:"Udemy - The Complete SQL Bootcamp",
        img: udemySql,
        body: "Learning to use SQL quickly and effectively",
        skills: ["SQL"]
    },
    {
        name:"Google - Data Analytics Professional",
        img: googleDA,
        body: "Mastering Data Analytics - including how to use SQL, R, and Tableau",
        skills: ["R", "SQL", "Tableau"]
    }
]

const CertCard = ({
    img,
    name,
    // body,
    skills
  }: {
    img: StaticImageData;
    name: string;
    // body: string;
    skills: string[]
  }) => {
    return (
      <figure
        className="relative flex flex-col w-64 cursor-pointer justify-between space-y-2 overflow-hidden border-2 p-3 border-[#60212E] bg-[#FFFBF4] hover:bg-[#C49895]"
      >
        <div className="flex flex-col font-serif hover:underline hover:text-[#60212E] font-semibold text-s text-center gap-2"
        style={{fontFamily: 'Courier, monospace'}}>
            <>{name}</>
            <div className="flex items-center justify-center">
                <Image src = {img} alt="certificate images" />
            </div>
        </div>
        <div className="mt-auto">
            <SkillList listOfSkills={skills} />
        </div>
      </figure>
    );
  };

export default function CertsMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:35s]">
                {certs.map((cert) => (
                    <CertCard key={cert.name} {...cert} />
                ))}
            </Marquee>
        </div>
    )
}