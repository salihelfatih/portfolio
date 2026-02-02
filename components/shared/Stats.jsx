"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: '3+',
    label: 'Years building software',
    description: 'Web, AI, and community products.',
  },
  {
    value: '12+',
    label: 'Products & tools shipped',
    description: 'From solo prototypes to full platforms.',
  },
  {
    value: '15+',
    label: 'Technologies in production',
    description: 'Across frontend, backend, and AI.',
  },
  {
    value: '300+',
    label: 'GitHub contributions',
    description: 'In the last 12 months.',
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col gap-2 items-center xl:items-start"
                key={index}
              >
                <div className="text-4xl xl:text-6xl font-extrabold text-accent">
                  {item.value}
                </div>
                <p className="text-base font-semibold text-black dark:text-white text-center xl:text-left">
                  {item.label}
                </p>
                <p className="text-sm text-black/60 dark:text-white/60 leading-snug text-center xl:text-left">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
