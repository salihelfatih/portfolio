"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navItems } from "@/lib/data";

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
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#f1f5f9] dark:bg-[#232329]">
        <div className="mt-32 mb-20 text-center text-2xl">
          <button
            onClick={() => handleClick("/")}
            className="inline-flex items-baseline text-4xl font-semibold text-accent"
          >
            <span>Salih</span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[0.24em] w-[0.24em] shrink-0 translate-y-[0.04em] rounded-full bg-accent shadow-[0_0_14px_rgba(99,102,241,0.35)]"
            />
          </button>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {navItems.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleClick(href)}
              className={`text-xl capitalize transition-all
                ${
                  pathname === href
                    ? "text-accent border-b-2 border-accent"
                    : "text-gray-800 dark:text-gray-200 hover:text-accent"
                }`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="mt-8 flex justify-center">
          <Link
            href="https://sakia.vercel.app/"
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
