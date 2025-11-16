"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "海康威视", logo: "/images/partners/hikvision.png" },
  { name: "萤石", logo: "/images/partners/ezviz.png" },
  { name: "中国电信", logo: "/images/partners/chinatelecom.png" },
  { name: "支付宝", logo: "/images/partners/alipay.png" },
  { name: "阿里云", logo: "/images/partners/aliyun.png" },
  { name: "百度", logo: "/images/partners/baidu.png" },
]

export function TrustSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            合作伙伴
          </p>
        </motion.div>
        <div className="flex items-center justify-center overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-32 h-16 flex items-center justify-center bg-white rounded-lg px-4 shadow-sm">
                  <span className="text-gray-400 text-sm font-medium">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

