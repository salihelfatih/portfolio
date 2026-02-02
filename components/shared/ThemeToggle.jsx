"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5 text-accent" />
      ) : (
        <FiMoon className="w-5 h-5 text-accent" />
      )}
    </button>
  );
}
