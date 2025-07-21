"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowDown, Download } from "lucide-react";
import ContactModal from "./ContactModal";
import { FlipWords } from "./ui/flip-words";
import { Meteors } from "./ui/meteors";
import Skills from "./Skills";
import { Button } from "@/components/ui/button";
import Photo from "../assets/Photo.jpg";

const Hero = () => {
  const ref = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();

  // Subtle parallax effect
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  const words = [
    "Automation Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Full-Stack Developer",
  ];

  const scrollToSkills = () => {
    if (skillsRef.current) {
      const headerHeight = 80;
      const elementPosition = skillsRef.current.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      >
        {/* Background meteors */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <Meteors number={15} />
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-40 space-y-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Heading and subheading */}
              <div className="space-y-6 text-center sm:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Aviram
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Rabinovitch
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium"
                >
                  <FlipWords words={words} />
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto sm:mx-0"
              >
                Passionate about building scalable applications and robust
                infrastructure. I create digital experiences that make a
                difference.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 pb-6 items-center sm:items-start"
              >
                <ContactModal />
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  <a href="/resume.pdf">Download Resume</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end mt-10 sm:mt-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-20 animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>

                <div className="relative w-36 h-36 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <Image
                    src={Photo || "/placeholder.svg"}
                    alt="Aviram Rabinovich - Full Stack Developer"
                    width={400}
                    height={400}
                    className="rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToSkills}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 group"
            >
              {/* Only visible on small screens and up */}
              <div className="hidden sm:flex flex-col items-center gap-2">
                <span className="text-sm">View Skills</span>
                <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
              </div>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <div ref={skillsRef} className="mt-12">
        <Skills />
      </div>
    </>
  );
};

export default Hero;
