import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          Highly motivated and results-driven data scientist with experience in <b>machine learning</b> and <b>deep learning</b> proficiency. Proficient in Python, Pytorch, Sci-kit learn, and NLTK with a proven track record of developing predictive models and analytical functions. Highly skilled in DBMS, PostgreSQL, automation, and customer behavior analysis. Strong background in research and practical application of advanced ML algorithms in various projects. Committed to leveraging my expertise to deliver impactful solutions and drive business growth in a collaborative team environment.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          <b>Education:</b><br/>
          B.Sc (Hons) in Information and Communications Technology, Islamic University, Bangladesh (Jan 2016 - Dec 2022)<br/>
          Higher School Certificate (HSC), Kushtia Govt. College, Kushtia (Class of 2014)<br/>
          Secondary School Certificate (SSC), Kushtia Zilla School, Kushtia (Class of 2012)
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond coding, I enjoy sharing insights, engaging with the data science community, and following the journey of early-stage startups. Feel free to connect with me:
          <div className="flex gap-4 mt-3">
            <a href="https://www.linkedin.com/in/mahfuzraihan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#0A66C2] dark:text-[#A1A1AA]">
                <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1"/>
                <path d="M16 8a4 4 0 0 1 4 4v5h-3v-5a1 1 0 0 0-2 0v5h-3v-5a4 4 0 0 1 4-4zM7 9h3v10H7V9zM8.5 7A1.5 1.5 0 1 1 7 8.5 1.5 1.5 0 0 1 8.5 7z" fill="currentColor"/>
              </svg>
              <span className="hidden lg:inline">LinkedIn</span>
            </a>
            <a href="https://drive.google.com/file/d/1xxF_qTinydOf4EwM4xAt3kOWA_UV6Pjt/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="hover:text-green-700 dark:hover:text-green-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-700 dark:text-[#A1A1AA]">
                <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5V8h5.5L13 3.5zM8 13h8v2H8v-2zm0 4h8v2H8v-2z" fill="currentColor"/>
              </svg>
              <span className="hidden lg:inline">Resume</span>
            </a>
            <a href="https://github.com/mahfuz-raihan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-800 dark:hover:text-gray-200 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-black dark:text-[#A1A1AA]">
                <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.339-.012 2.421-.012 2.749 0 .268.18.579.688.481C19.138 20.19 22 16.437 22 12.012 22 6.484 17.523 2 12 2z" fill="currentColor"/>
              </svg>
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </div>
        </p>
      </motion.div>
    </div>
  );
}
