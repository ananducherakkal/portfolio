"use client";
import React, { useEffect, useState } from "react";
import SkillCard from "./skillCard";
import useSkillCards from "../hooks/useSkillCards";
import ButtonPagination from "../ui/buttonPagination";
import { motion } from "framer-motion";

function SkillCardSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const { skills, width } = useSkillCards();

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage >= skills.length - 1 ? 0 : prevPage + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [skills]);

  return (
    <div className="w-fit h-fit flex flex-col">
      <div style={{ width: `${width}px` }} className="overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          style={{ transformOrigin: "0 0" }}
          animate={{ x: `${-width * currentPage}px` }}
          transition={{ duration: 1.5 }}
          className="w-fit h-fit flex"
        >
          {skills?.map((skillSection, index) => (
            <div
              key={index}
              className="flex-shrink-0 grid grid-cols-7 gap-6 mx-auto mt-10"
              style={{ width: `${width}px` }}
            >
              {skillSection.map((skill) => (
                <SkillCard
                  key={skill.id}
                  label={skill.label}
                  imageUrl={skill.imageUrl}
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      <ButtonPagination
        totalPages={skills?.length}
        currentPage={currentPage}
        onClick={handlePageClick}
        className="mt-10 mx-auto"
      />
    </div>
  );
}

export default SkillCardSection;
