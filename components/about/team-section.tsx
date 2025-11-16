"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Briefcase } from "lucide-react"

const teams = [
  {
    icon: Code,
    title: "技术团队",
    description: "清华复旦背景，微软/耐克经验",
    members: "30+",
  },
  {
    icon: Users,
    title: "行业专家",
    description: "深耕装修数十年",
    members: "15+",
  },
  {
    icon: Briefcase,
    title: "管理团队",
    description: "百安居等500强背景",
    members: "10+",
  },
]

export function TeamSection() {
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
            核心团队
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, index) => {
            const Icon = team.icon
            return (
              <motion.div
                key={team.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-flex p-4 bg-brand-blue/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-brand-blue" />
                    </div>
                    <CardTitle className="text-xl">{team.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{team.description}</p>
                    <p className="text-2xl font-bold text-brand-blue">{team.members}人</p>
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

