"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-6 mt-4"
        >
          <motion.a
            href="https://github.com/devsnippy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aviram-rabinovitch-76230423b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={30} />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
