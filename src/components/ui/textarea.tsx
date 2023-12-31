import * as React from "react";
import { cn } from "@/utils/shadcn";

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { className, rows = 3, ...otherProps } = props;

    return (
      <textarea
        className={cn(
          "w-full h-auto text-sm rounded-md border-2 border-gray-30 dark:border-gray-70 bg-gray-20 dark:bg-gray-80 focus:border-gray-50 overflow-hidden flex resize-none p-6 outline-none",
          className
        )}
        ref={ref}
        rows={rows}
        {...otherProps}
      />
    );
  }
);
TextArea.displayName = "TextArea";

export default TextArea;
