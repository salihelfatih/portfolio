"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const ProjectSection = ({ project, index }) => {
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
          <div className="w-full xl:w-[50%] flex flex-col justify-center order-2 xl:order-none">
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
              <div className="border-t border-black/20 dark:border-white/20 my-2"></div>
              <div className="flex items-center gap-4">
                {project.links.demo && (
                  <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
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
                {project.links.github && (
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
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
      </div>
    </motion.section>
  );
};

export default ProjectSection;
