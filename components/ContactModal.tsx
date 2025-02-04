"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/devsnippy",
      href: "https://github.com/devsnippy",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aviram-rabinovitch",
      href: "https://www.linkedin.com/in/aviram-rabinovitch-76230423b/",
    },
    {
      icon: Mail,
      label: "Email",
      value: "aviram2n@gmail.com",
      href: "mailto:aviram2n@gmail.com",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
          Get in touch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-white">Contact Information</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <item.icon className="h-6 w-6" />
              </a>
              <div>
                <p className="font-medium text-white">{item.label}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
