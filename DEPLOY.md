# Vercel 部署指南

## 方式一：使用 Vercel CLI（推荐）

### 1. 安装并登录 Vercel

```bash
# 使用 npx 运行，无需全局安装
npx vercel login
```

### 2. 部署到 Vercel

```bash
# 在项目根目录执行
npx vercel

# 如果是生产环境部署
npx vercel --prod
```

按照提示操作：
- 是否要部署到现有项目？选择 `N`（首次部署）
- 项目名称：可以自定义或直接回车使用默认名称
- 目录：直接回车使用当前目录
- 是否覆盖设置：选择 `N`

### 3. 配置环境变量（如需要）

如果项目需要环境变量，可以在 Vercel 控制台设置：
1. 访问 https://vercel.com/dashboard
2. 选择你的项目
3. 进入 Settings > Environment Variables
4. 添加变量：
   - `GA_MEASUREMENT_ID`（Google Analytics ID）
   - `NEXT_PUBLIC_API_URL`（API地址）

## 方式二：通过 GitHub 集成（推荐用于持续部署）

### 1. 创建 GitHub 仓库

```bash
# 在 GitHub 上创建一个新仓库，然后执行：
git remote add origin https://github.com/你的用户名/yiqizhuang-website.git
git branch -M main
git push -u origin main
```

### 2. 在 Vercel 中导入项目

1. 访问 https://vercel.com/new
2. 点击 "Import Git Repository"
3. 选择你的 GitHub 仓库
4. 配置项目：
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（默认）
   - Output Directory: `.next`（默认）
   - Install Command: `npm install`（默认）

### 3. 部署

点击 "Deploy"，Vercel 会自动：
- 安装依赖
- 构建项目
- 部署到生产环境

### 4. 配置自定义域名（可选）

1. 在 Vercel 项目设置中
2. 进入 Domains
3. 添加你的域名
4. 按照提示配置 DNS

## 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 所有页面路由正常
- [ ] 图片和静态资源加载正常
- [ ] 表单提交功能正常（需要配置后端API）
- [ ] Google Analytics 配置正确（如使用）
- [ ] SEO meta 标签正确显示

## 常见问题

### 构建失败
- 检查 `package.json` 中的依赖是否正确
- 确保 Node.js 版本 >= 18
- 查看 Vercel 构建日志中的错误信息

### 环境变量未生效
- 确保环境变量名称以 `NEXT_PUBLIC_` 开头（客户端变量）
- 重新部署项目使环境变量生效

### 图片加载失败
- 检查 `next.config.js` 中的图片域名配置
- 确保图片路径正确

## 持续部署

使用 GitHub 集成后，每次推送到 main 分支都会自动触发部署：
- Push 到 main → 自动部署到生产环境
- Push 到其他分支 → 创建预览部署

