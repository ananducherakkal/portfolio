import * as React from "react";
import { cn } from "@/utils/shadcn";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  inputClassName?: string;
  label?: string;
  error?: false | string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

type ExclusiveProps<T, U> = { [K in keyof T]: K extends keyof U ? never : K };

export type ExclusiveIconProps = ExclusiveProps<
  Pick<InputProps, "prefix" | "suffix">,
  Pick<InputProps, "iconLeft" | "iconRight">
>;

type DivProps = {
  className?: string;
  children?: React.ReactNode;
};

const InputWrapper = (props: DivProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "w-full h-10 text-sm rounded-md border-2 border-gray-30 dark:border-gray-70 bg-gray-20 dark:bg-gray-80 focus-within:border-gray-50 overflow-hidden flex",
        className
      )}
    >
      {children}
    </div>
  );
};

const InputRoot = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { className, type = "text" } = props;
  return (
    <input
      {...props}
      ref={ref}
      type={type}
      className={cn(
        "w-full h-full border-none outline-none flex-1 px-6 bg-transparent",
        className
      )}
    />
  );
});
InputRoot.displayName = "InputRoot";

const Prefix = (props: DivProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "h-full w-fit px-3 bg-gray-30 border-r border-gray-40 flex justify-center items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

const Suffix = (props: DivProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "h-full w-fit px-3 bg-gray-30  border-l border-gray-40 flex justify-center items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

const IconLeft = (props: DivProps) => {
  const { className, children } = props;
  return <div className={cn("h-full w-fit", className)}>{children}</div>;
};

const IconRight = (props: DivProps) => {
  const { className, children } = props;
  return <div className={cn("h-full w-fit", className)}>{children}</div>;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    inputClassName,
    label,
    error,
    iconRight,
    iconLeft,
    prefix,
    suffix,
    ...otherProps
  } = props;

  return (
    <InputWrapper className={className}>
      {prefix && <Prefix>{prefix}</Prefix>}
      {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
      <InputRoot ref={ref} {...otherProps} className={inputClassName} />
      {suffix && <Suffix>{suffix}</Suffix>}
      {iconRight && <IconRight>{iconRight}</IconRight>}
    </InputWrapper>
  );
});
Input.displayName = "Input";

export default Input;
