import React from "react";
import ArrowSquareIcon from "../icon/arrowSquareIcon";

function ContactInfo() {
  return (
    <div className="w-fit md:mx-auto p-10 flex flex-col mt-10">
      <div className="text-xl font-medium">Contact Info</div>
      <div className="text-md text-gray-40 flex flex-col space-y-5 mt-7">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <ArrowSquareIcon className="w-full h-full" />
          </div>
          <div>ananducherakkal.sdf@gmail.com</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <ArrowSquareIcon className="w-full h-full" />
          </div>
          <div>+47 34234234234</div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <ArrowSquareIcon className="w-full h-full" />
          </div>
          <div>Trollhattan Sweden</div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
