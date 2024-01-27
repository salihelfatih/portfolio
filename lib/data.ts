import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import homemadeGoodies from "@/public/homemadeGoodies.png";
import digitalFuse from "@/public/digitalFuse.png";
import surveyForge from "@/public/surveyForge.png";
import riseUp from "@/public/riseUp.png";
import sudaDate from "@/public/sudaDate.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Mohawk College",
    company: "",
    location: "Hamilton, ON",
    description:
      "I studied Data Structures and Algorithms, Object-Oriented Programming, Web Development, and Databases.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2023",
  },
  {
    title: "Frontend Developer",
    company: "HIEM Energy",
    location: "Burnaby, BC",
    description:
      "I'm developing web applications using React, Next, TypeScript, and Tailwind.",
    icon: React.createElement(FaReact),
    date: "Jan 2023 - present",
  },
  {
    title: "Full-Stack Developer Co-op",
    company: "Direct Message",
    location: "Hamilton, ON",
    description:
      "I developed an eLearning web application using React, MUI, ASP.NET, and PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "May - Aug 2022",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Boardwalk Insurance",
    location: "Vaughan, ON",
    description:
      "I developed an application building platform using React, MUI, ASP.NET, and PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan - Apr 2022",
  },
  {
    title: "Frontend Developer Co-op",
    company: "Hydro One",
    location: "Barrie, ON",
    description:
      "Revamped user experience with dynamic frontend development using JavaScript, HTML, and CSS, boosting engagement and usability.",
    icon: React.createElement(CgWorkAlt),
    date: "May - Dec 2021",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Corald Networks",
    location: "Toronto, ON",
    description:
      "I developed a media broadcaster web app using Vue, Vuetify, Express, and PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan - Apr 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Homemade Goodies",
    description:
      "An e-commerce platform for users to buy and sell homemade goods. It has a product page, a cart page and a checkout page.",
    tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Material UI"],
    imageUrl: homemadeGoodies,
    link: "https://github.com/orgs/homemadegoodies/repositories",
  },
  {
    title: "Digital Fuse",
    description:
      "An e-learning platform for students to learn about technology. It has a course builder, a quiz builder and a forum.",
    tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Material UI"],
    imageUrl: digitalFuse,
    link: "https://github.com/orgs/digitalfusee/repositories",
  },
  {
    title: "Application Building Platform",
    description:
      "A survey builder for users to create surveys and collect responses. It has a survey builder, a response viewer and a dashboard.",
    tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Material UI"],
    imageUrl: surveyForge,
    link: "https://github.com/orgs/boardwalkabp/repositories",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Vue",
  "Angular",
  "Node",
  "Express",
  "Python",
  "Django",
  "Java",
  "Spring Boot",
  "C#",
  "ASP.NET",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "MongoDB",
  "Firebase",
  "Prisma",
  "GraphQL",
  "Tailwind",
  "Material UI",
  "Sass",
  "Git",
  "Docker",
] as const;
