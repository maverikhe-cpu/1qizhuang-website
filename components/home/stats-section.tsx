"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface Stat {
  label: string
  value: string
  suffix: string
}

const stats: Stat[] = [
  { label: "服务装企", value: "500", suffix: "+家" },
  { label: "管理工地", value: "10", suffix: "万+个" },
  { label: "客户满意度", value: "98", suffix: "%" },
  { label: "平均提效", value: "40", suffix: "%" },
]

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const numValue = parseFloat(value.replace(/[^0-9.]/g, ""))
    const isDecimal = value.includes(".")
    const duration = 2000
    const steps = 60
    const increment = numValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(
          isDecimal ? current.toFixed(1) : Math.floor(current).toString()
        )
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="font-mono text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
      {displayValue}
      <span className="text-brand-orange">{suffix}</span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            数据亮点
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

