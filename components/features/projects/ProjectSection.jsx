"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const ProjectActions = ({ links }) => (
  <div className="flex items-center gap-4">
    {links.demo && (
      <Link href={links.demo} target="_blank" rel="noopener noreferrer">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/5 dark:bg-white/5 flex justify-center items-center group hover:bg-accent transition-colors">
              <BsArrowUpRight className="text-black dark:text-white text-xl sm:text-2xl group-hover:text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Live demo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    )}
    {links.github && (
      <Link href={links.github} target="_blank" rel="noopener noreferrer">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/5 dark:bg-white/5 flex justify-center items-center group hover:bg-accent transition-colors">
              <BsGithub className="text-black dark:text-white text-xl sm:text-2xl group-hover:text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    )}
  </div>
);

const ProjectSection = ({ project, index }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const detailsId = useId();

  useEffect(() => {
    setIsDetailsOpen(false);
  }, [project?.id]);

  if (!project) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col justify-center py-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-10 gap-8">
          {/* Left side - Project details */}
          <div className="w-full xl:w-[50%] order-2 xl:order-none">
            <div className="flex h-full flex-col gap-5 xl:min-h-[400px] xl:justify-between">
              <div className="flex flex-col gap-5">
                <div className="text-6xl sm:text-7xl leading-none font-extrabold text-transparent text-outline">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-black dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed">
                  {project.oneLiner}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <ProjectActions links={project.links} />
            </div>
          </div>

          {/* Right side - Project image */}
          <div className="w-full xl:w-[50%] order-1 xl:order-none">
            <div className="h-[300px] sm:h-[350px] xl:h-[400px] relative group flex justify-center items-center bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/5 dark:bg-black/20 z-10"></div>
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  fill
                  className="object-cover"
                  alt={`${project.title} screenshot`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="overflow-hidden rounded-md border border-black/10 bg-white/35 shadow-sm dark:border-white/10 dark:bg-white/[0.035]">
            <div className="px-4 py-3 sm:px-5">
              <button
                type="button"
                className="group flex min-h-[44px] w-full items-center justify-between gap-3 text-left text-sm font-semibold text-black dark:text-white"
                aria-expanded={isDetailsOpen}
                aria-controls={detailsId}
                onClick={() => setIsDetailsOpen((open) => !open)}
              >
                <span className="flex flex-col gap-1">
                  <span>Project details</span>
                  <span className="text-xs font-normal leading-snug text-black/50 dark:text-white/50">
                    What it does, my role, and the decisions behind it
                  </span>
                </span>
                <FiChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                    isDetailsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isDetailsOpen && (
                <motion.div
                  id={detailsId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-black/10 px-4 py-4 dark:border-white/10 sm:px-5">
                    <div className="grid gap-5 md:grid-cols-2 xl:gap-6">
                      <div>
                        <h3 className="text-[11px] font-bold uppercase text-accent">
                          What it does
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/65">
                          {project.whatItDoes}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-[11px] font-bold uppercase text-accent">
                          My role
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/65">
                          {project.myRole}
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <h3 className="text-[11px] font-bold uppercase text-accent">
                          Key decisions
                        </h3>
                        <ul className="mt-2 grid gap-2 text-sm leading-relaxed text-black/65 dark:text-white/65 sm:grid-cols-2">
                          {project.keyDecisions.map((decision, decisionIndex) => (
                            <li key={decisionIndex} className="flex gap-2">
                              <span
                                className="mt-[0.65em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/75"
                                aria-hidden="true"
                              />
                              <span>{decision}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
