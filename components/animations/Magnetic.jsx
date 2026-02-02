"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const currentElement = magnetic.current;
    
    const xTo = gsap.quickTo(currentElement, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(currentElement, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        currentElement.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    currentElement.addEventListener("mousemove", handleMouseMove);
    currentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("mousemove", handleMouseMove);
        currentElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
