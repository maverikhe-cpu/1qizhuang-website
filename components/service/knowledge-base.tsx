"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const faqs = [
  {
    question: "摄像头没电怎么办？",
    answer: "我们的摄像头支持多种供电方式，包括电源线供电和电池供电。系统会自动监控电量，低电量时会发送预警通知。",
  },
  {
    question: "AI识别准确率如何？",
    answer: "我们的AI识别准确率达到99%以上，经过大量数据训练和优化，能够准确识别人脸、行为等。",
  },
  {
    question: "数据安全如何保障？",
    answer: "我们采用银行级别的数据加密技术，所有数据存储在阿里云，符合国家数据安全标准。",
  },
  {
    question: "系统部署需要多长时间？",
    answer: "标准部署时间为7天，包括硬件安装、系统配置和基础培训。",
  },
  {
    question: "支持哪些设备？",
    answer: "支持PC、手机、平板等多种设备，支持iOS和Android系统。",
  },
  {
    question: "如何收费？",
    answer: "我们提供灵活的收费方案，包括按年付费和按月付费，具体价格请联系我们的销售团队。",
  },
]

export function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
            知识库
          </h2>
          <p className="text-gray-600">常见问题解答</p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="搜索问题..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card>
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    <span className="text-left font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform ${
                        expandedIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

