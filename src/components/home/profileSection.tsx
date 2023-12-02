import React from "react";
import BackgroundPattern from "./backgroundPattern";
import Logo from "./logo";
import ScrollButton from "./scrollButton";

function ProfileSection() {
  return (
    <div className="w-full h-screen flex flex-col px-24 py-4 relative overflow-hidden">
      <div className="w-4/5 flex flex-col my-auto relative py-10">
        <div className="h-2 w-48 bg-primary"></div>
        <div className="text-5xl text-text-60 font-medium mt-10">
          Hello! My name is
        </div>
        <div className="text-7xl text-text font-medium">Anandu Cherakkal</div>
        <div className="text-lg text-text-70 font-medium mt-3">
          I am a Full-Stack developer with 4+ years of experience with a passion
          for everything in front-end. To know more about me scroll down.
        </div>
        <BackgroundPattern className="text-gray-40/5 w-2/5 -z-10 absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/3" />
      </div>
      <ScrollButton />
      <Logo className="text-gray-60 w-1/2 -z-10 absolute top-2/3 right-0 transform -translate-y-1/2 translate-x-1/4" />
    </div>
  );
}

export default ProfileSection;
