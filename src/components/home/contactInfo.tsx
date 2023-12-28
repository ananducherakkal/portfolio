import React from "react";
import ArrowSquareIcon from "../icon/arrowSquareIcon";
import AtIcon from "../icon/atIcon";
import PhoneIcon from "../icon/phoneIcon";
import LocationIcon from "../icon/locationIcon";
import GithubIcon from "../icon/githubIcon";
import LinkedinIcon from "../icon/linkedinIcon";

function ContactInfo() {
  return (
    <div className="w-fit md:mx-auto p-10 flex flex-col mt-10">
      <div className="text-xl font-medium">Contact Info</div>
      <div className="text-md text-gray-40 flex flex-col space-y-5 mt-7">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <AtIcon className="w-full h-full" />
          </div>
          <div>ananducherakkal.sdf@gmail.com</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <PhoneIcon className="w-full h-full" />
          </div>
          <div>+47 34234234234</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <LocationIcon className="w-full h-full" />
          </div>
          <div>Trollhattan Sweden</div>
        </div>
      </div>
      <div className="flex items-center mt-10 space-x-4 text-gray-40">
        <div className="w-7 h-7">
          <GithubIcon className="w-full h-full" />
        </div>
        <div className="w-7 h-7">
          <LinkedinIcon className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
