import { IconProps } from "@/types/icon";
import { cn } from "@/utils/shadcn";

const LoadingCircleIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6 loading-circle", className)}
      {...props}
    >
      <path
        d="M23.9819 11.342C23.8485 8.91251 22.9797 6.58099 21.4908 4.65663C20.0018 2.73227 17.9631 1.30599 15.6449 0.566948C13.3267 -0.172096 10.8387 -0.188987 8.51066 0.518514C6.18267 1.22602 4.12474 2.62448 2.6098 4.52845C1.09486 6.43241 0.194489 8.75192 0.0280938 11.1794C-0.138301 13.6068 0.437141 16.0275 1.67811 18.1203C2.91907 20.2132 4.76692 21.8794 6.9766 22.898C9.18628 23.9165 11.6534 24.2393 14.0507 23.8235L13.3493 19.7794C11.7719 20.053 10.1487 19.8406 8.69479 19.1704C7.24091 18.5003 6.02509 17.404 5.20858 16.027C4.39207 14.6499 4.01345 13.0572 4.12293 11.46C4.23241 9.86288 4.82482 8.33674 5.8216 7.084C6.81837 5.83126 8.17241 4.91112 9.70415 4.44561C11.2359 3.9801 12.8729 3.99122 14.3982 4.47748C15.9235 4.96374 17.2649 5.90218 18.2446 7.16834C19.2243 8.43449 19.7959 9.96854 19.8837 11.567L23.9819 11.342Z"
        fill="currentColor"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default LoadingCircleIcon;