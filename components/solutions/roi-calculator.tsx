"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export function ROICalculator() {
  const [sites, setSites] = useState("")
  const [duration, setDuration] = useState("")
  const [managers, setManagers] = useState("")

  const calculateROI = () => {
    const sitesNum = parseFloat(sites) || 0
    const durationNum = parseFloat(duration) || 0
    const managersNum = parseFloat(managers) || 0

    if (sitesNum === 0 || durationNum === 0 || managersNum === 0) {
      return null
    }

    // 假设计算逻辑
    const timeSaved = sitesNum * durationNum * 0.3 // 节省30%时间
    const costSaved = managersNum * 5000 * 12 * 0.4 // 节省40%管理成本
    const efficiencyGain = (sitesNum / managersNum) * 0.4 // 效率提升40%

    return {
      timeSaved: Math.round(timeSaved),
      costSaved: Math.round(costSaved),
      efficiencyGain: Math.round(efficiencyGain * 100) / 100,
    }
  }

  const roi = calculateROI()

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
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="h-8 w-8 text-brand-blue" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              ROI计算器
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            输入您的数据，计算可节省的成本和提升的效率
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>输入数据</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    年均工地数量
                  </label>
                  <Input
                    type="number"
                    placeholder="例如：100"
                    value={sites}
                    onChange={(e) => setSites(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    平均工期（天）
                  </label>
                  <Input
                    type="number"
                    placeholder="例如：60"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    管理人数
                  </label>
                  <Input
                    type="number"
                    placeholder="例如：10"
                    value={managers}
                    onChange={(e) => setManagers(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>计算结果</CardTitle>
              </CardHeader>
              <CardContent>
                {roi ? (
                  <div className="space-y-6">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">节省时间</p>
                      <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {roi.timeSaved} 小时/年
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">节省成本</p>
                      <p className="text-3xl font-bold text-brand-blue">
                        ¥{roi.costSaved.toLocaleString()}/年
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">效率提升</p>
                      <p className="text-3xl font-bold text-brand-orange">
                        {roi.efficiencyGain} 倍
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-400 dark:text-gray-500">
                    请输入数据查看计算结果
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

