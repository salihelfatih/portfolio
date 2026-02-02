"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Magnetic from "../animations/Magnetic";
import CurveTransition from "../animations/CurveTransition";
import Settings from "./Settings";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="container mx-auto py-4 sm:py-6 xl:py-8 px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-gray-800 dark:text-white">
                Salih
                <span ref={dotRef} className="text-accent">
                  .
                </span>
              </h1>
            </Link>
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Nav />
              <Magnetic>
                <Link target="_blank" rel="noopener noreferrer" href="https://sakia.vercel.app/">
                  <Button className="bg-accent text-white hover:bg-accent/90 transition-colors">
                    Sakia Labs
                  </Button>
                </Link>
              </Magnetic>
              <div className="flex items-center">
                <AnimatePresence mode="wait">
                  {mounted && (
                    <MoveUpAnimation key="settings">
                      <Settings />
                    </MoveUpAnimation>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="lg:hidden flex items-center gap-3 sm:gap-4">
              <div className="flex items-center">
                <AnimatePresence mode="wait">
                  {mounted && (
                    <MoveUpAnimation key="settings-mobile">
                      <Settings />
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
