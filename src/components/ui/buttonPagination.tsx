import { cn } from "@/utils/shadcn";
import React from "react";

interface IButtonPaginationProps {
  totalPages: number;
  currentPage: number;
  className?: string;
  onClick?: (page: number) => any;
}

function ButtonPagination(props: IButtonPaginationProps) {
  const { totalPages, currentPage, className, onClick } = props;

  const pagination = Array.from({ length: totalPages }, (_, index) => index);

  const handleClick = (page: number) => {
    if (onClick) {
      onClick(page);
    }
  };

  return (
    <div className={cn("flex space-x-1.5", className)}>
      {pagination.map((item) => (
        <button
          key={item}
          className={cn(
            "w-3 h-3 border-[3px] border-gray-50 rounded-full outline-none p-0",
            item === currentPage
              ? "bg-gray-50 cursor-default"
              : "bg-transparent transform duration-75 hover:scale-125"
          )}
          onClick={() => {
            handleClick(item);
          }}
        ></button>
      ))}
    </div>
  );
}

export default ButtonPagination;
