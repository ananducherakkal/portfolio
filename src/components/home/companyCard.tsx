import React from "react";
import Button from "../ui/button";
import BackgroundPattern from "./backgroundPattern";
import Image from "next/image";

interface ICompanyCard {
  name: string;
  position: string;
  startYear: string;
  endYear: string;
  location: string;
  websiteUrl: string;
  websiteLogo: string;
}
function CompanyCard(props: ICompanyCard) {
  const {
    name,
    position,
    startYear,
    endYear,
    location,
    websiteLogo,
    websiteUrl,
  } = props;

  return (
    <div className={"h-fit w-fit py-5 flex relative"}>
      <div className="w-5 h-5 m-2.5 border-4 bg-background border-primary rounded-full"></div>
      <div className="w-fit h-fit min-h-full md:min-w-[400px] ml-6">
        <div className="absolute h-full w-1 bg-primary top-0 left-5 transform -translate-x-1/2 -z-10"></div>
        <div className="text-primary text-4xl font-medium">{name}</div>
        <div className="text-text text-sm">{position}</div>
        <div className="text-text-70 text-sm">
          {startYear} - {endYear}
        </div>
        <div className="text-text-60 text-sm">{location}</div>
        <div className="flex space-x-2">
          <a href={websiteUrl} target="_blank">
            <Button variant="outline-secondary" className="w-fit mt-4 text-sm">
              View Site
            </Button>
          </a>
          <Button variant="outline-secondary" className="w-fit mt-4 text-sm">
            View Projects
          </Button>
        </div>
      </div>
      <div className="w-[150px] h-[150px] bg-gray-10 rounded-md shadow-md shadow-gray-10/20 flex items-center justify-center ml-8">
        <Image
          src={websiteLogo}
          width="150"
          height="150"
          className="object-contain"
          alt="grpah-image"
        />
      </div>
    </div>
  );
}

export default CompanyCard;
