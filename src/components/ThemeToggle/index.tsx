"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme((theme) => {
      if (
        theme === "light" ||
        (theme === "system" && resolvedTheme === "light")
      ) {
        return "dark";
      }
      return "light";
    });
  }, [setTheme, resolvedTheme]);

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      <SunIcon
        className={cn("fill-foreground", {
          hidden: resolvedTheme !== "light",
        })}
      />
      <MoonIcon
        className={cn("fill-foreground", {
          hidden: resolvedTheme !== "dark",
        })}
      />
    </Button>
  );
};
