import React from "react";
import Button from "./button";

function Header() {
  return (
    <nav className="h-24 w-full py-4 px-8 hidden md:flex justify-end items-center space-x-4 fixed top-0 left-0 z-40">
      <Button
        variant="transparent"
        className="text-lg text-gray-30 hover:text-gray-40 dark:text-gray-60 dark:hover:text-gray-50"
      >
        Home
      </Button>
      <Button
        variant="transparent"
        className="text-lg text-gray-30 hover:text-gray-40 dark:text-gray-60 dark:hover:text-gray-50"
      >
        Skills
      </Button>
      <Button
        variant="transparent"
        className="text-lg text-gray-30 hover:text-gray-40 dark:text-gray-60 dark:hover:text-gray-50"
      >
        Experience
      </Button>
      <Button
        variant="transparent"
        className="text-lg text-gray-30 hover:text-gray-40 dark:text-gray-60 dark:hover:text-gray-50"
      >
        Project
      </Button>
      <Button size="md">Contact me</Button>
    </nav>
  );
}

export default Header;
