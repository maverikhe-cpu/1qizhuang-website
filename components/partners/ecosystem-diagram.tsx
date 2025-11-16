"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Layers } from "lucide-react"

const layers = [
  { name: "硬件层", items: ["海康威视摄像头", "传感器设备"] },
  { name: "网络层", items: ["中国电信网络", "5G连接"] },
  { name: "AI算法层", items: ["人脸识别", "行为分析", "安全预警"] },
  { name: "应用层", items: ["一起装平台", "小程序", "移动端"] },
  { name: "流量层", items: ["支付宝", "微信", "其他渠道"] },
]

export function EcosystemDiagram() {
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
          <div className="inline-flex items-center gap-2 mb-4">
            <Layers className="h-8 w-8 text-brand-blue" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              生态整合图
            </h2>
          </div>
          <p className="text-gray-600">
            "一起装"如何连接各层生态
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-32 font-semibold text-gray-900">
                        {layer.name}
                      </div>
                      <div className="flex-1 flex flex-wrap gap-2">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < layers.length - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="h-8 w-0.5 bg-brand-blue" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

