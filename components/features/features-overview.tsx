"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useEffect } from "react"

export function FeaturesOverview() {
  const handleTabChange = (value: string) => {
    // 滚动到对应的section
    const sectionId = `section-${value}`
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // 导航栏高度
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // 处理URL参数，如果有tab参数则滚动到对应位置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const tab = params.get('tab')
      if (tab) {
        setTimeout(() => {
          handleTabChange(tab)
        }, 100)
      }
    }
  }, [])

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
          <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
            详细展示AI系统功能，让访客理解技术如何落地
          </p>
        </motion.div>

        <Tabs defaultValue="site" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-1.5 gap-1">
            <TabsTrigger 
              value="site" 
              className="data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md data-[state=inactive]:text-white/80 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10 font-semibold transition-all duration-200"
            >
              工地管理
            </TabsTrigger>
            <TabsTrigger 
              value="schedule" 
              className="data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md data-[state=inactive]:text-white/80 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10 font-semibold transition-all duration-200"
            >
              工期管理
            </TabsTrigger>
            <TabsTrigger 
              value="marketing" 
              className="data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md data-[state=inactive]:text-white/80 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10 font-semibold transition-all duration-200"
            >
              营销获客
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md data-[state=inactive]:text-white/80 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10 font-semibold transition-all duration-200"
            >
              数据分析
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  )
}

