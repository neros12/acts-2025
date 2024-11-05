import { twMerge } from "tailwind-merge";

export function Container({ className, as, ...props }) {
  const CustomTag = as ?? "div";

  return (
    <CustomTag
      className={twMerge("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
