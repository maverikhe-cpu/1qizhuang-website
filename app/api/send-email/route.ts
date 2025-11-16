import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, company, email, message, source, timestamp, to, subject } = body

    // 验证必填字段
    if (!name || !phone || !to) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 构建邮件内容
    const emailContent = `
新的免费试用申请

姓名：${name}
手机号：${phone}
${company ? `公司名称：${company}` : ''}
${email ? `邮箱：${email}` : ''}
${source ? `来源：${source}` : ''}
${timestamp ? `提交时间：${new Date(timestamp).toLocaleString('zh-CN')}` : ''}
${message ? `留言：${message}` : ''}
    `.trim()

    // 使用 Resend API 发送邮件（推荐）
    // 如果没有配置 Resend，可以使用其他邮件服务
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@yiqizhuang.com'

    if (RESEND_API_KEY) {
      // 使用 Resend 发送邮件
      console.log('Attempting to send email via Resend...', {
        from: RESEND_FROM_EMAIL,
        to,
        hasApiKey: !!RESEND_API_KEY,
      })

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: RESEND_FROM_EMAIL,
          to: [to],
          subject: subject || `【一起装】免费试用申请 - ${name}`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0066FF;">新的免费试用申请</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>姓名：</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>手机号：</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>公司名称：</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td>
                </tr>
                ` : ''}
                ${email ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>邮箱：</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
                </tr>
                ` : ''}
                ${source ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>来源：</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${source}</td>
                </tr>
                ` : ''}
                ${timestamp ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>提交时间：</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${new Date(timestamp).toLocaleString('zh-CN')}</td>
                </tr>
                ` : ''}
                ${message ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>留言：</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${message}</td>
                </tr>
                ` : ''}
              </table>
            </div>
          `,
        }),
      })

      const responseText = await resendResponse.text()
      console.log('Resend API response status:', resendResponse.status)
      console.log('Resend API response:', responseText)

      if (!resendResponse.ok) {
        let errorData
        try {
          errorData = JSON.parse(responseText)
        } catch {
          errorData = { message: responseText }
        }
        console.error('Resend API error:', errorData)
        throw new Error(`Resend API error: ${JSON.stringify(errorData)}`)
      }

      const resendData = JSON.parse(responseText)
      console.log('Email sent successfully:', resendData.id)
      return NextResponse.json({ success: true, id: resendData.id })
    } else {
      // 如果没有配置 Resend API Key
      console.error('RESEND_API_KEY not configured')
      console.log('Email would be sent:', {
        to,
        subject: subject || `【一起装】免费试用申请 - ${name}`,
        content: emailContent,
      })

      // 返回错误，提示需要配置
      return NextResponse.json(
        { 
          success: false,
          error: 'RESEND_API_KEY not configured. Please set RESEND_API_KEY environment variable.',
          message: '邮件服务未配置，请联系管理员',
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Send email error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    )
  }
}

