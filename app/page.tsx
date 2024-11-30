"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import TopSection from "@/components/TopSection";
import BottomSection from "@/components/BottomSection";
import Certs from "@/components/Certs";
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import AboutMe from "@/components/AboutMe"
import paper_background from "@/images/layout/watercolor_paper.png"
import DownloadFile from "@/components/DownloadResume";
import Technologies from '@/components/Technologies'

export default function Home() {
  return (
    <div 
        className="bg-cover"
        style={{ backgroundImage: `url(${paper_background.src})` }}>
      <NavBar />
      <TopSection />
      <DownloadFile />
      <BottomSection />

      <div id="about-me" className="flex flex-col items-center my-8">
        <AboutMe />
      </div>

      <div id="technologies" className="flex flex-col items-center my-8 ">
        <Technologies />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="certifications">
        <Certs />
      </div>

      <Footer />
    </div>
  );
}
