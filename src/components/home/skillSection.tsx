import React from "react";
import SkillCard from "./skillCard";

interface ISkillSection {}
const SkillSection = React.forwardRef<HTMLDivElement, ISkillSection>(
  (props, ref) => {
    return (
      <div className="min-h-screen px-24 py-10 flex flex-col w-full">
        <div className="text-4xl font-medium mb-4">My Skills</div>
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 w-fit mx-auto mt-7">
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <SkillCard name="Python" imageUrl="/images/htmlLogo.png" />
          <div className="col-span-1 row-span-1 row-start-3 col-start-1 hidden md:block"></div>
          <div className="col-span-1 row-span-1 row-start-3 col-start-6 lg:col-start-8 hidden md:block"></div>
          <div className="col-span-2 row-span-1 row-start-4 col-start-1 hidden md:block"></div>
          <div className="col-span-2 row-span-1 row-start-4 col-start-5 lg:col-start-7 hidden md:block"></div>
        </div>
      </div>
    );
  }
);

export default SkillSection;
