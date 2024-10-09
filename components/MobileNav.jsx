"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MobileNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (path) => {
    if (path !== pathname) {
      router.push(path);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent dark:text-accent-dark" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#f1f5f9] dark:bg-[#232329]">
        {/* logo */}
        <div className="mt-32 mb-20 text-center text-2xl">
          <button
            onClick={() => handleClick("/")}
            className="text-4xl font-semibold text-accent dark:text-accent-dark"
          >
            Salih<span className="text-accent dark:text-accent-dark">.</span>
          </button>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {[
            { path: "/", label: "home" },
            { path: "/services", label: "services" },
            { path: "/resume", label: "resume" },
            { path: "/work", label: "work" },
            { path: "/contact", label: "contact" },
          ].map(({ path, label }) => (
            <button
              key={path}
              onClick={() => handleClick(path)}
              className={`text-xl capitalize transition-all
                ${
                  pathname === path
                    ? "text-accent dark:text-accent-dark border-b-2 border-accent dark:border-accent-dark"
                    : "text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent-dark"
                }`}
            >
              {label}
            </button>
          ))}
        </nav>
        {/* Sakia Labs button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="https://sakialabs.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-white hover:bg-accent/90 transition-colors">
              Sakia Labs
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
