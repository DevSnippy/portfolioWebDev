"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Terminal,
  Cpu,
  Database,
  Code,
  Globe,
  Cloud,
} from "lucide-react";
import { AiOutlineOpenAI } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Project Data
const workProjects = [
  {
    title: "Real-Time Terminal Management Platform",
    description:
      "Architected and developed a cloud-native web application for managing real-time Telnet & serial port connections with WebSocket integration, enabling seamless device communication across distributed networks.",
    icon: <Terminal className="w-6 h-6" />,
    technologies: ["React", "Node.js", "WebSocket", "Docker", "Next.js"],
    category: "Full-Stack Development",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "SDR Automation & Testing Suite",
    description:
      "Engineered a comprehensive Python automation framework for Software Defined Radio (SDR) provisioning, testing, and validation with CI/CD integration and real-time monitoring capabilities.",
    icon: <Cpu className="w-6 h-6" />,
    technologies: ["Python", "FastAPI", "Docker"],
    category: "DevOps & Automation",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Validation & Monitoring Dashboard",
    description:
      "Built an enterprise-grade GUI application for SDR data transmission monitoring with advanced analytics, real-time alerting, and comprehensive reporting capabilities.",
    icon: <Database className="w-6 h-6" />,
    technologies: ["Python", "Tkinter", "Docker"],
    category: "Data Engineering",
    gradient: "from-green-500 to-emerald-500",
  },
];

const basePersonalProjects = [
  {
    title: "Modern Portfolio Experience",
    description:
      "Crafted an interactive portfolio website with advanced animations, dark mode, and responsive design using cutting-edge web technologies.",
    icon: <Globe className="w-6 h-6" />,
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "Frontend Development",
    gradient: "from-orange-500 to-red-500",
    liveUrl: "#",
    githubUrl: "https://github.com/DevSnippy/portfolioWebDev",
  },
  {
    title: "AI Job Agent",
    description:
      "Built an intelligent job application assistant that automates job scraping, analyzes listings, and generates tailored cover letters using AI. It matches roles based on resume data and streamlines the entire application process through a unified interface",
    icon: <AiOutlineOpenAI className="w-6 h-6" />,
    technologies: ["React", "FastAPI", "OpenAI API", " Tailwind CSS"],
    category: "API Integration",
    gradient: "from-sky-500 to-blue-500",
    liveUrl: "https://jobagentai.dev",
    githubUrl: "https://github.com/DevSnippy/aiJobAgent",
  },
  {
    title: "Code Race",
    description:
      "Created a performance benchmarking platform for comparing Rust, Node.js, and Python by executing real-world code snippets. The system measures execution time and resource usage, providing an interactive UI for analyzing results across languages.",
    icon: <Code className="w-6 h-6" />,
    technologies: ["React", "Python", "Rust", "Node"],
    category: "Full-Stack Development",
    gradient: "from-violet-500 to-purple-500",
    liveUrl: "https://coderace-production.up.railway.app/",
    githubUrl: "https://github.com/DevSnippy/codeRace",
  },
];

// ProjectCard Component
const ProjectCard = ({ project, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
      type: "spring",
      stiffness: 100,
    }}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
    className="group"
  >
    <Card className="h-full bg-white dark:bg-gray-800 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div
            className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
          >
            <div className="text-gray-700 dark:text-gray-300">
              {project.icon}
            </div>
          </div>
          <Badge variant="secondary" className="text-xs font-medium">
            {project.category}
          </Badge>
        </div>

        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </CardTitle>

        <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-2 pt-2">
            {project.liveClickHandler && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 group/btn bg-transparent"
                onClick={project.liveClickHandler}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full group/btn bg-transparent"
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Code
                </Button>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

// ProjectSection Component
const ProjectSection = ({ title, projects, bgClass }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {title === "Work Projects"
              ? "Professional solutions that drive business impact and technical excellence"
              : "Personal explorations in modern web development and creative problem-solving"}
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLiveClick = (title, url) => {
    if (title === "Modern Portfolio Experience") {
      setShowPopup(true);
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  const personalProjects = basePersonalProjects.map((proj) => ({
    ...proj,
    liveClickHandler: () => handleLiveClick(proj.title, proj.liveUrl),
  }));

  return (
    <>
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="text-center bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              😊 You’re already here!
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-600 dark:text-gray-400">
            This is the portfolio site you're currently viewing.
          </p>
        </DialogContent>
      </Dialog>

      <ProjectSection
        title="Work Projects"
        projects={workProjects}
        bgClass="bg-white dark:bg-gray-900"
      />
      <ProjectSection
        title="Personal Projects"
        projects={personalProjects}
        bgClass="bg-gray-50 dark:bg-gray-800"
      />
    </>
  );
};

export default Projects;
