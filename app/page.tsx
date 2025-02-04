"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function Home() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}

