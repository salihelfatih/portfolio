"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (path) => {
    if (path !== pathname) {
      router.push(path);
    }
  };

  return (
    <nav className="flex gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
      {navItems.map(({ href, label }) => (
        <button
          key={href}
          onClick={() => handleClick(href)}
          className={`capitalize font-medium transition-all text-sm sm:text-base ${
            pathname === href ? "text-accent border-b-2 border-accent" : "hover:text-accent"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
