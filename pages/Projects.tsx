import React, { useState } from 'react';
import { ProjectNavbar } from '../components/Projects/ProjectNavbar';
import { projects as projectsData } from '../Data/data';
import { Category } from '../Types/Types';
import { ProjectCard } from '../components/Projects/ProjectCard';
import {
  ProjectCardContainer,
  ProjectsListContainer,
  ProjectsMainContainer,
} from './ProjectsStyles';

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const filteredProjects = projects.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredProjects);
    setActive(category);
  };
  return (
    <ProjectsMainContainer style={{ height: '60vh' }}>
      <ProjectNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <ProjectsListContainer>
        {projects.map((project) => (
          <ProjectCardContainer key={project.name}>
            <ProjectCard project={project} key={project.name} />
          </ProjectCardContainer>
        ))}
      </ProjectsListContainer>
    </ProjectsMainContainer>
  );
}
