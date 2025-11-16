"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function AlipayPartnership() {
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
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-full mb-6">
            <span className="text-2xl font-bold text-blue-600">支付宝</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
              认证
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            支付宝合作专区
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            我们是支付宝&apos;可信装修&apos;解决方案在AI端口的核心合作伙伴
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-brand-blue">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
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
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-orange">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
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
                      <span className="text-gray-700">{item}</span>
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
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-brand-blue">
              <CardContent className="p-8">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  入驻支付宝必经之路
                </p>
                <p className="text-lg text-gray-700">
                  通过支付宝渠道获取的客户转化率提升
                  <span className="text-brand-orange font-bold text-2xl mx-2">35%</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

