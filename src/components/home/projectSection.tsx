import React from "react";
import SectionHeader from "./sectionHeader";
import ProjectCardSection from "./projectCardSection";

interface IProjectSection {}
const ProjectSection = React.forwardRef<HTMLDivElement, IProjectSection>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="w-full min-h-screen p-5 py-10 md:p-20 flex flex-col items-center bg-gray-20 dark:bg-gray-80"
      >
        <SectionHeader>Projects</SectionHeader>
        <div className="text-md mt-4 text-gray-50 dark:text-gray-40 text-center md:text-left">
          Some of the project I have build
        </div>
        <ProjectCardSection />
      </div>
    );
  }
);
ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
