"use client";
import React from "react";
import Button from "./button";
import useHeaderScroll from "../hooks/useHeaderScroll";
import { cn } from "@/utils/shadcn";

interface IHeaderProps {
  sections: Array<{
    id: number | string;
    label: string;
    ref: React.RefObject<any>;
  }>;
  contactMeRef: React.RefObject<any>;
}

function Header(props: IHeaderProps) {
  const { sections, contactMeRef } = props;

  const { changeColor, hide } = useHeaderScroll();

  const handleScrollDown = (ref: React.RefObject<any>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "h-24 w-full py-4 px-8 hidden md:flex justify-end items-center space-x-4 left-0 z-40 transition-all duration-500 fixed",
        changeColor ? "bg-gray-10 dark:bg-gray-90 shadow-md" : "bg-transparent",
        hide ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {sections.map((section) => (
        <Button
          key={section.id}
          variant="transparent"
          className="text-lg text-gray-40"
          onClick={() => {
            handleScrollDown(section.ref);
          }}
        >
          {section.label}
        </Button>
      ))}
      <Button
        size="md"
        onClick={() => {
          handleScrollDown(contactMeRef);
        }}
      >
        Contact me
      </Button>
    </nav>
  );
}

export default Header;
