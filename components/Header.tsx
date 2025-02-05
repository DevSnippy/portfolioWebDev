"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Github, Linkedin } from "lucide-react";
import { Cookie } from "next/font/google";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const cookieFont = Cookie({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-2xl text-gray-800 dark:text-white ${cookieFont.className}`}
        >
          Aviram's Site
        </motion.h1>

        <nav>
          <ul className="flex space-x-4 items-center">
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://github.com/devsnippy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                <Github size={20} />
              </a>
            </motion.li>

            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.linkedin.com/in/aviram-rabinovitch-76230423b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </motion.li>

            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </motion.li>

            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                    About Me
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-black text-white border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">About Me</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-200"
                    >
                      Hey there! I’m Aviram Rabinovich, an Automation & DevOps
                      Engineer with a passion for streamlining processes and
                      delivering robust solutions.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-gray-400 mt-4"
                    >
                      In my free time, I enjoy learning new tech, building
                      websites and automations, and sharing knowledge with the
                      community.
                    </motion.p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
