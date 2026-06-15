# study-node · Node.js 后端进阶之路 🚀

一个前端工程师**转全栈**的学习仓库：从 Node.js 核心一路走到能上线收费的 SaaS。
课程由 Claude Code 的 `/teach` 技能维护，**26 章课件 + 一个贯穿始终的真实项目**。

> 🎯 **学习目标（见 [MISSION.md](./MISSION.md)）**：独立做出并上线一个能真实收费的 SaaS 产品，打通后端、数据库、运维全链路。

---

## 🧩 贯穿项目：LinkPulse

整套课程围绕一个真实项目展开——**LinkPulse：带访问分析与订阅付费的短链接 SaaS**。
跟着课程一章章做下来，LinkPulse 会逐步长成：

> 能注册登录 · 创建 / 跳转 / 缓存短链 · 实时点击看板 · 有自动化测试 · 能容器化部署 · 能 Stripe 订阅收费

---

## ▶️ 如何使用

课件是**零构建**的 HTML，无需 `npm install` 或 dev server，直接用浏览器打开即可：

```bash
open lessons/index.html      # macOS
# 或在文件管理器里双击 lessons/index.html
```

从目录页**按顺序**学，每章包含：核心概念讲解 → 🌍 实战用法/场景 → 动手任务 → 自测题 → 官方出处。
练习代码写在对应的 `00-warmup/`、`01-node-core/` 等目录里。

---

## 📂 目录结构

```
study-node/
├── README.md
├── MISSION.md            # 学习指南针：为什么学、成功长啥样、约束
├── RESOURCES.md          # 精选可信资源（官方文档为主）
├── NOTES.md              # 教学偏好与进度记录
├── learning-records/     # 学习记录（记录已掌握的点 & 踩过的坑）
├── lessons/              # 📚 课程课件
│   ├── index.html        #   课程目录（入口，从这里开始）
│   ├── lesson.css        #   共享样式
│   ├── lesson.js         #   共享脚本（互动测验）
│   └── 0001…0026-*.html  #   26 章课件
├── 00-warmup/            # 练习：事件循环
├── 01-node-core/         # 练习：原生 http / Express 服务器
└── package.json
```

---

## 🗺️ 课程大纲（26 章 · 8 个阶段）

| 阶段 | 章节 | 主题 |
|------|------|------|
| **1 · Node 核心 + 网络** | 0001–0004 | 事件循环本质与执行顺序、调用栈/队列图解、原生 HTTP 服务器、模块系统与 npm 项目 |
| **2 · Web 框架 + API** | 0005–0010 | Express、中间件与请求体、zod 校验与错误处理、路由分层、配置与日志、**TypeScript** |
| **3 · 数据库与建模** | 0011–0016 | PostgreSQL 入门、SQL 基础、数据建模、Prisma、短链 CRUD、跳转 + Redis 缓存 |
| **4 · 认证 · 安全 · 设计模式** | 0017–0019 | 注册登录 / JWT、授权与 OWASP 安全加固、SOLID 与依赖注入 |
| **5 · 异步 · 性能 · 实时** | 0020–0022 | BullMQ 队列、WebSocket/SSE 实时看板、压测与性能优化 |
| **6 · 测试** | 0023 | Vitest 单元测试 + supertest 集成测试 |
| **7 · 部署 · 运维** | 0024–0025 | Docker 容器化、CI/CD 与上线 + 监控 |
| **8 · 产品化** | 0026 | Stripe 订阅计费 + 上线清单（收官 🎉） |

---

## 🛠️ 涉及技术栈

`Node.js` · `TypeScript` · `Express` · `zod` · `pino` · `PostgreSQL` · `Prisma` · `Redis` · `BullMQ` · `WebSocket` · `Vitest` · `Docker` · `GitHub Actions` · `Stripe`

---

## 📈 学习进度

- ✅ **已学**：0001–0006（事件循环 → 原生 HTTP → ESM 项目 → Express → 中间件/请求体）
- 📖 **进行中 / 待学**：0007 起，按序推进
- 课件全部就绪，可一路学到 0026

> 学习理念（见 [RESOURCES.md](./RESOURCES.md)）：优先官方文档与权威来源，重在动手实践，循序渐进。

---

*本仓库的课程内容由 Claude Code `/teach` 生成与维护，强调可信来源引用与「边学边做」。*
