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
  {
    aspect: "进度跟踪",
    traditional: "人工记录，容易遗漏",
    ai: "自动记录，实时更新",
    benefit: "信息准确率+50%",
  },
  {
    aspect: "问题处理",
    traditional: "被动发现，滞后处理",
    ai: "主动预警，及时处理",
    benefit: "问题响应速度+60%",
  },
]

const scheduleBenefits = [
  {
    title: "智能排期",
    description: "根据历史数据和当前进度，AI自动生成最优施工计划",
    icon: "📅",
  },
  {
    title: "进度可视化",
    description: "甘特图、时间轴等多种视图，清晰展示项目进度",
    icon: "📊",
  },
  {
    title: "风险预警",
    description: "自动识别延期风险，提前预警并给出解决方案",
    icon: "⚠️",
  },
]

export function ScheduleManagementSection() {
  return (
    <section id="section-schedule" className="py-20 bg-gray-50 scroll-mt-20">
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
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            验收从工期堵点变为营销亮点，让客户实时了解进度，提升信任度和满意度
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

        {/* Schedule Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">智能工期管理优势</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {scheduleBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
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

