"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  { year: "2015", event: "公司成立" },
  { year: "2018", event: "第一代产品上线" },
  { year: "2020", event: "AI功能上线" },
  { year: "2023", event: "支付宝合作" },
  { year: "2025", event: "服务装企500+" },
]

export function TimelineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            发展历程
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-brand-blue hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-brand-blue mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-gray-700">{milestone.event}</div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-brand-blue rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

