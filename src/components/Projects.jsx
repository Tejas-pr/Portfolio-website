import React from "react";
import { motion } from "framer-motion";
import image1 from "../image/img1.png";
import image2 from "../image/img2.png";
import image3 from "../image/img3.png";
import image4 from "../image/img4.png";
import image5 from "../image/img5.png";
import image6 from "../image/img6.png";
import image7 from "../image/img7.png";

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
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10 rounded-lg shadow-sm shadow-slate-800 p-8">
        <a href={project.liveLink}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[500px]"
          />
        </a>
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

          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-md px-2 py-1 bg-gray-800 text-white"
              >
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
      image: image7,
      title: "Sketchly – AI-Powered Drawing App",
      description:
        "Interactive AI-powered drawing platform where users can draw shapes like rectangles, circles, triangles, and freehand strokes using a refined ShadCN UI. Built with a scalable monorepo architecture using Turborepo, Next.js, Prisma ORM, and TailwindCSS — featuring Better Auth for authentication and real-time collaboration powered by WebSockets. Includes BullMQ + Redis for job queueing, CI/CD-enabled automated Docker deployments, and LangChain-driven AI to generate shapes and assist with creativity.",
      technologies: [
        "Turborepo",
        "Next.js",
        "Prisma ORM",
        "TailwindCSS",
        "ShadCN UI",
        "TypeScript",
        "Better Auth",
        "WebSocket",
        "BullMQ + Redis",
        "Docker & Docker Hub",
        "CI/CD Pipeline",
        "LangChain",
        "Zod",
      ],
      githubLink: "https://github.com/Tejas-pr/Sketchly",
      liveLink: "https://drawing.tejaspr.site/",
    },
    {
      image: image6,
      title: "Real-Time Chat App",
      description:
        "A full-stack real-time chat application built with a modern monorepo architecture using Turborepo. It features instant messaging powered by WebSockets, secure user authentication, and persistent message storage with Prisma ORM. The app is designed with a clean UI using TailwindCSS and TypeScript for type safety, ensuring both performance and scalability.",
      technologies: [
        "Turborepo",
        "Next.js",
        "WebSocket",
        "Prisma",
        "TailwindCSS",
        "TypeScript",
        "ButterAuth",
        "WebSocket",
        "BullMQ + Redis",
        "Docker",
        "Zod",
      ],
      githubLink: "https://github.com/Tejas-pr/chatapp",
      liveLink: "https://github.com/Tejas-pr/chatapp",
    },
    {
      image: image2,
      title: "AI PDF Chatbot Fullstack",
      description:
        "AI PDF Chatbot Fullstack is a SaaS platform designed to help users interact with and analyze PDF documents using advanced AI.",
      technologies: [
        "NextJS",
        "Clerk",
        "LangChain",
        "Google Generative AI",
        "Paypal",
        "Convex",
        "Tiptap",
        "PDF-Parse",
      ],
      githubLink: "https://github.com/username/project1",
      liveLink: "https://ai-pdf-chatbot-fullstack.vercel.app/",
    },
    {
      image: image4,
      title: "Space Landing Page",
      description:
        "A visually stunning Space Landing Page built using React, TypeScript, and Tailwind CSS. This project creates an engaging and modern UI to showcase space-related content.",
      technologies: ["React", "TailwindCSS", "Typescript"],
      githubLink: "https://github.com/Tejas-pr/Space-ts",
      liveLink: "https://space-ts-landingpage.vercel.app/",
    },
    {
      image: image5,
      title: "Paytm Clone",
      description:
        "This project is a Paytm clone built using Reactjs, Tailwindcss, Node.js, Express, and MongoDB with Mongoose. The primary goal is to understand and implement user-to-user transactions using MongoDB sessions to ensure atomicity and consistency.",
      technologies: ["ReactJs", "MERN", "TailwindCSS"],
      githubLink: "https://github.com/Tejas-pr/paytm",
      liveLink: "https://github.com/Tejas-pr/paytm",
    },
    {
      image: image1,
      title: "Shoptopia E-commerce Platform",
      description:
        "A Shoptopia is an e-commerce platform where users can browse, add, and view products.An admin panel is available for managing products efficiently",
      technologies: ["MERN", "TailwindCSS", "Framer-Motion", "GSAP"],
      githubLink: "https://github.com/Tejas-pr/Shoptopia",
      liveLink: "https://github.com/Tejas-pr/Shoptopia",
    },
    {
      image: image3,
      title: "Weather Sphere",
      description:
        "Develop a real-time data processing system to monitor weather conditions and provide summarized insights using rollups and aggregates.",
      technologies: [
        "MERN",
        "TailwindCSS",
        "Framer-Motion",
        "Chatjs",
        "OpenWeatherMap API",
      ],
      githubLink: "https://github.com/Tejas-pr/WeatherSphere",
      liveLink: "https://github.com/Tejas-pr/WeatherSphere",
    },
  ];

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:p-4 md:px-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-normal text-white md:text-6xl">
          Projects
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

export default Projects;
