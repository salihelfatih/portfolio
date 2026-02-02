"use client";

import ExperienceAccordion from "./ExperienceAccordion";
import EducationAccordion from "./EducationAccordion";

/**
 * AboutCards Component
 * 
 * Displays the right column of the About page with three cards:
 * - Experience section with ExperienceAccordion
 * - Education section with EducationAccordion
 * - Interests section with simple text paragraph (not accordion)
 */
export default function AboutCards() {
  const interests = [
    "Painting", "Reading", "Soccer", "Cooking"
  ];

  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="bg-[#f1f5f9] dark:bg-[#232329] p-6 sm:p-8 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6">
          Experience
        </h2>
        <ExperienceAccordion />
      </div>

      <div className="bg-[#f1f5f9] dark:bg-[#232329] p-6 sm:p-8 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6">
          Education
        </h2>
        <EducationAccordion />
      </div>

      <div className="bg-[#f1f5f9] dark:bg-[#232329] p-6 sm:p-8 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
          Interests
        </h2>
        <p className="text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed">
          Outside of work, I spend time {interests[0].toLowerCase()}, {interests[1].toLowerCase()}, 
          playing {interests[2].toLowerCase()}, and {interests[3].toLowerCase()}. These activities 
          help me maintain balance and bring fresh perspectives to my technical work.
        </p>
      </div>
    </div>
  );
}
