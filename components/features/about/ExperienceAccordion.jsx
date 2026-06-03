"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ExperienceAccordion() {
  const experiences = [
    {
      id: "exp-1",
      title: "Founder & Full Stack Developer",
      company: "Sakia Labs",
      year: "2023 - Present",
      responsibilities: [
        "Design and build human-centered products across AI tools, food systems, career technology, study platforms, and community infrastructure",
        "Lead technical architecture across full-stack applications using React, Next.js, TypeScript, Python, FastAPI, Django, PostgreSQL, and Tailwind CSS",
        "Shape product direction, documentation, and AI-assisted workflows from early concept through implementation"
      ]
    },
    {
      id: "exp-2",
      title: "AI/ML Freelance Intern",
      company: "Fanshawe College",
      year: "Winter 2026",
      responsibilities: [
        "Completed an AI/ML-focused freelance internship connected to Fanshawe College",
        "Applied software development, data handling, and machine-learning concepts to practical project work",
        "Strengthened the bridge between model behavior, user experience, and clear technical communication"
      ]
    },
    {
      id: "exp-3",
      title: "Full Stack Developer Intern",
      company: "Boardwalk Insurance",
      year: "Fall 2022",
      responsibilities: [
        "Contributed to full-stack development work in a professional software environment",
        "Built and maintained user-facing features with attention to usability and reliability",
        "Collaborated across technical and stakeholder needs during internship delivery"
      ]
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {experiences.map((exp) => (
        <AccordionItem key={exp.id} value={exp.id}>
          <AccordionTrigger className="hover:no-underline">
            <div className="flex justify-between items-center w-full pr-4">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-black/60 dark:text-white/60">{exp.company}</p>
              </div>
              <span className="text-accent font-semibold text-sm">{exp.year}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2 text-black/70 dark:text-white/70 mt-2">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="leading-relaxed">{resp}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
