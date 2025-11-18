# 邮件发送配置指南

## 功能说明

当用户点击"免费试用"按钮时，会弹出留资表单。提交后，表单信息会自动发送到 `info@timontech.cn`。

## 配置方式

### 方式一：使用 Resend（推荐）

1. **注册 Resend 账户**
   - 访问：https://resend.com
   - 注册并登录

2. **获取 API Key**
   - 进入 Dashboard > API Keys
   - 点击 "Create API Key"
   - 复制生成的 API Key

3. **验证域名（可选，推荐）**
   - 在 Resend 中添加你的域名
   - 按照提示配置 DNS 记录
   - 验证通过后可以使用自定义发件人邮箱

4. **配置环境变量**
   
   在 Vercel/Zeabur 项目设置中添加：
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   ```
   
   或者使用默认发件人：
   ```
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

### 方式二：使用其他邮件服务

如果需要使用其他邮件服务（如 SendGrid、Mailgun、SMTP），可以修改 `app/api/send-email/route.ts` 文件。

#### SendGrid 示例：

```typescript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

await sgMail.send({
  to: to,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: subject,
  text: emailContent,
  html: htmlContent,
})
```

#### SMTP 示例（使用 nodemailer）：

```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: to,
  subject: subject,
  text: emailContent,
  html: htmlContent,
})
```

## 测试

### 本地测试

1. 创建 `.env.local` 文件：
   ```
   RESEND_API_KEY=your_api_key
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   ```

2. 运行开发服务器：
   ```bash
   npm run dev
   ```

3. 点击"免费试用"按钮，填写表单并提交

4. 检查邮箱 `info@timontech.cn` 是否收到邮件

### 生产环境测试

部署后，在网站上点击"免费试用"按钮测试。

## 邮件格式

邮件会包含以下信息：
- 姓名（必填）
- 手机号（必填）
- 公司名称（选填）
- 邮箱（选填）
- 留言（选填）
- 来源（自动：免费试用/底部表单）
- 提交时间（自动）

## 故障排查

### 邮件未收到

1. 检查环境变量是否正确配置
2. 检查 Resend Dashboard 中的发送日志
3. 检查垃圾邮件文件夹
4. 确认收件人邮箱地址正确：`info@timontech.cn`

### API 错误

1. 检查 API Key 是否有效
2. 检查发件人邮箱是否已验证（Resend）
3. 查看服务器日志获取详细错误信息

## 安全建议

1. **不要将 API Key 提交到代码仓库**
2. **使用环境变量存储敏感信息**
3. **在生产环境中启用 HTTPS**
4. **考虑添加 rate limiting 防止滥用**

## 相关文件

- `components/common/lead-form.tsx` - 留资表单组件
- `app/api/send-email/route.ts` - 邮件发送 API
- `lib/api.ts` - API 调用函数

