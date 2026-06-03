"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* 404 Heading */}
        <h1 className="text-8xl sm:text-9xl font-bold text-accent mb-6">
          404
        </h1>
        
        {/* Page Not Found Subheading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
          Page Not Found
        </h2>
        
        {/* Descriptive Text */}
        <p className="text-base sm:text-lg text-black/70 dark:text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Go Home Button */}
          <Link href="/">
            <Button variant="default" size="lg">
              Go Home
            </Button>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex gap-4">
            <Link href="/about">
              <Button variant="outline" size="lg">
                About
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg">
                Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
