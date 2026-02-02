"use client";

import { motion } from "framer-motion";
import AboutProfile from "@/components/features/about/AboutProfile";
import AboutCards from "@/components/features/about/AboutCards";
import TechStack from "@/components/features/about/TechStack";

const About = () => {
  return (
    <div className="container mx-auto transition-colors duration-300 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-8 sm:py-12 xl:py-0 mb-8"
      >
        <div className="container mx-auto max-w-[1400px] px-2 sm:px-4 md:px-6">
          <div className="flex flex-col gap-8">
            {/* Two-column layout: single column on mobile (<1200px), two columns on desktop (≥1200px) */}
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Left Column - Profile */}
              <div className="xl:w-[400px] xl:flex-shrink-0">
                <AboutProfile />
              </div>

              {/* Right Column - Cards */}
              <div className="flex-1">
                <AboutCards />
              </div>
            </div>

            {/* Full Width Tech Stack */}
            <TechStack />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
