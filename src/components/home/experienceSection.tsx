import React from "react";
import SectionHeader from "./sectionHeader";
import ExperienceCardSection from "./experienceCardSection";

interface IExperienceSection {}
const ExperienceSection = React.forwardRef<HTMLDivElement, IExperienceSection>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="w-full min-h-screen p-5 py-10 md:p-20 flex flex-col items-center"
      >
        <SectionHeader>Experience</SectionHeader>
        <div className="text-md mt-4 text-gray-50 dark:text-gray-40 text-center md:text-left">
          Here is a quick summary of my most recent experiences
        </div>
        <ExperienceCardSection />
      </div>
    );
  }
);
ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
