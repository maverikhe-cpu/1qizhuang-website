"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export function FeaturesOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-blue to-brand-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            产品功能
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            详细展示AI系统功能，让访客理解技术如何落地
          </p>
        </motion.div>

        <Tabs defaultValue="site" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white/10">
            <TabsTrigger value="site" className="data-[state=active]:bg-white data-[state=active]:text-brand-blue">
              工地管理
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-white data-[state=active]:text-brand-blue">
              工期管理
            </TabsTrigger>
            <TabsTrigger value="marketing" className="data-[state=active]:bg-white data-[state=active]:text-brand-blue">
              营销获客
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:text-brand-blue">
              数据分析
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  )
}

