"use client";

import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiShadcnui,
  SiRadixui,
  SiFramer,
  SiDjango, 
  SiFastapi, 
  SiPydantic,
  SiPostgresql, 
  SiSupabase, 
  SiTailwindcss,
  SiNodedotjs,
  SiDocker,
  SiRedis,
  SiCelery,
  SiPytorch,
  SiScikitlearn,
  SiGooglegemini,
  SiOpenai,
  SiAnthropic,
  SiGodotengine,
  SiScrapy
} from "react-icons/si";
import { TbBrain, TbFileSearch } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * TechStack Component
 * 
 * Displays the full-width tech stack section with all technologies organized by category
 */
export default function TechStack() {
  const techCategories = [
    {
      id: "languages",
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "TypeScript", icon: SiTypescript },
      ]
    },
    {
      id: "frontend",
      title: "Frontend & Mobile",
      skills: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "React Native", icon: SiReact },
        { name: "shadcn/ui", icon: SiShadcnui },
        { name: "Radix UI", icon: SiRadixui },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      skills: [
        { name: "Celery", icon: SiCelery },
        { name: "Django", icon: SiDjango },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Pydantic", icon: SiPydantic },
      ]
    },
    {
      id: "database",
      title: "Databases & Storage",
      skills: [
        { name: "pgvector", icon: SiPostgresql },
        { name: "PostGIS", icon: SiPostgresql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Redis", icon: SiRedis },
        { name: "Supabase", icon: SiSupabase },
      ]
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      skills: [
        { name: "Gemini API", icon: SiGooglegemini },
        { name: "Hugging Face", icon: HiSparkles },
        { name: "Claude API", icon: SiAnthropic },
        { name: "LLM APIs", icon: TbBrain },
        { name: "OpenAI API", icon: SiOpenai },
        { name: "PyTorch", icon: SiPytorch },
        { name: "RAG", icon: TbFileSearch },
        { name: "scikit-learn", icon: SiScikitlearn },
      ]
    },
    {
      id: "devops",
      title: "AI Coding, DevOps & Tools",
      skills: [
        { name: "Claude Code", icon: SiAnthropic },
        { name: "Codex", icon: SiOpenai },
        { name: "Docker", icon: SiDocker },
        { name: "Godot", icon: SiGodotengine },
        { name: "OCR / Tesseract", icon: TbFileSearch },
        { name: "Scrapy", icon: SiScrapy },
      ]
    }
  ];

  return (
    <div className="bg-[#f1f5f9] dark:bg-[#232329] p-6 sm:p-8 rounded-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6">
        Tech Stack
      </h2>
      <Accordion type="multiple" defaultValue={["languages"]} className="w-full">
        {techCategories.map((category) => (
          <AccordionItem key={category.id} value={category.id}>
            <AccordionTrigger className="hover:no-underline">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {category.title}
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 pt-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-2 p-3 sm:p-4 bg-white dark:bg-[#1c1c22] rounded-lg hover:scale-105 transition-transform cursor-default"
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                      <span className="text-xs sm:text-sm font-medium text-black dark:text-white text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
