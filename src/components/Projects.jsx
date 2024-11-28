import React from "react";
import { motion } from "framer-motion";
import image1 from "../image/img1.png";
import image2 from "../image/img2.png";

// ScrollReveal Component (motion wrapper for animation)
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 rounded-lg shadow-sm shadow-slate-700 p-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-row gap-3 text-xs">
            <div className="text-gray-400">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="text-gray-400">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-md p-2 bg-gray-800 text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const projectsData = [
    {
      image: image1,
      title: "Shoptopia E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with modern technologies.",
      technologies: ["React", "TailwindCSS", "NodeJS"],
      githubLink: "https://github.com/Tejas-pr/Shoptopia",
      liveLink: "https://shoptopia-frontend.vercel.app/",
    },
    {
      image: image2,
      title: "Project 1",
      description: "Description of Project 1.",
      technologies: ["React", "TailwindCSS", "NodeJS"],
      githubLink: "https://github.com/username/project1",
      liveLink: "https://project1.com",
    },
  ];

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-normal text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
