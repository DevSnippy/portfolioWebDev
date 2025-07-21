"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaDocker,
  FaAws,
  FaLinux,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaTerminal,
  FaWindows,
} from "react-icons/fa";
import {
  SiMongodb,
  SiGithubactions,
  SiN8N,
  SiNginx,
  SiJira,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = {
  "DevOps & Cloud": [
    {
      name: "Docker",
      icon: <FaDocker size={20} className="text-blue-500" />,
      level: "Expert",
    },
    {
      name: "AWS",
      icon: <FaAws size={20} className="text-orange-500" />,
      level: "Advanced",
    },
    {
      name: "Nginx",
      icon: <SiNginx size={20} className="text-green-600" />,
      level: "Intermediate",
    },
  ],
  Development: [
    {
      name: "JavaScript",
      icon: <FaJsSquare size={20} className="text-yellow-400" />,
      level: "Expert",
    },
    {
      name: "React",
      icon: <FaReact size={20} className="text-cyan-400" />,
      level: "Expert",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={20} className="text-green-600" />,
      level: "Expert",
    },
    {
      name: "Python",
      icon: <FaPython size={20} className="text-yellow-500" />,
      level: "Advanced",
    },
  ],
  "Tools & Systems": [
    {
      name: "Linux",
      icon: <FaLinux size={20} className="text-yellow-400" />,
      level: "Expert",
    },
    {
      name: "Windows",
      icon: <FaWindows size={20} className="text-yellow-400" />,
      level: "Expert",
    },
    {
      name: "Git",
      icon: <FaGitAlt size={20} className="text-orange-500" />,
      level: "Expert",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={20} className="text-gray-600 dark:text-gray-300" />,
      level: "Expert",
    },
    {
      name: "Bash",
      icon: (
        <FaTerminal size={20} className="text-gray-600 dark:text-gray-300" />
      ),
      level: "Advanced",
    },
  ],
  "Database & Automation": [
    {
      name: "MongoDB",
      icon: <SiMongodb size={20} className="text-green-500" />,
      level: "Advanced",
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions size={20} className="text-purple-500" />,
      level: "Advanced",
    },
    {
      name: "N8N",
      icon: <SiN8N size={20} className="text-red-500" />,
      level: "Intermediate",
    },
    {
      name: "Jira",
      icon: <SiJira size={20} className="text-blue-600" />,
      level: "Intermediate",
    },
  ],
};

const allSkills = Object.values(skillCategories).flat();

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Object.keys(skillCategories)];

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : skillCategories[activeCategory] || [];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 scroll-mt-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${activeCategory}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className={`${getLevelColor(skill.level)} text-xs font-medium`}
                >
                  {skill.level}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Skills Animation */}
        <div className="relative mt-20 overflow-hidden py-8">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div
                key={`floating-${skill.name}-${i}`}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
