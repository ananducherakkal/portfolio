import { useEffect, useState } from "react";
import skillsJson from "@/json/skills.json";
import { createSubarrays } from "@/utils/array";

const useSkillCards = () => {
  const [skills, setSkills] = useState<Array<typeof skillsJson>>([]);
  const [width, setWidth] = useState<number>(0);

  const organizeSkills = () => {
    const { innerWidth: width } = window;

    switch (true) {
      case width < 500:
        setSkills(createSubarrays(skillsJson, 6));
        setWidth((6 / 2) * 104 - 24);
        break;
      case width < 1000:
        setSkills(createSubarrays(skillsJson, 10));
        setWidth((10 / 2) * 104 - 24);
        break;
      default:
        setSkills(createSubarrays(skillsJson, 14));
        setWidth((14 / 2) * 104 - 24);
        break;
    }
  };

  useEffect(() => {
    organizeSkills();
    window.addEventListener("resize", organizeSkills);
    return () => {
      window.removeEventListener("resize", organizeSkills);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { skills, width };
};

export default useSkillCards;
