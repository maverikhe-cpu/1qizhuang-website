# Zeabur 部署指南

## 方式一：通过 Zeabur 控制台部署（推荐）

### 1. 准备 GitHub 仓库

如果还没有推送到 GitHub，执行以下命令：

```bash
# 创建 GitHub 仓库后，添加远程仓库
git remote add origin https://github.com/你的用户名/yiqizhuang-website.git
git branch -M main
git push -u origin main
```

### 2. 登录 Zeabur 控制台

1. 访问 [Zeabur 控制台](https://dash.zeabur.com)
2. 使用 GitHub 账户登录（推荐）

### 3. 部署项目

1. 点击 **"Add New Service"** 或 **"Deploy Service"** 按钮
2. 选择 **"Deploy Your Source Code"**
3. 在 GitHub 仓库列表中找到 `yiqizhuang-website`
4. 点击 **"Import"** 按钮
5. Zeabur 会自动检测 Next.js 项目并开始部署

### 4. 配置环境变量（必需）

在 Zeabur 项目设置中添加环境变量：

**必需的环境变量：**
- `RESEND_API_KEY` = `re_WCLSfdXu_5r1SKoAWE7LW9tpeiZfAGBCJ` - Resend API Key（邮件发送）
- `RESEND_FROM_EMAIL` = `onboarding@resend.dev` - Resend 发件人邮箱

**可选的环境变量：**
- `GA_MEASUREMENT_ID` - Google Analytics ID（可选）
- `NEXT_PUBLIC_API_URL` - API 地址（如需要）
- `NODE_ENV=production`

**配置步骤：**
1. 在项目详情页左侧菜单找到 **"Environment Variables"**
2. 点击 **"Add Variable"** 添加环境变量
3. 保存后 Zeabur 会自动重新部署

**详细说明请参考：** `ZEABUR_ENV_SETUP.md`

### 5. 配置自定义域名（可选）

1. 在项目设置中找到 **"Domains"**
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录

## 方式二：使用 Zeabur CLI（如果可用）

### 安装 Zeabur CLI

```bash
npm install -g @zeabur/cli
# 或
brew install zeabur/tap/zeabur
```

### 登录并部署

```bash
# 登录
zeabur login

# 部署
zeabur deploy
```

## 配置文件说明

项目已包含 `zbpack.json` 配置文件，Zeabur 会自动识别：

```json
{
  "build_command": "npm run build",
  "start_command": "npm start",
  "install_command": "npm install"
}
```

## 注意事项

1. **Node.js 版本**：Zeabur 会自动检测并使用合适的 Node.js 版本（推荐 18+）
2. **构建时间**：首次部署可能需要几分钟时间
3. **自动部署**：连接 GitHub 后，每次推送到 main 分支会自动触发部署
4. **环境变量**：敏感信息请通过 Zeabur 控制台设置，不要提交到代码仓库

## 故障排查

### 构建失败
- 检查 `package.json` 中的依赖是否正确
- 查看 Zeabur 构建日志中的错误信息
- 确保 Node.js 版本兼容

### 部署后无法访问
- 检查环境变量是否正确配置
- 确认域名 DNS 配置正确
- 查看 Zeabur 日志排查问题

## 参考文档

- [Zeabur 官方文档](https://zeabur.com/docs)
- [Next.js 部署指南](https://zeabur.com/docs/zh-CN/guides/nodejs/nextjs)

