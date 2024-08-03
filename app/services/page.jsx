"use client";

import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useStore from "@/hooks/useStore";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I design and develop responsive websites that look and work great on every device.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "I ensure your mobile app is optimized for performance, speed, and user experience.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Product Design",
    description:
      "I create user-friendly interfaces that are intuitive and easy to use.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Branding",
    description:
      "I help you create a unique brand identity that sets you apart from the competition.",
    href: "/contact",
  },
];

const Services = () => {
  const setSelectedService = useStore((state) => state.setSelectedService);
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    router.push("/contact");
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div
                  className={`text-5xl font-extrabold transition-all duration-500 cursor-pointer ${
                    hoveredIndex === index
                      ? "text-accent"
                      : "text-black dark:text-white"
                  }`}
                  onClick={() => handleServiceClick(service.title)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {service.num}
                </div>
                <motion.div
                  animate={{
                    rotate: hoveredIndex === index ? -45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-[70px] h-[70px] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 ${
                    hoveredIndex === index
                      ? "bg-accent"
                      : "bg-black dark:bg-white"
                  }`}
                  onClick={() => handleServiceClick(service.title)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <BsArrowDownRight className="text-white dark:text-primary text-3xl" />
                </motion.div>
              </div>
              {/* title */}
              <h2
                className={`text-[42px] font-bold leading-none transition-all duration-500 cursor-pointer ${
                  hoveredIndex === index
                    ? "text-accent"
                    : "text-black dark:text-white"
                }`}
                onClick={() => handleServiceClick(service.title)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {service.title}
              </h2>
              {/* description */}
              <p className="text-black/60 dark:text-white/60">
                {service.description}
              </p>
              {/* border */}
              <div className="border-b border-black/20 dark:border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
