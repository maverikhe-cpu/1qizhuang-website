"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    icon: MapPin,
    title: "工地分散管不过来",
    description: "多个工地同时施工，无法实时掌握每个工地的进度和情况",
    color: "text-red-500",
  },
  {
    icon: Users,
    title: "人员杂乱无法追溯",
    description: "工人进出频繁，无法准确记录和管理人员信息",
    color: "text-orange-500",
  },
  {
    icon: Clock,
    title: "工期拖延尾款难收",
    description: "工期延误导致客户不满，尾款回收困难，影响现金流",
    color: "text-yellow-500",
  },
]

export function PainPointsSection() {
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
            三大痛点
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            传统装修管理面临的挑战
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gray-100 mb-4 ${point.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

