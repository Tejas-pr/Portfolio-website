import React from "react";
import { HiDownload } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import CvPdf from "../CV/TejasPR_resume.pdf";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center text-white gap-6 px-5 h-[80vh] mt-16 mb-28 md:mb-0"
    >
      {/* Greeting */}
      <motion.h3
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-8 text-2xl text-orange-400 font-semibold md:-translate-x-40 md:translate-y-8"
      >
        Hello, I'm
      </motion.h3>

      {/* Name */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-5xl md:text-8xl font-bold"
      >
        Tejas P R
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-xl font-light"
      >
        Full Stack Developer
      </motion.p>

      {/* About Text */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-center text-md font-thin max-w-3xl leading-relaxed"
      >
        I’m a passionate Software Developer specializing in full-stack
        development, experienced in building scalable applications using Java,
        JavaScript/TypeScript, React.js, Next.js, Node.js, and Express.js. My
        expertise spans front-end design with HTML, CSS, and TailwindCSS, to
        back-end engineering with MongoDB, PostgreSQL, and Prisma ORM. I also
        work with AWS services (EC2, Load Balancer, AMI, SSH, ASG), Docker, and
        Git/GitHub to deliver secure and efficient solutions. Currently, I’m
        expanding my skill set by learning Go (Golang) to strengthen my backend
        and systems programming capabilities.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col md:flex-row justify-center gap-4 md:mt-4"
      >
        <button
          type="button"
          className="flex items-center gap-2 px-6 py-3 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 rounded-lg text-sm font-medium transition"
        >
          <HiDownload />
          <a href={CvPdf} download="Tejas_PR-CV.pdf">
            Download CV
          </a>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-6 py-3 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 rounded-lg text-sm font-medium transition"
        >
          <IoMdCall />
          <a href="mailto:tejas.teju02@gmail.com">Contact Me</a>
        </button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="md:mt-8"
      >
        <ul className="flex gap-5">
          {[
            {
              href: "https://github.com/Tejas-pr",
              icon: <BsGithub />,
              hoverColor: "hover:text-white",
            },
            {
              href: "mailto:tejas.teju02@gmail.com",
              icon: <BiLogoGmail />,
              hoverColor: "hover:text-red-500",
            },
            {
              href: "https://www.linkedin.com/in/tejas-p-r-057a4622a/",
              icon: <BsLinkedin />,
              hoverColor: "hover:text-blue-500",
            },
            {
              href: "https://x.com/Tejas67061437",
              icon: <BsTwitterX />,
              hoverColor: "hover:text-white",
            },
          ].map(({ href, icon, hoverColor }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1.4 + index * 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={`cursor-pointer text-2xl opacity-70 px-1 transition-all duration-300 ${hoverColor}`}
            >
              <a href={href}>{icon}</a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
