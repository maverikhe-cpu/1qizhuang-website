"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex p-4 bg-brand-blue/10 rounded-full mb-6">
            <Target className="h-12 w-12 text-brand-blue" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            做家装行业数字化转型的推动者
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            我们致力于用AI技术赋能传统装修行业，让每一个装企都能享受到智能化带来的效率提升和成本降低。
            通过技术创新，我们帮助装企实现从&ldquo;看不见、管不了、不管了&rdquo;到&ldquo;好管理、好口碑、好生意&rdquo;的转变。
          </p>
        </motion.div>
      </div>
    </section>
  )
}

