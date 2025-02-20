import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay:0.5, duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col gap-4 rounded-lg shadow-sm shadow-slate-800 px-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 m-8">
            <div className="text-xl font-semibold">{project.title}</div>
            <div className="flex flex-col gap-2">
              {project.description.map((desc, index) => (
                <p key={index} className="text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  {desc}
                </p>
              ))}
            </div>
            <a
              href={project.companyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Company Website
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Expirence = () => {
  const projectsData = [
    {
      title: "React Developer Intern, ETFkidukaan",
      description: [
        "Developed a full-stack web application using React JS",
        "Developing a responsive ETF website using React.js. ",
        "I’m contributing in full website UI and functionality’s changes across the website. ",
      ],
      companyLink: "https://etfkidukaan.in/",
    }
  ];

  return (
    <div
      id="expirence"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-normal text-white md:text-6xl">
          Experience
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Expirence;
