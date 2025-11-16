"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitLeadForm } from "@/lib/api"
import { trackCTA } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, "姓名至少2个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入正确的手机号"),
  company: z.string().optional(),
  email: z.string().email("请输入正确的邮箱地址").optional(),
})

type FormData = z.infer<typeof formSchema>

export function CTASection() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const result = await submitLeadForm({
        ...data,
        source: "底部表单",
        timestamp: new Date().toISOString(),
      })
      if (result.success) {
        setSubmitted(true)
        trackCTA("submit", "bottom-form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  if (submitted) {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            感谢您的提交！
          </h2>
          <p className="text-gray-300 text-lg">
            我们的团队会在24小时内与您联系
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              现在就开始智能化转型
            </h2>
            <p className="text-gray-300 text-lg">
              填写表单，立即预约演示
            </p>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">免费试用申请</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    {...register("name")}
                    placeholder="姓名"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    data-cta="primary"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("phone")}
                    placeholder="手机号"
                    type="tel"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    data-cta="primary"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("company")}
                    placeholder="公司名称（选填）"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="邮箱（选填）"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="brand-orange"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  data-cta="primary"
                >
                  {isSubmitting ? "提交中..." : "立即提交"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

