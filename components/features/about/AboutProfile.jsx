"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ResumeModal from "@/components/features/resume/ResumeModal";

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
        I&apos;m a full-stack developer with a background in AI/ML, product design, and visual arts. I build practical, human-centered applications across AI tools, community platforms, food systems, career technology, study platforms, and smart living.
      </p>
      <p className="text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed mb-6">
        Through Sakia Labs, I design and develop products with React, Next.js, TypeScript, Python, FastAPI, Django, PostgreSQL, Tailwind CSS, and AI-assisted workflows. I care about clean implementation, thoughtful product decisions, and useful technology that holds up in the real world.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ResumeModal>
          <Button className="w-full bg-accent text-white hover:bg-accent/90 sm:w-auto">
            View resume
          </Button>
        </ResumeModal>
        <Link href="/work">
          <Button
            variant="outline"
            className="w-full border-accent text-accent hover:bg-accent hover:text-white sm:w-auto"
          >
            Explore work
          </Button>
        </Link>
      </div>
    </div>
  );
}
