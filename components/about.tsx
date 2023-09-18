"use client";

import React from "react";
import Heading from "./heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-8 max-w-[45rem] text-center leading-8 sm:mb-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About me</Heading>
      <p className="mb-3">
        I hold a Bachelor's degree in{" "}
        <span className="font-medium">Painting</span>, but my curiosity led me
        to programming. While completing Mohawk College's Software Development
        program, I mastered{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">
          I <span className="underline">thrive</span> on problem-solving.
          Whether I'm painting a canvas or crafting code, I relish finding
          innovative solutions to complex problems.
        </span>{" "}
        <span className="font-medium">
          My go-to tools are React, ASP.NET, and PostgreSQL.
        </span>
        I am also familiar with TypeScript and MongoDB and I'm keen to learn
        more. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p></p>
      <p>
        <span className="italic">When I'm not coding</span>, I find joy in
        art, music, film, exploring{" "}
        <span className="font-medium">nature and philosophy</span>.{" "}
      </p>
    </motion.section>
  );
}
