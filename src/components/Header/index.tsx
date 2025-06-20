import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-1 flex items-baseline justify-between border-b border-b-border bg-background px-4 py-2">
      <Link href="/" className="flex gap-1">
        <span className="text-xl">🐏</span>
        <p className="font-bold text-lg">Hitzuji blog</p>
      </Link>
      <div className="flex gap-1">
        <ThemeToggle />
      </div>
    </header>
  );
};
