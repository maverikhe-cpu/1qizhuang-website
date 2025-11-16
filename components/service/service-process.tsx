"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Settings, GraduationCap, Play, CheckCircle, RefreshCw } from "lucide-react"

const steps = [
  { icon: FileText, title: "需求对接", description: "深入了解您的业务需求" },
  { icon: Settings, title: "系统部署", description: "7天内完成系统部署" },
  { icon: GraduationCap, title: "员工培训", description: "专业培训，确保团队熟练掌握" },
  { icon: Play, title: "试运行", description: "小范围试运行，验证效果" },
  { icon: CheckCircle, title: "正式上线", description: "全面上线，开始正式使用" },
  { icon: RefreshCw, title: "持续优化", description: "持续优化，不断提升效率" },
]

export function ServiceProcess() {
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
            服务流程
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex p-4 bg-brand-blue/10 rounded-full mb-4">
                        <Icon className="h-6 w-6 text-brand-blue" />
                      </div>
                      <div className="text-sm text-brand-blue font-semibold mb-2">
                        步骤 {index + 1}
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
      </div>
    </section>
  )
}

