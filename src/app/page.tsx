"use client";
import ContactSection from "@/components/home/contactSection";
import ExperienceSection from "@/components/home/experienceSection";
import ProfileSection from "@/components/home/profileSection";
import ProjectSection from "@/components/home/projectSection";
import SkillSection from "@/components/home/skillSection";
import Header from "@/components/ui/header";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const sections = [
    { id: 1, label: "Home", ref: homeRef },
    { id: 2, label: "Skills", ref: skillsRef },
    { id: 3, label: "Experience", ref: experienceRef },
    { id: 4, label: "Project", ref: projectRef },
  ];

  const handleScrollDown = () => {
    if (skillsRef?.current) {
      skillsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full flex flex-col flex-1 min-h-screen mx-auto">
      <Header sections={sections} />
      <ProfileSection
        onScroll={handleScrollDown}
        ref={homeRef}
        targetRef={homeRef}
      />
      <SkillSection ref={skillsRef} />
      <ExperienceSection ref={experienceRef} />
      <ProjectSection ref={projectRef} />
      <ContactSection />
    </main>
  );
}
