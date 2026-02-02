"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSettings, FiSun, FiMoon } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import useStore from "@/hooks/useStore";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { animationsEnabled, setAnimationsEnabled } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent/10 transition-colors"
          aria-label="Open settings"
        >
          <FiSettings className="w-5 h-5 text-accent" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[90vw] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Customize your experience
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {/* Theme Setting */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5 flex-1 min-w-0">
              <label htmlFor="theme" className="text-sm font-medium flex items-center gap-2">
                {theme === "dark" ? (
                  <FiMoon className="w-4 h-4 text-accent flex-shrink-0" />
                ) : (
                  <FiSun className="w-4 h-4 text-accent flex-shrink-0" />
                )}
                <span>Theme</span>
              </label>
              <p className="text-sm text-muted-foreground">
                Switch between light and dark mode
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Switch
                id="theme"
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Animations Setting */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5 flex-1 min-w-0">
              <label htmlFor="animations" className="text-sm font-medium">
                Page Transitions
              </label>
              <p className="text-sm text-muted-foreground">
                Enable smooth page transition animations
              </p>
            </div>
            <Switch
              id="animations"
              checked={animationsEnabled}
              onCheckedChange={setAnimationsEnabled}
              className="flex-shrink-0"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
