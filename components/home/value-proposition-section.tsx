"use client"

import { motion } from "framer-motion"
import { Eye, Brain, Database } from "lucide-react"

export function ValuePropositionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-dark dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 drop-shadow-md">
            核心价值主张
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-2xl md:text-4xl font-bold drop-shadow-sm">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Eye className="h-8 w-8 md:h-12 md:w-12" />
              <span>视觉</span>
            </motion.div>
            <span className="text-3xl md:text-5xl">+</span>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Brain className="h-8 w-8 md:h-12 md:w-12" />
              <span>AI</span>
            </motion.div>
            <span className="text-3xl md:text-5xl">×</span>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Database className="h-8 w-8 md:h-12 md:w-12" />
              <span>信息数据化</span>
            </motion.div>
            <span className="text-3xl md:text-5xl">=</span>
            <motion.div
              className="text-brand-orange"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              智能管理
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

