"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const workProjects = [
  {
    title: "Full-Stack Terminal Management",
    description:
      "Built a web-based terminal system for managing real-time Telnet & serial port connections, enabling streamlined device communication.",
  },
  {
    title: "Automation for SDRs",
    description:
      "Developed a Python-based automation tool for SDR software burning and testing, eliminating manual errors and ensuring consistency, as well as monitoring and validating data transmissions.",
  },
  {
    title: "Data Test GUI for SDRs",
    description:
      "Developed a Python-based automation tool for SDR software burning and testing, eliminating manual errors and ensuring consistency, as well as monitoring and validating data transmissions.",
  },
];

const personalProjects = [
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website using React and Next.js to showcase my projects and skills.",
  },
  {
    title: "Weather App",
    description:
      "Created a responsive weather application using React and a weather API to display current weather conditions and forecasts.",
  },
  {
    title: "Task Management System",
    description:
      "Built a full-stack task management application with user authentication, real-time updates, and a responsive design.",
  },
];

const ProjectSection = ({ title, projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          {title}
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <>
      <ProjectSection title="Work Projects" projects={workProjects} />
      <ProjectSection title="Personal Projects" projects={personalProjects} />
    </>
  );
};

export default Projects;
