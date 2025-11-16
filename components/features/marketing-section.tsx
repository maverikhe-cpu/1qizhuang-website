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

const marketingTools = [
  {
    title: "小程序分享",
    description: "一键生成小程序链接，客户可实时查看工地进度",
    benefit: "获客成本降低60%",
  },
  {
    title: "进度海报",
    description: "自动生成精美的进度海报，适合朋友圈分享",
    benefit: "分享率提升80%",
  },
  {
    title: "VR全景",
    description: "720度全景展示，让客户身临其境感受装修效果",
    benefit: "转化率提升35%",
  },
]

const caseStudies = [
  {
    company: "某大型装修公司",
    result: "通过小程序分享，月均获客量提升150%",
    metric: "150%",
  },
  {
    company: "某区域连锁品牌",
    result: "客户满意度提升至98%，转介绍率提升40%",
    metric: "98%",
  },
  {
    company: "某高端定制公司",
    result: "通过VR全景展示，签单率提升25%",
    metric: "25%",
  },
]

export function MarketingSection() {
  return (
    <section id="section-marketing" className="py-20 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            营销获客
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            让好交付自动带来新客户，通过透明化展示工地进度，提升客户信任度，降低获客成本
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
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{step.description}</p>
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
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">围观装修小程序</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  意向客户可实时看工地，提升信任度，降低获客成本60%
                </p>
              </div>
              <div className="relative aspect-[9/16] max-w-xs mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
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

        {/* Marketing Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">营销工具矩阵</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {marketingTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-brand-orange">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{tool.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                    <div className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold">
                      {tool.benefit}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-orange/10 to-brand-blue/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">客户成功案例</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-brand-blue mb-2">{study.metric}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{study.company}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{study.result}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

