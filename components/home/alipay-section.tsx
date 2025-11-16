"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AlipaySection() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
            <span className="text-brand-blue font-semibold">支付宝</span>
            <span className="text-gray-600 dark:text-gray-300">可信装修</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            核心合作伙伴
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            我们是支付宝&apos;可信装修&apos;解决方案在AI端口的核心合作伙伴
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-brand-blue bg-gray-900">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                支付宝提供
              </h3>
              <ul className="space-y-3">
                {[
                  "信任生态背书",
                  "流量入口支持",
                  "品牌认证标识",
                  "支付场景整合",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-brand-orange bg-gray-900">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                一起装深度赋能
              </h3>
              <ul className="space-y-3">
                {[
                  "AI智能识别技术",
                  "实时工地监控系统",
                  "数据化交付能力",
                  "营销获客工具",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            入驻支付宝必经之路
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            通过支付宝渠道获取的客户转化率提升35%
          </p>
        </motion.div>
      </div>
    </section>
  )
}

