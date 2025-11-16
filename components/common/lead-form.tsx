"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { X, Loader2, CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { submitLeadForm } from "@/lib/api"

const formSchema = z.object({
  name: z.string().min(2, "姓名至少2个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入正确的手机号"),
  company: z.string().optional(),
  email: z.string().email("请输入正确的邮箱地址").optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface LeadFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LeadForm({ open, onOpenChange }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const result = await submitLeadForm({
        ...data,
        source: "免费试用",
        timestamp: new Date().toISOString(),
      })
      
      if (result.success) {
        setSubmitted(true)
        reset()
        // 3秒后自动关闭
        setTimeout(() => {
          setSubmitted(false)
          onOpenChange(false)
        }, 3000)
      } else {
        const errorMessage = result.error || "提交失败，请稍后重试"
        console.error("Form submission failed:", errorMessage)
        alert(`提交失败：${errorMessage}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      const errorMessage = error instanceof Error ? error.message : "提交失败，请稍后重试"
      alert(`提交失败：${errorMessage}`)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">提交成功！</h3>
            <p className="text-gray-600">
              我们会尽快与您联系
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                免费试用申请
              </DialogTitle>
              <DialogDescription className="text-center">
                填写表单，我们的团队会在24小时内与您联系
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <Input
                  {...register("name")}
                  placeholder="请输入您的姓名"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  手机号 <span className="text-red-500">*</span>
                </label>
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="请输入手机号"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  公司名称
                </label>
                <Input
                  {...register("company")}
                  placeholder="请输入公司名称（选填）"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  邮箱
                </label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="请输入邮箱（选填）"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  留言
                </label>
                <textarea
                  {...register("message")}
                  placeholder="请描述您的需求（选填）"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                variant="brand-orange"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    提交中...
                  </>
                ) : (
                  "立即提交"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

