import React from "react";
import SectionHeader from "./sectionHeader";
import ExperienceCardSection from "./experienceCardSection";

function ExperienceSection() {
  return (
    <div className="w-full min-h-screen p-20 flex flex-col items-center">
      <SectionHeader>Experience</SectionHeader>
      <div className="text-md mt-4 text-gray-50 dark:text-gray-40">
        Here is a quick summary of my most recent experiences
      </div>
      <ExperienceCardSection />
    </div>
  );
}

export default ExperienceSection;
