"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, GraduationCap, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: FileCheck,
    title: "签约部署",
    description: "快速签约，7天内完成系统部署",
    duration: "7天",
    color: "bg-blue-500",
  },
  {
    icon: GraduationCap,
    title: "培训上线",
    description: "专业培训，14天内团队熟练掌握",
    duration: "14天",
    color: "bg-green-500",
  },
  {
    icon: TrendingUp,
    title: "持续优化",
    description: "持续优化，不断提升管理效率",
    duration: "持续",
    color: "bg-orange-500",
  },
]

export function ImplementationPath() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            实施路径
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-300 z-0" />
                  )}
                  <Card className="relative z-10 text-center">
                    <CardContent className="p-6">
                      <div className={`inline-flex p-4 ${step.color} rounded-full mb-4 text-white`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className={`inline-block px-3 py-1 ${step.color} text-white rounded-full text-sm mb-2`}>
                        {step.duration}
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

