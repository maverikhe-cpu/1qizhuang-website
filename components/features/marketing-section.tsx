"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Search, Store, CheckCircle } from "lucide-react"
import Image from "next/image"

const funnelSteps = [
  {
    icon: Eye,
    title: "知道",
    description: "通过小程序分享工地进度",
    tool: "围观装修小程序",
  },
  {
    icon: Search,
    title: "了解",
    description: "客户实时查看工地情况",
    tool: "实时监控展示",
  },
  {
    icon: Store,
    title: "到店",
    description: "提升信任度，促进到店",
    tool: "信任背书",
  },
  {
    icon: CheckCircle,
    title: "成交",
    description: "提高转化率",
    tool: "数据化展示",
  },
]

export function MarketingSection() {
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
            营销获客
          </h2>
          <p className="text-gray-600 text-lg">
            让好交付自动带来新客户
          </p>
        </motion.div>

        {/* Funnel Visualization */}
        <div className="mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            {funnelSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex p-4 bg-brand-orange/10 rounded-full mb-4">
                        <Icon className="h-8 w-8 text-brand-orange" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <p className="text-sm text-brand-blue font-medium">{step.tool}</p>
                    </CardContent>
                  </Card>
                  {index < funnelSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-brand-blue text-2xl">
                      →
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mini Program Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">围观装修小程序</h3>
                <p className="text-gray-600">
                  意向客户可实时看工地，提升信任度，降低获客成本60%
                </p>
              </div>
              <div className="relative aspect-[9/16] max-w-xs mx-auto bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
                  alt="小程序界面"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

