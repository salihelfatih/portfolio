"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import ProjectSection from "@/components/features/projects/ProjectSection";
import CategoryFilter from "@/components/features/projects/CategoryFilter";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Work = () => {
  // State for managing active category filter and current project
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0); // For animation direction
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Updated categories with new names
  const categories = ['Community & Solidarity', 'AI & ML', 'Money & Work', 'Tools & Experiments'];

  // Filter projects by category if filter is active
  const filteredProjects = activeCategory
    ? projects.filter(project => project.category === activeCategory)
    : projects;

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentProjectIndex(0);
  }, [activeCategory]);

  // Navigate to next project
  const handleNext = () => {
    setDirection(1);
    setCurrentProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  // Navigate to previous project
  const handlePrevious = () => {
    setDirection(-1);
    setCurrentProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setCurrentProjectIndex((prev) => 
          prev === 0 ? filteredProjects.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setDirection(1);
        setCurrentProjectIndex((prev) => (prev + 1) % filteredProjects.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredProjects.length]);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Animation variants for smooth transitions
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col overflow-hidden py-6"
    >
      <div className="container mx-auto px-4 sm:px-6 flex-1">
        <div className="flex flex-col gap-6 max-w-full">
          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-3">
              My Work
            </h1>
            <p className="text-sm sm:text-base text-black/60 dark:text-white/60 max-w-2xl mx-auto">
              A collection of projects showcasing system design thinking, technical ownership, and end-to-end development capabilities.
            </p>
          </div>
          
          {/* Category filter */}
          <div className="flex justify-center mb-2">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          
          {/* Project carousel container with navigation */}
          <div className="relative flex items-center gap-4 lg:gap-6">
            {/* Left arrow - Desktop */}
            {filteredProjects.length > 1 && (
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="icon"
                className="hidden lg:flex flex-shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#f1f5f9] dark:bg-[#27272c] text-accent hover:bg-accent hover:text-primary dark:hover:text-accent border-2 border-accent shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110"
                aria-label="Previous project"
              >
                <FiChevronLeft className="h-6 w-6 xl:h-7 xl:w-7" />
              </Button>
            )}

            {/* Project display with AnimatePresence for smooth transitions */}
            <div
              className="relative overflow-hidden w-full flex-1"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentProjectIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <ProjectSection 
                    project={filteredProjects[currentProjectIndex]} 
                    index={currentProjectIndex}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right arrow - Desktop */}
            {filteredProjects.length > 1 && (
              <Button
                onClick={handleNext}
                variant="outline"
                size="icon"
                className="hidden lg:flex flex-shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#f1f5f9] dark:bg-[#27272c] text-accent hover:bg-accent hover:text-primary dark:hover:text-accent border-2 border-accent shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110"
                aria-label="Next project"
              >
                <FiChevronRight className="h-6 w-6 xl:h-7 xl:w-7" />
              </Button>
            )}
          </div>

          {/* Project counter and navigation dots */}
          {filteredProjects.length > 0 && (
            <div className="flex flex-col items-center gap-3 mt-6 mb-6">
              {/* Counter */}
              <div className="text-sm text-black/60 dark:text-white/60 font-medium">
                Project {currentProjectIndex + 1} of {filteredProjects.length}
              </div>

              {/* Navigation dots */}
              <div className="flex gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentProjectIndex ? 1 : -1);
                      setCurrentProjectIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex
                        ? "w-8 bg-accent"
                        : "w-2 bg-black/20 dark:bg-white/20 hover:bg-accent/50"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              {/* Mobile navigation buttons */}
              {filteredProjects.length > 1 && (
                <div className="flex lg:hidden gap-3">
                  <Button
                    onClick={handlePrevious}
                    variant="outline"
                    size="default"
                    className="flex-1 bg-[#f1f5f9] dark:bg-[#27272c] text-accent hover:bg-accent hover:text-primary dark:hover:text-primary border-2 border-accent transition-all duration-500"
                  >
                    <FiChevronLeft className="h-5 w-5 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    variant="outline"
                    size="default"
                    className="flex-1 bg-[#f1f5f9] dark:bg-[#27272c] text-accent hover:bg-accent hover:text-primary dark:hover:text-primary border-2 border-accent transition-all duration-500"
                  >
                    Next
                    <FiChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              )}

              {/* Swipe hint for mobile */}
              <div className="lg:hidden text-xs text-black/40 dark:text-white/40">
                Swipe left or right to navigate
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
