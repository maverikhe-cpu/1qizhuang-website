// 测试邮件发送功能的脚本
// 使用方法：node test-email.js

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_WCLSfdXu_5r1SKoAWE7LW9tpeiZfAGBCJ'
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

async function testEmail() {
  console.log('🧪 测试邮件发送功能...\n')
  console.log('配置信息：')
  console.log(`- API Key: ${RESEND_API_KEY ? RESEND_API_KEY.substring(0, 10) + '...' : '未配置'}`)
  console.log(`- From Email: ${RESEND_FROM_EMAIL}\n`)

  if (!RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY 未配置！')
    return
  }

  // Resend 测试模式：使用 onboarding@resend.dev 时，只能发送到注册邮箱
  const isTestMode = RESEND_FROM_EMAIL === 'onboarding@resend.dev'
  const actualRecipient = 'info@timontech.cn'
  const sendTo = isTestMode ? 'maverik.he@gmail.com' : actualRecipient

  if (isTestMode) {
    console.log('⚠️  检测到测试模式')
    console.log(`- 实际收件人：${actualRecipient}`)
    console.log(`- 发送到：${sendTo}（注册邮箱）`)
    console.log('- 邮件中会包含实际收件人信息\n')
  }

  try {
    const emailContent = isTestMode
      ? `测试邮件\n\n实际收件人：${actualRecipient}\n请转发到此邮箱。`
      : '这是一封测试邮件'

    const htmlContent = isTestMode
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 10px; margin-bottom: 20px; border-radius: 4px;">
            <strong>⚠️ 测试模式：</strong>实际收件人：${actualRecipient}<br>
            请将此邮件转发到实际收件人邮箱。
          </div>
          <h2>测试邮件</h2>
          <p>这是一封测试邮件，用于验证邮件发送功能是否正常。</p>
          <p>发送时间：${new Date().toLocaleString('zh-CN')}</p>
        </div>
      `
      : `
        <h2>测试邮件</h2>
        <p>这是一封测试邮件，用于验证邮件发送功能是否正常。</p>
        <p>发送时间：${new Date().toLocaleString('zh-CN')}</p>
      `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [sendTo],
        subject: '【测试】一起装邮件发送测试',
        html: htmlContent,
        text: emailContent,
      }),
    })

    const responseText = await response.text()
    console.log(`状态码: ${response.status}`)
    console.log(`响应: ${responseText}\n`)

    if (response.ok) {
      const data = JSON.parse(responseText)
      console.log('✅ 邮件发送成功！')
      console.log(`邮件 ID: ${data.id}`)
      if (isTestMode) {
        console.log(`\n📧 邮件已发送到：${sendTo}`)
        console.log(`📋 请检查邮箱并转发到：${actualRecipient}`)
      } else {
        console.log(`\n📧 请检查邮箱：${actualRecipient}`)
      }
    } else {
      const errorData = JSON.parse(responseText)
      console.error('❌ 邮件发送失败！')
      console.error('错误信息:', JSON.stringify(errorData, null, 2))
    }
  } catch (error) {
    console.error('❌ 请求失败：', error.message)
  }
}

testEmail()

