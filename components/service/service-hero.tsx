"use client"

import { motion } from "framer-motion"

export function ServiceHero() {
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
            不只是卖软件，更是陪您成长的伙伴
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            我们销售的是一套系统+一套服务
          </p>
        </motion.div>
      </div>
    </section>
  )
}

