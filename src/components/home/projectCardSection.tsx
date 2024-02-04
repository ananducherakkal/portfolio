import React from "react";
import ProjectCard from "./projectCard";
import projects from "@/json/projects.json";

function ProjectCardSection() {
  return (
    <div className="w-full mt-10 md:mt-20 flex flex-col space-y-10 max-w-[1080px] overflow-x-hidden">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          data={project}
          isRightImage={index % 2 == 0}
        />
      ))}
    </div>
  );
}

export default ProjectCardSection;
