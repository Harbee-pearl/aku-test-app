import cn from "@/utils/class-names";

const sizes = {
  sm: "w-4 h-4",
  DEFAULT: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

const strokeSizes = {
  sm: "border-2",
  DEFAULT: "border-2",
  lg: "border-[3px]",
  xl: "border-4",
};

const colors = {
  DEFAULT: "text-gray-1000",
  primary: "text-primary",
  secondary: "text-secondary",
  danger: "text-red",
  info: "text-blue",
  success: "text-green",
  warning: "text-orange",
  current: "text-current",
};

export type SpinnerSizeTypes = keyof typeof sizes;
export type SpinnerColorTypes = keyof typeof colors;

type SpinnerProps = {
  tag?: "div" | "span";
  size?: SpinnerSizeTypes;
  color?: SpinnerColorTypes;
  className?: string;
  spinnerClassName?: string;
} & React.HTMLAttributes<HTMLDivElement | HTMLSpanElement>;

export default function Spinner({
  tag = "div",
  size = "DEFAULT",
  color = "DEFAULT",
  className,
  spinnerClassName,
}: SpinnerProps) {
  let Component = tag;

  return (
    <Component
      role="loader"
      className={cn(
        "relative mx-auto flex flex-shrink-0",
        sizes[size],
        colors[color],
        spinnerClassName
      )}
    >
      <span
        className={cn(
          "absolute h-full w-full animate-spin rounded-full border-solid border-current  border-t-transparent",
          strokeSizes[size]
        )}
      />
      <span
        className={cn(
          "absolute h-full w-full animate-spin rounded-full border-solid border-current  border-t-transparent",
          strokeSizes[size]
        )}
      />
    </Component>
  );
}
