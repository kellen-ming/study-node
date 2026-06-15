# 完成 Lesson 0004：建立正式 ESM 项目，模块拆分正确

学习者独立完成了项目化（`study-node` 根目录）：
- `package.json` 加 `"type": "module"` + `dev`/`start` scripts（`node --watch`）✓
- 将 `first-server.js` 从 CommonJS `require` 转为 ESM `import` ✓
- 正确拆出 `health.js` 模块并 `import` —— **关键：相对导入带了 `.js` 后缀**（常见易错点，一次做对）✓
- `.gitignore` 忽略 `node_modules/` ✓

仅余小优化（已提示，非错误）：`import ... from 'http'` 推荐写 `'node:http'`（明确内置模块、避免被同名 npm 包冒充）。

**Evidence**：四个文件全部正确，模块职责分离清晰（health.js 造数据、server.js 管路由）。

**Implications**：**阶段 1（Node 核心 + 网络）基本通关**；ESM/项目/模块基础扎实，可进入 **阶段 2：Lesson 0005 用 Express 重写服务器**（第一次 npm install 真实依赖）。相关：[[MISSION.md]]
