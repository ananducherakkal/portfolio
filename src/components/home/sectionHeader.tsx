import { cn } from "@/utils/shadcn";
import React from "react";

interface ISectionHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

function SectionHeader(props: ISectionHeaderProps) {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "h-8 flex justify-center items-center rounded-full bg-gray-30 dark:bg-gray-60 text-sm py-2 px-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionHeader;
