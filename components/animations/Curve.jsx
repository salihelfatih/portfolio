"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Curve() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const initialPath = `
    M0 300 
    Q${dimensions.width / 2} 0 ${dimensions.width} 300
    L${dimensions.width} ${dimensions.height + 300}
    Q${dimensions.width / 2} ${dimensions.height + 600} 0 ${
    dimensions.height + 300
  }
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${dimensions.width / 2} 300 ${dimensions.width} 300
    L${dimensions.width} ${dimensions.height}
    Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height}
    L0 0
  `;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] pointer-events-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
