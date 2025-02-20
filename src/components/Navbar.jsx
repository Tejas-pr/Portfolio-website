import React, { useState } from "react";
import logo2 from "../image/logo-r.png";
import { BiMenu, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed z-10 top-0 flex items-center w-full justify-between px-16 py-3 text-white backdrop-blur-md md:justify-evenly">
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          href="#home"
          className=""
        >
          <img src={logo2} alt="logo" height={50} width={50} />
        </motion.a>

        <ul className="hidden md:flex gap-10">
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            href="#home"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Home</li>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            href="#tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Tech</li>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            href="#expirence"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Experience</li>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Project</li>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <li>Contact</li>
          </motion.a>
        </ul>

        {isOpen ? (
          <BiX className="block md:hidden text-3xl" onClick={handleToggler} />
        ) : (
          <BiMenu
            className="block md:hidden text-3xl"
            onClick={handleToggler}
          />
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`fixed right-0 top-[84px] flex h-30 w-1/2 flex-col items-start justify-start gap-10 border-1 border-black-500 bg-gradient-to-br from-black to-slate-500 rounded-xl mr-5 p-12 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-8">
              <a
                href="#home"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>Home</li>
              </a>
              <a
                href="#tech"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>Tech</li>
              </a>
              <a
                href="#projects"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>Project</li>
              </a>
              <a
                href="#contact"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>Contact</li>
              </a>
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
