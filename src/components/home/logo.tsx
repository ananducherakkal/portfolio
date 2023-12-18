import { IconProps } from "@/types/icon";
import { cn } from "@/utils/shadcn";

const Logo = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 778 427"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-52", className)}
      {...props}
    >
      <path
        d="M0 426.239L249.119 27.8177L266.512 0L282.5 26.0963L527.64 426.239H493.205L265.106 53.914L32.3045 426.239H0Z"
        fill="currentColor"
      />
      <path
        d="M516.872 0L778 426.239H743.496L498.925 28.7151L499.448 27.8786L516.872 0Z"
        fill="currentColor"
      />
      <path
        d="M281.767 426.239H249.463L515.975 0L532.127 26.023L281.767 426.239Z"
        fill="currentColor"
      />
      <path
        d="M494.142 398.965L511.261 426.361L8.55946 426.218L22.0689 398.73L494.142 398.965Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
