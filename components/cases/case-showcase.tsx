"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { TrendingUp, TrendingDown } from "lucide-react"

const cases = [
  {
    company: "某头部装企",
    scale: "品牌型",
    region: "华东",
    before: { sites: 50, complaintRate: 15 },
    after: { sites: 500, complaintRate: 4.5 },
    testimonial: "我们交付的不是冰冷的监控硬件，而是一位助您省心管理工地、轻松触达客户、提高转化率的智能助手",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    company: "某区域性公司",
    scale: "规模型",
    region: "华南",
    before: { acquisitionCost: 1000, conversionRate: 20 },
    after: { acquisitionCost: 400, conversionRate: 35 },
    testimonial: "通过围观小程序，我们的获客成本降低了60%，客户转化率提升了75%",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
  },
  {
    company: "某成长型企业",
    scale: "成长型",
    region: "华北",
    before: { managerEfficiency: 1, sitesPerManager: 5 },
    after: { managerEfficiency: 3, sitesPerManager: 15 },
    testimonial: "项目经理人效提升了3倍，现在一个项目经理可以管理15个工地",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
]

export function CaseShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{caseItem.company}</h3>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300">
                        {caseItem.scale}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300">
                        {caseItem.region}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">&ldquo;{caseItem.testimonial}&rdquo;</p>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(caseItem.before).map(([key, value]) => {
                        const afterValue = caseItem.after[key as keyof typeof caseItem.after]
                        const improvement = typeof value === 'number' && typeof afterValue === 'number'
                          ? ((afterValue - value) / value * 100).toFixed(0)
                          : null
                        return (
                          <div key={key} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                              {key === 'sites' ? '管理工地' :
                               key === 'complaintRate' ? '客诉率' :
                               key === 'acquisitionCost' ? '获客成本' :
                               key === 'conversionRate' ? '转化率' :
                               key === 'managerEfficiency' ? '项目经理人效' :
                               key === 'sitesPerManager' ? '人均管理工地' : key}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-400 dark:text-gray-500 line-through">
                                {typeof value === 'number' ? value : value}
                              </span>
                              <TrendingDown className="h-4 w-4 text-red-500" />
                              <span className="text-2xl font-bold text-brand-blue">
                                {typeof afterValue === 'number' ? afterValue : afterValue}
                              </span>
                              {improvement && (
                                <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
                                  {parseFloat(improvement) > 0 ? '+' : ''}{improvement}%
                                </span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

