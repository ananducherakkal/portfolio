import Image from "next/image";
import React from "react";

interface ISkillCard {
  name: string;
  imageUrl: string;
}

function SkillCard(props: ISkillCard) {
  const { name, imageUrl } = props;

  return (
    <div className="col-span-2 w-40 h-48 bg-gray-10/10 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4">
      <div className="w-20 h-20 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          width="150"
          height="150"
          className="object-contain w-full h-full"
          alt="grpah-image"
        />
      </div>
      <div className="mt-3 font-semibold">{name}</div>
    </div>
  );
}

export default SkillCard;
