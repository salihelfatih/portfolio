"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Curve from "./Curve";

const routes = {
  "/": "Home",
  "/services": "Services",
  "/resume": "Resume",
  "/work": "Work",
  "/contact": "Contact",
};

const CurveTransition = ({ backgroundColor = "#6366f1", startRef }) => {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const lastPathname = useRef(pathname);

  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    function updatePosition() {
      if (startRef.current) {
        const rect = startRef.current.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        setPosition({
          x: rect.left + rect.width / 2 + scrollX,
          y: rect.top + rect.height - 16 + scrollY,
        });
      }
    }

    updateDimensions();
    updatePosition();

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);
    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [startRef]);

  useEffect(() => {
    if (pathname !== lastPathname.current) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      lastPathname.current = pathname;
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <Curve
          key={pathname}
          dimensions={dimensions}
          backgroundColor={backgroundColor}
          position={position}
          routeName={routes[pathname]}
        />
      )}
    </AnimatePresence>
  );
};

export default CurveTransition;
