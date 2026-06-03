"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
      <Button
        variant={activeCategory === null ? "default" : "outline"}
        size="default"
        onClick={() => onCategoryChange(null)}
        className="text-sm sm:text-base"
      >
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="default"
          onClick={() => onCategoryChange(category)}
          className="text-sm sm:text-base"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
