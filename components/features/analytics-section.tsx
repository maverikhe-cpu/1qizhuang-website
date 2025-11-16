"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, AlertCircle } from "lucide-react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { name: "周一", 人员: 45, 问题: 12 },
  { name: "周二", 人员: 52, 问题: 8 },
  { name: "周三", 人员: 48, 问题: 15 },
  { name: "周四", 人员: 61, 问题: 6 },
  { name: "周五", 人员: 55, 问题: 10 },
  { name: "周六", 人员: 38, 问题: 5 },
  { name: "周日", 人员: 42, 问题: 7 },
]

const metrics = [
  { icon: Users, label: "人员热力图", value: "实时分析", color: "text-blue-500" },
  { icon: AlertCircle, label: "问题整改率", value: "92%", color: "text-green-500" },
  { icon: TrendingUp, label: "工期达成率", value: "88%", color: "text-orange-500" },
]

export function AnalyticsSection() {
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
            数据分析
          </h2>
          <p className="text-gray-600 text-lg">
            让管理从凭经验、靠感觉走向看数据、做决策
          </p>
        </motion.div>

        {/* Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                        <p className={`text-2xl font-bold ${metric.color}`}>
                          {metric.value}
                        </p>
                      </div>
                      <Icon className={`h-12 w-12 ${metric.color} opacity-20`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="h-6 w-6 text-brand-blue" />
                <h3 className="text-2xl font-bold">数据大屏预览</h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="人员" fill="#0066FF" />
                    <Bar dataKey="问题" fill="#FF6B35" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

