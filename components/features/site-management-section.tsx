"use client"

import { motion } from "framer-motion"
import { Camera, UserCheck, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const features = [
  {
    icon: Camera,
    title: "远程查看",
    subtitle: "24小时在线监工",
    highlights: [
      "实时视频监控，随时随地查看工地",
      "多路视频同时查看，支持分屏显示",
      "历史回放功能，追溯任意时刻",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    icon: UserCheck,
    title: "AI识人",
    subtitle: "让每一个进入工地的人都有迹可循",
    highlights: [
      "人脸识别自动考勤，无需手动打卡",
      "陌生人预警，保障工地安全",
      "人员轨迹记录，完整追溯",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    icon: Shield,
    title: "整洁与安全预警",
    subtitle: "从'人盯'到'智管'",
    highlights: [
      "AI识别安全隐患，及时预警",
      "工地整洁度评分，提升形象",
      "自动生成整改报告",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
]

export function SiteManagementSection() {
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
            工地管理
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-brand-blue/10 rounded-lg">
                        <Icon className="h-6 w-6 text-brand-blue" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-brand-blue mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

