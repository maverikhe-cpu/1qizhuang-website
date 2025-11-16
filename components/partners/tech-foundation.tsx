"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Cloud, Wifi, Shield } from "lucide-react"

const partners = [
  {
    icon: Camera,
    name: "海康威视",
    role: "硬件供应商",
    description: "提供高质量监控硬件设备",
  },
  {
    icon: Cloud,
    name: "萤石",
    role: "云平台",
    description: "提供稳定的云存储和视频服务",
  },
  {
    icon: Wifi,
    name: "中国电信",
    role: "网络服务",
    description: "提供稳定的网络连接服务",
  },
  {
    icon: Shield,
    name: "支付宝",
    role: "信任生态",
    description: "支付宝'可信装修'核心合作伙伴",
  },
]

export function TechFoundation() {
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
            技术基石
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-flex p-4 bg-brand-blue/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-brand-blue" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{partner.name}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{partner.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{partner.description}</p>
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

