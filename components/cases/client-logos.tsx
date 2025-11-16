"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

// 模拟客户logo，实际应该使用真实logo图片
const clientLogos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `客户${i + 1}`,
}))

export function ClientLogos() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            客户Logo墙
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            服务装企500+，排列成&ldquo;一起装&rdquo;文字形状
          </p>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.1 }}
            >
              <Card className="aspect-square flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                <span className="text-xs text-gray-400 dark:text-gray-500">{client.name}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

