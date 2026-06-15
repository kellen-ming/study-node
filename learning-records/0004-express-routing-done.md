# 完成 Lesson 0005：Express 路由重写，且主动复用模块

学习者独立完成 Express 重写（`01-node-core/express-server.js`）：
- `npm install express` ✓（`package.json` dependencies 出现 `express ^5.2.1`）
- `app.get` 路由、`res.send` / `res.json` ✓
- 路由参数 `/greet/:name` → `req.params.name` ✓（一次正确）
- `app.use` 404 处理放在所有路由之后 ✓（位置正确）

**亮点（Evidence）**：主动 `import` 并复用了 0004 写的 `health.js` 模块（`res.json(healthPayload())`）——未经要求即展现良好的模块化/复用直觉。

小提示（非错误，已告知）：`package.json` 的 `dev`/`start` 仍指向旧的 `first-server.js`，建议更新指向 `express-server.js`。

**Implications**：Express 路由 + 路由参数已掌握；可进入 **Lesson 0006（中间件 + express.json + req.body）**，之后能写「创建短链」这类需要请求体的接口。相关：[[MISSION.md]]
