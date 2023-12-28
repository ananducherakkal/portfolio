import { IconProps } from "@/types/icon";
import { cn } from "@/utils/shadcn";

const LinkedinIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <g clipPath="url(#clip0_29_261)">
        <path
          d="M23.75 0H6.25C2.79875 0 0 2.79875 0 6.25V23.75C0 27.2013 2.79875 30 6.25 30H23.75C27.2025 30 30 27.2013 30 23.75V6.25C30 2.79875 27.2025 0 23.75 0ZM10 23.75H6.25V10H10V23.75ZM8.125 8.415C6.9175 8.415 5.9375 7.4275 5.9375 6.21C5.9375 4.9925 6.9175 4.005 8.125 4.005C9.3325 4.005 10.3125 4.9925 10.3125 6.21C10.3125 7.4275 9.33375 8.415 8.125 8.415ZM25 23.75H21.25V16.745C21.25 12.535 16.25 12.8538 16.25 16.745V23.75H12.5V10H16.25V12.2063C17.995 8.97375 25 8.735 25 15.3013V23.75Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_29_261">
          <rect width="30" height="30" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedinIcon;
