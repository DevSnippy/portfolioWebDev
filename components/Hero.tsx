"use client";
import photo from "../assets/Photo.jpg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Aviram Rabinovich
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Automation & DevOps engineer
          </p>
          <ContactModal />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <Image
            src={photo}
            alt="DevOps Engineer"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
