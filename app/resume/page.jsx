"use client";

import {
  FaPython,
  FaPhp,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaGit,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiPostman,
  SiMui,
  SiExpress,
  SiCsharp,
  SiTypescript,
  SiMicrosoftazure,
} from "react-icons/si";
import { DiDotnet, DiDjango, DiPostgresql, DiMysql } from "react-icons/di";

// about data
const about = {
  title: "About Me",
  description:
    "Bringing a blend of technical expertise and artistic vision, I specialize in developing web applications and designing engaging digital content. With experience in a variety of technologies and a commitment to impactful projects, I strive to deliver high-quality solutions that resonate with users.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Salih Elfatih",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 437-219-9433",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "salihelfatih",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sudanese",
    },
    {
      fieldName: "Email",
      fieldValue: "hello@salihelfatih.dev",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "From leading projects at Sakia Labs to gaining hands-on experience through internships and freelance work, I bring a well-rounded expertise in full-stack development and design.",
  items: [
    {
      company: "Sakia Labs",
      position: "Founder & Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Boardwalk Insurance",
      position: "Full Stack Developer Intern",
      duration: "Fall 2022",
    },
    {
      company: "Direct Message ",
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

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My education fuses technical skills with creative insight, allowing me to tackle digital challenges with both precision and artistry. This unique combination fuels my ability to craft robust and innovative digital solutions.",
  items: [
    {
      institution: "Mohawk College",
      degree: "Advanced Diploma in Software Development",
      duration: "2024",
    },
    {
      institution: "Sudan University",
      degree: "Bachelor's Degree in Fine Arts",
      duration: "2018",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "I love creating smooth and engaging digital experiences. With a strong background in both front-end and back-end technologies, I build high-quality, full-stack solutions using modern frameworks and tools.",
  skillList: [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiCsharp />, name: "C#" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <DiDotnet />, name: ".NET" },
    { icon: <DiDjango />, name: "Django" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaVuejs />, name: "Vue.js" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiMui />, name: "Material-UI" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiMicrosoftazure />, name: "Azure" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" },
    { icon: <SiAdobeillustrator />, name: "Illustrator" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="container mx-auto transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger
                value="experience"
                className="bg-[#f1f5f9] dark:bg-[#232329] text-black dark:text-white transition-all duration-300"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="bg-[#f1f5f9] dark:bg-[#232329] text-black dark:text-white transition-all duration-300"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="bg-[#f1f5f9] dark:bg-[#232329] text-black dark:text-white transition-all duration-300"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="bg-[#f1f5f9] dark:bg-[#232329] text-black dark:text-white transition-all duration-300"
              >
                About Me
              </TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-black dark:text-white">
                    {experience.title}
                  </h3>
                  <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#f1f5f9] dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black dark:text-white">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-black/60 dark:text-white/60">
                                {item.company}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-black dark:text-white">
                    {education.title}
                  </h3>
                  <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#f1f5f9] dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-black dark:text-white">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-black/60 dark:text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-black dark:text-white">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] pb-4">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#f1f5f9] dark:bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl text-black dark:text-white group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* about */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold text-black dark:text-white">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-black/60 dark:text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl text-black dark:text-white">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
