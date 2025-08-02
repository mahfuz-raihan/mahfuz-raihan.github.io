import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Add dark mode state and effect
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 p-5 transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("home")}
          className="text-2xl lg:text-3xl font-extrabold tracking-tight cursor-pointer text-black dark:text-white"
        >
          Mahfuz Raihan
        </motion.span>

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black dark:bg-white flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="https://drive.google.com/file/d/1xxF_qTinydOf4EwM4xAt3kOWA_UV6Pjt/view?usp=sharing"
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-900 border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
          <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.a>

        <div className="lg:hidden flex items-center gap-x-4">
          {/* Dark/Light Mode Toggle for mobile */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <motion.button
            className="text-2xl text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.2 }}
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </motion.button>
        </div>

        {/* Dark/Light Mode Toggle for desktop */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="hidden lg:block ml-4 p-2 rounded-full border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg z-40"
          >
            <button
              className="absolute top-5 right-5 text-2xl text-black dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold text-black dark:text-white">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  className="border-b"
                  whileHover={{ scale: 1.1 }}
                >
                  <button onClick={() => scrollToSection(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1xxF_qTinydOf4EwM4xAt3kOWA_UV6Pjt/view?usp=sharing"
                className="relative inline-block px-4 py-2 font-semibold group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-900 border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
                <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
