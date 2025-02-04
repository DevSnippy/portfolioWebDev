"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Docker",
  "Github Actions",
  "Linux",
  "Bash Scripting",
  "Python",
  "Node.js",
  "React",
  "CI/CD",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Skills
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center"
            >
              <motion.span
                className="text-lg font-semibold text-gray-800 dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
