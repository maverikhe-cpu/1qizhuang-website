#!/bin/bash

echo "🚀 开始部署到 Vercel..."
echo ""

# 检查是否已登录
echo "📋 检查 Vercel 登录状态..."
npx vercel whoami > /dev/null 2>&1

if [ $? -ne 0 ]; then
    echo "⚠️  未登录 Vercel，请先登录..."
    echo "   执行: npx vercel login"
    echo ""
    npx vercel login
fi

echo ""
echo "📦 开始部署..."
echo ""

# 部署到预览环境
echo "部署到预览环境..."
npx vercel

echo ""
echo "✅ 预览部署完成！"
echo ""
echo "如果要部署到生产环境，请执行："
echo "   npx vercel --prod"
echo ""

