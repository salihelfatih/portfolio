"use client";

import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAnthropic,
  SiBootstrap,
  SiCsharp,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFramer,
  SiGit,
  SiGodotengine,
  SiGooglegemini,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPydantic,
  SiPython,
  SiPytorch,
  SiRadixui,
  SiReact,
  SiScikitlearn,
  SiScrapy,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import {
  FaAws,
  FaFigma,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { TbBrain, TbFileSearch } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const about = {
  title: "About Me",
  description:
    "I'm a full-stack developer with a background in AI/ML, product design, and visual arts. I build practical, human-centered applications across AI tools, community platforms, food systems, career technology, study platforms, and smart living. Through Sakia Labs, my work blends product thinking, clean implementation, and user-centered design with a focus on thoughtful, useful, and impactful technology.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Salih Elfatih",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "salih.elfatih@proton.me",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic",
    },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/salihelfatih/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/salihelfatih",
    icon: FaGithub,
  },
  {
    label: "Twitter",
    href: "https://x.com/salih_elfatih",
    icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/salih.elfatih/",
    icon: FaInstagram,
  },
];

const experience = {
  title: "My Experience",
  description:
    "A blend of AI/ML practice, full-stack product development, internships, freelance work, and visual design. The throughline is building useful systems with clear interfaces and grounded technical decisions.",
  items: [
    {
      company: "Sakia Labs",
      position: "Founder & Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Fanshawe College",
      position: "AI/ML Freelance Intern",
      duration: "Winter 2026",
    },
    {
      company: "Boardwalk Insurance",
      position: "Full Stack Developer Intern",
      duration: "Fall 2022",
    },
    {
      company: "Direct Message",
      position: "Full Stack Developer Intern",
      duration: "Summer 2022",
    },
    {
      company: "Corald Networks",
      position: "Front-End Developer Intern",
      duration: "Winter 2022",
    },
    {
      company: "Hydro One",
      position: "Front-End Developer Intern",
      duration: "Fall 2021",
    },
    {
      company: "Freelance",
      position: "UI/UX Designer",
      duration: "2018 - 2021",
    },
    {
      company: "Ahfad University",
      position: "Graphic Designer",
      duration: "2017 - 2018",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Formal training across AI/ML, software development, and visual arts. That mix shapes how I move from product ideas to technical systems and usable interfaces.",
  items: [
    {
      institution: "Fanshawe College",
      field: "Artificial Intelligence and Machine Learning",
      credential: "Graduate Certificate",
      duration: "2026",
    },
    {
      institution: "Mohawk College",
      field: "Software Development",
      credential: "Advanced Diploma",
      duration: "2024",
    },
    {
      institution: "Sudan University",
      field: "Fine Arts",
      credential: "Bachelor's Degree",
      duration: "2018",
    },
  ],
};

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: SiPhp },
      { name: "C#", icon: SiCsharp },
      { name: "GDScript", icon: SiGodotengine },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Product UI",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Radix UI", icon: SiRadixui },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Figma", icon: FaFigma },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: ".NET", icon: SiDotnet },
      { name: "Pydantic", icon: SiPydantic },
    ],
  },
  {
    id: "data",
    title: "Data & Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "PostGIS", icon: SiPostgresql },
      { name: "pgvector", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "Hugging Face", icon: HiSparkles },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "RAG", icon: TbFileSearch },
      { name: "OCR / Tesseract", icon: TbFileSearch },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "Gemini API", icon: SiGooglegemini },
      { name: "Claude API", icon: SiAnthropic },
      { name: "LLM APIs", icon: TbBrain },
      { name: "Rule-Based Systems", icon: TbBrain },
    ],
  },
  {
    id: "tools",
    title: "AI Coding, Creative & Tools",
    skills: [
      { name: "Codex", icon: SiOpenai },
      { name: "Claude Code", icon: SiAnthropic },
      { name: "Godot", icon: SiGodotengine },
      { name: "Scrapy", icon: SiScrapy },
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Illustrator", icon: SiAdobeillustrator },
    ],
  },
];

const ResumeCard = ({ item, type }) => (
  <li className="mx-auto w-full max-w-full min-w-0 overflow-hidden rounded-xl bg-[#f1f5f9] px-5 py-6 text-left transition-colors duration-300 dark:bg-[#232329] sm:px-8">
    <span className="text-sm font-semibold uppercase tracking-wide text-accent">
      {item.duration}
    </span>
    {type === "education" ? (
      <>
        <h3 className="mt-3 break-words text-lg font-semibold leading-snug text-black dark:text-white sm:text-2xl">
          {item.field}
        </h3>
        <p className="mt-2 text-base text-black/70 dark:text-white/70">
          {item.credential}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="h-[6px] w-[6px] rounded-full bg-accent" />
          <p className="text-black/60 dark:text-white/60">
            {item.institution}
          </p>
        </div>
      </>
    ) : (
      <>
        <h3 className="mt-3 break-words text-lg font-semibold leading-snug text-black dark:text-white sm:text-2xl">
          {item.position}
        </h3>
        <div className="mt-4 flex items-center gap-3">
          <span className="h-[6px] w-[6px] rounded-full bg-accent" />
          <p className="text-black/60 dark:text-white/60">{item.company}</p>
        </div>
      </>
    )}
  </li>
);

