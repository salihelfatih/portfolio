"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, useRef } from "react";
import useStore from "@/hooks/useStore";

const routes = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/resume": "Resume",
  "/work": "Work",
  "/contact": "Contact",
};

const Curve = ({ dimensions, backgroundColor, position, routeName }) => {
  const farthestX = Math.max(position.x, dimensions.width - position.x);
  const farthestY = Math.max(position.y, dimensions.height - position.y);
  const finalRadius = Math.hypot(farthestX, farthestY);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <motion.svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.circle
          cx={position.x}
          cy={position.y}
          r={0}
          fill={backgroundColor}
          initial={{ r: 0 }}
          animate={{
            r: [0, finalRadius, finalRadius, 0],
            transition: {
              duration: 2,
              times: [0, 0.5, 0.5, 1],
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          exit={{
            r: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
        />
      </motion.svg>
      <motion.p
        className="absolute left-1/2 top-1/2 text-white text-4xl z-50 -translate-x-1/2 -translate-y-1/2 text-center font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [20, 0, -20],
          transition: {
            duration: 2,
            times: [0, 0.5, 1],
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        {routeName}
      </motion.p>
    </div>
  );
};

const CurveTransition = ({ backgroundColor = "#6366f1", startRef }) => {
  const pathname = usePathname();
  const { animationsEnabled } = useStore();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const lastPathname = useRef(pathname);

  const getTransitionOrigin = useCallback(() => {
    if (!startRef?.current) {
      return {
        x: typeof window === "undefined" ? 0 : window.innerWidth / 2,
        y: 0,
      };
    }

    const rect = startRef.current.getBoundingClientRect();

    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }, [startRef]);

  useEffect(() => {
    function updateTransitionAnchor() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setPosition(getTransitionOrigin());
    }

    updateTransitionAnchor();

    window.addEventListener("resize", updateTransitionAnchor);
    window.addEventListener("scroll", updateTransitionAnchor);
    return () => {
      window.removeEventListener("resize", updateTransitionAnchor);
      window.removeEventListener("scroll", updateTransitionAnchor);
    };
  }, [getTransitionOrigin]);

  useEffect(() => {
    if (pathname !== lastPathname.current && animationsEnabled) {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setPosition(getTransitionOrigin());
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      lastPathname.current = pathname;
      return () => clearTimeout(timer);
    } else {
      lastPathname.current = pathname;
    }
  }, [pathname, animationsEnabled, getTransitionOrigin]);

  if (!animationsEnabled) return null;

  return (
    <>
      {isAnimating && (
        <Curve
          key={pathname}
          dimensions={dimensions}
          backgroundColor={backgroundColor}
          position={position}
          routeName={routes[pathname] || "Page"}
        />
      )}
    </>
  );
};

export default CurveTransition;
