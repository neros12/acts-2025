import { twMerge } from "tailwind-merge";

export function Button({ className, ...props }) {
  className = twMerge(
    "inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70",
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
