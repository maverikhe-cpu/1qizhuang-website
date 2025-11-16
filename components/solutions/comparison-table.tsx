"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const comparisons = [
  {
    dimension: "工地管理",
    traditional: "人工巡查，效率低",
    ai: "24小时AI监控，实时掌握",
    detail: "传统方式需要项目经理每天跑多个工地，效率低下。AI系统可以同时监控所有工地，发现问题立即预警。",
  },
  {
    dimension: "人员管理",
    traditional: "手动考勤，易出错",
    ai: "AI识别，自动考勤",
    detail: "传统考勤需要工人手动打卡，容易出现代打、漏打等问题。AI识别自动记录，准确率99%以上。",
  },
  {
    dimension: "工期管理",
    traditional: "凭经验估算，易延误",
    ai: "数据化分析，精准预测",
    detail: "传统工期管理依赖项目经理经验，容易出现延误。AI系统基于历史数据智能预测，准确率提升40%。",
  },
  {
    dimension: "客户沟通",
    traditional: "被动响应，满意度低",
    ai: "主动展示，提升信任",
    detail: "传统方式客户需要主动询问才能了解进度。AI系统主动推送进度，客户可随时查看，满意度提升25%。",
  },
  {
    dimension: "营销获客",
    traditional: "依赖广告，成本高",
    ai: "口碑裂变，成本降低",
    detail: "传统获客主要依赖广告投放，成本高。AI系统通过小程序展示工地，客户主动分享，获客成本降低60%。",
  },
  {
    dimension: "数据分析",
    traditional: "凭感觉决策",
    ai: "数据驱动决策",
    detail: "传统管理依赖经验判断，容易出现偏差。AI系统提供全方位数据分析，让决策更科学、更准确。",
  },
]

export function ComparisonTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

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
            传统 vs 智能对比
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-4 font-semibold">对比维度</th>
                      <th className="text-left p-4 font-semibold text-red-600">传统方式</th>
                      <th className="text-left p-4 font-semibold text-brand-blue">一起装AI</th>
                      <th className="w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((item, index) => (
                      <>
                        <tr
                          key={item.dimension}
                          className="border-b hover:bg-gray-50 transition-colors cursor-pointer"
                          onClick={() =>
                            setExpandedRow(expandedRow === index ? null : index)
                          }
                        >
                          <td className="p-4 font-medium">{item.dimension}</td>
                          <td className="p-4 text-gray-600">{item.traditional}</td>
                          <td className="p-4 text-gray-900 font-medium">{item.ai}</td>
                          <td className="p-4">
                            {expandedRow === index ? (
                              <ChevronUp className="h-5 w-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </td>
                        </tr>
                        <AnimatePresence>
                          {expandedRow === index && (
                            <motion.tr
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <td colSpan={4} className="p-4 bg-gray-50">
                                <p className="text-gray-700">{item.detail}</p>
                              </td>
                            </motion.tr>
                          )}
                        </AnimatePresence>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

