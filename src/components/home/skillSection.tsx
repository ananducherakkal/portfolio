import React from "react";
import SectionHeader from "./sectionHeader";
import SkillCardSection from "./skillCardSection";

interface ISkillSection {}
const SkillSection = React.forwardRef<HTMLDivElement, ISkillSection>(
  (props, ref) => {
    return (
      <div
        className="w-full p-20 flex flex-col justify-center items-center bg-gray-20 dark:bg-gray-80"
        ref={ref}
      >
        <SectionHeader>Skills</SectionHeader>
        <div className="text-md mt-4 text-gray-50 dark:text-gray-40">
          The skills, tools and technologies I am really good at
        </div>
        <SkillCardSection />
      </div>
    );
  }
);

export default SkillSection;
