"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AboutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
          About Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-white">About Aviram</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-200"
          >
            Hey there! I’m Aviram Rabinovich, a Full Stack Developer with a
            passion for building dynamic web applications, optimizing
            performance, and delivering seamless user experiences. I love
            working with cutting-edge technologies, crafting scalable solutions,
            and bringing ideas to life through clean, efficient code.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-gray-400 mt-4"
          >
            In my free time, I enjoy learning new tech, building websites and
            automations, and sharing knowledge with the community.{" "}
          </motion.p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
