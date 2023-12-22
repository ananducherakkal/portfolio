import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React from "react";
import OutlineTag from "../ui/outlineTag";
import Button from "../ui/button";

interface IProjectCardProps {
  isRightImage?: boolean;
}

function ProjectCard(props: IProjectCardProps) {
  const { isRightImage = false } = props;

  return (
    <div className="w-full min-h-[419px] border bg-gray-10 dark:bg-gray-80 border-gray-30 rounded-lg text-gray-60 grid grid-cols-1 md:grid-cols-2">
      <div
        className={cn(
          "w-full bg-gray-30 row-start-1 p-10 flex justify-center items-center",
          isRightImage ? "col-start-2" : "col-start-1"
        )}
      >
        <div className="w-full h-full max-w-[380px] max-h-96 rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/dashboard-website.png"
            width="380"
            height="400"
            className="object-cover w-full h-full"
            alt="grpah-image"
          />
        </div>
      </div>
      <div className="w-full row-start-2 md:row-start-1 py-10 px-12">
        <div className="text-lg font-bold">Dashoboard</div>
        <div className="text-base text-gray-50 mt-5">
          sdfsdf sdf sdf sd f sdf sd f sdf sdf sd f sdf sd f sdf
        </div>
        <div className="flex flex-wrap mt-5">
          <OutlineTag className="mb-2 mr-4">Next.js</OutlineTag>
          <OutlineTag className="mb-2 mr-4">Next.js</OutlineTag>
          <OutlineTag className="mb-2 mr-4">Next.js</OutlineTag>
          <OutlineTag className="mb-2 mr-4">Next.js</OutlineTag>
          <OutlineTag className="mb-2 mr-4">Next.js</OutlineTag>
        </div>
        <div className="flex space-x-2">
          <Button>show</Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
