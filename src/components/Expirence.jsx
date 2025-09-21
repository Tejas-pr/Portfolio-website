import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.8 }}
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
      title: "Software Engineer, Cron Labs - present",
      description: [
        "Delivered client-facing features for Cisco, improving UX and meeting stakeholder goals.",
        "Built an interactive dashboard with draggable widgets for customizable user experiences.",
        "Developed filtered dropdowns for smoother workflows and better performance.",
        "Fixed bugs and polished UI/UX for a more stable, user-friendly platform.",
        "Created frontend for video AI tool with in-browser trimming and merging."
      ],
      companyLink:
        "https://www.linkedin.com/company/strategify-analytics/?originalSubdomain=in",
    },
    {
      title: "Full-Stack Developer Intern, ETFkidukaan",
      description: [
        "Redesigned the UI with the UX team, boosting responsiveness and growing the user base by 22%.",
        "Developed backend logic for landing page graphs, referral amount calculations, and coupon system.",
        "Implemented blog management (add/delete), feedback pages, and user guidelines.",
        "Merged the Free & Silver tiers into a Free tier and retained the gold tier, implementing the necessary backend logic to support the change.",
      ],
      companyLink: "https://etfkidukaan.in/",
    },
  ];

  return (
    <div
      id="expirence"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-24 mt-20"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-normal text-white md:text-6xl">
          Experience
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Expirence;
