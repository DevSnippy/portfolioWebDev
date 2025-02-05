"use client";
import photo from "../assets/Photo.jpg";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ContactModal from "./ContactModal";
import { FlipWords } from "./ui/flip-words";
import { Meteors } from "./ui/meteors";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Get the scroll position and map it to an opacity value.
  // As you scroll from 0 to 300px, opacity will go from 1 to 0.
  const { scrollY } = useScroll();
  const fadeOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const words = ["Automation Engineer", "DevOps Engineer", "Kickass Engineer"];

  return (
    <motion.section
      ref={ref}
      style={{ opacity: fadeOpacity }}
      className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={30} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
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
            <FlipWords words={words} />
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
    </motion.section>
  );
};

export default Hero;
