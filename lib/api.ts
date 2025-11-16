// API 接口层，方便后续对接真实后端

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// 模拟 API 调用
export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    // 开发环境使用 mock 数据
    if (process.env.NODE_ENV === 'development') {
      const response = await fetch(`/api/${endpoint}`, options)
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`)
      }
      const data = await response.json()
      return { success: true, data }
    }
    
    // 生产环境调用真实 API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, options)
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// 表单提交
export async function submitForm(formData: {
  name: string
  phone: string
  company?: string
  message?: string
}): Promise<ApiResponse<{ id: string }>> {
  // 模拟提交
  console.log('Form submitted:', formData)
  
  // 触发转化追踪
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
    })
  }
  
  // 实际应该调用真实 API
  return apiRequest('contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
}

