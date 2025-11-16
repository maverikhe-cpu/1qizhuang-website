"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/site.config"

export function ContactService() {
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
            联系服务
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">电话咨询</h3>
              <p className="text-gray-600 mb-4">{siteConfig.contact.phone}</p>
              <Button variant="outline" size="sm">
                立即拨打
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">邮件联系</h3>
              <p className="text-gray-600 mb-4">{siteConfig.contact.email}</p>
              <Button variant="outline" size="sm">
                发送邮件
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 bg-orange-100 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-lg mb-2">在线客服</h3>
              <p className="text-gray-600 mb-4">7×12小时在线</p>
              <Button variant="brand-orange" size="sm">
                立即咨询
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

