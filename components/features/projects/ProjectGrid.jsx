import * as React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, filteredCategory }) => {
  const displayedProjects = filteredCategory
    ? projects.filter(project => project.category === filteredCategory)
    : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {displayedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
