import { cn } from "@/utils/shadcn";
import React from "react";

interface IOutlineTagProps {
  className?: string;
  children?: React.ReactNode;
}

function OutlineTag(props: IOutlineTagProps) {
  const { className, children } = props;

  return (
    <div
      className={cn(
        "h-7 min-w-[80px] border-[3px] border-gray-40 text-gray-40 rounded-md text-sm font-medium flex justify-center items-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export default OutlineTag;
