import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-h-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h1>

        <motion.p 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="text-center text-lg font-lg font-semibold text-gray-500">
          want to chat? Send me an Email through this button and I'll respond
          wheneven I can.
        </motion.p>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        <a
          href="mailto:tejas.teju02@gmail.com"
          className="text-nowrap rounded-lg border border-indigo-500 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
