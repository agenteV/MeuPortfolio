import { cn } from "@/lib/utils";

export function Card({ children, className }) {
  return (
    <div className={cn("bg-white shadow-lg rounded-2xl", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={cn("p-4", className)}>
      {children}
    </div>
  );
}