const SectionIntro = ({ title, description }) => (
  <div className="flex max-w-full flex-col gap-4 text-center xl:text-left">
    <h3 className="break-words text-4xl font-bold text-black dark:text-white">
      {title}
    </h3>
    <p className="mx-auto max-w-[320px] break-words text-black/60 dark:text-white/60 sm:max-w-full xl:mx-0 xl:max-w-[720px]">
      {description}
    </p>
  </div>
);

const Resume = () => {
  return (
    <div className="w-full max-w-full overflow-hidden px-4 transition-colors duration-300 sm:px-6">
      <div className="flex min-h-[80vh] items-center justify-center py-8 animate-in fade-in-0 slide-in-from-bottom-3 duration-500 sm:py-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <Tabs
            defaultValue="experience"
            className="mx-0 flex w-full max-w-[340px] min-w-0 flex-col gap-8 sm:mx-auto sm:max-w-none xl:flex-row xl:gap-[60px]"
          >
            <TabsList className="mx-0 flex w-full max-w-full flex-col gap-4 sm:mx-auto sm:max-w-[380px] xl:mx-0 xl:gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full max-w-full min-w-0">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <SectionIntro
                    title={experience.title}
                    description={experience.description}
                  />
                  <ul className="grid grid-cols-1 gap-5 pb-4">
                    {experience.items.map((item) => (
                      <ResumeCard
                        key={`${item.company}-${item.duration}`}
                        item={item}
                        type="experience"
                      />
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <SectionIntro
                    title={education.title}
                    description={education.description}
                  />
                  <ul className="grid grid-cols-1 gap-5 pb-4">
                    {education.items.map((item) => (
                      <ResumeCard
                        key={`${item.institution}-${item.duration}`}
                        item={item}
                        type="education"
                      />
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <SectionIntro
                    title="My Skills"
                    description="A practical toolkit shaped by the projects on the Work page: full-stack development, AI/ML workflows, data-backed systems, product interfaces, and creative technical tools."
                  />
                  <Accordion
                    type="multiple"
                    defaultValue={["languages"]}
                    className="mx-auto w-full max-w-full rounded-xl bg-[#f1f5f9] px-5 py-2 dark:bg-[#232329] sm:px-8"
                  >
                    {skillCategories.map((category) => (
                      <AccordionItem key={category.id} value={category.id}>
                        <AccordionTrigger className="hover:no-underline">
                          <h4 className="text-left text-lg font-semibold text-black dark:text-white">
                            {category.title}
                          </h4>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-2 gap-3 pb-4 pt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {category.skills.map((skill) => {
                              const Icon = skill.icon;
                              return (
                                <div
                                  key={skill.name}
                                  className="flex min-h-[118px] flex-col items-center justify-center gap-3 rounded-lg bg-white p-3 text-center transition-transform duration-300 hover:scale-[1.03] dark:bg-[#1c1c22] sm:p-4"
                                >
                                  <Icon className="h-8 w-8 text-accent sm:h-10 sm:w-10" />
                                  <span className="text-xs font-medium leading-snug text-black dark:text-white sm:text-sm">
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
              </TabsContent>

              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <SectionIntro title={about.title} description={about.description} />
                  <ul className="mx-auto grid max-w-[760px] grid-cols-1 gap-4 xl:mx-0 xl:grid-cols-2">
                    {about.info.map((item) => (
                      <li
                        key={item.fieldName}
                        className="flex flex-col justify-center gap-1 rounded-xl bg-[#f1f5f9] px-5 py-4 text-left dark:bg-[#232329] sm:px-6"
                      >
                        <span className="text-sm text-black/60 dark:text-white/60">
                          {item.fieldName}
                        </span>
                        <span className="text-lg text-black dark:text-white">
                          {item.fieldValue}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mx-auto w-full max-w-[760px] xl:mx-0">
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-black dark:text-white">
                      Connect
                    </h4>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-[#f1f5f9] px-3 text-sm font-semibold text-black transition-colors hover:bg-accent hover:text-white dark:bg-[#232329] dark:text-white"
                          >
                            <Icon className="h-4 w-4" />
                            {social.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Resume;
