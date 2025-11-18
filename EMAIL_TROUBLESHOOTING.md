# 邮件发送问题排查指南

## 常见问题

### 1. 环境变量未配置（最常见）

**症状：** 邮件发送失败，控制台显示 "RESEND_API_KEY not configured"

**解决方法：**
1. 访问 Vercel Dashboard：https://vercel.com/dashboard
2. 选择项目：yiqizhuang-website
3. 进入 Settings > Environment Variables
4. 添加：
   - `RESEND_API_KEY` = `re_WCLSfdXu_5r1SKoAWE7LW9tpeiZfAGBCJ`
   - `RESEND_FROM_EMAIL` = `onboarding@resend.dev`
5. 选择环境：Production, Preview, Development（全选）
6. 保存后重新部署

### 2. Resend API Key 无效

**症状：** 返回 401 或 403 错误

**解决方法：**
1. 访问 https://resend.com/api-keys
2. 检查 API Key 是否有效
3. 如果无效，创建新的 API Key
4. 更新环境变量

### 3. 发件人邮箱未验证

**症状：** 返回域名验证错误

**解决方法：**
- 使用 `onboarding@resend.dev`（无需验证，但有发送限制）
- 或验证自定义域名：
  1. 在 Resend Dashboard 添加域名
  2. 配置 DNS 记录
  3. 验证通过后使用自定义邮箱

### 4. 查看错误日志

**Vercel：**
```bash
npx vercel logs --follow
```

**或访问：**
https://vercel.com/dashboard > 项目 > Deployments > 选择部署 > Logs

**本地测试：**
```bash
npm run dev
# 打开浏览器控制台查看错误信息
```

## 测试步骤

### 1. 检查环境变量

在 API 路由中添加日志：
```typescript
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
```

### 2. 测试 API 端点

使用 curl 测试：
```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "测试",
    "phone": "13800138000",
    "to": "info@timontech.cn",
    "subject": "测试邮件"
  }'
```

### 3. 检查 Resend Dashboard

访问 https://resend.com/emails 查看发送日志和错误信息

## 快速修复

如果邮件发送失败，可以临时使用以下方案：

### 方案 1：使用 Resend Webhook（推荐）

配置 Resend Webhook，将邮件发送到指定邮箱

### 方案 2：使用其他邮件服务

修改 `app/api/send-email/route.ts`，使用：
- SendGrid
- Mailgun
- SMTP（Nodemailer）

### 方案 3：使用表单服务

使用 Formspree、EmailJS 等第三方表单服务

## 联系支持

如果问题仍未解决：
1. 检查 Vercel/Zeabur 日志
2. 检查 Resend Dashboard 日志
3. 查看浏览器控制台错误信息
4. 联系技术支持

