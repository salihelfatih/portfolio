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
      title: "Founder & Lead Developer",
      company: "Sakia Labs",
      year: "2023 - Present",
      responsibilities: [
        "Design and deploy full-stack web and mobile platforms for community-focused projects",
        "Lead technical architecture decisions and system design for 10+ production applications",
        "Mentor junior developers and contribute to open-source initiatives"
      ]
    },
    {
      id: "exp-2",
      title: "Full-Stack Developer",
      company: "Freelance",
      year: "2020 - 2023",
      responsibilities: [
        "Built custom web applications for clients across various industries",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with designers and stakeholders to deliver user-centered solutions"
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
