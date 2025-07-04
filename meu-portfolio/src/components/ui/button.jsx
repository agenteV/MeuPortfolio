import { cn } from "@/lib/utils";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
