# 完成 Lesson 0003：跑通第一个 HTTP 服务器；暴露「!x === y」运算符优先级坑

学习者独立写出并测试通过了原生 `http` 服务器（`01-node-core/first-server.js`），展现了不错的习惯：解构 `const { createServer } = require('http')` 与 `const { url, method } = req`、每个分支用 `return` 早返回、`listen(port, hostname, cb)` 绑定主机名。

**关键 insight（misconception）**：代码里 `if (!method === 'GET')` 因运算符优先级实为 `(!method) === 'GET'`，恒为 `false`——「非 GET 返回 404」的守卫从未生效。因为只测了 GET 请求（浏览器/curl 默认 GET），bug 被掩盖。另有 `body = 'Not Found'` 未声明且未使用（ESM/strict 下会抛 ReferenceError）。已讲解：正确写法 `method !== 'GET'`，并顺带引入 405 vs 404 的语义区别。

**Implications**：
1. 绝佳契机引入「只测 happy path 不够」「ESLint / strict / TS 能自动揪出此类 bug」——已计划在 **Lesson 0004（模块系统 + 正式项目 + 工具链）** 借此落地。
2. 学习者倾向自己动手写，且明确要求「结合实战」，应多给「让代码更稳健/更专业」的真实模式与场景。

相关：[[MISSION.md]]
