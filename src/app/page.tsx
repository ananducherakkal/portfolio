"use client";
import ExperienceSection from "@/components/home/experienceSection";
import ProfileSection from "@/components/home/profileSection";
import ProjectSection from "@/components/home/projectSection";
import SkillSection from "@/components/home/skillSection";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScrollDown = () => {
    console.log("yesss");
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full flex flex-col flex-1 min-h-screen mx-auto">
      <ProfileSection onScroll={handleScrollDown} />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
