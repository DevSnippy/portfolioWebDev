"use client";
import { useState, useEffect } from "react";
import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Github, Linkedin, User, Menu, X } from "lucide-react";
import { Rubik_Glitch } from "next/font/google";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const rubikGlitch = Rubik_Glitch({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const socialLinks = [
    {
      href: "https://github.com/devsnippy",
      icon: <Github size={18} />,
      label: "GitHub Profile",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      href: "https://www.linkedin.com/in/aviram-rabinovitch-76230423b/",
      icon: <Linkedin size={18} />,
      label: "LinkedIn Profile",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
  ];

  const handleMobileMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className={`text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer ${rubikGlitch.className}`}
            >
              AV
            </motion.h1>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {/* Social Links */}
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 ${link.color} transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 backdrop-blur-sm`}
                >
                  {link.icon}
                </a>
              </motion.div>
            ))}

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle theme"
                className="p-3 rounded-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 backdrop-blur-sm"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

            {/* About Me Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <User
                      size={16}
                      className="mr-2 group-hover:scale-110 transition-transform"
                    />
                    About Me
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl">
                  <DialogHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                        <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                          <User size={20} className="text-white" />
                        </div>
                        About Me
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  <div className="space-y-6 py-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="relative">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                        <div className="pl-6">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Hey there! 👋
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I'm{" "}
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                              Aviram Rabinovich
                            </span>
                            , a Full Stack Developer with a passion for building
                            dynamic web applications, optimizing performance,
                            and delivering seamless user experiences.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="space-y-4"
                    >
                      <div className="relative">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                        <div className="pl-6">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            What I Love ❤️
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I love working with cutting-edge technologies,
                            crafting scalable solutions, and bringing ideas to
                            life through clean, efficient code.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="relative">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-600 to-orange-600 rounded-full"></div>
                        <div className="pl-6">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Beyond Code 🚀
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            In my free time, I enjoy learning 3d printing,
                            building home automations gameing, and sharing
                            knowledge with the developer community.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    {/* Skills Preview */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
                    >
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Core Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "Node.js",
                          "TypeScript",
                          "Docker",
                          "AWS",
                          "Python",
                        ].map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </nav>

          {/* Mobile Hamburger Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:hidden"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-md shadow-lg border border-gray-200/20 dark:border-gray-700/20"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              onClick={handleMobileMenuClick}
            >
              <div className="pt-4 pb-2 space-y-4">
                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 ${link.color} transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 backdrop-blur-sm`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.icon}
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={() => {
                      setIsDarkMode(!isDarkMode);
                      setMobileMenuOpen(false);
                    }}
                    aria-label="Toggle theme"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 backdrop-blur-sm"
                  >
                    <AnimatePresence mode="wait">
                      {isDarkMode ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun size={18} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon size={18} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>

                {/* Mobile About Me Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center"
                >
                  <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <User
                          size={16}
                          className="mr-2 group-hover:scale-110 transition-transform"
                        />
                        About Me
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl">
                      <DialogHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                            <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                              <User size={20} className="text-white" />
                            </div>
                            About Me
                          </DialogTitle>
                        </div>
                      </DialogHeader>
                      <div className="space-y-6 py-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-4"
                        >
                          <div className="relative">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                            <div className="pl-6">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Hey there! 👋
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                I'm{" "}
                                <span className="font-semibold text-blue-600 dark:text-blue-400">
                                  Aviram Rabinovich
                                </span>
                                , a Full Stack Developer with a passion for
                                building dynamic web applications, optimizing
                                performance, and delivering seamless user
                                experiences.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="space-y-4"
                        >
                          <div className="relative">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                            <div className="pl-6">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                What I Love ❤️
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                I love working with cutting-edge technologies,
                                crafting scalable solutions, and bringing ideas
                                to life through clean, efficient code.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="relative">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-600 to-orange-600 rounded-full"></div>
                            <div className="pl-6">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Beyond Code 🚀
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                In my free time, I enjoy learning 3d printing,
                                building home automations gameing, and sharing
                                knowledge with the developer community.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                        {/* Skills Preview */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
                        >
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            Core Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "React",
                              "Node.js",
                              "TypeScript",
                              "Docker",
                              "AWS",
                              "Python",
                            ].map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
