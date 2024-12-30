
# 使用指南

## 环境准备

vueAdmin 基于 vue3+vite5 开发, 需要 node.js >= 18 (推荐使用最新 lts 版本)

## 项目初始化

```bash
# 创建并进入项目目录
mkdir projectName
cd projectName

# 克隆项目仓库
git clone https://github.com/NMTuan/vueAdmin.git

# 安装依赖（支持 npm/yarn/pnpm/bun）
npm install

# 启动开发服务器
npm run dev
```

启动成功后，访问 `http://localhost:5173` 即可看到 vueAdmin 的管理界面。

## 配置后端服务

1. 在项目根目录下，将 `.env.example` 重命名（或复制）为 `.env`
2. 修改 `VITE_API_BASE_URL` 为你的后端服务地址

vueAdmin 需要实现以下基础认证接口：

| 接口名称     | 路径 | 说明             |
| -------------- | ------ | ------------------ |
| 登录鉴权     | `/auth/login`     | 用户登录         |
| 登出         | `/auth/logout`     | 用户登出         |
| 获取用户信息 | `/auth/info`     | 获取当前用户信息 |

如果你的后端基础地址为 http://localhost:3000/api/v1/ ，则完整接口路径为：

* http://localhost:3000/api/v1/auth/login
* http://localhost:3000/api/v1/auth/logout
* http://localhost:3000/api/v1/auth/info

更多详细说明：

* 接口规范请参考 [接口约定](/contract) 章节
* 环境配置请参考 [系统配置](/config) 章节