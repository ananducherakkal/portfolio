import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React from "react";
import OutlineTag from "../ui/outlineTag";
import Button from "../ui/button";
import ArrowSquareIcon from "../icon/arrowSquareIcon";
import GithubIcon from "../icon/githubIcon";
import Link from "next/link";

interface IProjectCardProps {
  isRightImage?: boolean;
  className?: string;
  data: {
    imageUrl: string;
    title: string;
    description?: string;
    tags: Array<string>;
    repoUrl?: string;
    hostedUrl?: string;
  };
}

function ProjectCard(props: IProjectCardProps) {
  const { isRightImage = false, className, data } = props;

  return (
    <div
      className={cn(
        "w-full min-h-[419px] border bg-gray-10 dark:bg-gray-90 border-gray-30 dark:border-gray-70 rounded-lg text-gray-60 flex flex-col md:grid md:grid-cols-2 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "w-full bg-gray-30 dark:bg-gray-70 row-start-1 p-10 flex justify-center items-center",
          isRightImage ? "col-start-2" : "col-start-1"
        )}
      >
        <div className="w-full h-full max-w-[380px] min-h-[200px] max-h-96 rounded-lg shadow-md overflow-hidden">
          <Image
            src={data.imageUrl}
            width="800"
            height="800"
            className="object-cover w-full h-full"
            alt="grpah-image"
          />
        </div>
      </div>
      <div className="w-full row-start-2 md:row-start-1 py-10 px-12 dark:text-gray-30">
        <div className="text-lg font-bold">{data.title}</div>
        <div className="text-base text-gray-50 dark:text-gray-40 mt-5">
          {data.description}
        </div>
        <div className="flex flex-wrap mt-5">
          {data.tags.map((tag, index) => (
            <OutlineTag key={index} className="mb-3 mr-3">
              {tag}
            </OutlineTag>
          ))}
        </div>
        <div className="flex space-x-5 mt-14">
          {data.hostedUrl && (
            <Link href={data.hostedUrl} target="_blank">
              <Button className="flex items-center justify-center">
                <div>Open</div>
                <div className="w-5 h-5 ml-5">
                  <ArrowSquareIcon className="w-full h-full" />
                </div>
              </Button>
            </Link>
          )}
          {data.repoUrl && (
            <Link href={data.repoUrl} target="_blank">
              <Button
                className="flex items-center justify-center"
                variant="secondary"
              >
                <div>Repo</div>
                <div className="w-5 h-5 ml-5">
                  <GithubIcon className="w-full h-full" />
                </div>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
