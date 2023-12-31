import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import Link from "next/link";
import ArrowSquareIcon from "../icon/arrowSquareIcon";

interface IExperienceCardProps {
  data: {
    imageUrl: string;
    title: string;
    description: Array<string>;
    duration: string;
    projects?: Array<{
      id: string | number;
      name: string;
      projectUrl: string;
    }>;
    siteUrl: string;
  };
}

function ExperienceCard(props: IExperienceCardProps) {
  const { data } = props;

  return (
    <div className="w-full p-6 md:py-10 md:px-9 bg-gray-20 dark:bg-gray-80 rounded-lg text-gray-50 flex flex-col md:grid md:grid-cols-9 gap-5 lg:gap-10">
      <div className="w-full max-w-[180px] h-fit col-span-3 row-start-1 rounded-lg overflow-hidden shadow-md">
        <Image
          src={data.imageUrl}
          width="200"
          height="200"
          className="object-contain w-full"
          alt="grpah-image"
        />
      </div>
      <div className="text-sm col-span-2 col-start-8 row-start-1">
        {data.duration}
      </div>
      <div className="flex-1 flex flex-col col-span-4 col-start-4 row-start-1">
        <div className="text-lg font-bold text-gray-60 dark:text-gray-40">
          {data.title}
        </div>
        <ul className="text-base list-disc mt-6 ml-4">
          {data.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {data.projects && (
          <div className="flex mt-6 font-medium">
            <div className="mr-2 text-gray-60 dark:text-gray-40">Projects:</div>
            {data.projects.map((project, index) => (
              <a
                key={project.id}
                href={project.projectUrl}
                target="_blank"
                className="underline italic"
              >
                {index > 0 && <span className="mr-1">,</span>}
                {project.name}
              </a>
            ))}
          </div>
        )}
        <div className="flex mt-6 space-x-2">
          {data.siteUrl && (
            <Link href={data.siteUrl} target="_blank">
              <Button className="flex items-center justify-center">
                <div>Visit</div>
                <div className="w-5 h-5 ml-5">
                  <ArrowSquareIcon className="w-full h-full" />
                </div>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
