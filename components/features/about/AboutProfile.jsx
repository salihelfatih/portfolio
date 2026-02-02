"use client";

import Image from "next/image";

/**
 * AboutProfile Component
 * 
 * Displays the left column of the About page with:
 * - Profile image
 * - Bio text
 */
export default function AboutProfile() {
  return (
    <div className="bg-[#f1f5f9] dark:bg-[#232329] p-6 sm:p-8 rounded-xl">
      <div className="relative w-full h-[300px] sm:h-[400px] mb-6 rounded-lg overflow-hidden">
        <Image
          src="/assets/photos/about.jpg"
          alt="About profile"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
        About Me
      </h2>
      <p className="text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed mb-4">
        I'm a full-stack developer with a background in visual arts and software development. I build end-to-end systems that balance technical clarity, usability, and long-term maintainability.
      </p>
      <p className="text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed">
        These days, I'm focused on building accessible, user-centered products and applying AI and automation where they genuinely reduce friction. I care about clean abstractions, thoughtful trade-offs, and code that holds up as systems grow.
      </p>
    </div>
  );
}
