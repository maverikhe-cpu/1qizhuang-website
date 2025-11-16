"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Calendar } from "lucide-react"

const processSteps = [
  { icon: Users, title: "无感识别签到", description: "AI自动识别工人，无需手动打卡" },
  { icon: Calendar, title: "智能统筹派工", description: "根据技能和位置自动分配任务" },
  { icon: CheckCircle, title: "线上验收", description: "客户远程验收，节省时间" },
  { icon: Clock, title: "每日更新", description: "自动更新进度，实时同步" },
]

const comparison = [
  {
    aspect: "考勤方式",
    traditional: "手动打卡，容易代打",
    ai: "AI识别，自动考勤",
    benefit: "节省30%时间",
  },
  {
    aspect: "派工方式",
    traditional: "人工分配，凭经验",
    ai: "智能匹配，优化路径",
    benefit: "效率提升40%",
  },
  {
    aspect: "验收方式",
    traditional: "现场验收，耗时耗力",
    ai: "远程验收，随时查看",
    benefit: "客户满意度+25%",
  },
]

export function ScheduleManagementSection() {
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
            工期管理
          </h2>
          <p className="text-gray-600 text-lg">
            验收从工期堵点变为营销亮点
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-brand-blue z-0" />
                  )}
                  <Card className="relative z-10 text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex p-4 bg-brand-blue/10 rounded-full mb-4">
                        <Icon className="h-8 w-8 text-brand-blue" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">对比维度</th>
                      <th className="text-left p-4 font-semibold text-red-600">传统方式</th>
                      <th className="text-left p-4 font-semibold text-brand-blue">一起装AI</th>
                      <th className="text-left p-4 font-semibold text-brand-orange">效果提升</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <motion.tr
                        key={item.aspect}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-4 font-medium">{item.aspect}</td>
                        <td className="p-4 text-gray-600">{item.traditional}</td>
                        <td className="p-4 text-gray-900">{item.ai}</td>
                        <td className="p-4 font-semibold text-brand-orange">
                          {item.benefit}
                        </td>
                      </motion.tr>
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

