# 一起装AI智能交付官网

专业、现代、高转化率的企业官网，展示AI智能交付系统如何帮助装企实现"好管理、好口碑、好生意"。

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **UI框架**: React 18
- **样式**: Tailwind CSS 3.4 + Shadcn/ui
- **动画**: Framer Motion
- **图表**: Recharts
- **表单**: React Hook Form + Zod
- **类型**: TypeScript

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
yiqizhuang-website/
├── app/                    # Next.js App Router页面
│   ├── page.tsx           # 首页
│   ├── features/          # 产品功能页
│   ├── solutions/         # 解决方案页
│   ├── cases/             # 客户案例页
│   ├── partners/          # 合作伙伴页
│   ├── about/             # 关于我们页
│   ├── service/           # 客户成功服务页
│   └── layout.tsx         # 全局布局
├── components/            # React组件
│   ├── ui/               # 基础UI组件
│   ├── layout/           # 布局组件（导航栏、页脚）
│   ├── home/             # 首页组件
│   ├── features/         # 产品功能组件
│   ├── solutions/        # 解决方案组件
│   ├── cases/            # 客户案例组件
│   ├── partners/         # 合作伙伴组件
│   ├── about/            # 关于我们组件
│   ├── service/          # 客户成功服务组件
│   └── common/           # 通用组件
├── lib/                  # 工具函数和API
├── config/               # 配置文件
└── public/               # 静态资源
```

## 页面说明

### 1. 首页 (/)
- Hero区域：全屏视频背景，核心价值主张
- 信任背书：合作伙伴logo展示
- 三大痛点：可视化展示传统装修管理痛点
- 核心价值主张：AI公式展示
- 数据亮点：动态数字滚动
- 支付宝合作专区
- 底部CTA表单

### 2. 产品功能页 (/features)
- 工地管理：远程查看、AI识人、安全预警
- 工期管理：智能派工、线上验收
- 营销获客：围观装修小程序
- 数据分析：数据大屏展示

### 3. 解决方案页 (/solutions)
- 客户分层：成长型、规模型、品牌型
- 传统vs智能对比表
- ROI计算器
- 实施路径

### 4. 客户案例页 (/cases)
- 案例筛选器
- 标杆案例展示
- 客户证言轮播
- 客户Logo墙

### 5. 合作伙伴页 (/partners)
- 技术基石：海康威视、萤石、中国电信、支付宝
- 生态整合图
- 支付宝合作专区

### 6. 关于我们页 (/about)
- 公司使命
- 核心团队
- 发展历程时间轴
- 企业文化

### 7. 客户成功服务页 (/service)
- 服务架构
- 服务流程
- 知识库FAQ
- 联系服务

## 环境变量

创建 `.env.local` 文件：

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
GA_MEASUREMENT_ID=your-google-analytics-id
```

## 部署

### 方式一：使用 Vercel CLI（快速部署）

1. **登录 Vercel**（首次使用需要）：
   ```bash
   npx vercel login
   ```
   这会打开浏览器让你登录 Vercel 账户

2. **部署到预览环境**：
   ```bash
   npx vercel
   ```
   按照提示操作，首次部署会询问项目配置

3. **部署到生产环境**：
   ```bash
   npx vercel --prod
   ```

### 方式二：通过 GitHub 集成（推荐用于持续部署）

1. **创建 GitHub 仓库并推送代码**：
   ```bash
   git remote add origin https://github.com/你的用户名/yiqizhuang-website.git
   git branch -M main
   git push -u origin main
   ```

2. **在 Vercel 中导入项目**：
   - 访问 https://vercel.com/new
   - 点击 "Import Git Repository"
   - 选择你的 GitHub 仓库
   - Vercel 会自动检测 Next.js 配置

3. **自动部署**：
   - 点击 "Deploy" 后，Vercel 会自动构建和部署
   - 之后每次推送到 main 分支都会自动部署

### 配置环境变量

在 Vercel 项目设置中添加环境变量：
- `GA_MEASUREMENT_ID` - Google Analytics ID（可选）
- `NEXT_PUBLIC_API_URL` - API 地址（如需要）

### 自定义域名

在 Vercel 项目设置 > Domains 中添加自定义域名，按照提示配置 DNS。

详细部署说明请查看 [DEPLOY.md](./DEPLOY.md)

## SEO配置

- 每个页面都有独立的meta title/description
- 自动生成sitemap.xml
- 配置robots.txt
- 图片使用WebP格式，支持懒加载

## 转化追踪

所有CTA按钮都添加了事件追踪：
- `data-cta="primary"` - 主要CTA
- `data-cta="secondary"` - 次要CTA

表单提交成功会触发Google Analytics转化事件。

## 开发规范

- 使用TypeScript进行类型检查
- 组件使用函数式组件和Hooks
- 样式使用Tailwind CSS
- 动画使用Framer Motion
- 遵循Next.js 14 App Router最佳实践

## 许可证

ISC

