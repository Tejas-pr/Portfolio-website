import React from "react";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiExpress, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.6 }}
        whileInView="visible"
        className="text-4xl font-normal text-white md:text-6xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.7 }}
          whileInView="visible"
        >
          <BiLogoJavascript className="cursor-pointer text-[50px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.8 }}
          whileInView="visible"
        >
          <BiLogoReact className="cursor-pointer text-[50px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.9 }}
          whileInView="visible"
        >
          <SiExpress className="cursor-pointer text-[50px] text-green-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1 }}
          whileInView="visible"
        >
          <BiLogoMongodb className="cursor-pointer text-[50px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1.1 }}
          whileInView="visible"
        >
          <BiLogoNodejs className="cursor-pointer text-[50px] text-green-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1.2 }}
          whileInView="visible"
        >
          <BiLogoTypescript className="cursor-pointer text-[50px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1.3 }}
          whileInView="visible"
        >
          <BiLogoTailwindCss className="cursor-pointer text-[50px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1.3 }}
          whileInView="visible"
        >
          <SiMysql className="cursor-pointer text-[50px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
