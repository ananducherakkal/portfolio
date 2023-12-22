import { cn } from "@/utils/shadcn";
import * as React from "react";

const buttonVariants = {
  default: "",
  variant: {
    default:
      "bg-primary text-gray-80 border-2 border-primary hover:bg-primary/80 hover:border-primary/80 active:bg-transparent active:text-primary rounded-lg",
    secondary:
      "bg-gray-30 text-gray-90 border-2 border-gray-30 hover:bg-gray-30/80 hover:border-gray-30/80 active:bg-transparent active:text-gray-30 rounded-lg",
    outline:
      "text-primary border-2 border-primary bg-transparent hover:bg-primary/5 active:bg-primary/20 rounded-full",
    "outline-secondary":
      "text-text-70 border-2 border-text-70 bg-transparent hover:bg-text-70/5 active:bg-text-70/20 rounded-full",
    transparent:
      "border-none bg-transparent text-text-70 hover:text-text-70/60 active:text-text-70/80",
  },
  size: {
    sm: "h-6 px-3 min-w-[48px] rounded-xl text-xs",
    default: "h-10 px-4 font-medium rounded-lg",
    md: "h-12 text-md px-4 font-medium rounded-lg",
  },
};

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof (typeof buttonVariants)["variant"];
  size?: keyof (typeof buttonVariants)["size"];
}

export default function Button(props: IButtonProps) {
  const {
    children,
    className,
    variant = "default",
    size = "default",
    ...otherProps
  } = props;

  const defaultClassName = buttonVariants.default;
  const variantClassName = buttonVariants.variant[variant];
  const sizeClassName = buttonVariants.size[size];

  return (
    <button
      className={cn(
        defaultClassName,
        variantClassName,
        sizeClassName,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
