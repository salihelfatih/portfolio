"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EducationAccordion() {
  const education = [
    {
      id: "edu-1",
      institution: "Fanshawe College",
      degree: "Artificial Intelligence and Machine Learning, Graduate Certificate",
      year: "2026",
      details: [
        "Completed graduate certificate studies in artificial intelligence and machine learning",
        "Built on a software development foundation with applied AI/ML workflows, model evaluation, and practical implementation",
        "Focused on connecting machine-learning concepts to useful, human-centered software products"
      ]
    },
    {
      id: "edu-2",
      institution: "Mohawk College",
      degree: "Advanced Diploma in Software Development",
      year: "2024",
      details: [
        "Comprehensive training in full-stack web development",
        "Focus on modern frameworks: React, Next.js, Node.js, and PostgreSQL",
        "Dean's List recognition for academic excellence"
      ]
    },
    {
      id: "edu-3",
      institution: "Sudan University of Science & Technology",
      degree: "Bachelor of Fine Arts",
      year: "2018",
      details: [
        "Specialized in visual arts and design principles",
        "Developed strong foundation in composition, color theory, and user experience",
        "Exhibited work in multiple galleries and cultural events"
      ]
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {education.map((edu) => (
        <AccordionItem key={edu.id} value={edu.id}>
          <AccordionTrigger className="hover:no-underline">
            <div className="flex justify-between items-center w-full pr-4">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-black/60 dark:text-white/60">{edu.institution}</p>
              </div>
              <span className="text-accent font-semibold text-sm">{edu.year}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-2 text-black/70 dark:text-white/70 mt-2">
              {edu.details.map((detail, index) => (
                <li key={index} className="leading-relaxed">{detail}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
