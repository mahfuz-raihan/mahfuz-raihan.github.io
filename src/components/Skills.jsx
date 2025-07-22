import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiDask, SiSqlalchemy, SiMlflow , SiLangchain } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
    { id: 2, name: "Java", icon: <FaJava size={40} color="#007396" /> },
    { id: 3, name: "PyTorch", icon: <SiPytorch size={40} color="#EE4C2C" /> },
    { id: 4, name: "TensorFlow", icon: <SiTensorflow size={40} color="#FF6F00" /> },
    { id: 5, name: "Scikit-learn", icon: <SiScikitlearn size={40} color="#F7931E" /> },
    { id: 6, name: "NLTK", icon: <FaPython size={40} color="#8A9A5B" /> },
    { id: 7, name: "Pandas", icon: <SiPandas size={40} color="#150458" /> },
    { id: 8, name: "Dask", icon: <SiDask size={40} color="#F37726" /> },
    { id: 9, name: "PostgreSQL", icon: <BiLogoPostgresql size={40} color="#336791" /> },
    { id: 10, name: "SQLAlchemy", icon: <SiSqlalchemy size={40} color="#D34B1A" /> },
    { id: 11, name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
    { id: 12, name: "MLflow", icon: <SiMlflow size={40} color="#1B72B8" /> },
    { id: 13, name: "LangChain", icon: <SiLangchain size={40} color="#00B86B" /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Brain Station 23",
      role: "Machine Learning Engineer",
      period: "May 2025 - Present",
      description:
        "Helped to develop a Product Recommender System in an app. Developed a data pipeline for the Recommender system model from MSSQL DB. Skills: Python, Scikit-learn, pandas, MLflow, Git, Azure DevOps, SQLAlchemy.",
      logo: "/assets/brainstation23.png",
    },
    {
      id: 2,
      company: "Tallykhata, TallyPay (Progoti Systems Limited)",
      role: "Jr. Data Scientist",
      period: "Nov 2023 - Apr 2025",
      description:
        "Developed a model to predict customer churn, built 10+ dynamic dashboards, developed functions to analyze customer behavior, monitored ML model performance using MLflow and TensorBoard, and shared reports with stakeholders. Skills: Python, Pytorch, PostgreSQL, NLTK, Scikit-learn, torchtext, Dask/pandas, MLflow, Git, SQLAlchemy.",
      logo: "/assets/tallykhata.png",
    },
    {
      id: 3,
      company: "TallyKhata",
      role: "Trainee Jr. Data Scientist",
      period: "Jun 2023 - Oct 2023",
      description:
        "Worked on Tallykhata Data warehouse and database management system, developed task automation using Python, implemented complex queries and advanced analytics using PostgreSQL, and created dashboards for real-time analysis. Skills: Python, PostgreSQL, NLTK, Scikit-learn, torchtext, Dask/pandas, MLflow, Git, SQLAlchemy.",
      logo: "/assets/tallykhata.png",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-lg font-bold mt-7 lg:mt-10 w-full place-items-center gap-y-6 lg:gap-y-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 rounded-full shadow-md hover:shadow-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer h-32 w-32 flex flex-col items-center justify-center gap-3 transform hover:scale-105"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-center text-sm lg:text-base font-semibold mt-2 text-black dark:text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black dark:bg-zinc-900 w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black dark:bg-zinc-900 p-5 border border-[#D4D4D8] dark:border-zinc-700 rounded-md hover:bg-[#27272A] dark:hover:bg-zinc-800 transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  {exp.company.includes('Brain Station 23') ? (
                    <a href="https://brainstation-23.com/" target="_blank" rel="noopener noreferrer">
                      <img className="h-20 w-auto" src={exp.logo} alt="Brain Station 23 Logo" />
                    </a>
                  ) : (
                    <a href="https://www.tallykhata.com/en/home-eng/" target="_blank" rel="noopener noreferrer">
                      <img className="h-8 w-auto" src={exp.logo} alt="TallyKhata Logo" />
                    </a>
                  )}
                  <h2 className="font-semibold text-white dark:text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] dark:text-zinc-300 font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] dark:text-zinc-300 mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
