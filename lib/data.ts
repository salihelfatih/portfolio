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
    title: "Web Designer",
    location: "Omdurman, Sudan",
    description:
      "I started my career as a web designer. I designed and developed websites for Ahfad University and small businesses using HTML, CSS, JavaScript, and WordPress.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
  {
    title: "Started Mohawk College",
    location: "Hamilton, ON",
    description:
      "I studied Data Structures and Algorithms, Object-Oriented Programming, Web Development, and Databases.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Frontend Developer Co-op",
    location: "Barrie, ON",
    description:
      "Revamped user experience with dynamic frontend development using JavaScript, HTML, and CSS, boosting engagement and usability.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Full Stack Developer Co-op",
    location: "Hamilton, ON",
    description:
      "Developed backend services using C#, ASP.NET, and PostgreSQL, improving the performance of the application.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Hamilton, ON",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, ASP.NET, PostgreSQL, MongoDB, Tailwind, and Material UI. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Homemade Goodies",
    description:
      "An e-commerce platform for users to buy and sell homemade goods. It has a product page, a cart page and a checkout page.",
    tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Material UI"],
    imageUrl: homemadeGoodies,
    link: "https://homemadegoodies.netlify.app/",
  },
  {
    title: "Digital Fuse",
    description:
      "An e-learning platform for students to learn about technology. It has a course builder, a quiz builder and a forum.",
    tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Material UI"],
    imageUrl: digitalFuse,
    link: "https://digitalfuse.netlify.app/",
  },
  {
    title: "Survey Forge",
    description:
      "A survey builder for users to create surveys and collect responses. It has a survey builder, a response viewer and a dashboard.",
    tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Material UI"],
    imageUrl: surveyForge,
    link: "https://abp-demo.netlify.app/",
  },
  {
    title: "Suda Date",
    description:
      "A dating app for the Sudanese diaspora. It has a swipe feature, a chat feature and a profile feature.",
    tags: ["React Native", "MongoDB", "Prisma", "Tailwind", "Framer Motion"],
    imageUrl: sudaDate,
    link: "https://suda-date.vercel.app/",
  },
  {
    title: "Rise Up",
    description:
      "A social media app for users to share their positive stories. It has a feed, a profile page and a chat feature.",
    tags: ["Next.js", "MongoDB", "Prisma", "Tailwind", "Framer Motion"],
    imageUrl: riseUp,
    link: "https://rise-up.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
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
  "Firebase",
  "MongoDB",
  "Prisma",
  "GraphQL",
  "Apollo",
  "Tailwind",
  "Material UI",
  "Sass",
  "Framer Motion",
  "Git",
  "Docker",
] as const;
