import Image from "next/image";
import React from "react";

interface IExperienceCardProps {
  data: {
    imageUrl: string;
    title: string;
    description: Array<string>;
    duration: string;
  };
}

function ExperienceCard(props: IExperienceCardProps) {
  const { data } = props;

  return (
    <div className="w-full py-10 px-9 bg-gray-20 dark:bg-gray-80 rounded-lg text-gray-50 flex flex-col md:grid md:grid-cols-9 gap-5">
      <div className="w-full h-full col-span-3 p-4 row-start-1">
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
        <div className="text-lg font-bold">{data.title}</div>
        <ul className="text-base list-disc ml-4">
          {data.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
