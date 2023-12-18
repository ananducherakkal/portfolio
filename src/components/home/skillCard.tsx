import Image from "next/image";
import React from "react";

interface ISkillCard {
  label: string;
  imageUrl: string;
}

function SkillCard(props: ISkillCard) {
  const { label, imageUrl } = props;

  return (
    <div className="w-20 h-24 flex flex-col items-center">
      <div className="w-16 h-16 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          width="64"
          height="64"
          className="object-contain w-full h-full"
          alt="grpah-image"
        />
      </div>
      <div className="mt-auto font-medium">{label}</div>
    </div>
  );
}

export default SkillCard;
