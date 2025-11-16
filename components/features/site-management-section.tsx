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
      "移动端APP支持，随时随地掌握工地动态",
      "高清画质，支持4K视频录制",
      "云端存储，数据安全可靠",
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
      "支持多人同时识别，识别准确率99.8%",
      "自动统计出勤时长，生成考勤报表",
      "黑名单管理，异常人员自动报警",
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
      "危险行为识别（未戴安全帽、违规操作等）",
      "材料堆放规范检测，提升工地形象",
      "多维度安全评分，量化管理标准",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
]

const additionalFeatures = [
  {
    title: "智能巡检",
    description: "AI自动巡检工地，24小时不间断监控，发现问题立即推送",
    benefit: "巡检效率提升300%",
  },
  {
    title: "材料管理",
    description: "自动识别材料进出，实时库存统计，防止材料丢失",
    benefit: "材料损耗降低25%",
  },
  {
    title: "设备监控",
    description: "实时监控施工设备状态，预防性维护提醒",
    benefit: "设备故障率降低40%",
  },
]

export function SiteManagementSection() {
  return (
    <section id="section-site" className="py-20 bg-white scroll-mt-20">
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            通过AI视觉技术，实现工地管理的数字化、智能化，让&ldquo;看不见、管不了、不管了&rdquo;成为历史
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">更多智能功能</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-brand-blue">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold">
                      {feature.benefit}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">核心价值</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <div className="text-white/90">识别准确率</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/90">全天候监控</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30%</div>
                <div className="text-white/90">管理成本降低</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

