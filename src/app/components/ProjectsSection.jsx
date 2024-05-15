"use client"
import React, { useState, useRef } from "react";
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
  id: 1,
  title: "Fotografia",
  description: "Fotografia",
  image: "/images/projects/fotografia1.webp",
  tag:["Todos", "Fotografias",],
  gitUrl: "/",
  previewUrl: "/",
  },
  {
    id: 2,
    title: "Fotoperiodismo",
    description: "Fotografia",
    image: "/images/projects/fotoperiodismo1.jpg",
    tag:["Todos", "Periodismo"],
    gitUrl:"/",
    previewUrl: "/",
  },
  {
      id: 3,
      title: "Fotografia",
      description: "Fotografia",
      image: "/images/projects/fotoperiodismo2.jpg",
      tag:["Todos", "Periodismo", "Fotografias"],
      gitUrl: "/",
    previewUrl: "/",
  },


]
const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };



  return (
    <section id="projects">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900 uppercase mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white text-sm flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fotografias"
          isSelected={tag === "Fotografias"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Periodismo"
          isSelected={tag === "Periodismo"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};



export default ProjectsSection