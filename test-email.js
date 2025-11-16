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

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: ['mingjie.he@timontech.cn'],
        subject: '【测试】一起装邮件发送测试',
        html: `
          <h2>测试邮件</h2>
          <p>这是一封测试邮件，用于验证邮件发送功能是否正常。</p>
          <p>发送时间：${new Date().toLocaleString('zh-CN')}</p>
        `,
        text: '这是一封测试邮件',
      }),
    })

    const responseText = await response.text()
    console.log(`状态码: ${response.status}`)
    console.log(`响应: ${responseText}\n`)

    if (response.ok) {
      const data = JSON.parse(responseText)
      console.log('✅ 邮件发送成功！')
      console.log(`邮件 ID: ${data.id}`)
      console.log('\n请检查邮箱：mingjie.he@timontech.cn')
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

