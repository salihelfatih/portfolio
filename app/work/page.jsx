"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Homemade Goodies",
    description:
      "An e-commerce platform for buying and selling delicious homemade goods, featuring a seamless product page, easy-to-use cart, and secure checkout.",
    stack: [{ name: "ASP.NET" }, { name: "React" }, { name: "PostgreSQL" }],
    image: "/assets/work/thumb1.png",
    live: "https://homemadegoodies.netlify.app/",
    github: "https://github.com/orgs/homemadegoodies/repositories",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Digital Fuse",
    description:
      "An e-learning platform where students can explore technology, featuring a course builder, quiz builder, and interactive forum.",
    stack: [{ name: "ASP.NET" }, { name: "React" }, { name: "PostgreSQL" }],
    image: "/assets/work/thumb2.png",
    live: "http://digitalfuse.netlify.app",
    github: "https://github.com/orgs/digitalfusee/repositories",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Application Building Platform",
    description:
      "A survey builder for creating surveys and collecting responses, with features like a survey builder, response viewer, and intuitive dashboard.",
    stack: [{ name: "ASP.NET" }, { name: "React" }, { name: "PostgreSQL" }],
    image: "/assets/work/thumb3.png",
    live: "http://abp-demo.netlify.app",
    github: "https://github.com/orgs/boardwalkabp/repositories",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const project = projects[currentIndex];

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold force-black dark:force-white">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-black dark:text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-black/60 dark:text-white/60">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-black/20 dark:border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex justify-center items-center group rounded-full bg-black/5 dark:bg-white/5 transition-transform duration-200 ease-in-out transform hover:scale-105 will-change-transform">
                        <BsArrowUpRight className="text-black dark:text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex justify-center items-center group rounded-full bg-black/5 dark:bg-white/5 transition-transform duration-200 ease-in-out transform hover:scale-105 will-change-transform">
                        <BsGithub className="text-black dark:text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <div className="xl:h-[520px] mb-12 relative">
              <div className="h-[460px] relative group flex justify-center items-center bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ x: direction * 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction * -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 bg-black/10 dark:bg-white/10 z-10 rounded-lg"></div>
                    <div className="relative w-full h-full rounded-lg overflow-hidden backdrop-blur-sm">
                      <Image
                        src={project.image}
                        fill
                        sizes="(min-width: 1024px) 100vw, 50vw"
                        className="object-cover rounded-lg transition-opacity duration-500 ease-in-out"
                        alt={project.title}
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div
                className="flex gap-2 absolute xl:right-0 xl:left-auto xl:bottom-0 z-20 w-auto xl:justify-end
                              left-0 right-0 top-1/2 -translate-y-1/2 justify-between px-4 xl:px-0 xl:translate-x-0 xl:translate-y-0 xl:top-auto"
              >
                <button
                  onClick={prevProject}
                  className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all"
                >
                  ←
                </button>
                <button
                  onClick={nextProject}
                  className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
