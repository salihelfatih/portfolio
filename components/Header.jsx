"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import CurveTransition from "./CurveTransition";
import Magnetic from "./Magnetic";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

const MoveUpAnimation = ({ children }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 20, opacity: 0 }}
    transition={{ duration: 1.0, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Header = () => {
  const dotRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="w-full bg-white/5 dark:bg-black/5 backdrop-blur-[2px] backdrop-saturate-150">
        <div className="container mx-auto py-6 xl:py-8">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-3xl xl:text-4xl font-semibold text-gray-800 dark:text-white">
                Salih
                <span
                  ref={dotRef}
                  className="text-accent dark:text-accent-dark"
                >
                  .
                </span>
              </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Magnetic>
                <Link target="_blank" href="https://sakialabs.io">
                  <Button className="bg-accent text-white hover:bg-accent/90 transition-colors">
                    Sakia Labs
                  </Button>
                </Link>
              </Magnetic>
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  {mounted && (
                    <MoveUpAnimation key="theme-toggle">
                      <ThemeToggle />
                    </MoveUpAnimation>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="xl:hidden flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  {mounted && (
                    <MoveUpAnimation key="theme-toggle-mobile">
                      <ThemeToggle />
                    </MoveUpAnimation>
                  )}
                </AnimatePresence>
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
      <CurveTransition startRef={dotRef} />
    </>
  );
};

export default Header;
