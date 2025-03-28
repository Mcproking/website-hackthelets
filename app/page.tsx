import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import  Hero  from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import Stack from "@/components/Stack";
import { TimelineDemo } from "@/components/TilelineDemo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProjectsSection/>
      <TimelineDemo/>
      <Stack/>
      <Contact/>
      <Footer/>
    </div>
  );
}
