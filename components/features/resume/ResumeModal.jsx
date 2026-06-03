"use client";

import Link from "next/link";
import { Download, ExternalLink, X } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const resumePdf = "/assets/resume/Salih-Elfatih-Full-Stack-Developer.pdf";

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

const focusAreas = [
  "Full-stack development",
  "AI integration",
  "API design",
  "Back-end architecture",
  "Database design",
  "Data workflows",
  "Product thinking",
  "Accessibility",
  "Technical documentation",
];

const experienceHighlights = [
  {
    role: "Founder & Full-Stack Developer",
    company: "Sakia Labs",
    date: "Jan 2023 - Present",
    points: [
      "Designed and shipped mission-driven full-stack and AI-powered applications from concept to deployment.",
      "Built products with Next.js, TypeScript, Python, FastAPI, PostgreSQL, Tailwind CSS, and cloud-native services.",
      "Designed scalable REST APIs, schema-driven data models, validation pipelines, authentication flows, and role-based access patterns.",
      "Created responsive UI systems, API patterns, validation flows, documentation, and AI-assisted workflows.",
    ],
  },
  {
    role: "AI/ML Freelance Developer Co-op",
    company: "Fanshawe College",
    date: "Jan 2026 - Apr 2026",
    points: [
      "Completed a structured freelance co-op focused on AI prototyping, full-stack delivery, and technical documentation.",
      "Scoped project requirements, implementation plans, roadmap priorities, and portfolio-ready case studies.",
    ],
  },
  {
    role: "Front-End Developer Co-op",
    company: "Hydro One",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Supported enterprise front-end development for real-time data visualization and reporting systems.",
      "Built reusable React components inside version-control and code-review workflows.",
    ],
  },
];

const projectHighlights = [
  {
    name: "Lexi",
    detail:
      "AI legal document assistant for plain-English lease explanations, clause extraction, risk flagging, and deadline detection.",
  },
  {
    name: "Nimbly",
    detail:
      "Smart grocery and budgeting platform with deal tracking, inventory awareness, and budget-aware recommendations.",
  },
  {
    name: "RezGenie",
    detail:
      "AI resume and job-matching platform with resume parsing, candidate scoring, and matching workflows.",
  },
];

const credentials = [
  "Graduate Certificate - Artificial Intelligence and Machine Learning, Fanshawe College, 2026",
  "Advanced Diploma - Computer Systems Technology - Software Development, Mohawk College, 2024",
  "Bachelor of Fine Arts - Painting, Sudan University of Science & Technology, 2018",
];

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-lg bg-[#f1f5f9] p-4 dark:bg-[#232329] sm:p-5 ${className}`}
  >
    {children}
  </div>
);

export default function ResumeModal({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[94vw] max-w-[1080px] max-h-[88vh] overflow-y-auto bg-white p-0 dark:bg-[#1c1c22]">
        <div className="sticky top-0 z-10 border-b border-black/10 bg-[#f1f5f9]/95 px-5 py-4 backdrop-blur dark:border-white/10 dark:bg-[#232329]/95 sm:px-7">
          <DialogHeader className="pr-10">
            <DialogTitle className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Resume Snapshot
            </DialogTitle>
            <DialogDescription>
              Focused career highlights from my full resume.
            </DialogDescription>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-lg p-2 text-black/60 transition-colors hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white">
            <X className="h-5 w-5" />
            <span className="sr-only">Close resume modal</span>
          </DialogClose>
        </div>

        <div className="space-y-5 px-5 py-5 sm:px-7 sm:py-6">
          <section className="grid items-start gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <p className="text-xs font-bold uppercase tracking-wide text-accent">
                Full-Stack Developer | AI/ML Product Builder
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-black dark:text-white">
                Turning complex workflows into useful, human-centered software.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">
                I build full-stack web applications, AI-enabled products, and
                scalable back-end systems with a strong bias toward product
                clarity, clean documentation, accessibility, and reliable
                end-to-end execution.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href={resumePdf} target="_blank" download>
                  <Button className="w-full gap-2 bg-accent text-white hover:bg-accent/90 sm:w-auto">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-accent text-accent hover:bg-accent hover:text-white dark:hover:text-white sm:w-auto"
                  >
                    Contact me
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="self-start">
              <h4 className="text-sm font-bold uppercase tracking-wide text-black dark:text-white">
                Connect
              </h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-black/5 bg-white px-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-accent hover:bg-accent hover:text-white dark:border-white/10 dark:bg-[#1c1c22] dark:text-white dark:hover:border-accent dark:hover:bg-accent dark:hover:text-white"
                    >
                      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:opacity-100 group-hover:scale-110" />
                      {social.label}
                    </Link>
                  );
                })}
              </div>
            </Card>
          </section>

          <Card>
            <h4 className="text-sm font-bold uppercase tracking-wide text-black dark:text-white">
              Core Competencies
            </h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex min-h-[52px] items-center justify-center rounded-md border border-black/5 bg-white px-3 text-center text-xs font-semibold leading-snug text-black/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white dark:border-white/10 dark:bg-[#1c1c22] dark:text-white/70 dark:hover:border-accent dark:hover:bg-accent dark:hover:text-white"
                >
                  {area}
                </div>
              ))}
            </div>
          </Card>

          <section className="grid gap-3">
            {experienceHighlights.map((item) => (
              <Card key={`${item.company}-${item.date}`}>
                <div className="grid gap-4 lg:grid-cols-[245px_1fr] lg:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-accent">
                      {item.date}
                    </p>
                    <h4 className="mt-3 text-lg font-bold leading-snug text-black dark:text-white">
                      {item.role}
                    </h4>
                    <p className="mt-1 text-sm text-black/55 dark:text-white/55">
                      {item.company}
                    </p>
                  </div>
                  <ul className="grid gap-2 text-sm leading-relaxed text-black/65 dark:text-white/65 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[0.65em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </section>

          <section className="grid items-start gap-4 lg:grid-cols-[1fr_0.9fr]">
            <Card>
              <h4 className="text-sm font-bold uppercase tracking-wide text-black dark:text-white">
                Selected Projects
              </h4>
              <div className="mt-4 grid gap-3">
                {projectHighlights.map((project) => (
                  <div
                    key={project.name}
                    className="group rounded-md border border-black/5 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent dark:border-white/10 dark:bg-[#1c1c22] dark:hover:border-accent dark:hover:bg-accent"
                  >
                    <h5 className="font-bold text-black transition-colors group-hover:text-white dark:text-white">
                      {project.name}
                    </h5>
                    <p className="mt-1 text-sm leading-relaxed text-black/65 transition-colors group-hover:text-white/90 dark:text-white/65">
                      {project.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="self-start">
              <h4 className="text-sm font-bold uppercase tracking-wide text-black dark:text-white">
                Training
              </h4>
              <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-black/65 dark:text-white/65">
                {credentials.map((credential) => (
                  <li
                    key={credential}
                    className="group flex gap-2 rounded-md border border-black/5 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white dark:border-white/10 dark:bg-[#1c1c22] dark:hover:border-accent dark:hover:bg-accent dark:hover:text-white"
                  >
                    <span className="mt-[0.65em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent transition-colors group-hover:bg-white" />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
