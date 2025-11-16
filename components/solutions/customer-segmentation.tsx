"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Building2, Award } from "lucide-react"

const segments = [
  {
    icon: TrendingUp,
    type: "成长型装企",
    revenue: "<5000万",
    title: "低成本启动，快速见效",
    features: ["远程监控", "AI考勤"],
    description: "适合年营业额5000万以下的成长型装企，快速部署，立即见效",
    color: "border-green-500",
  },
  {
    icon: Building2,
    type: "规模型装企",
    revenue: "5000万-5亿",
    title: "标准化管理，口碑裂变",
    features: ["智能派工", "营销获客"],
    description: "适合年营业额5000万-5亿的规模型装企，标准化管理，提升口碑",
    color: "border-brand-blue",
  },
  {
    icon: Award,
    type: "品牌型装企",
    revenue: ">5亿",
    title: "生态整合，品牌升级",
    features: ["支付宝合作", "数据API对接"],
    description: "适合年营业额5亿以上的品牌型装企，生态整合，品牌升级",
    color: "border-brand-orange",
  },
]

export function CustomerSegmentation() {
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
            客户分层
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon
            return (
              <motion.div
                key={segment.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 ${segment.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <Icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{segment.type}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          年营业额 {segment.revenue}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                      {segment.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{segment.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {segment.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
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

