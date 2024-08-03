"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (path) => {
    if (path !== pathname) {
      router.push(path);
    }
  };

  return (
    <nav className="flex gap-8">
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
          className={`capitalize font-medium transition-all ${
            pathname === path ? "text-accent border-b-2 border-accent" : "hover:text-accent"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default Nav;