# Zeabur 环境变量配置指南

## 问题

Zeabur 部署环境中缺少 `RESEND_API_KEY` 环境变量，导致邮件发送功能无法正常工作。

错误信息：
```
提交失败: RESEND_API_KEY not configured. Please set RESEND_API_KEY environment variable.
```

## 解决方法

### 步骤 1：访问 Zeabur Dashboard

1. 打开浏览器，访问：https://dash.zeabur.com
2. 登录你的 Zeabur 账户

### 步骤 2：找到项目

1. 在 Dashboard 中找到项目：`yiqizhuang-website`
2. 点击项目名称进入项目详情页

### 步骤 3：配置环境变量

1. 在项目详情页左侧菜单中，找到 **"Environment Variables"**（环境变量）
2. 点击进入环境变量设置页面

### 步骤 4：添加环境变量

点击 **"Add Variable"**（添加变量）按钮，添加以下两个环境变量：

#### 变量 1：RESEND_API_KEY
- **Key（键）**: `RESEND_API_KEY`
- **Value（值）**: `re_WCLSfdXu_5r1SKoAWE7LW9tpeiZfAGBCJ`
- **Description（描述）**: Resend API Key for email sending

#### 变量 2：RESEND_FROM_EMAIL
- **Key（键）**: `RESEND_FROM_EMAIL`
- **Value（值）**: `onboarding@resend.dev`
- **Description（描述）**: Resend sender email address

### 步骤 5：保存并重新部署

1. 点击 **"Save"**（保存）按钮
2. Zeabur 会自动检测到环境变量变更
3. 系统会自动触发重新部署
4. 等待部署完成（通常 1-2 分钟）

### 步骤 6：验证配置

部署完成后：

1. 访问网站：https://1qizhuang-website.zeabur.app
2. 点击"免费试用"按钮
3. 填写表单并提交
4. 检查是否成功（应该不再显示错误）

## 验证邮件功能

配置完成后，邮件发送流程：

1. 用户提交表单
2. 邮件发送到：`maverik.he@gmail.com`（注册邮箱）
3. 邮件中包含实际收件人：`mingjie.he@timontech.cn`
4. 可以手动转发或设置自动转发

## 常见问题

### Q: 环境变量保存后没有自动重新部署？

A: 可以手动触发重新部署：
1. 在项目详情页找到 "Deployments"（部署）
2. 点击 "Redeploy"（重新部署）

### Q: 如何确认环境变量已配置？

A: 在环境变量页面可以看到已添加的变量列表。

### Q: 部署后仍然报错？

A: 检查以下几点：
1. 环境变量名称是否正确（区分大小写）
2. 环境变量值是否正确（没有多余空格）
3. 是否等待部署完成
4. 清除浏览器缓存后重试

## 长期方案

为了更好的邮件发送体验，建议：

1. **验证域名**（推荐）：
   - 访问：https://resend.com/domains
   - 添加并验证你的域名
   - 更新 `RESEND_FROM_EMAIL` 为自定义邮箱（如：noreply@yourdomain.com）

2. **设置自动转发**：
   - 在 Gmail（maverik.he@gmail.com）设置自动转发
   - 转发到：mingjie.he@timontech.cn

## 联系支持

如果配置后仍有问题：
1. 检查 Zeabur 部署日志
2. 查看浏览器控制台错误信息
3. 联系技术支持

