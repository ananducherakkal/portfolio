import React from "react";
import ExperienceCard from "./experienceCard";
import experiences from "@/json/experiences.json";

function ExperienceCardSection() {
  return (
    <div className="w-full mt-20 flex flex-col space-y-10 max-w-[900px]">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} data={experience} />
      ))}
    </div>
  );
}

export default ExperienceCardSection;
