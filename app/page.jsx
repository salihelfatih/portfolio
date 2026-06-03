"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Social from "@/components/shared/Social";
import Photo from "@/components/shared/Photo";
import Stats from "@/components/shared/Stats";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col py-4 xl:py-6 space-y-6 xl:space-y-8"
    >
      {/* Hero section with subtitle, heading, and photo */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between w-full gap-8 xl:gap-10">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-full xl:max-w-[600px]">
            <span className="text-base sm:text-lg md:text-xl mb-6 xl:mb-8 block">Full-stack developer, visual artist & AI specialist</span>
            <h1 className="h1">
              Building technology that empowers people
            </h1>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none">
            <Photo src="/assets/photos/home.JPEG" alt="Salih profile photo" priority />
          </div>
        </div>
      </div>

      {/* Buttons and socials */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-6 xl:gap-8 max-w-full xl:max-w-[600px] mx-auto xl:mx-0">
          <Link href="/work">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 dark:text-white text-black w-full sm:w-auto"
            >
              <span>View my work</span>
            </Button>
          </Link>
          <div>
            <Social
              containerStyles="flex gap-4 sm:gap-6"
              iconStyles="w-10 h-10 sm:w-9 sm:h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 dark:text-white text-black"
            />
          </div>
        </div>
      </div>

      {/* Stats - with extra top margin */}
      <div className="mt-auto pt-8 xl:pt-12">
        <Stats />
      </div>
    </motion.section>
  );
};

export default Home;
