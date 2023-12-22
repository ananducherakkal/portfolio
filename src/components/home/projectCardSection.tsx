import React from "react";
import ProjectCard from "./projectCard";

function ProjectCardSection() {
  return (
    <div className="w-full mt-20 flex flex-col space-y-10 max-w-[1080px]">
      <ProjectCard />
      <ProjectCard isRightImage />
    </div>
  );
}

export default ProjectCardSection;
