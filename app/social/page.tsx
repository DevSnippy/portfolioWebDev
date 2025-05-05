"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Twitter,
  FileText,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import photo from "../../assets/Photo.jpg";
import { FlipWords } from "../../components/ui/flip-words";

export default function SocialPage() {
  const words = [
    "Node.js Developer",
    "React Developer",
    "AI Agents Developer",
    "Full-Stack Developer",
  ];

  const links = [
    {
      title: "Portfolio",
      description: "Check out my full portfolio",
      icon: Globe,
      url: "/",
      color: "bg-blue-500",
    },
    {
      title: "GitHub",
      description: "View my code repositories",
      icon: Github,
      url: "https://github.com/devsnippy",
      color: "bg-gray-800",
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aviram-rabinovitch-76230423b/",
      color: "bg-blue-700",
    },
    {
      title: "Email",
      description: "Get in touch via email",
      icon: Mail,
      url: "mailto:aviram2n@gmail.com",
      color: "bg-red-500",
    },
    {
      title: "Twitter",
      description: "Follow me for updates",
      icon: Twitter,
      url: "https://twitter.com/aviram14",
      color: "bg-blue-400",
    },
    {
      title: "Resume",
      description: "Download my resume",
      icon: FileText,
      url: "/resume.pdf",
      color: "bg-green-600",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Dot Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Content */}
      <div className="relative z-10 py-10 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={photo}
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full border-2 border-blue-500"
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -inset-1 rounded-full border-2 border-dashed border-blue-500 opacity-75"
              />
            </div>
            <h1 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
              Aviram Rabinovitch
            </h1>
            <h1 className="text-1xl font-bold mb-1 text-gray-900 dark:text-white">
              <FlipWords words={words} />
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-2"></p>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500 text-white">
                Python
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500 text-white">
                JavaScript
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500 text-white">
                Node
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500 text-white">
                React
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-4"
          >
            {links.map((link) => (
              <motion.a
                key={link.title}
                href={link.url}
                target={
                  link.url.startsWith("http") || link.url.startsWith("mailto")
                    ? "_blank"
                    : undefined
                }
                rel={
                  link.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200 backdrop-blur-sm"
              >
                <div className={`${link.color} p-3 rounded-full mr-4`}>
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white">
                    {link.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

// Import cn function
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
