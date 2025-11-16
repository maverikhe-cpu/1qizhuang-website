"use client"

import { motion } from "framer-motion"

export function SolutionsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            解决方案
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            交付品质决定口碑，口碑决定生死
          </p>
          <p className="text-lg text-gray-300">
            针对不同规模装企提供定制化方案
          </p>
        </motion.div>
      </div>
    </section>
  )
}

