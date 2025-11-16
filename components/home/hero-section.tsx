"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { trackCTA } from "@/lib/utils"
import { motion } from "framer-motion"
import { LeadForm } from "@/components/common/lead-form"

export function HeroSection() {
  const [leadFormOpen, setLeadFormOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        {/* 这里可以替换为真实视频 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            告别装修管理的
            <br />
            <span className="text-brand-orange drop-shadow-md">&apos;看不见、管不了、不管了&apos;</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
            用AI智能交付，撬动5万亿家装新市场
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="brand-orange"
              size="lg"
              className="text-lg px-8 py-6 h-auto min-w-[200px]"
              onClick={() => {
                trackCTA("click", "hero-demo")
                setLeadFormOpen(true)
              }}
              data-cta="primary"
            >
              立即预约演示
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto min-w-[200px] bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => trackCTA("click", "hero-video")}
              data-cta="secondary"
            >
              <Play className="mr-2 h-5 w-5" />
              观看3分钟介绍
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </div>
      <LeadForm open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </section>
  )
}

